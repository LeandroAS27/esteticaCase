export type Resultado = {
  antes: string; depois: string; legendaAntes: string; legendaDepois: string;
  profissao: "medico" | "biomedico" | "esteticista";
  autorizacaoTCLE: true; nomeProfissional?: string; registro?: string; habilitacao?: string;
};

export type Site = {
  nome: string; rotulo: string; bairro: string; cidade: string; url: string; titulo: string; apoio: string;
  whatsapp: string; telefoneExibicao: string; endereco: string; mapsUrl: string; mapsEmbedUrl: string;
  agendamentoUrl: string | null; redes: { nome: string; url: string }[];
  avaliacoes: { nota: string; total: number; url: string } | null;
  horarios: { dia: string; horario: string }[]; confianca: string[];
  profissional: { nome: string; formacao: string; registro?: string; bio: string; foto: string };
  servicos: { id: string; nome: string; descricao: string; duracao?: string; precoAPartir?: string; imagem: string; mensagemWhatsapp: string }[];
  passos: { titulo: string; descricao: string }[];
  galeria: { imagem: string; legenda: string; alt: string }[];
  faq: { pergunta: string; resposta: string }[];
  resultados: Resultado[] | null; seo: { title: string; description: string; ogImage: string };
  demo: boolean; creditosFotos: string; cnpj?: string; responsavelTecnica?: string;
  heroImagem: string;
};

