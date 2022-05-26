import { createContext, useContext, useState } from "react";

const StepContext = createContext();

const StepContextProvider = ({ children }) => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((step) => step + 1);
  };

  const completedMenus = (menu) => {
    setStep(menu);
  };

  return (
    <StepContext.Provider value={{ step, setStep, completedMenus, nextStep }}>
      {children}
    </StepContext.Provider>
  );
};

// Custom Hook
const useStep = () => useContext(StepContext);

export { StepContextProvider, useStep };
