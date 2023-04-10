import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box, LightMode, Flex, IconButton, Text, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, Button, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { setLocalStorage, getLocalStorage } from "../utils/localStorage";
import React from "react";

export const Task = ({ task, id, taskList, setTaskList }) => {
  const [tasks, setTasks] = useState(()=>{
    const storedTasks = getLocalStorage("task") || [];
    return storedTasks;
  })
  // const [isCompleted, setIsCompleted] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  const handleCheck = (id) => {
    // setIsCompleted(!isCompleted);
    const newTask = taskList.map((task)=>{
      if(task.id === id){
        task.isCompleted = !task.isCompleted
      }
      return task;
    })
    setTaskList(newTask);
    setLocalStorage("task", newTask);
  };

  const handleDelete = (id) => {
    const newTask = taskList.filter(task =>task.id !== id);
    setTaskList(newTask);
    setLocalStorage("task", newTask)
  };

  return (
    <Flex alignItems="center" justifyContent="space-between" w="100%" p={2} borderRadius="lg" bg={task.isCompleted ? "gray.200" : "white"}>
      <Box flex={1} mr={2}>
        <Text mr={2} textDecoration = {task.isCompleted ? "line-through" : "none"} color= {task.isCompleted ? "gray.500" : "black"}>{task}</Text>
      </Box>
      <Flex>
        <LightMode>
        <IconButton 
        aria-label="complete"
        mr={2}
        colorScheme="green"
        variant={task.isCompleted ? "outline" : "solid"}
        size="xs"
        icon={<CheckIcon/>}
        onClick={() => handleCheck(id)}
        />
        </LightMode>
        <LightMode>
        <IconButton 
        aria-label="delete"
        colorScheme="red"
        variant="outline"
        size="xs"
        icon={<DeleteIcon/>}
        onClick={onOpen}
        />
        </LightMode>
      </Flex>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              <Text>Delete task: {task}</Text>
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' id={id} values={id} ml={3} onClick={()=>handleDelete(id)}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Flex>
  );
};
