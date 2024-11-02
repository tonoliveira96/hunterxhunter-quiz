interface QuestionsOptionsProps {
  answer: string;
  type: string;
}

export interface QuizQuestionsProps {
  question: string;
  options: QuestionsOptionsProps[];
}

export const quizQuestions: QuizQuestionsProps[] = [
  {
    question: "Como você reage diante de um desafio físico ou mental?",
    options: [
      { answer: "Enfrento de frente, com confiança e determinação.", type: "Reforço" },
      { answer: "Mantenho a calma e tento planejar uma solução estratégica.", type: "Materialização" },
      { answer: "Tento adaptar minhas habilidades e me ajustar rapidamente.", type: "Transformação" },
      { answer: "Penso em formas de influenciar ou controlar a situação.", type: "Manipulação" },
      { answer: "Sou impulsivo(a) e prefiro agir imediatamente.", type: "Emissão" },
      { answer: "Analiso o desafio de forma única e procuro entender todas as nuances.", type: "Especialização" }
    ]
  },
  {
    question: "Em uma situação social, como você normalmente se comporta?",
    options: [
      { answer: "Sou extrovertido(a) e gosto de fazer as pessoas rirem.", type: "Reforço" },
      { answer: "Sou mais reservado(a) e observo os outros antes de interagir.", type: "Materialização" },
      { answer: "Sou imprevisível e gosto de surpreender as pessoas.", type: "Transformação" },
      { answer: "Gosto de controlar a dinâmica e direcionar a conversa.", type: "Manipulação" },
      { answer: "Sou expressivo(a) e às vezes reajo impulsivamente.", type: "Emissão" },
      { answer: "Prefiro observar e interagir quando vejo algo realmente interessante.", type: "Especialização" }
    ]
  },
  {
    question: "Quando alguém te ofende, qual é a sua reação inicial?",
    options: [
      { answer: "Deixo claro o que sinto e resolvo o problema diretamente.", type: "Reforço" },
      { answer: "Tento entender a razão do conflito antes de reagir.", type: "Materialização" },
      { answer: "Faço uma brincadeira ou tento desconcertar a pessoa.", type: "Transformação" },
      { answer: "Penso em uma maneira de influenciar a situação a meu favor.", type: "Manipulação" },
      { answer: "Reajo de imediato, às vezes de forma enérgica.", type: "Emissão" },
      { answer: "Deixo passar, mas analiso cuidadosamente o comportamento.", type: "Especialização" }
    ]
  },
  {
    question: "Qual das descrições melhor define seu estilo de vida?",
    options: [
      { answer: "Ação e movimento constantes.", type: "Reforço" },
      { answer: "Planejamento e atenção aos detalhes.", type: "Materialização" },
      { answer: "Adaptabilidade e liberdade.", type: "Transformação" },
      { answer: "Controle e manipulação dos recursos à disposição.", type: "Manipulação" },
      { answer: "Intensidade e expressividade.", type: "Emissão" },
      { answer: "Singularidade e introspecção.", type: "Especialização" }
    ]
  },
  {
    question: "Como você lida com um projeto de longo prazo?",
    options: [
      { answer: "Mantenho uma abordagem prática e direta, sem complicar.", type: "Reforço" },
      { answer: "Planejo tudo e sigo cada etapa com cuidado.", type: "Materialização" },
      { answer: "Mudo o plano conforme necessário, dependendo da situação.", type: "Transformação" },
      { answer: "Tento antecipar problemas e manipulá-los a meu favor.", type: "Manipulação" },
      { answer: "Trabalho em rajadas intensas e depois dou pausas.", type: "Emissão" },
      { answer: "Sigo uma abordagem única e fora do comum.", type: "Especialização" }
    ]
  },
  {
    question: "Qual dos seguintes atributos é mais importante para você?",
    options: [
      { answer: "Força e persistência.", type: "Reforço" },
      { answer: "Cautela e preparação.", type: "Materialização" },
      { answer: "Versatilidade e criatividade.", type: "Transformação" },
      { answer: "Controle e domínio das circunstâncias.", type: "Manipulação" },
      { answer: "Expressão e intensidade.", type: "Emissão" },
      { answer: "Originalidade e mistério.", type: "Especialização" }
    ]
  },
  {
    question: "Como você costuma resolver problemas no trabalho ou nos estudos?",
    options: [
      { answer: "Encaro os problemas diretamente, com força e determinação.", type: "Reforço" },
      { answer: "Planejo cuidadosamente e tento resolver cada detalhe.", type: "Materialização" },
      { answer: "Busco alternativas criativas e imprevisíveis.", type: "Transformação" },
      { answer: "Uso minha capacidade de influência para guiar as coisas.", type: "Manipulação" },
      { answer: "Reajo de forma rápida e intensa para resolver o problema.", type: "Emissão" },
      { answer: "Tento abordar a situação de uma maneira única e original.", type: "Especialização" }
    ]
  },
  {
    question: "Como as pessoas costumam te descrever?",
    options: [
      { answer: "Energético(a) e direto(a).", type: "Reforço" },
      { answer: "Detalhista e confiável.", type: "Materialização" },
      { answer: "Engraçado(a) e imprevisível.", type: "Transformação" },
      { answer: "Controlador(a) e estratégico(a).", type: "Manipulação" },
      { answer: "Intenso(a) e expressivo(a).", type: "Emissão" },
      { answer: "Misterioso(a) e introspectivo(a).", type: "Especialização" }
    ]
  },
  {
    question: "Quando precisa aprender uma nova habilidade, como você faz?",
    options: [
      { answer: "Pratico até dominar, sem atalhos.", type: "Reforço" },
      { answer: "Estudo e planejo antes de tentar.", type: "Materialização" },
      { answer: "Tento adaptar a habilidade ao meu estilo pessoal.", type: "Transformação" },
      { answer: "Procuro entender os aspectos que me dão mais controle.", type: "Manipulação" },
      { answer: "Vou direto ao ponto e aprendo praticando rapidamente.", type: "Emissão" },
      { answer: "Exploro a habilidade de um jeito único e incomum.", type: "Especialização" }
    ]
  },
  {
    question: "Como você lida com a pressão em situações extremas?",
    options: [
      { answer: "Enfrento a situação com força e coragem.", type: "Reforço" },
      { answer: "Reflito antes de agir e uso a lógica para decidir.", type: "Materialização" },
      { answer: "Mantenho a calma e me adapto conforme necessário.", type: "Transformação" },
      { answer: "Tento manipular as variáveis para tornar a situação mais favorável.", type: "Manipulação" },
      { answer: "Reajo de maneira intensa e rápida, seguindo meu instinto.", type: "Emissão" },
      { answer: "Mantenho uma abordagem única, seguindo minha intuição.", type: "Especialização" }
    ]
  }
];
