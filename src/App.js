import { useStep } from "./context/step-context";
import "./App.css";
import UserForm from "./component/UserForm.jsx/UserForm";
import LogoDevIcon from "@mui/icons-material/LogoDev";

function App() {
  const { step } = useStep();

  return (
    <div className="App">
      <h2 className="eden">
        <LogoDevIcon className="logo" />
        Eden
      </h2>
      <div className="stepper-wrapper">
        <div className={`stepper-item completed`}>
          <div className="step-counter">1</div>
        </div>
        <div className={step < 2 ? `stepper-item` : `stepper-item completed`}>
          <div className="step-counter">2</div>
        </div>
        <div className={step < 3 ? `stepper-item` : `stepper-item completed`}>
          <div className="step-counter">3</div>
        </div>
        <div className={step < 4 ? `stepper-item` : `stepper-item completed`}>
          <div className="step-counter">4</div>
        </div>
      </div>

      {/* Form */}
      <UserForm />
    </div>
  );
}

export default App;
