interface QuestionsOptionsProps {
  answer: string;
  type: string;
}

export interface QuizQuestionsProps {
  question: string;
  options: QuestionsOptionsProps[];
}

export interface NenTypesProps {
  tipo: string;
  nomeIngles: string;
  caracteristicas: string;
  perfilPsicologico: string;
  exemploPersonagem: string;
}