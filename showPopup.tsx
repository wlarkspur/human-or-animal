import WebApp from "@twa-dev/sdk";
WebApp.ready();

export default function showPopup() {
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
}
