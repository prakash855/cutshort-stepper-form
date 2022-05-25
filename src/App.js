import "./App.css";
import UserForm from "./component/UserForm.jsx/UserForm";

function App() {
  return (
    <div className="App">
      <h2 className="eden">Eden</h2>
      <div class="stepper-wrapper">
        <div class="stepper-item completed">
          <div class="step-counter">1</div>
        </div>
        <div class="stepper-item completed">
          <div class="step-counter">2</div>
        </div>
        <div class="stepper-item active">
          <div class="step-counter">3</div>
        </div>
        <div class="stepper-item">
          <div class="step-counter">4</div>
        </div>
      </div>
      <UserForm />
    </div>
  );
}

export default App;
