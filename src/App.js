import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [isopen, setisopen] = useState(true);
  const [step, setStep] = useState(1);

  function isopensss() {
    setisopen((is) => !is);
    // the arrow function way
    // () => setisopen((is) => !is)
  }

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={isopensss}>
        &times;
      </button>

      {isopen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : " "}>1</div>

            <div className={step >= 2 ? "active" : " "}>2 </div>

            <div className={step >= 3 ? "active" : " "}>3</div>
          </div>
          <p className="message">
            step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>

            <button
              style={{ backgroundColor: "#7950f2", color: "#ffffff" }}
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
