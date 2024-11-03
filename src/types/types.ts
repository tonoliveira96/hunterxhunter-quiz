interface QuestionsOptionsProps {
  answer: string;
  type: number;
}

export interface QuizQuestionsProps {
  question: string;
  options: QuestionsOptionsProps[];
}

export interface NenTypesProps {
  tipo: number;
  nomeIngles: string;
  caracteristicas: string;
  perfilPsicologico: string;
  exemploPersonagem: string;
}