export interface IQuestions {
  id: number;
  text: string;
  score: {
    O: number;
    X: number;
  };
}

export const questions = [
  { id: 1, text: "당신은 게이 (GAY)입니까?", score: { O: 5, X: 1 } },
  { id: 2, text: "당신은 커피를 좋아합니까?", score: { O: 3, X: 2 } },
];
