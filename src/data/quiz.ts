import { NenTypeEnum } from '../types/enums';
import {
  CharactersDataProps,
  NenTypesProps,
  QuizQuestionsProps,
} from '../types/types';

export const quizQuestions: QuizQuestionsProps[] = [
  {
    question: 'Como você reage diante de um desafio físico ou mental?',
    options: [
      {
        answer: 'Enfrento de frente, com confiança e determinação.',
        type: NenTypeEnum.ENHANCEMENT,
      },
      {
        answer: 'Mantenho a calma e tento planejar uma solução estratégica.',
        type: NenTypeEnum.CONJURATION,
      },
      {
        answer: 'Tento adaptar minhas habilidades e me ajustar rapidamente.',
        type: NenTypeEnum.TRANSMUTATION,
      },
      {
        answer: 'Penso em formas de influenciar ou controlar a situação.',
        type: NenTypeEnum.MANIPULATION,
      },
      {
        answer: 'Sou impulsivo(a) e prefiro agir imediatamente.',
        type: NenTypeEnum.EMISSION,
      },
      {
        answer:
          'Analiso o desafio de forma única e procuro entender todas as nuances.',
        type: NenTypeEnum.SPECIALIZATION,
      },
    ],
  },
  {
    question: 'Em uma situação social, como você normalmente se comporta?',
    options: [
      {
        answer: 'Sou extrovertido(a) e gosto de fazer as pessoas rirem.',
        type: NenTypeEnum.ENHANCEMENT,
      },
      {
        answer: 'Sou mais reservado(a) e observo os outros antes de interagir.',
        type: NenTypeEnum.CONJURATION,
      },
      {
        answer: 'Sou imprevisível e gosto de surpreender as pessoas.',
        type: NenTypeEnum.TRANSMUTATION,
      },
      {
        answer: 'Gosto de controlar a dinâmica e direcionar a conversa.',
        type: NenTypeEnum.MANIPULATION,
      },
      {
        answer: 'Sou expressivo(a) e às vezes reajo impulsivamente.',
        type: NenTypeEnum.EMISSION,
      },
      {
        answer:
          'Prefiro observar e interagir quando vejo algo realmente interessante.',
        type: NenTypeEnum.SPECIALIZATION,
      },
    ],
  },
  {
    question: 'Quando alguém te ofende, qual é a sua reação inicial?',
    options: [
      {
        answer: 'Deixo claro o que sinto e resolvo o problema diretamente.',
        type: NenTypeEnum.ENHANCEMENT,
      },
      {
        answer: 'Tento entender a razão do conflito antes de reagir.',
        type: NenTypeEnum.CONJURATION,
      },
      {
        answer: 'Faço uma brincadeira ou tento desconcertar a pessoa.',
        type: NenTypeEnum.TRANSMUTATION,
      },
      {
        answer: 'Penso em uma maneira de influenciar a situação a meu favor.',
        type: NenTypeEnum.MANIPULATION,
      },
      {
        answer: 'Reajo de imediato, às vezes de forma enérgica.',
        type: NenTypeEnum.EMISSION,
      },
      {
        answer: 'Deixo passar, mas analiso cuidadosamente o comportamento.',
        type: NenTypeEnum.SPECIALIZATION,
      },
    ],
  },
  {
    question: 'Qual das descrições melhor define seu estilo de vida?',
    options: [
      { answer: 'Ação e movimento constantes.', type: NenTypeEnum.ENHANCEMENT },
      {
        answer: 'Planejamento e atenção aos detalhes.',
        type: NenTypeEnum.CONJURATION,
      },
      {
        answer: 'Adaptabilidade e liberdade.',
        type: NenTypeEnum.TRANSMUTATION,
      },
      {
        answer: 'Controle e manipulação dos recursos à disposição.',
        type: NenTypeEnum.MANIPULATION,
      },
      { answer: 'Intensidade e expressividade.', type: NenTypeEnum.EMISSION },
      {
        answer: 'Singularidade e introspecção.',
        type: NenTypeEnum.SPECIALIZATION,
      },
    ],
  },
  {
    question: 'Como você lida com um projeto de longo prazo?',
    options: [
      {
        answer: 'Mantenho uma abordagem prática e direta, sem complicar.',
        type: NenTypeEnum.ENHANCEMENT,
      },
      {
        answer: 'Planejo tudo e sigo cada etapa com cuidado.',
        type: NenTypeEnum.CONJURATION,
      },
      {
        answer: 'Mudo o plano conforme necessário, dependendo da situação.',
        type: NenTypeEnum.TRANSMUTATION,
      },
      {
        answer: 'Tento antecipar problemas e manipulá-los a meu favor.',
        type: NenTypeEnum.MANIPULATION,
      },
      {
        answer: 'Trabalho em rajadas intensas e depois dou pausas.',
        type: NenTypeEnum.EMISSION,
      },
      {
        answer: 'Sigo uma abordagem única e fora do comum.',
        type: NenTypeEnum.SPECIALIZATION,
      },
    ],
  },
  {
    question: 'Qual dos seguintes atributos é mais importante para você?',
    options: [
      { answer: 'Força e persistência.', type: NenTypeEnum.ENHANCEMENT },
      { answer: 'Cautela e preparação.', type: NenTypeEnum.CONJURATION },
      {
        answer: 'Versatilidade e criatividade.',
        type: NenTypeEnum.TRANSMUTATION,
      },
      {
        answer: 'Controle e domínio das circunstâncias.',
        type: NenTypeEnum.MANIPULATION,
      },
      { answer: 'Expressão e intensidade.', type: NenTypeEnum.EMISSION },
      { answer: 'Originalidade e mistério.', type: NenTypeEnum.SPECIALIZATION },
    ],
  },
  {
    question:
      'Como você costuma resolver problemas no trabalho ou nos estudos?',
    options: [
      {
        answer: 'Encaro os problemas diretamente, com força e determinação.',
        type: NenTypeEnum.ENHANCEMENT,
      },
      {
        answer: 'Planejo cuidadosamente e tento resolver cada detalhe.',
        type: NenTypeEnum.CONJURATION,
      },
      {
        answer: 'Busco alternativas criativas e imprevisíveis.',
        type: NenTypeEnum.TRANSMUTATION,
      },
      {
        answer: 'Uso minha capacidade de influência para guiar as coisas.',
        type: NenTypeEnum.MANIPULATION,
      },
      {
        answer: 'Reajo de forma rápida e intensa para resolver o problema.',
        type: NenTypeEnum.EMISSION,
      },
      {
        answer: 'Tento abordar a situação de uma maneira única e original.',
        type: NenTypeEnum.SPECIALIZATION,
      },
    ],
  },
  {
    question: 'Como as pessoas costumam te descrever?',
    options: [
      { answer: 'Energético(a) e direto(a).', type: NenTypeEnum.ENHANCEMENT },
      { answer: 'Detalhista e confiável.', type: NenTypeEnum.CONJURATION },
      {
        answer: 'Engraçado(a) e imprevisível.',
        type: NenTypeEnum.TRANSMUTATION,
      },
      {
        answer: 'Controlador(a) e estratégico(a).',
        type: NenTypeEnum.MANIPULATION,
      },
      { answer: 'Intenso(a) e expressivo(a).', type: NenTypeEnum.EMISSION },
      {
        answer: 'Misterioso(a) e introspectivo(a).',
        type: NenTypeEnum.SPECIALIZATION,
      },
    ],
  },
  {
    question: 'Quando precisa aprender uma nova habilidade, como você faz?',
    options: [
      {
        answer: 'Pratico até dominar, sem atalhos.',
        type: NenTypeEnum.ENHANCEMENT,
      },
      {
        answer: 'Estudo e planejo antes de tentar.',
        type: NenTypeEnum.CONJURATION,
      },
      {
        answer: 'Tento adaptar a habilidade ao meu estilo pessoal.',
        type: NenTypeEnum.TRANSMUTATION,
      },
      {
        answer: 'Procuro entender os aspectos que me dão mais controle.',
        type: NenTypeEnum.MANIPULATION,
      },
      {
        answer: 'Vou direto ao ponto e aprendo praticando rapidamente.',
        type: NenTypeEnum.EMISSION,
      },
      {
        answer: 'Exploro a habilidade de um jeito único e incomum.',
        type: NenTypeEnum.SPECIALIZATION,
      },
    ],
  },
  {
    question: 'Como você lida com a pressão em situações extremas?',
    options: [
      {
        answer: 'Enfrento a situação com força e coragem.',
        type: NenTypeEnum.ENHANCEMENT,
      },
      {
        answer: 'Reflito antes de agir e uso a lógica para decidir.',
        type: NenTypeEnum.CONJURATION,
      },
      {
        answer: 'Mantenho a calma e me adapto conforme necessário.',
        type: NenTypeEnum.TRANSMUTATION,
      },
      {
        answer:
          'Tento manipular as variáveis para tornar a situação mais favorável.',
        type: NenTypeEnum.MANIPULATION,
      },
      {
        answer: 'Reajo de maneira intensa e rápida, seguindo meu instinto.',
        type: NenTypeEnum.EMISSION,
      },
      {
        answer: 'Mantenho uma abordagem única, seguindo minha intuição.',
        type: NenTypeEnum.SPECIALIZATION,
      },
    ],
  },
];

