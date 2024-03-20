import React from "react";
import AppContent from "./components/AppContent";
import { MantineProvider } from "@mantine/core";
import { MovieProvider } from "./usecontext/MovieContext";

const App: React.FC = () => {
  return (
    <>
      <MovieProvider>
        <MantineProvider>
          <AppContent />
        </MantineProvider>
      </MovieProvider>
    </>
  );
};
export default App;
