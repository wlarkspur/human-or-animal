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
export default function showPopup() {
  WebApp.showPopup(
    {
      title: "GAY & LESBIAN",
      message: "당신은 LGBT를 지지하시나요?",
      buttons: [
        { id: "link", type: "default", text: "네" },
        { type: "cancel" },
      ],
    },
    function (btn) {
      if (btn === "link") {
        WebApp.openLink(
          "https://media.istockphoto.com/id/1374561567/photo/group-of-young-activist-for-lgbt-rights-with-rainbow-flag-diverse-people-of-gay-and-lesbian.jpg?s=612x612&w=0&k=20&c=UOEZ3JjycHddOMvNHiMmCp5nDOG1VaBAIdHsh3X7SLY="
        );
      }
    }
  );
}
