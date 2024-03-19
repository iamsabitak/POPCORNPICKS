import React from "react";
import AppContent from "./AppContent";
import { MantineProvider } from "@mantine/core";

const App: React.FC = () => {
  return (
    <>
      <MantineProvider>
        <AppContent />
      </MantineProvider>
    </>
  );
};
export default App;
