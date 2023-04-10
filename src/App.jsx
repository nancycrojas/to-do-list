import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { getLocalStorage } from "./utils/localStorage";

function App() {
  const initialTasks = getLocalStorage("task") || [];
  const [taskList, setTaskList] = useState(initialTasks);
  const [values, setValues] = useState("");

  return (
    <Flex direction="column" alignItems="center" justifyContent="center">
      <Header />
      <TaskList taskList={taskList} setTaskList={setTaskList} values={values} setValues={setValues} />
    </Flex>
  );
}

export default App