export const nenTypeData: NenTypesProps[] = [
  {
    type: NenTypeEnum.ENHANCEMENT,
    name: 'Reforço',
    features:
      'Indivíduos de Reforço são muitas vezes determinados, simples, diretos e confiantes. Eles costumam ser honestos e diretos nas interações, preferindo resolver problemas de forma prática e sem rodeios.',
    psychologicalProfile:
      'São pessoas que tendem a não complicar as coisas, preferem ações diretas e são bastante emotivas. Seu foco em força bruta e resistência reflete uma abordagem focada em resultados.',
    characters:
      'Gon Freecss, que é direto, com uma personalidade positiva e determinada.',
  },
  {
    type: NenTypeEnum.EMISSION,
    name: 'Emissão',
    features:
      'Usuários de Emissão são geralmente temperamentais, impulsivos e emotivos. Eles podem ser impacientes e costumam agir rapidamente, preferindo manter distância em combate e na vida.',
    psychologicalProfile:
      'Pessoas de Emissão têm uma natureza expressiva e geralmente se destacam por serem intensas, muitas vezes dispostas a explodir quando contrariadas. Elas canalizam suas emoções para executar ataques de forma eficaz.',
    characters:
      'Leorio Paradinight, que possui uma personalidade expressiva e, por vezes, explosiva.',
  },
  {
    type: NenTypeEnum.TRANSMUTATION,
    name: 'Transformação',
    features:
      'Pessoas de Transformação tendem a ser brincalhonas, excêntricas e imprevisíveis. São difíceis de ler, pois mudam de atitude facilmente e podem ser imprevisíveis e humoristas, o que surpreende os outros.',
    psychologicalProfile:
      'Eles têm uma natureza versátil e adaptável, conseguindo adaptar suas emoções e energia ao ambiente ou situação. Gostam de manter um pouco de mistério e tendem a ser menos diretos.',
    characters:
      'Killua Zoldyck, cuja personalidade brincalhona e imprevisível reflete seu type de Nen.',
  },
  {
    type: NenTypeEnum.MANIPULATION,
    name: 'Manipulação',
    features:
      'Indivíduos de Manipulação são calculistas, metódicos e, em muitos casos, controladores. Eles gostam de ter tudo sob controle e possuem uma abordagem analítica e lógica.',
    psychologicalProfile:
      'Pessoas dessa categoria preferem influenciar as situações de forma estratégica, manipulando variáveis para atingir seus objetivos. Elas têm uma forte habilidade em observar e antecipar o comportamento dos outros.',
    characters:
      'Shalnark, da Trupe Fantasma, que possui uma personalidade calculista e se utiliza de um método lógico em combate.',
  },
  {
    type: NenTypeEnum.CONJURATION,
    name: 'Materialização',
    features:
      'Usuários de Materialização são geralmente cautelosos, detalhistas e muito ligados a suas crenças e ideais. Eles têm um forte senso de realismo e responsabilidade e se esforçam para planejar antes de agir.',
    psychologicalProfile:
      'São pessoas que valorizam a criação de soluções duráveis e concretas. Geralmente confiáveis, acreditam no valor da preparação e buscam consistência em suas escolhas e habilidades.',
    characters:
      'Kurapika, cuja personalidade disciplinada e cuidadosa reflete sua habilidade de Materialização.',
  },
  {
    type: NenTypeEnum.SPECIALIZATION,
    name: 'Especialização',
    features:
      'Especialistas são geralmente enigmáticos, introspectivos e possuem uma certa singularidade que os diferencia. Eles são únicos e imprevisíveis, possuindo uma visão de mundo pouco convencional.',
    psychologicalProfile:
      'São pessoas que caminham fora do senso comum, pensam de forma independente e estão abertas a ideias que fogem da norma. A Especialização é a categoria mais rara e associada a traços enigmáticos, muitas vezes difícil de classificar.',
    characters: 'Nenhum personagem específico listado.',
  },
];

