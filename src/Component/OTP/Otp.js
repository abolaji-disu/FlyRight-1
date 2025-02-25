import React, { useState } from "react";
import "./Otp.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

function Otp() {
  const [firstinput, setFirstInput] = useState("");
  const [secondinput, setSecondInput] = useState("");
  const [thirdinput, setThirdInput] = useState("");
  const [fourthinput, setFourthInput] = useState("");

  // const navigate = useNavigate();

//   let inputTab = (element) => {
//     if (element.key === "Delete" || element.key === "Backspace") {
//       const next = element.tabIndex;

//       if (next > -1) {
//         element.target.form.elements[next];
//       }
//     } else {
//       console.log("next");
//       const next = element.target.tabIndex;
//       if (next < 5) {
//         element.target.form.elements[next];
//       }
//     }
//   };

  const handleFirstInput = (e) => {
    setFirstInput(e.target.value);
  };
  const handleSecondInput = (e) => {
    setSecondInput(e.target.value);
  };
  const handleThirdInput = (e) => {
    setThirdInput(e.target.value);
  };
  const handleFourthInput = (e) => {
    setFourthInput(e.target.value);
  };

  const getAllDigits = () => {
    return firstinput + secondinput + thirdinput + fourthinput;
  };
  const handleApi = (e) => {
    e.preventDefault();
   console.log(getAllDigits());
   let token = getAllDigits();
    axios.post(`http://localhost:8080/api/v1/passenger/confirmPassword/${token}`, {
        otpNumber: getAllDigits(),
      })
      .then((res) => {
        console.log(res);
        //  res.data.isSuccessful && navigate("/login");
         //res.status === 200 ? navigate("/login") :console.log("Invalid input");
      })
      .catch((error) => {
        console.log(error);
      });
    setFirstInput("");
    setSecondInput("");
    setThirdInput("");
    setFourthInput("");
  };

  return (
    <div className="otp_container">
      <div className="otp">
        <div className="otp_form">
          <div className="otp_text">
          
            <form>
              <h3>Enter your Otp Number</h3>
              <div className="input_form">
                <input
                  type="password"
                  maxLength={1}
                  value={firstinput}
                  tabIndex="1"
                //   onKeyUp={(e) => inputTab(e)}
                  placeholder="____"
                  onChange={handleFirstInput}
                />

                <input
                  type="password"
                  maxLength={1}
                  value={secondinput}
                  tabIndex="2"
                //   onKeyUp={(e) => inputTab(e)}
                  placeholder="____"
                  onChange={handleSecondInput}
                />

                <input
                  type="password"
                  maxLength={1}
                  value={thirdinput}
                  tabIndex="3"
                //   onKeyUp={(e) => inputTab(e)}
                  placeholder="____"
                  onChange={handleThirdInput}
                />

                <input
                  type="password"
                  maxLength={1}
                  value={fourthinput}
                  tabIndex="4"
                //   onKeyUp={(e) => inputTab(e)}
                  placeholder="____"
                  onChange={handleFourthInput}
                />
              </div>
            </form>
            <p>
              <button onClick={handleApi} className="btn_otp">
                Continue
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Otp;
