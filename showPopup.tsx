import WebApp from "@twa-dev/sdk";
WebApp.ready();

export default function showPopup() {
  WebApp.showPopup({
    title: "사람새끼 판독기",
    message: "나는 사람 새끼인가?",
    buttons: [{ id: "link", type: "default", text: "??" }, { type: "close" }],
  });
}
