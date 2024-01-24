interface Preguntas {
  response_code: number;
  results: pregunta[];
}

interface pregunta {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}