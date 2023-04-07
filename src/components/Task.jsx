import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box, LightMode, Flex, IconButton, Text } from "@chakra-ui/react";
import { useState } from "react";
import { setLocalStorage } from "../utils/localStorage";

export const Task = ({ task, id, taskList, setTaskList }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleCheck = () => {
    setIsCompleted(!isCompleted);
  };

  const handleDelete = (id) => {
    const newTask = taskList.filter(task =>task.id !== id);
    setTaskList(newTask);
    setLocalStorage("task", newTask)
  };

  return (
    <Flex alignItems="center" justifyContent="space-between" w="100%" p={2} borderRadius="lg" bg={isCompleted ? "gray.200" : "white"}>
      <Box flex={1} mr={2}>
        <Text mr={2} textDecoration = {isCompleted ? "line-through" : "none"} color= {isCompleted ? "gray.500" : "black"}>{task}</Text>
      </Box>
      <Flex>
        <LightMode>
        <IconButton 
        aria-label="complete"
        mr={2}
        colorScheme="green"
        variant={isCompleted ? "outline" : "solid"}
        size="xs"
        icon={<CheckIcon/>}
        onClick={handleCheck}
        />
        </LightMode>
        <LightMode>
        <IconButton 
        aria-label="delete"
        colorScheme="red"
        variant="outline"
        size="xs"
        icon={<DeleteIcon/>}
        onClick={()=>handleDelete(id)}
        />
        </LightMode>
      </Flex>
    </Flex>
  );
};
