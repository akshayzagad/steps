import { use, useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setState] = useState(1);
  const [isOpened, setIsOpened] = useState(true);

  function previous() {
    if (step > 1) setState(step - 1);
  }

  function next() {
    if (step < 3) setState(step + 1);
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpened(!isOpened)}>
        x
      </button>
      {isOpened && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <StepMessage step={step}>
            <div className="buttons">
              <Button
                textColor="#fff"
                bgColor="#7950f2"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn How
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={previous}>
              <span>⏮️</span> Previous
            </Button>
            <Button textColor="#fff" bgColor="#7950f2" onClick={next}>
              Next <span>⏭️</span>
            </Button>
            {/* <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={() => next()}>Next</button> */}
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>steps {step} </h3>
      {children}
    </div>
  );
}

function Button({ textColor, onClick, bgColor, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