// TODO(cliente): substituir todos os dados de exemplo antes de publicar uma versão real.
export const site: Site = {
  nome: "Nome do Estúdio", // TODO(cliente): nome e identidade.
  rotulo: "ESTÉTICA · BAIRRO EXEMPLO, SÃO PAULO", // TODO(cliente): bairro real.
  bairro: "Bairro Exemplo", // TODO(cliente): bairro real.
  cidade: "São Paulo", // TODO(cliente): cidade real.
  url: "https://estetica-case.vercel.app", // TODO(cliente): domínio definitivo da cliente.
  titulo: "Estética no Bairro Exemplo: cuidado com a sua pele, pertinho de casa.", // TODO(cliente): título aprovado.
  apoio: "Atendimento com hora marcada, conversa antes de cada procedimento e um espaço tranquilo para você.", // TODO(cliente): revisar oferta real.
  whatsapp: "5511900000000", // TODO(cliente): número real com 55, só dígitos.
  telefoneExibicao: "(11) 90000-0000", // TODO(cliente): telefone real.
  endereco: "Rua Exemplo, 123 — sala 00 · Bairro Exemplo, São Paulo — SP", // TODO(cliente): endereço e sala reais.
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Exemplo+123+Sao+Paulo", // TODO(cliente): link de rota real.
  mapsEmbedUrl: "https://www.google.com/maps?q=Rua+Exemplo+123+Sao+Paulo&output=embed", // TODO(cliente): mapa real.
  agendamentoUrl: null, // TODO(cliente): URL real do agendamento, se houver.
  redes: [], // TODO(cliente): adicionar somente perfis reais.
  avaliacoes: null, // TODO(cliente): nota, total e link do Google verificados; nunca inventar.
  horarios: [
    { dia: "Segunda a sexta", horario: "A confirmar" },
    { dia: "Sábado", horario: "A confirmar" },
    { dia: "Domingo", horario: "A confirmar" },
  ], // TODO(cliente): confirmar horários por dia.
  confianca: [], // TODO(cliente): até três credenciais ou avaliações verificadas.
  profissional: {
    nome: "Nome da Profissional", // TODO(cliente): nome real.
    formacao: "Formação a confirmar", // TODO(cliente): formação comprovada.
    // TODO(cliente): incluir registro profissional somente quando aplicável e comprovado.
    bio: "Sou a profissional responsável pelo atendimento. Converso com cada pessoa antes de indicar um procedimento. Este texto é um exemplo para revisão da cliente.", // TODO(cliente): bio em primeira pessoa aprovada.
    foto: "/images/quem-atende.webp", // TODO(cliente): retrato real e autorizado; foto Pexels ilustrativa.
  },
  servicos: [
    { id: "limpeza-pele", nome: "Limpeza de Pele", descricao: "Higienização facial feita após uma conversa sobre as necessidades da sua pele.", imagem: "/images/servico-limpeza-de-pele.webp", mensagemWhatsapp: "Olá! Vim pelo site e quero agendar: Limpeza de Pele. (serviço: Limpeza de Pele)" }, // TODO(cliente): revisar descrição e foto.
    { id: "drenagem-linfatica", nome: "Drenagem Linfática", descricao: "Técnica de massagem manual com indicação definida em avaliação individual.", imagem: "/images/servico-drenagem-linfatica.webp", mensagemWhatsapp: "Olá! Vim pelo site e quero agendar: Drenagem Linfática. (serviço: Drenagem Linfática)" }, // TODO(cliente): revisar descrição e foto.
    { id: "drenagem-facial", nome: "Drenagem Facial", descricao: "Massagem facial suave planejada conforme a avaliação de cada pessoa.", imagem: "/images/servico-drenagem-facial.webp", mensagemWhatsapp: "Olá! Vim pelo site e quero agendar: Drenagem Facial. (serviço: Drenagem Facial)" }, // TODO(cliente): revisar descrição e trocar foto de baixa resolução.
    { id: "radiofrequencia", nome: "Radiofrequência", descricao: "Procedimento com equipamento, sujeito à avaliação e à indicação profissional.", imagem: "/images/servico-radiofrequencia.webp", mensagemWhatsapp: "Olá! Vim pelo site e quero agendar: Radiofrequência. (serviço: Radiofrequência)" }, // TODO(cliente): revisar descrição e foto.
    { id: "esfoliacao", nome: "Esfoliação Corporal", descricao: "Cuidado corporal cuja indicação é conversada antes do atendimento.", imagem: "/images/servico-esfoliacao-corporal.webp", mensagemWhatsapp: "Olá! Vim pelo site e quero agendar: Esfoliação Corporal. (serviço: Esfoliação Corporal)" }, // TODO(cliente): revisar descrição e trocar foto de baixa resolução.
    { id: "massagem-modeladora", nome: "Massagem Modeladora", descricao: "Massagem corporal com indicação individual após avaliação.", imagem: "/images/servico-massagem-modeladora.webp", mensagemWhatsapp: "Olá! Vim pelo site e quero agendar: Massagem Modeladora. (serviço: Massagem Modeladora)" }, // TODO(cliente): revisar descrição e trocar foto de baixa resolução.
  ], // TODO(cliente): revisar todos os serviços e descrições com a responsável técnica; preencher duração e preço somente se confirmados.
  passos: [
    { titulo: "Entre em contato", descricao: "Chame no WhatsApp para conversar sobre o atendimento e os horários." },
    { titulo: "Converse antes", descricao: "A indicação do procedimento depende de uma avaliação individual." },
    { titulo: "Venha ao espaço", descricao: "Compareça no horário combinado para o atendimento." },
  ], // TODO(cliente): confirmar como funciona o processo de agendamento.
  galeria: [
    { imagem: "/images/galeria-sala.webp", legenda: "Ambiente ilustrativo", alt: "Ambiente de estética ilustrativo" },
    { imagem: "/images/galeria-recepcao.webp", legenda: "Equipamentos ilustrativos", alt: "Equipamentos de estética ilustrativos" },
    { imagem: "/images/galeria-produtos.webp", legenda: "Produtos ilustrativos", alt: "Produtos de cuidados estéticos ilustrativos" },
    { imagem: "/images/galeria-detalhe.webp", legenda: "Detalhe ilustrativo", alt: "Detalhe de cuidados estéticos ilustrativo" },
  ], // TODO(cliente): trocar por fotos reais e autorizadas do espaço; legendas e alt.
  faq: [
    { pergunta: "Preciso de avaliação antes?", resposta: "Sim. A indicação depende de uma conversa e avaliação individual." },
    { pergunta: "Quanto tempo dura?", resposta: "A duração varia conforme o procedimento. Confirme ao agendar." },
    { pergunta: "Como agendo?", resposta: "Use o botão de WhatsApp para consultar os horários disponíveis." },
    { pergunta: "Onde fica? Há estacionamento?", resposta: "Consulte o endereço nesta página. Confirme as opções de estacionamento antes de vir." },
    { pergunta: "Quais formas de pagamento?", resposta: "Consulte as formas de pagamento pelo WhatsApp antes do atendimento." },
  ], // TODO(cliente): validar todas as respostas, endereço, estacionamento e pagamento.
  resultados: null, // TODO(cliente): usar somente fotos próprias autorizadas com TCLE, legendas e requisitos profissionais.
  seo: {
    title: "Nome do Estúdio · Estética no Bairro Exemplo, São Paulo", // TODO(cliente): título local real.
    description: "Estúdio de estética no Bairro Exemplo, São Paulo. Conheça os serviços, o espaço e entre em contato para agendar.", // TODO(cliente): descrição real.
    ogImage: "/og.jpg", // TODO(cliente): imagem OG real e autorizada, 1200×630.
  },
  demo: true,
  heroImagem: "/images/hero.webp", // TODO(cliente): foto real e autorizada do hero; foto Pexels ilustrativa.
  creditosFotos: "Fotos ilustrativas: Pexels License. Autores e links em CREDITS.md.", // TODO(cliente): substituir por fotos reais autorizadas para um cliente.
  // TODO(cliente): preencher CNPJ e responsável técnica quando aplicáveis e verificados.
};
