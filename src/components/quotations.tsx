export interface IQuotation {
  id: number;
  text: string;
  score: {
    O: number;
    X: number;
  };
}

export const quotations = [
  {
    id: 1,
    text: "인생은 악기와 같다. 연주하는 법을 배우면 될 뿐이다",
  },
  {
    id: 2,
    text: "우리의 뇌는 작지만, 그 안에 수많은 비밀이 들어있다.",
  },
  {
    id: 3,
    text: "양자역학이 놀랍지 않다면, 그것을 제대로 이해하지 못한 것이다.",
  },
];
