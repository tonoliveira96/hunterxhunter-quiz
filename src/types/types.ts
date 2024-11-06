import { NenTypeEnum } from './enums';

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

export interface CharactersDataProps{
  type: NenTypeEnum;
    name: string;
    image_path: string;
}