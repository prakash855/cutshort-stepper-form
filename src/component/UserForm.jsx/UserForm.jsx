import React, { useState } from "react";
import Acknowledge from "../Acknowledge/Acknowledge";
import CreateName from "../CreateName/CreateName";
import CreateUtility from "../CreateUtility/CreateUtility";
import CreateWorkSpace from "../CreateWorkSpace/CreateWorkSpace";

const UserForm = () => {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep((step) => step + 1);
  };
  switch (step) {
    case 1:
      return <CreateName nextStep={nextStep} />;
    case 2:
      return <CreateWorkSpace nextStep={nextStep} />;
    case 3:
      return <CreateUtility nextStep={nextStep} />;
    case 4:
      return <Acknowledge nextStep={nextStep} />;
    default:
      console.log("done!");
  }
};

export default UserForm;