export const charactersData: CharactersDataProps[] = [
  {
    type: NenTypeEnum.TRANSMUTATION,
    name: 'Killua Zoldyck',
    image_path: 'assets/characters/killua-zoldyck.png',
  },
  {
    type: NenTypeEnum.ENHANCEMENT,
    name: 'Gon Freecss',
    image_path: 'assets/characters/gon-freecss.png',
  },
  {
    type: NenTypeEnum.EMISSION,
    name: 'Leorio Paradinight',
    image_path: 'assets/characters/leorio-paradinight.png',
  },
  {
    type: NenTypeEnum.SPECIALIZATION,
    name: 'Chrollo Lucilfer',
    image_path: 'assets/characters/chrollo-lucilfer.png',
  },
  {
    type: NenTypeEnum.CONJURATION,
    name: 'Kurapika',
    image_path: 'assets/characters/kurapika.png',
  },
  {
    type: NenTypeEnum.SPECIALIZATION,
    name: 'Kurapika (Olhos escarlate)',
    image_path: 'assets/characters/kurapika-red-eyes.png',
  },
  {
    type: NenTypeEnum.CONJURATION,
    name: 'Kaito',
    image_path: 'assets/characters/kaito.png',
  },
  {
    type: NenTypeEnum.ENHANCEMENT,
    name: 'Uvogin',
    image_path: 'assets/characters/uvogin.png',
  },
  {
    type: NenTypeEnum.TRANSMUTATION,
    name: 'Hisoka Morow',
    image_path: 'assets/characters/hisoka.png',
  },
  {
    type: NenTypeEnum.MANIPULATION,
    name: 'Illumi Zoldyck',
    image_path: 'assets/characters/illumi-zoldyck.png',
  },
  {
    type: NenTypeEnum.EMISSION,
    name: 'Silva Zoldyck',
    image_path: 'assets/characters/silva-zoldyck.png',
  },
  {
    type: NenTypeEnum.MANIPULATION,
    name: 'Shalnark',
    image_path: 'assets/characters/shalnark.png',
  },
];
