import { useState } from "react";

import "./App.css";

import WebApp from "@twa-dev/sdk";
WebApp.ready();
function App() {
  const [count, setCount] = useState(10);
  const [vote, setVote] = useState(10);
  const [deviceSize, setDeviceSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const counterMinus = () => {
    if (count === 0 || vote === 0) {
      return count;
    }
    setCount(count - 1);
    setVote(vote - 1);
  };
  const counterPlus = () => {
    if (vote === 0) {
      return { count, vote };
    }
    setCount(count + 1);
    setVote(vote - 1);
  };
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
          <button onClick={counterMinus}>
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
          <div className="counter">{count}</div>
          <button onClick={counterPlus}>
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
          <span style={{ marginRight: "25px" }}>내가 가진 영향력: {vote}</span>
          <svg
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
        </div>
        <div className="desc">
          <p className="desc_text">
            {" "}
            지구에 사는 인류 중에는 사람이 아닌 존재가 있다. 우리는 모두 개나
            돼지처럼 존재하며, 사람이 되기 위해 노력하지 않으면 사람이 될 수
            없다.
          </p>
          <p className="titat">당신은 사람인가? 짐승인가?</p>
        </div>
      </div>
    </div>
  );
}

export default App;
