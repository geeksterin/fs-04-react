import { useState, useRef, useEffect } from "react";

function Timer(props) {
  //   let id; // re-created //will loose your old value ?  id=undefined
  const [timer, setTimer] = useState(0);
  let timerId = useRef(null); // timerId : {current:null}
  let h2Ref = useRef(null); // h2Ref={current:null} //h2Ref.current = document.getElementById()
  let startButton = useRef(null);
  let stopButton = useRef(null);

  useEffect(() => {
    if (timer === 0) {
      h2Ref.current.innerText = `Timer Value is ${timer}`;
      h2Ref.current.style.color = "black";
    } else {
      h2Ref.current.innerText = `Timer Started and Value is ${timer}`;
      h2Ref.current.style.color = "green";
    }
  });

  //   useEffect(() => {
  //     var h2Ref = document.getElementById("timerid");
  //     if (timer === 0) {
  //       h2Ref.innerText = `Timer value is ${timer}`;
  //     } else {
  //       h2Ref.innerText = `Timer started and value is ${timer}`;
  //     }
  //   });
  const startTimer = () => {
    startButton.current.disabled = true;
    timerId.current = setInterval(() => {
      // id=  dummyid
      //   setTimer(timer + 1); // timer = 0

      setTimer((prevTimer) => prevTimer + 1); // 1.update the state 2.re-render
      //   h2Ref.innerText = `Timer started and Value is ${timer}`;
    }, 1000);
  };

  const stopTimer = () => {
    h2Ref.current.style.color = "red";
    startButton.current.disabled = false;
    clearInterval(timerId.current); //id = undefined
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2 id="timerid" ref={h2Ref}>
        Timer is {timer}
      </h2>
      <br />
      <button onClick={startTimer} ref={startButton}>
        Start
      </button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default Timer;
