import { useState} from "react";
import { Flex, HStack, Input, Select, Button, VStack, Text, Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
import { validateValue } from "../utils/validation";

export const TaskList = () => {
  const [values, setValues] = useState({
    newTask: '',
    taskList: [],
    showMessage: false,
  });

  const handleInput = (e) => {
    setValues({
        ...values,
        newTask: e.target.value
    });
  }

  const handleSend = (e) => {
    e.preventDefault();

    const isValid = validateValue(values.newTask);
    if(!isValid){
      setValues({
        ...values,
        showMessage:true,
        message: 'Please add a task!'
      });
      return;
    }
      setValues({
        newTask: '',
        taskList: [...values.taskList, values.newTask],
        showMessage: false,
    });
  }

  return (
    <form >
      <Flex direction="column" alignItems="center" justifyContent="center">
        <HStack mb={10} mt={10} spacing={{ base:0, lg: 10}} flexWrap={{ base: "wrap", md: "nowrap"}} justifyContent={{ base: "center", md: "flex-start"}}>
            <Input
            focusBorderColor='red.300'
            type="text"
            placeholder="Add a new task"
            _placeholder={{ color: "grey", fontSize: "1.2rem"}}
            value={values.newTask}
            onChange={handleInput}
            w="20rem"
            border="1px solid gray"
            borderRadius="lg"
            textAlign="center"
            autoComplete="off"
            />
            <Select w="20rem" textAlign= "center" maxW="100%" fontSize="1.2rem" border="1px solid gray" borderRadius="lg" color="grey">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="incompleted">Incomplete</option>
            </Select>
        </HStack>
        <Button
        type="submit" 
        bg="red.300"
        color="white"
        size="md"
        w="8rem"
        onClick={handleSend}
        >
         Send
        </Button>
        {values.showMessage && (
          <Flex>
            <Alert p={2} mt={4} borderRadius="lg" status="warning" variant='subtle' flexDirection="column" alignItems="center" justifyContent="center" w="300px" >
            <AlertIcon boxSize='30px' mr={0}/>
            <AlertTitle mt={2} mb={1} fontSize='lg' >
            {values.message}
            </AlertTitle>
          </Alert>
          </Flex>
        )}
        <VStack mt={4}>
            {values.taskList.map((task, index) => (
            <Text key={index}>{task}</Text>
            ))}
        </VStack>
      </Flex>
    </form>
  );
}
