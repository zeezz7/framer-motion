import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";
import Box4 from "./components/Box4";
import Box5 from "./components/Box5";

function App() {
  return (
    <div style={{ padding: "4rem" }} className="app">
      <ChakraProvider>
        <Box1 />
        <Box2 />
        <Box3 />
        <Box4 />
        <Box5 />
      </ChakraProvider>
    </div>
  );
}

export default App;
