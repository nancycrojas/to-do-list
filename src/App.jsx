import { Flex } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

function App() {

  return (
    <Flex direction="column" alignItems="center" justifyContent="center">
      <Header />
      <TaskList/>
    </Flex>
  );
}

export default App
