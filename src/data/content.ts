export const COMPANY_INFO = {
  name: "Recupere Consulting",
  tagline: "Revisão Tributária e Recuperação de Créditos",
  headline: "Sua empresa pode estar pagando mais tributos do que deveria.",
  subheadline:
    "Revisão tributária especializada em PIS/COFINS, produtos monofásicos e recuperação de créditos acumulados nos últimos 5 anos. Procedimento 100% administrativo, seguro e com honorários exclusivamente no êxito.",
  phone: "+55 11 97058-4040",
  phoneRaw: "5511970584040",
  email: "fabio.souza@grupovillela.com",
  location: "São Paulo / SP — Atendimento com abrangência nacional",
  whatsappUrl: (msg?: string) => {
    const text = msg
      ? encodeURIComponent(msg)
      : encodeURIComponent(
          "Olá! Gostaria de solicitar um diagnóstico tributário gratuito para a minha empresa."
        );
    return `https://wa.me/5511970584040?text=${text}`;
  },
};

export const STATS = [
  {
    value: "+R$ 18M",
    label: "Créditos Identificados",
    description: "Valores pagos indevidamente mapeados para nossos clientes",
  },
  {
    value: "60 Meses",
    label: "Período Retroativo",
    description: "Auditoria completa dos últimos 5 anos de notas e apurações",
  },
  {
    value: "100%",
    label: "Via Administrativa",
    description: "Direto no e-CAC da Receita Federal, sem riscos de litígio",
  },
  {
    value: "0 Custo",
    label: "Honorários no Êxito",
    description: "Você só investe se o dinheiro for efetivamente recuperado",
  },
];

export const SOLUTIONS = [
  {
    id: "pis-cofins",
    badge: "Auditoria Completa",
    title: "Revisão de PIS e COFINS",
    description:
      "Análise profunda das apurações fiscais e recolhimentos efetuados para identificar possíveis inconsistências, exclusões legais de bases de cálculo e pagamentos a maior.",
    benefits: [
      "Cruzamento automatizado de SPED e notas fiscais (XML)",
      "Recálculo de alíquotas e bases de cálculo",
      "Identificação de créditos não aproveitados",
      "Compatível com Simples Nacional, Lucro Presumido e Real",
    ],
  },
  {
    id: "monofasicos",
    badge: "Foco Principal",
    title: "Produtos com Tributação Monofásica",
    description:
      "Verificação detalhada da classificação fiscal (NCM/CST). Em produtos monofásicos, o imposto já foi recolhido pela indústria/importador e o comerciante não deve pagar novamente.",
    benefits: [
      "Varredura item a item de medicamentos, peças, cosméticos e bebidas",
      "Correção de cadastros de produtos tributados em duplicidade",
      "Garantia de não bitributação para revendedores e varejistas",
      "Redução imediata da guia tributária mensal futura",
    ],
  },
  {
    id: "segregacao",
    badge: "Simples Nacional",
    title: "Revisão de Segregação Tributária",
    description:
      "Auditoria no cálculo das guias do DAS (Documento de Arrecadação do Simples Nacional), garantindo que as receitas de produtos monofásicos sejam devidamente segregadas e abatidas.",
    benefits: [
      "Eliminação do PIS/COFINS embutido na alíquota unificada do DAS",
      "Recuperação das guias pagas a mais nos últimos 60 meses",
      "Retificação automática via sistema PGDAS-D",
      "Valores restituídos direto na conta bancária da empresa",
    ],
  },
  {
    id: "diagnostico",
    badge: "Sem Custo Prévio",
    title: "Diagnóstico de Oportunidades & Restituição",
    description:
      "Levantamento documental e fiscal completo para mensurar a existência de créditos passíveis de restituição em conta ou compensação de tributos futuros.",
    benefits: [
      "Relatório executivo claro com valores exatos a recuperar",
      "Fundamentação jurídica embasada em normas da Receita Federal",
      "Elaboração e transmissão de pedidos via PER/DCOMP Web",
      "Acompanhamento até a efetiva homologação do crédito",
    ],
  },
];

