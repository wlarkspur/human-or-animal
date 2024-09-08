export interface IQuestions {
  id: number;
  text: string;
  score: {
    O: number;
    X: number;
  };
}

export const questions = [
  {
    id: 1,
    text: "당신은 게이,레즈 (GAY,LESBIAN)입니까?",
    score: { O: 5, X: 1 },
  },
  { id: 2, text: "자유의지를 믿습니까?", score: { O: 4, X: 2 } },
  {
    id: 3,
    text: "현대의 사회에는 노예, 계급제도가 유지되고 있습니까?",
    score: { O: 1, X: 5 },
  },
];
