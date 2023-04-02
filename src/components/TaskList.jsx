import { useState} from "react";
import { Flex, HStack, Input, Select, Button, VStack, Text } from "@chakra-ui/react";

export const TaskList = () => {
  const [values, setValues] = useState({
    newTask: '',
    taskList: []
  });

  const handleInput = (e) => {
    setValues({
        ...values,
        newTask: e.target.value
    });
  }

  const handleSend = (e) => {
    e.preventDefault()
    setValues({
        newTask: '',
        taskList: [...values.taskList, values.newTask]
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
        <VStack>
            {values.taskList.map((task, index) => (
            <Text key={index}>{task}</Text>
            ))}
        </VStack>
      </Flex>
    </form>
  );
}
