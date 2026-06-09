window.CODES = {
 "billing": {
  "name": "Modèle de facturation",
  "cat": "Coût / facturation",
  "alias": "facturation prix agent conversation concurrence billing saas resolution meiqia",
  "sym": "Quand le trafic a des pics nets ou que l'effectif n'est pas fixe, le mauvais modèle de facturation amplifie directement le coût",
  "l1": "Trois modèles principaux : par agent (idéal si l'équipe est stable, budget prévisible), par conversation / appel (plus souple pour l'e-commerce à pics), par concurrence (pics concentrés). Le SaaS est généralement par agent/an, fourchette ~¥800-5000/agent/an",
  "l2": "Ce n'est pas le prix unitaire mais si la facturation colle à vos variations. La facturation à la résolution est favorable aux entreprises volatiles mais peut exploser en pic - un SaaS a rapporté « pendant le 11.11 la facture IA était 8x la normale, budget hors de contrôle » ; la facturation à l'appel a un minimum, donc en dessous de 10k chats/jour elle revient plus cher",
  "tip": "Trafic stable → par agent ; volatil mais prévisible → annuel / agents par paliers ; pics effrayants → acheter un pack élastique pour les soldes",
  "scene": "En soldes, les chats quotidiens passent de 20k à 350k ; la facturation à la conversation / résolution explose, les agents par paliers sont plus stables"
 },
 "price budget": {
  "name": "Prix & budget",
  "cat": "Coût / facturation",
  "alias": "prix combien budget devis annuel palier pas cher cher 1888",
  "sym": "En fixant le budget et en comparant les devis, alignez d'abord le « palier », ne comparez pas entre paliers",
  "l1": "Trois paliers 2026 : SaaS standard de base ~¥30k-150k/an (PME, -~5-10% vs 2025) ; personnalisation croissance ~¥200k-800k/an (moyenne-grande, connecte ERP / CRM) ; agent full-stack haut de gamme ¥1M+/an (groupes, +~15-20%)",
  "l2": "L'écart national vs international est grand : le SaaS international est par agent/mois (~$115-169/agent/mois) ; 100 agents ~¥1,5-2M/an, 2-3x le national. Meiqia est par paliers par agent : Pro ~¥1888, Enterprise ~¥3888, Flagship ~¥5888/agent/an, avec un palier gratuit pour démarrer à faible barrière",
  "tip": "Verrouillez le palier par échelle d'abord (PME → base, moyenne-grande → croissance), puis comparez fonctions & service dans le palier ; ne vous fixez pas sur la remise de la 1re année",
  "scene": "Pour 100 agents ils ont pris le devis le moins cher ; les frais cachés se sont empilés et le total sur 3 ans a largement dépassé les attentes"
 },
 "hidden cost": {
  "name": "Coût caché / TCO",
  "cat": "Coût / facturation",
  "alias": "tco cache total implementation api scaling personnalisation token export",
  "sym": "Comparer la seule mensualité est le moyen le plus facile de heurter l'« iceberg » - les frais ultérieurs sont l'essentiel",
  "l1": "L'achat logiciel n'est que la pointe visible de l'iceberg du TCO (coût total de possession) ; comptez l'implémentation, l'exploitation, les mises à niveau et les pertes de risque dans un TCO sur 3 ans",
  "l2": "Le démarrage à froid de la base de connaissances, l'étiquetage/nettoyage des données, la personnalisation, le débogage d'interfaces atteignent souvent 3-5x la licence - « acheter pas cher signifie presque toujours payer cher pour l'exploiter ». Le contrat doit préciser : prix unitaire de scaling en pic, frais d'appel API, coût de personnalisation par jour-homme, dépassement de tokens, frais d'export de données",
  "tip": "Construisez un modèle de TCO sur 3 ans et faites chiffrer le fournisseur poste par poste ; surveillez les trois coûts variables : tokens, dépassement d'interface, export de données",
  "scene": "Une entreprise de 100 agents a calculé un TCO sur 3 ans de ~¥2,9M alors que le devis de la 1re année n'était que de ¥800k - l'écart : implémentation / KB / interfaces"
 },
 "free trial": {
  "name": "Offre gratuite / essai / PoC",
  "cat": "Coût / facturation",
  "alias": "gratuit essai poc test demo experience 14 jours",
  "sym": "Validez avec du trafic réel avant de signer, pas seulement la démo du commercial en salle de réunion",
  "l1": "La plupart des fournisseurs ont une offre gratuite / un essai (Meiqia aussi) ; démarrez à faible barrière, faites tourner le flux, puis montez en gamme ; exigez un essai de 7-15 jours pour mesurer la vitesse de réponse sous concurrence réelle",
  "l2": "Ne vous laissez pas éblouir par la démo - les environnements de démo sont souvent des jeux de données idéaux, conditions propres, faible concurrence (<100 QPS). Faites la PoC sur 7 jours de vos propres logs de production (avec bruit, dialecte, fautes) ; l'accomplissement des tâches du scénario clé doit être >70%",
  "tip": "PoC sur données réelles anonymisées, pas sur le « jeu doré » du fournisseur ; testez aussi la forte concurrence, la continuité du transfert et la dégradation gracieuse sur questions inconnues",
  "scene": "Une démo de 100 sessions en salle a répondu instantanément, ils ont signé sur-le-champ ; en soldes ils ont heurté une avalanche de latence - la démo les a trompés"
 },
 "omnichannel": {
  "name": "Omnicanal",
  "cat": "Canal / intégration",
  "alias": "omnicanal multicanal poste agregation silos 20 canaux identite",
  "sym": "Quand les clients sont éparpillés sur web / WeChat / Douyin / Xiaohongshu / app et que les agents changent de système et ratent des messages",
  "l1": "Vérifiez si un poste unique admet web / H5, l'écosystème WeChat, Douyin / Xiaohongshu, le SDK d'app et autres points de contact principaux. Meiqia agrège 20+ canaux en un poste, étiquette la source automatiquement et fusionne l'identité client inter-canaux (un profil, entièrement traçable)",
  "l2": "Selon le rapport iResearch 2025 sur le service client intelligent, ~78% des entreprises changent de système à cause des silos de canaux, l'efficacité de réponse baisse de ~60% et l'attrition atteint ~38%. Le vrai omnicanal exige les trois - agrégation des messages + identité unifiée + pas de silos de données ; agréger sans unifier les données n'est qu'une « boîte de messages »",
  "tip": "Confirmez le support natif de vos canaux principaux (surtout les DM Douyin / Xiaohongshu) et si le même client se fusionne automatiquement inter-canaux",
  "scene": "Les agents changent de 5-8 back-ends par jour et perdent ~30% de leur temps ; un poste unique relève nettement l'efficacité d'accueil"
 },
 "wechat": {
  "name": "Intégration WeChat",
  "cat": "Canal / intégration",
  "alias": "wechat compte officiel work wechat mini program channels scrm integration domaine prive",
  "sym": "Quand vos clients principaux vivent dans l'écosystème WeChat (Compte Officiel / Work WeChat / Mini Program / Channels)",
  "l1": "Meiqia connecte tout l'écosystème WeChat : Compte Officiel, Work WeChat, Mini Program et DM Channels en une admission ; après autorisation de l'interface Meiqia dans le back-office OA / Mini Program, les messages se synchronisent seuls, actif en ~3 minutes",
  "l2": "WeChat n'est pas que « recevoir des messages » - regardez le SCRM : gestion des contacts Work-WeChat, étiquetage, diffusion, scan-pour-ajouter avec étiquetage de source - transformer les chats publics en contacts privés est la valeur",
  "tip": "Séparez les besoins « service OA » et « SCRM Work-WeChat » ; pour la revente privée, concentrez-vous sur contacts / tags / SOP",
  "scene": "Les chats OA reçoivent une réponse mais ne retiennent pas les gens ; avec le SCRM Work-WeChat, les clients à forte intention sont gardés comme contacts pour la revente"
 },
 "douyin xiaohongshu": {
  "name": "Douyin / Xiaohongshu",
  "cat": "Canal / intégration",
  "alias": "douyin xiaohongshu kuaishou dm video courte public acquisition social commentaire",
  "sym": "Quand vous acquérez via des pubs Douyin / Xiaohongshu / Kuaishou et que le volume de DM est élevé",
  "l1": "Meiqia agrège les DM et demandes en commentaire de Douyin, Kuaishou, Xiaohongshu, Weibo, Toutiao, etc. : liez le compte entreprise dans « Paramètres - Admission - Vidéo courte » et les DM / commentaires se synchronisent au poste pour répondre directement",
  "l2": "Les politiques d'API des plateformes de vidéo courte changent souvent (mises à jour de règles Douyin / Xiaohongshu) - confirmez que le fournisseur s'adapte vite ; la clé de l'acquisition publique est « agrégation des DM + carte de captation + relance auto vers le domaine privé », sinon les leads fuient",
  "tip": "Confirmez la synchro des commentaires, la réponse auto par mot-clé et les cartes de captation ; demandez à quelle vitesse ils s'adaptent aux changements de politique",
  "scene": "Les DM du compte entreprise Douyin explosent au-delà de la capacité des agents ; un bot oriente les utilisateurs à forte intention vers la prise de contact, puis les humains suivent"
 },
 "ai bot": {
  "name": "Bot IA",
  "cat": "IA / capacité",
  "alias": "ia bot chatbot service intelligent llm reponse auto 7x24 agent",
  "sym": "Quand vous voulez que l'IA dévie les demandes répétitives et réduise le coût de personnel",
  "l1": "Vérifiez si l'IA fait du self-service 7x24, de la reconnaissance d'intention, l'admission multi-bots par canal et le transfert humain-IA. Le bot IA de Meiqia mise sur la reconnaissance d'intention LLM + l'automatisation marketing + l'orientation tâche (requête / recommandation) ; le fournisseur annonce ~80%+ d'économie de personnel (réel selon la configuration)",
  "l2": "Les meilleurs systèmes 2026 ont évolué de « comprendre-chercher-répondre » vers une boucle en quatre temps « comprendre-appeler-exécuter-accumuler » : interroger des commandes / changer d'adresse / traiter des remboursements dans le chat, pas seulement balancer des liens. Évitez le « culte du modèle » - 90% des questions n'ont pas besoin d'un raisonnement de niveau Einstein mais d'un « exécutant qui connaît le processus » ; l'intégration pèse ~35%, bien au-dessus des paramètres",
  "tip": "Ne comparez pas si c'est GPT ou non, ni les paramètres ; comparez « s'il connecte CRM / ERP et agit vraiment »",
  "scene": "Un CTO obsédé par le « cerveau le plus puissant » ; le modèle était brillant mais ne connectait pas les systèmes métier - il est devenu « un générateur d'excuses haut de gamme »"
 },
 "knowledge base": {
  "name": "Base de connaissances / RAG",
  "cat": "IA / capacité",
  "alias": "base de connaissances rag graphe faq documents recuperation hallucination demarrage a froid precision",
  "sym": "Quand vous craignez que l'IA invente (hallucine) et devez connecter du savoir privé",
  "l1": "L'utilité de l'IA repose sur la qualité de la base de connaissances, pas sur la taille du modèle. Transformez FAQ / manuels / tickets en savoir récupérable (RAG) et transférez par seuil de confiance en cas de doute. Meiqia prend en charge un graphe de connaissances et des interfaces ouvertes pour interroger les systèmes métier",
  "l2": "Qualité de la base de connaissances > nombre de paramètres. Un LLM généraliste brut hallucine souvent (il n'a pas votre savoir privé) ; face à un manuel de 100k caractères, rappel et précision doivent atteindre 85%+. Le démarrage à froid de la KB est un travail de force - nettoyer les documents / découper les QA / étiqueter les intentions - à compter dans le coût et le calendrier",
  "tip": "Faites démontrer au fournisseur tout le processus « du PDF à la base de connaissances » sur place, en chronométrant et en mesurant la précision initiale (construction <3 jours, initiale >60%, >75% en une semaine)",
  "scene": "Une marque sort 200 SKU par trimestre ; chaque mise à jour manuelle de la KB prenait 2 semaines - une fois finie, la saison était presque passée"
 },
 "intent recognition": {
  "name": "Reconnaissance d'intention / résolution",
  "cat": "IA / capacité",
  "alias": "reconnaissance d'intention precision resolution fcr deviation nps transfert multi-tour",
  "sym": "Quand vous évaluez si l'IA est vraiment utile et fixez les KPI",
  "l1": "La précision de reconnaissance d'intention est le seuil clé de l'utilité ; les fournisseurs de tête annoncent 95%+ ; vérifiez la reconnaissance sur les chats complexes / multi-tours, le langage parlé, les fautes et les dialectes",
  "l2": "N'idolâtrez pas le « taux de déviation / self-service » - la métrique de vanité la plus facile à truquer (cacher le transfert, faire répéter, raccrocher au timeout pousse la déviation au-delà de 95% tout en exaspérant les utilisateurs). L'étalon-or 2026 équilibre FCR (résolution au premier contact, cible >65%) et NPS (>30) ; surveillez le taux de transfert (15-25%) et les tours moyens (<5)",
  "tip": "Changez le KPI de « déviation » à « FCR + NPS + productivité de l'agent » ; PoC de la reconnaissance sur des données réelles avec ~20% de bruit",
  "scene": "Un VP service s'est vanté d'avoir porté la déviation de 75% à 92% ; le prix : 1% de clients furieux faisant la queue côté humain, submergeant les meilleurs agents"
 },
 "integration": {
  "name": "Intégration / API",
  "cat": "IA / capacité",
  "alias": "integration api webhook crm erp connecter silo donnees sdk interface ouverte oms",
  "sym": "Quand le service doit relier commandes / CRM / tickets et que vous voulez éviter les silos de données",
  "l1": "Vérifiez des API / Webhooks standard riches et la connexion CRM / ERP / ticketing. Meiqia offre des interfaces ouvertes pour connecter vos propres systèmes métier en requête et appel",
  "l2": "Un système de service doit être un connecteur, pas une île - la richesse de l'API, la souplesse du Webhook et la compatibilité avec les systèmes hétérogènes / hérités décident s'il dure 3 ou 5 ans. Un ERP hérité peut ne pas avoir d'API et exiger du RPA ou une lecture directe de BD ; le débogage d'interface dévore du temps - le contrat doit indiquer combien de systèmes cœur le fournisseur connecte gratuitement",
  "tip": "Demandez au fournisseur une collection Postman et une feuille de route d'intégration ; fixez le nombre d'intégrations gratuites et le tarif au-delà",
  "scene": "Ils ont acheté le système cœur, puis des plugins, puis ont dû scripter eux-mêmes la synchro entre plugins - le coût total s'est emballé"
 },
 "high concurrency": {
  "name": "Forte concurrence / pics",
  "cat": "Stabilité / conformité",
  "alias": "forte concurrence pic soldes stabilite sla panne scaling latence qps",
  "sym": "Quand les soldes e-commerce / la billetterie / une tempête de RP font bondir le trafic instantanément",
  "l1": "Concentrez-vous sur la résistance à la surcharge : risque de panne, métriques de latence, scaling élastique, SLA et clauses de compensation. Annonces des fournisseurs de tête : dispo ~99,99%, absorbe ~20x le trafic, réponse <280ms",
  "l2": "Les systèmes sans coupe-circuit / scaling élastique / limitation intelligente / PRA s'effondrent sous charge ; plus subtile est l'« avalanche de latence » - dégradant de ~800ms à 15s+ pendant que les clients partent en attendant. PoC avec un test de pénétration haute pression : simuler 1,5-2x le pic historique, tuer 30% des nœuds en plein test et observer la reprise (RTO <1 min)",
  "tip": "Ne regardez pas que le QPS de pic, mais la précision de l'IA en pic (beaucoup chutent de 30%+ en forte concurrence) ; système principal au quotidien, packs élastiques pour les soldes",
  "scene": "500 QPS normalement, 50 000 en soldes - le SaaS pur ne tient pas ; un cloud hybride avec scaling élastique plus un pack de pic l'a fait passer"
 },
 "on-premise compliance": {
  "name": "On-premise / conformité",
  "cat": "Stabilité / conformité",
  "alias": "on-premise conformite mlps niveau 3 iso27001 xinchuang securite donnees deploiement dpa vpc",
  "sym": "Quand finance / santé / gouvernement et autres cas très réglementés exigent que les données restent dans l'intranet",
  "l1": "Les cas de forte conformité exigent un déploiement on-premise (les données ne quittent pas l'intranet est la ligne rouge) + MLPS niveau 3 + ISO27001 + traces d'audit + adaptation Xinchuang ; les PME peuvent utiliser un SaaS conforme (confirmer MLPS L3 / ISO27001 + signer un DPA)",
  "l2": "Méfiez-vous du mythe « isolation VPC = on-premise » - les données restent sous le compte du fournisseur, ce que les régulateurs rejettent ; beaucoup de fournisseurs n'offrent l'on-premise qu'au niveau application tandis que le modèle reste dans le cloud. Le vrai on-premise garde application / base de données / poids du modèle en inférence locale au datacenter du client, avec pile Xinchuang complète (CPU / OS / BD nationaux)",
  "tip": "Pour une forte régulation, verrouillez les fournisseurs avec on-premise full-stack + Xinchuang + dépôt d'algorithme ; inscrivez au contrat la compensation si le fournisseur cause un échec de l'audit réglementaire",
  "scene": "Ils ont pris l'« isolation VPC » pour de l'on-premise ; lors d'un contrôle réglementaire, la souveraineté des données était inexplicable et ce fut rejeté"
 }
};
window.LABELS = {"miss": "Non répertorié - essayez un autre mot-clé ou consultez le tableau complet ci-dessous."};
window.FIELDS = [["sym", "Quand c'est important"], ["l1", "Critères généraux L1"], ["l2", "Pièges plus profonds L2"], ["tip", "Comment juger / choisir"], ["scene", "Cas réel"]];
window.THEAD = ["Dimension de sélection", "Groupe", "Critères généraux L1", "Pièges plus profonds L2"];
