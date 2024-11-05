interface QuestionsOptionsProps {
  answer: string;
  type: number;
}

export interface QuizQuestionsProps {
  question: string;
  options: QuestionsOptionsProps[];
}

export interface NenTypesProps {
  type: number;
  name: string;
  features: string;
  psychologicalProfile: string;
  characters: string;
}