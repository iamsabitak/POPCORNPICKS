import React from "react";
import AppContent from "./AppContent";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <MantineProvider>
          <AppContent />
        </MantineProvider>
      </BrowserRouter>
    </>
  );
};
export default App;
