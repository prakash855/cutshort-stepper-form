import React from "react";
import { useStep } from "../../context/step-context";
import Acknowledge from "../Acknowledge/Acknowledge";
import CreateName from "../CreateName/CreateName";
import CreateUtility from "../CreateUtility/CreateUtility";
import CreateWorkSpace from "../CreateWorkSpace/CreateWorkSpace";

const UserForm = () => {
  const { step, completedMenus } = useStep();

  // Callback props
  completedMenus(step);

  switch (step) {
    case 1:
      return <CreateName />;
    case 2:
      return <CreateWorkSpace />;
    case 3:
      return <CreateUtility />;
    case 4:
      return <Acknowledge />;
    default:
      console.log("done!");
  }
};

export default UserForm;
