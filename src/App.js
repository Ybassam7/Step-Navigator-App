import "./App.css";
import { useState } from "react";
import { ReactComponent as ArrowDownIcon } from "./arrow_down.svg"; // import down arrow
import { ReactComponent as ArrowUpIcon } from "./arrow_up.svg"; // import up arrow

const messages = [
  "Study React basics ⚛️",
  "Create a new project 🛠️",
  "Share on LinkedIn 🎉",
];

function App() {
  // const step = 1;
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        {/* Conditionally render the SVG based on isOpen */}
        {isOpen ? (
          <ArrowDownIcon width="30" height="30" className="close" />
        ) : (
          <ArrowUpIcon width="30" height="30" className="close" />
        )}
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#0E6EB8", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#0E6EB8", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
