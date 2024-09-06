import WebApp from "@twa-dev/sdk";
WebApp.ready();

/* export default function showPopup() {
  WebApp.showPopup(
    {
      title: "GAY OR LESBIAN",
      message: "당신은 LGBT를 지지하는 사람인가요?",
      buttons: [{ id: "link", type: "default", text: "" }, { type: "close" }],
    },
    function (btn: any) {
      if (btn === "link") {
        WebApp.openLink("https://www.rbc.ru/");
      }
    }
  );
} */
export default function showPopupQuestion(setVote: any, setEye: any) {
  WebApp.showPopup(
    {
      title: "Question 1",
      message: "당신이 원하는 것을 알고 있나요?",
      buttons: [
        { id: "q1_yes", type: "default", text: "YES" },
        { id: "q1_no", type: "default", text: "NO" },
      ],
    },
    function (btn) {
      // YES 버튼을 클릭한 경우
      if (btn === "q1_yes") {
        WebApp.showPopup(
          {
            title: "Question 1-1",
            message: "구체적으로 얘기할 수 있나요?",
            buttons: [
              { id: "q1-1_no", type: "default", text: "NO" },
              { id: "q1-1_yes", type: "default", text: "YES" },
            ],
          },

          function (res) {
            if (res === "q1-1_no") {
              WebApp.showPopup({
                title: "Question 1-2",
                message:
                  "부정적인 생각은, 원하는 것이 무엇인지 떠올릴 기회가 되기도 합니다. 내가 원하는 것이 무엇인지 생각해보세요",
                buttons: [
                  {
                    type: "close",
                  },
                ],
              });
              setVote((prev: any) => prev + 3);
            } else if (res === "q1-1_yes") {
              WebApp.showPopup({
                title: "Question 1-2",
                message:
                  "원하는 것을 알고 있을때 비로소 그것을 얻을 수 있습니다.😊",
                buttons: [
                  {
                    type: "close",
                  },
                ],
              });
              setVote((prev: any) => prev + 5);
            }
          }
        );
      }
      // No 버튼을 클릭한 경우
      if (btn === "q1_no") {
        WebApp.showPopup({
          title: "Question 1-1",
          message:
            "내가 원하는 것을 알아가는 과정은 결코 쉬운 과정이 아닙니다, 충분히 시간을 들여서 내가 원하는 것이 무엇인지 생각해보세요",
          buttons: [{ type: "close" }],
        });
        setVote((prev: any) => prev + 3);
      }
    }
  );
  setEye(false);
}
