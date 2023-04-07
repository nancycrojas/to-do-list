import { useState} from "react";
import { Flex, HStack, Input, Select, Button, VStack, Text, Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
import { validateValue } from "../utils/validation";
import { setLocalStorage } from "../utils/localStorage";

export const TaskList = () => {
  const [values, setValues] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  const handleInput = (e) => {
    setValues(e.target.value);
  }

  const handleSend = (e) => {
    e.preventDefault();

    const isValid = validateValue(values);
    if(!isValid){
      setShowMessage(true);
      setMessage('Please add a task!');
      return;
    }

    const updatedTaskList=[...taskList, values];
      setTaskList(updatedTaskList);
      setValues("");
      setShowMessage(false);
      
      setLocalStorage("task", updatedTaskList);
      console.log(updatedTaskList);
    };

  return (
    <form >
      <Flex direction="column" alignItems="center" justifyContent="center">
        <HStack mb={10} mt={10} spacing={{ base:0, lg: 10}} flexWrap={{ base: "wrap", md: "nowrap"}} justifyContent={{ base: "center", md: "flex-start"}}>
            <Input
            focusBorderColor='red.300'
            type="text"
            placeholder="Add a new task"
            _placeholder={{ color: "grey", fontSize: "1.2rem"}}
            value={values}
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
        {showMessage && (
          <Flex>
            <Alert p={2} mt={4} borderRadius="lg" status="warning" variant='subtle' flexDirection="column" alignItems="center" justifyContent="center" w="300px" >
            <AlertIcon boxSize='30px' mr={0}/>
            <AlertTitle mt={2} mb={1} fontSize='lg' >
            {message}
            </AlertTitle>
          </Alert>
          </Flex>
        )}
        <VStack mt={4}>
            {taskList.map((task, index) => (
            <Text key={index}>{task}</Text>
            ))}
        </VStack>
      </Flex>
    </form>
  );
}