export const SEGMENTS = [
  {
    id: "farmacias",
    name: "Farmácias & Drogarias",
    icon: "Pill",
    impact: "Alto Potencial de Recuperação",
    description:
      "A esmagadora maioria dos medicamentos, itens de perfumaria e higiene pessoal possui tributação monofásica de PIS/COFINS. Por falha cadastral, farmácias pagam esse tributo duas vezes.",
    examples: ["Medicamentos de referência e genéricos", "Cosméticos e dermocosméticos", "Higiene bucal e sabonetes"],
  },
  {
    id: "autopecas",
    name: "Autopeças & Motopeças",
    icon: "Wrench",
    impact: "Recuperação Expressiva",
    description:
      "Centenas de peças automotivas, pneumáticos e baterias possuem NCM monofásico. Lojas de peças e oficinas costumam recolher impostos integrais sem segregação.",
    examples: ["Pneus e câmaras de ar", "Baterias e acumuladores", "Peças e acessórios de reposição"],
  },
  {
    id: "supermercados",
    name: "Supermercados & Mercados",
    icon: "ShoppingCart",
    impact: "Volume Elevado",
    description:
      "O mix de produtos de um mercado conta com milhares de itens monofásicos, como bebidas frias (águas, cervejas, refrigerantes) e produtos de limpeza e beleza.",
    examples: ["Bebidas frias (refrigerantes e cervejas)", "Águas minerais", "Produtos de toucador e higiene"],
  },
  {
    id: "distribuidores",
    name: "Atacadistas & Distribuidores",
    icon: "Boxes",
    impact: "Altos Volumes Financeiros",
    description:
      "Operações com grande faturamento e rotação de estoque sofrem com desvios na apuração de créditos da cadeia de suprimentos e inconsistências em CST/CFOP.",
    examples: ["Distribuição de alimentos e bebidas", "Atacado de cosméticos", "Revenda de insumos industriais"],
  },
  {
    id: "conveniencias",
    name: "Postos & Conveniências",
    icon: "Fuel",
    impact: "Economia Contínua",
    description:
      "Combustíveis e lubrificantes são historicamente monofásicos, assim como os itens comercializados na loja de conveniência que pagam tributos em excesso.",
    examples: ["Óleos lubrificantes", "Combustíveis", "Bebidas e snacks de conveniência"],
  },
  {
    id: "restaurantes",
    name: "Bares & Restaurantes",
    icon: "Utensils",
    impact: "Alívio Mensal no Fluxo",
    description:
      "A venda de cervejas, refrigerantes, águas e sucos prontos não pode ter incidência de PIS e COFINS no faturamento do estabelecimento.",
    examples: ["Bebidas prontas para consumo", "Águas aromatizadas", "Cervejas e chopps"],
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Contato Inicial",
    subtitle: "Alinhamento preliminar",
    description: "Conhecemos sua empresa, regime tributário (Simples, Presumido ou Real) e atividades comerciais.",
    tag: "Sem compromisso",
  },
  {
    step: "02",
    title: "Levantamento Documental",
    subtitle: "Envio seguro e simples",
    description: "Identificamos e solicitamos os arquivos fiscais necessários (XMLs de vendas e extratos DAS/SPED).",
    tag: "100% Digital",
  },
  {
    step: "03",
    title: "Auditoria & Cruzamento",
    subtitle: "Tecnologia e inteligência fiscal",
    description: "Nosso sistema audita item por item, confrontando NCMs, CSTs e alíquotas com as tabelas da Receita Federal.",
    tag: "15 a 30 dias",
  },
  {
    step: "04",
    title: "Apresentação do Diagnóstico",
    subtitle: "Demonstrativo claro de valores",
    description: "Apresentamos o relatório com os valores exatos a serem restituídos e a fundamentação legal detalhada.",
    tag: "Relatório Transparente",
  },
  {
    step: "05",
    title: "Protocolo & Dinheiro no Caixa",
    subtitle: "Restituição em conta bancária",
    description: "Realizamos os pedidos de restituição e retificações nos órgãos fiscais até o valor estar no caixa da sua empresa.",
    tag: "Direto no seu Banco",
  },
];

export const FAQS = [
  {
    question: "A minha contabilidade atual já não faz esse trabalho?",
    answer:
      "O contador tradicional é responsável pelas rotinas diárias e conformidade do mês corrente. A revisão tributária de produtos monofásicos exige auditoria minuciosa de cada nota fiscal emitida nos últimos 5 anos (muitas vezes milhões de linhas de XML), com cruzamento específico de NCM e CST. Nosso trabalho é complementar e atua em parceria com o seu contador, sem substituí-lo.",
  },
  {
    question: "A recuperação de créditos pode atrair fiscalização da Receita Federal?",
    answer:
      "Não. O procedimento é 100% administrativo, previsto expressamente na Lei Complementar 123/2006 e nas Instruções Normativas da Receita Federal (como a IN RFB nº 2.055/2021). A própria Receita disponibiliza a plataforma digital específica para a devolução desses tributos pagos a maior.",
  },
  {
    question: "Preciso pagar algum valor adiantado para iniciar a análise?",
    answer:
      "Absolutamente nada. Trabalhamos sob o modelo de Success Fee (honorários apenas no êxito). Isso significa que a análise de viabilidade é 100% gratuita. Você só paga uma porcentagem acordada após os valores serem homologados e creditados na conta da sua empresa.",
  },
  {
    question: "Quanto tempo demora para a restituição entrar na conta da empresa?",
    answer:
      "Para empresas do Simples Nacional, os pedidos de restituição de PIS/COFINS monofásico costumam ser creditados diretamente na conta corrente cadastrada no CNPJ em prazos que variam entre 30 a 60 dias após o protocolo digital no e-CAC.",
  },
  {
    question: "Quais segmentos mais têm tributos a recuperar?",
    answer:
      "Os maiores potenciais estão em farmácias, drogarias, autopeças, motopeças, supermercados, minimercados, depósitos de bebidas, restaurantes e postos de combustíveis. Isso ocorre porque o portfólio desses segmentos é composto por até 80% de itens monofásicos.",
  },
  {
    question: "Até quantos anos no passado posso recuperar?",
    answer:
      "Pela legislação brasileira, sua empresa tem o direito legal de recuperar os tributos recolhidos a mais nos últimos 60 meses (5 anos retroativos a partir da data de protocolo). Por isso, cada mês que passa sem a revisão representa dinheiro que prescreve e deixa de voltar para o seu negócio.",
  },
];

