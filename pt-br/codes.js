window.CODES = {
 "billing": {
  "name": "Modelo de cobrança",
  "cat": "Custo / cobrança",
  "alias": "cobranca preco agente conversa concorrencia billing saas resolucao meiqia",
  "sym": "Quando o tráfego tem picos claros ou o tamanho da equipe não é fixo, o modelo errado amplifica o custo na hora",
  "l1": "Três modelos principais: por agente (ótimo com equipe estável, orçamento previsível), por conversa / chamada (mais flexível para e-commerce com picos), por concorrência (picos concentrados). O SaaS costuma ser por agente/ano, ~¥800-5000/agente/ano",
  "l2": "Não é o preço unitário, mas se a cobrança se ajusta às suas oscilações. A cobrança por resolução é amiga de empresas voláteis mas pode explodir no pico - um SaaS relatou 'no 11.11 a conta de IA foi 8x o normal, orçamento fora de controle'; a cobrança por chamada tem um mínimo, então abaixo de 10k chats/dia sai mais caro",
  "tip": "Tráfego estável → por agente; volátil mas previsível → anual / agentes por faixas; picos assustadores → compre um pacote elástico para a promoção",
  "scene": "Na promoção, os chats diários saltam de 20k para 350k; a cobrança por conversa / resolução explode, agentes por faixas são mais estáveis"
 },
 "price budget": {
  "name": "Preço e orçamento",
  "cat": "Custo / cobrança",
  "alias": "preco quanto orcamento cotacao anual faixa barato caro 1888",
  "sym": "Ao definir o orçamento e comparar cotações, alinhe a 'faixa' primeiro, não compare entre faixas",
  "l1": "Três faixas 2026: SaaS padrão básico ~¥30k-150k/ano (PME, -~5-10% vs 2025); personalização de crescimento ~¥200k-800k/ano (médio-grande, conecta ERP / CRM); agente full-stack carro-chefe ¥1M+/ano (grupos, +~15-20%)",
  "l2": "A diferença nacional vs internacional é grande: o SaaS internacional é por agente/mês (~$115-169/agente/mês); 100 agentes ~¥1,5-2M/ano, 2-3x o nacional. A Meiqia é por faixas por agente: Pro ~¥1888, Enterprise ~¥3888, Flagship ~¥5888/agente/ano, com uma faixa grátis para começar com baixa barreira",
  "tip": "Trave a faixa por escala primeiro (PME → básico, médio-grande → crescimento), depois compare funções e serviço dentro da faixa; não fixe no desconto do 1º ano",
  "scene": "Para 100 agentes escolheram a cotação mais barata; custos ocultos se acumularam e o total de 3 anos superou muito as expectativas"
 },
 "hidden cost": {
  "name": "Custo oculto / TCO",
  "cat": "Custo / cobrança",
  "alias": "tco oculto total implementacao api escala personalizacao token exportacao",
  "sym": "Comparar só a mensalidade é o jeito mais fácil de bater no 'iceberg' - as taxas posteriores são o grosso",
  "l1": "A compra do software é só a ponta visível do iceberg do TCO (custo total de propriedade); conte implementação, operação, atualizações e perdas de risco num TCO de 3 anos",
  "l2": "A partida a frio da base de conhecimento, rotulagem/limpeza de dados, personalização e depuração de interfaces costumam ser 3-5x a licença - 'comprar barato quase sempre significa pagar caro para operar'. O contrato deve especificar: preço unitário de escala no pico, taxa de chamadas API, personalização por homem-dia, excesso de tokens, taxa de exportação de dados",
  "tip": "Construa um modelo de TCO de 3 anos e faça o fornecedor cotar item a item; vigie os três custos variáveis: tokens, excesso de interface, exportação de dados",
  "scene": "Uma empresa com 100 agentes calculou um TCO de 3 anos de ~¥2,9M enquanto a cotação do 1º ano era só ¥800k - a diferença: implementação / KB / interfaces"
 },
 "free trial": {
  "name": "Plano grátis / teste / PoC",
  "cat": "Custo / cobrança",
  "alias": "gratis teste poc demo experiencia 14 dias",
  "sym": "Valide com tráfego real antes de assinar, não só o demo do vendedor na sala de reunião",
  "l1": "A maioria dos fornecedores tem plano grátis / teste (a Meiqia também); comece com baixa barreira, rode o fluxo, depois suba de nível; exija um teste de 7-15 dias para medir a velocidade de resposta sob concorrência real",
  "l2": "Não se deslumbre com o demo - ambientes de demo costumam ser datasets ideais, condições limpas, baixa concorrência (<100 QPS). Rode a PoC em 7 dias dos seus próprios logs de produção (com ruído, dialeto, erros); a conclusão de tarefas do cenário-chave deve ser >70%",
  "tip": "PoC em dados reais anonimizados, não no 'dataset dourado' do fornecedor; teste também alta concorrência, continuidade da transferência e degradação graciosa em perguntas desconhecidas",
  "scene": "Um demo de 100 sessões na sala respondeu na hora e assinaram ali; na promoção bateram numa avalanche de latência - o demo os enganou"
 },
 "omnichannel": {
  "name": "Omnichannel",
  "cat": "Canal / integração",
  "alias": "omnichannel multicanal mesa agregacao silos 20 canais identidade",
  "sym": "Quando os clientes estão espalhados por web / WeChat / Douyin / Xiaohongshu / app e os agentes trocam de sistema e perdem mensagens",
  "l1": "Verifique se uma única mesa admite web / H5, o ecossistema WeChat, Douyin / Xiaohongshu, SDK de app e outros pontos de contato principais. A Meiqia agrega 20+ canais em uma mesa, marca a origem automaticamente e funde a identidade do cliente entre canais (um perfil, totalmente rastreável)",
  "l2": "Segundo o relatório iResearch 2025 de atendimento inteligente, ~78% das empresas trocam de sistema por silos de canal, a eficiência de resposta cai ~60% e a evasão chega a ~38%. O omnichannel real exige os três - agregação de mensagens + identidade unificada + sem silos de dados; agregar sem unificar dados é só uma 'caixa de mensagens'",
  "tip": "Confirme o suporte nativo dos seus canais principais (sobretudo DMs de Douyin / Xiaohongshu) e se o mesmo cliente se funde automaticamente entre canais",
  "scene": "Os agentes trocam de 5-8 back-ends por dia e desperdiçam ~30% do tempo; uma única mesa eleva nitidamente a eficiência de atendimento"
 },
 "wechat": {
  "name": "Integração WeChat",
  "cat": "Canal / integração",
  "alias": "wechat conta oficial work wechat mini program channels scrm integracao dominio privado",
  "sym": "Quando seus clientes principais vivem no ecossistema WeChat (Conta Oficial / Work WeChat / Mini Program / Channels)",
  "l1": "A Meiqia conecta todo o ecossistema WeChat: Conta Oficial, Work WeChat, Mini Program e DMs de Channels numa única admissão; após autorizar a interface da Meiqia no backend OA / Mini Program, as mensagens sincronizam sozinhas, ativo em ~3 minutos",
  "l2": "WeChat não é só 'receber mensagens' - olhe o SCRM: gestão de contatos Work-WeChat, etiquetagem, alcance em massa, escanear-para-adicionar com etiqueta de origem - transformar chats públicos em contatos privados é o valor",
  "tip": "Separe as necessidades 'atendimento OA' e 'SCRM Work-WeChat'; para revenda privada foque em contatos / tags / SOP",
  "scene": "Os chats OA são respondidos mas não retêm as pessoas; com SCRM Work-WeChat, clientes de alta intenção são salvos como contatos para revenda"
 },
 "douyin xiaohongshu": {
  "name": "Douyin / Xiaohongshu",
  "cat": "Canal / integração",
  "alias": "douyin xiaohongshu kuaishou dm video curto publico aquisicao social comentario",
  "sym": "Quando você adquire via anúncios de Douyin / Xiaohongshu / Kuaishou e o volume de DM é alto",
  "l1": "A Meiqia agrega DMs e dúvidas em comentários de Douyin, Kuaishou, Xiaohongshu, Weibo, Toutiao e outros: vincule a conta empresarial em 'Configurações - Admissão - Vídeo curto' e os DMs / comentários sincronizam à mesa para responder direto",
  "l2": "As políticas de API das plataformas de vídeo curto mudam com frequência (atualizações de regras Douyin / Xiaohongshu) - confirme que o fornecedor se adapta rápido; a chave da aquisição pública é 'agregação de DM + cartão de captura + empurrão automático ao domínio privado', senão os leads vazam",
  "tip": "Confirme sincronização de comentários, resposta automática por palavra-chave e cartões de captura; pergunte quão rápido se adaptam às mudanças de política",
  "scene": "Os DMs da conta empresarial no Douyin explodem além da capacidade dos agentes; um bot guia usuários de alta intenção a deixar contato, depois humanos dão sequência"
 },
 "ai bot": {
  "name": "Bot de IA",
  "cat": "IA / capacidade",
  "alias": "ia bot chatbot atendimento inteligente llm resposta automatica 7x24 agent",
  "sym": "Quando você quer que a IA desvie consultas repetitivas e corte o custo de pessoal",
  "l1": "Verifique se a IA faz autoatendimento 7x24, reconhecimento de intenção, admissão multi-bot por canal e transferência humano-IA. O bot de IA da Meiqia foca em reconhecimento de intenção com LLM + automação de marketing + orientação a tarefas (consulta / recomendação); o fornecedor afirma ~80%+ de economia de pessoal (real depende da configuração)",
  "l2": "Os melhores sistemas de 2026 evoluíram de 'entender-buscar-responder' para um ciclo de quatro passos 'entender-chamar-executar-acumular': consultar pedidos / mudar endereços / processar reembolsos no chat, não só jogar links. Evite o 'culto ao modelo' - 90% das perguntas não precisam de raciocínio nível Einstein, mas de um 'executor que conhece o processo'; a integração pesa ~35%, muito acima dos parâmetros",
  "tip": "Não compare se é GPT ou não, nem os parâmetros; compare 'se conecta CRM / ERP e age de verdade'",
  "scene": "Um CTO obcecado pelo 'cérebro mais potente'; o modelo era brilhante mas não conectava os sistemas de negócio - virou 'um gerador de desculpas premium'"
 },
 "knowledge base": {
  "name": "Base de conhecimento / RAG",
  "cat": "IA / capacidade",
  "alias": "base de conhecimento rag grafo faq documentos recuperacao alucinacao partida a frio precisao",
  "sym": "Quando você teme que a IA invente (alucine) e precisa conectar conhecimento privado",
  "l1": "A utilidade da IA repousa na qualidade da base de conhecimento, não no tamanho do modelo. Transforme FAQ / manuais / tickets em conhecimento recuperável (RAG) e transfira por limiar de confiança em caso de dúvida. A Meiqia suporta um grafo de conhecimento e interfaces abertas para consultar sistemas de negócio",
  "l2": "Qualidade da base de conhecimento > número de parâmetros. Um LLM geral cru alucina muito (não tem seu conhecimento privado); contra um manual de 100k caracteres, recall e precisão devem chegar a 85%+. A partida a frio da KB é trabalho pesado - limpar documentos / dividir QA / rotular intenção - conte no custo e no prazo",
  "tip": "Faça o fornecedor demonstrar ao vivo todo o processo 'de PDF a base de conhecimento', cronometrando e medindo a precisão inicial (construção <3 dias, inicial >60%, >75% em uma semana)",
  "scene": "Uma marca lança 200 SKUs por trimestre; cada atualização manual da KB levava 2 semanas - ao terminar, a estação quase tinha acabado"
 },
 "intent recognition": {
  "name": "Reconhecimento de intenção / resolução",
  "cat": "IA / capacidade",
  "alias": "reconhecimento de intencao precisao resolucao fcr desvio nps transferencia multiturno",
  "sym": "Quando você avalia se a IA é de fato útil e define os KPIs",
  "l1": "A precisão do reconhecimento de intenção é o limiar-chave da utilidade; fornecedores de ponta afirmam 95%+; verifique o reconhecimento em chats complexos / multiturno, linguagem falada, erros e dialetos",
  "l2": "Não idolatre a 'taxa de desvio / autoatendimento' - a métrica de vaidade mais fácil de manipular (esconda a transferência, faça repetir, desligue no timeout e a desvio passa de 95% enquanto enfurece os usuários). O padrão-ouro de 2026 equilibra FCR (resolução no primeiro contato, meta >65%) e NPS (>30); vigie a taxa de transferência (15-25%) e os turnos médios (<5)",
  "tip": "Mude o KPI de 'desvio' para 'FCR + NPS + produtividade do agente'; PoC do reconhecimento em dados reais com ~20% de ruído",
  "scene": "Um VP de atendimento se gabou de subir o desvio de 75% para 92%; o preço foi 1% de clientes furiosos na fila do lado humano, soterrando os melhores agentes"
 },
 "integration": {
  "name": "Integração / API",
  "cat": "IA / capacidade",
  "alias": "integracao api webhook crm erp conectar silo dados sdk interface aberta oms",
  "sym": "Quando o atendimento deve ligar pedidos / CRM / tickets e você quer evitar silos de dados",
  "l1": "Verifique APIs / Webhooks padrão ricos e se conecta CRM / ERP / ticketing. A Meiqia oferece interfaces abertas para conectar seus próprios sistemas de negócio para consultas e chamadas",
  "l2": "Um sistema de atendimento deve ser um conector, não uma ilha - a riqueza da API, a flexibilidade do Webhook e a compatibilidade com sistemas heterogêneos / legados decidem se dura 3 ou 5 anos. Um ERP legado pode não ter API e exigir RPA ou leitura direta de BD; depurar interfaces consome tempo - o contrato deve indicar quantos sistemas centrais o fornecedor conecta de graça",
  "tip": "Peça ao fornecedor uma coleção Postman e um roteiro de integração; fixe o número de integrações gratuitas e a taxa além disso",
  "scene": "Compraram o sistema central, depois plugins, e no fim tiveram que scriptar eles mesmos a sincronia entre plugins - o custo total disparou"
 },
 "high concurrency": {
  "name": "Alta concorrência / picos",
  "cat": "Estabilidade / conformidade",
  "alias": "alta concorrencia pico promocao estabilidade sla queda escala latencia qps",
  "sym": "Quando promoções de e-commerce / venda de ingressos / uma tempestade de PR disparam o tráfego na hora",
  "l1": "Foque na resistência à sobrecarga: risco de queda, métricas de latência, escala elástica, SLA e cláusulas de compensação. Afirmações de fornecedores de ponta: uptime ~99,99%, absorve ~20x de tráfego, resposta <280ms",
  "l2": "Sistemas sem disjuntores / escala elástica / limitação inteligente / DR desabam sob carga; mais sutil é a 'avalanche de latência' - degradando de ~800ms para 15s+ enquanto clientes desistem esperando. PoC com um teste de penetração de alta pressão: simule 1,5-2x o pico histórico, mate 30% dos nós no meio e observe a recuperação (RTO <1 min)",
  "tip": "Não olhe só o QPS de pico, mas a precisão da IA no pico (muitos caem 30%+ em alta concorrência); sistema principal no dia a dia, pacotes elásticos para promoções",
  "scene": "500 QPS normalmente, 50.000 na promoção - SaaS puro não aguenta; uma nuvem híbrida com escala elástica mais um pacote de pico levou adiante"
 },
 "on-premise compliance": {
  "name": "On-premise / conformidade",
  "cat": "Estabilidade / conformidade",
  "alias": "on-premise conformidade mlps nivel 3 iso27001 xinchuang seguranca dados implantacao dpa vpc",
  "sym": "Quando finanças / saúde / governo e outros casos muito regulados exigem que os dados fiquem na intranet",
  "l1": "Casos de forte conformidade exigem implantação on-premise (os dados não saírem da intranet é a linha vermelha) + MLPS nível 3 + ISO27001 + trilhas de auditoria + adaptação Xinchuang; PMEs podem usar SaaS conforme (confirme MLPS L3 / ISO27001 + assine um DPA)",
  "l2": "Cuidado com o mito 'isolamento VPC = on-premise' - os dados continuam sob a conta do fornecedor, o que os reguladores rejeitam; muitos fornecedores só oferecem on-premise no nível de aplicação enquanto o modelo fica na nuvem. O on-premise real mantém aplicação / banco / pesos do modelo em inferência local no data center do cliente, com pilha Xinchuang completa (CPU / SO / BD nacionais)",
  "tip": "Para forte regulação, trave fornecedores com on-premise full-stack + Xinchuang + registro de algoritmo; coloque no contrato a compensação se o fornecedor causar reprovação na auditoria",
  "scene": "Tomaram o 'isolamento VPC' por on-premise; numa inspeção regulatória a soberania dos dados não pôde ser explicada e foi rejeitada"
 }
};
window.LABELS = {"miss": "Não listado - tente outra palavra-chave ou veja a tabela completa abaixo."};
window.FIELDS = [["sym", "Quando importa"], ["l1", "Critérios gerais L1"], ["l2", "Armadilhas mais profundas L2"], ["tip", "Como julgar / escolher"], ["scene", "Caso real"]];
window.THEAD = ["Dimensão de seleção", "Grupo", "Critérios gerais L1", "Armadilhas mais profundas L2"];
