import { useState, useEffect } from "react";
import "./App.css";
import { questions } from "./components/questions";
import WebApp from "@twa-dev/sdk";

import { quotations } from "./components/quotations";

WebApp.ready();

function App() {
  const [deviceSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [count, setCount] = useState(10);
  const [vote, setVote] = useState(10);
  const [oBtn, setOBtn] = useState(false);
  const [xBtn, setXBtn] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false); // 새 상태: 답변 여부
  const [previousCount, setPreviousCount] = useState(10); // 이전 숫자를 저장
  const [eyeController, setEyeController] = useState(true);
  const [animationDirection, setAnimationDirection] = useState("moveUp");
  const [quoteIndex, setQuoteIndex] = useState(0); //Quotaion
  const [eye, setEye] = useState(true);
  const [eyeEnd, setEyeEnd] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 닫힘 상태
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // 모달 답변 관리

  const handleModal = () => {
    if (currentQuestionIndex + 1 > questions.length) {
      return setIsModalOpen(false);
    }
    setIsModalOpen((prev) => !prev);
    setEyeController((prev) => !prev); // 질문 눈까리 토글
  };
  const handleAnswer = (answer: "O" | "X") => {
    if (isAnswered) return; //답변이 완료되면 함수 종료; 이거 필요한가 ?
    if (answer === "O") {
      setOBtn(true);
    } else {
      setXBtn(true);
    } // O, X 답변에 따라 버튼에 CSS효과를 주기 위함.
    const currentQuestion = questions[currentQuestionIndex]; //현재 질문 index
    const score = currentQuestion.score[answer]; //답변에 따른 점수
    setVote((prevVote) => prevVote + score); // 위에서 얻은 점수를 영향력에 반영
    setIsAnswered(true);
    if (currentQuestionIndex + 1 === questions.length) {
      setEyeEnd(true);
    }
    setTimeout(() => {
      handleModal();
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setIsAnswered(false);
      setOBtn(false);
      setXBtn(false);
    }, 1000);
  };

  const counterMinus = () => {
    if (count === 0 || vote === 0) {
      setAnimationDirection("zero");
      setTimeout(() => {
        setAnimationDirection("");
      }, 400);
      return;
    }
    setPreviousCount(count);
    setAnimationDirection("moveDown");
    setCount(count - 1);
    setVote(vote - 1);
  };
  const counterPlus = () => {
    if (vote === 0 || count >= 100) {
      setAnimationDirection("zero");
      setTimeout(() => {
        setAnimationDirection("");
      }, 400);

      return;
    }
    setPreviousCount(count);
    setAnimationDirection("moveUp");
    setCount(count + 1);
    setVote(vote - 1);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationDirection("");
    }, 100);
    return () => clearTimeout(timer);
  }, [count]);
  /* useEffect(() => {
    if (eye === false) {
      const timer = setTimeout(() => {
        setEye(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [eye]); */
  useEffect(() => {
    const interValid = setInterval(() => {
      setQuoteIndex((prev) => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * quotations.length);
        } while (newIndex === prev);
        return newIndex;
      });
    }, 5000);
    return () => clearInterval(interValid);
  }, [questions.length]);
  return (
    <div
      className="wrapper"
      style={{ maxWidth: deviceSize.width, maxHeight: deviceSize.height }}
    >
      <div className="header" style={{ width: deviceSize.width }}>
        <img
          src="https://images.unsplash.com/photo-1634167721555-1a02eb36e94c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fCVFQyU4MiVBQyVFRCU4MyU4NHxlbnwwfHwwfHx8MA%3D%3D"
          alt="사탄의 사과"
          style={{ maxWidth: "100%" }}
        />
      </div>
      <div className="main">
        <div className="main_button">
          <button className="minusBtn" onClick={counterMinus}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18 4c-1.71 0-2.75.33-3.35.61C13.88 4.23 13 4 12 4s-1.88.23-2.65.61C8.75 4.33 7.71 4 6 4c-3 0-5 8-5 10c0 .83 1.32 1.59 3.14 1.9c.64 2.24 3.66 3.95 7.36 4.1v-4.28c-.59-.37-1.5-1.04-1.5-1.72c0-1 2-1 2-1s2 0 2 1c0 .68-.91 1.35-1.5 1.72V20c3.7-.15 6.72-1.86 7.36-4.1C21.68 15.59 23 14.83 23 14c0-2-2-10-5-10M4.15 13.87c-.5-.12-.89-.26-1.15-.37c.25-2.77 2.2-7.1 3.05-7.5c.54 0 .95.06 1.32.11c-2.1 2.31-2.93 5.93-3.22 7.76M9 12a1 1 0 0 1-1-1c0-.54.45-1 1-1a1 1 0 0 1 1 1c0 .56-.45 1-1 1m6 0a1 1 0 0 1-1-1c0-.54.45-1 1-1a1 1 0 0 1 1 1c0 .56-.45 1-1 1m4.85 1.87c-.29-1.83-1.12-5.45-3.22-7.76c.37-.05.78-.11 1.32-.11c.85.4 2.8 4.73 3.05 7.5c-.25.11-.64.25-1.15.37"
              />
            </svg>
          </button>
          <div className="counter">
            <div className={`number ${animationDirection}`}>{count}</div>
          </div>
          <button className="plusBtn" onClick={counterPlus}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 48 48"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="4"
                d="M5.004 42.231a.78.78 0 0 0 .791.769h36.407a.78.78 0 0 0 .792-.769v-.918c.018-.277.055-1.657-.855-3.184c-.574-.963-1.407-1.794-2.476-2.472c-1.293-.82-2.938-1.413-4.928-1.77a29 29 0 0 1-3.002-.584c-2.632-.672-2.862-1.267-2.864-1.273a.8.8 0 0 0-.066-.169c-.022-.11-.075-.528.027-1.647c.258-2.843 1.783-4.523 3.008-5.873c.386-.425.751-.828 1.032-1.222c1.213-1.7 1.325-3.635 1.33-3.755a2 2 0 0 0-.087-.628c-.12-.37-.343-.6-.507-.77a3 3 0 0 1-.113-.12c-.012-.014-.044-.052-.015-.243a19 19 0 0 0 .203-1.857c.056-1.002.099-2.5-.16-3.959a6 6 0 0 0-.172-.825q-.408-1.507-1.32-2.57c-.105-.115-2.653-2.8-10.05-3.35c-1.023-.076-2.034-.035-3.03.016a4.4 4.4 0 0 0-.875.108c-.764.197-.968.681-1.021.952c-.089.45.067.798.17 1.03c.015.033.034.074.001.182c-.171.266-.442.506-.717.733c-.08.067-1.934 1.667-2.036 3.756c-.275 1.589-.255 4.064.07 5.775c.02.095.047.235.002.33c-.35.313-.746.668-.745 1.478c.004.082.117 2.016 1.33 3.717c.28.394.645.796 1.03 1.221l.002.001c1.225 1.35 2.75 3.03 3.008 5.872c.101 1.12.048 1.537.027 1.648a.8.8 0 0 0-.067.169c-.001.006-.23.599-2.85 1.27c-1.512.387-3 .585-3.045.59c-1.934.327-3.569.906-4.86 1.721c-1.065.673-1.9 1.507-2.48 2.477c-.928 1.55-.903 2.962-.89 3.22z"
              />
            </svg>
          </button>
        </div>
        <div className="main_voteText">
          <div className="main_voteText_add">
            <span>짐승 vs 사람</span>
            <span style={{ marginRight: "20px", fontSize: "16px" }}>
              내가 가진 영향력: {vote}
            </span>
            {eyeController && (
              <div className="eyeWrapper">
                {eye === true && eyeEnd === false ? (
                  <svg
                    onClick={handleModal}
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    style={{
                      cursor: "pointer",
                      border: "1px solid orange",
                      padding: "3px",
                      borderRadius: "20%",
                    }}
                  >
                    <path
                      fill="orange"
                      d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    style={{
                      border: "1px solid red",
                      padding: "3px",
                      borderRadius: "20%",
                    }}
                  >
                    <path
                      fill="red"
                      d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"
                    />
                  </svg>
                )}
              </div>
            )}
          </div>

          <div className="main_voteText_modal">
            {/* 모달 표시 */}

            {isModalOpen && (
              <div className="modal">
                <div className="modal_content">
                  <div className="modal_content_text">
                    <span>{questions[currentQuestionIndex]?.text}</span>
                  </div>

                  <div className="modal_content_btn">
                    {" "}
                    <button
                      className={`answeredBtn ${oBtn ? "clicked" : ""}`}
                      onClick={() => handleAnswer("O")}
                      style={isAnswered ? { pointerEvents: "none" } : {}} // 클릭 차단
                    >
                      O (Yes)
                    </button>
                    <button
                      className={`answeredBtn ${xBtn ? "clicked" : ""}`}
                      onClick={() => handleAnswer("X")}
                      style={isAnswered ? { pointerEvents: "none" } : {}} // 클릭 차단
                    >
                      X (No)
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="desc">
          <p className="desc_text"> {quotations[quoteIndex].text}</p>
          <p className="titat">999</p>
        </div>
      </div>
    </div>
  );
}

export default App;
