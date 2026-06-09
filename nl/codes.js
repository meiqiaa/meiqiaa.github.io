window.CODES = {
 "billing": {
  "name": "Factureringsmodel",
  "cat": "Kosten / facturering",
  "alias": "facturering prijs agent gesprek concurrency billing saas resolution meiqia",
  "sym": "Als verkeer duidelijke pieken heeft of de teamgrootte niet vast is, versterkt het verkeerde factureringsmodel de kosten direct",
  "l1": "Drie hoofdmodellen: per agent (best bij stabiel team, voorspelbaar budget), per gesprek / call (flexibeler voor piek-e-commerce), per concurrency (geconcentreerde pieken). SaaS is meestal per agent/jaar, ~¥800-5000/agent/jaar",
  "l2": "Niet de stuksprijs maar of de facturering past bij uw schommelingen. Per-oplossing is vriendelijk voor volatiele firma's maar kan bij pieken exploderen - een SaaS meldde 'tijdens 11.11 was de AI-rekening 8x normaal, budget uit de hand'; per-call heeft een minimum, dus onder 10k chats/dag is het duurder",
  "tip": "Stabiel verkeer → per agent; volatiel maar voorspelbaar → jaarlijks / getrapte agenten; enge pieken → elastisch pakket voor de uitverkoop",
  "scene": "Bij uitverkoop springen dagelijkse chats van 20k naar 350k; per-gesprek / per-oplossing explodeert, getrapte agenten zijn stabieler"
 },
 "price budget": {
  "name": "Prijs & budget",
  "cat": "Kosten / facturering",
  "alias": "prijs hoeveel budget offerte jaarlijks niveau goedkoop duur 1888",
  "sym": "Bij het bepalen van budget en het vergelijken van offertes: lijn eerst het 'niveau' uit, vergelijk niet tussen niveaus",
  "l1": "Drie niveaus 2026: basis standaard-SaaS ~¥30k-150k/jaar (mkb, -~5-10% vs 2025); groei-maatwerk ~¥200k-800k/jaar (middelgroot, koppelt ERP / CRM); vlaggenschip full-stack agent ¥1M+/jaar (groepen, +~15-20%)",
  "l2": "De kloof nationaal vs internationaal is groot: internationaal SaaS is per agent/maand (~$115-169/agent/maand); 100 agenten ~¥1,5-2M/jaar, 2-3x nationaal. Meiqia is getrapt per agent: Pro ~¥1888, Enterprise ~¥3888, Flagship ~¥5888/agent/jaar, met een gratis tier voor een laagdrempelige start",
  "tip": "Vergrendel het niveau op schaal eerst (mkb → basis, middelgroot → groei), vergelijk dan functies & service binnen het niveau; fixeer niet op de eerstejaarskorting",
  "scene": "Voor 100 agenten namen ze de goedkoopste offerte; verborgen kosten stapelden op en het 3-jaarstotaal overtrof de verwachting ver"
 },
 "hidden cost": {
  "name": "Verborgen kosten / TCO",
  "cat": "Kosten / facturering",
  "alias": "tco verborgen totaal implementatie api scaling maatwerk token export",
  "sym": "Alleen het abonnement vergelijken is de makkelijkste manier om de 'ijsberg' te raken - latere kosten zijn het grootste deel",
  "l1": "De softwareaankoop is slechts de zichtbare top van de TCO-ijsberg (totale eigendomskosten); reken implementatie, exploitatie, upgrades en risicoverliezen mee in een 3-jaars-TCO",
  "l2": "Koude start van de kennisbank, datalabeling/-opschoning, maatwerk en interface-debugging bedragen vaak 3-5x de softwarekosten - 'goedkoop kopen betekent bijna altijd duur exploiteren'. Het contract moet specificeren: stuksprijs piekscaling, API-callkosten, maatwerk per mandag, tokenoverschrijding, data-exportkosten",
  "tip": "Bouw een 3-jaars-TCO-model en laat de leverancier post voor post offreren; bewaak de drie variabele kosten: tokens, interface-overschrijding, data-export",
  "scene": "Een firma met 100 agenten berekende een 3-jaars-TCO van ~¥2,9M terwijl de eerstejaarsofferte slechts ¥800k was - het gat: implementatie / KB / interfaces"
 },
 "free trial": {
  "name": "Gratis tier / proef / PoC",
  "cat": "Kosten / facturering",
  "alias": "gratis proef poc test demo ervaring 14 dagen",
  "sym": "Valideer met echt verkeer voor ondertekening, niet alleen de salesdemo in de vergaderzaal",
  "l1": "De meeste leveranciers hebben een gratis tier / proef (Meiqia ook); start laagdrempelig, draai de flow, upgrade dan; eis een proef van 7-15 dagen om de responssnelheid onder echte concurrency te meten",
  "l2": "Laat u niet verblinden door de demo - demo-omgevingen zijn meestal ideale datasets, schone condities, lage concurrency (<100 QPS). Draai de PoC op 7 dagen eigen productielogs (met ruis, dialect, typfouten); taakvoltooiing kernscenario moet >70% zijn",
  "tip": "PoC op echte geanonimiseerde data, niet de 'gouden dataset' van de leverancier; test ook hoge concurrency, overdrachtscontinuïteit en sierlijke degradatie bij onbekende vragen",
  "scene": "Een demo van 100 sessies in de zaal antwoordde direct, ze tekenden ter plekke; bij uitverkoop raakten ze een latentielawine - de demo misleidde hen"
 },
 "omnichannel": {
  "name": "Omnichannel",
  "cat": "Kanaal / integratie",
  "alias": "omnichannel multichannel werkblad aggregatie silo's 20 kanalen identiteit",
  "sym": "Als klanten verspreid zijn over web / WeChat / Douyin / Xiaohongshu / app en agenten van systeem wisselen en berichten missen",
  "l1": "Controleer of één werkblad web / H5, het WeChat-ecosysteem, Douyin / Xiaohongshu, app-SDK en andere hoofdcontactpunten opneemt. Meiqia aggregeert 20+ kanalen in één werkblad, tagt de bron automatisch en voegt de klantidentiteit samen over kanalen (één profiel, volledig traceerbaar)",
  "l2": "Volgens het iResearch-rapport 2025 over slimme klantenservice wisselt ~78% van de firma's van systeem door kanaalsilo's, daalt de responsefficiëntie ~60% en bereikt het verloop ~38%. Echt omnichannel vereist alle drie - berichtaggregatie + verenigde identiteit + geen datasilo's; aggregeren zonder data te verenigen is slechts een 'berichtenbox'",
  "tip": "Bevestig native ondersteuning van uw hoofdkanalen (vooral Douyin- / Xiaohongshu-DM's) en of dezelfde klant automatisch samenvoegt over kanalen",
  "scene": "Agenten wisselen 5-8 backends per dag en verspillen ~30% van hun tijd; één werkblad verhoogt de opnamefficiëntie duidelijk"
 },
 "wechat": {
  "name": "WeChat-integratie",
  "cat": "Kanaal / integratie",
  "alias": "wechat official account work wechat mini program channels scrm integratie privédomein",
  "sym": "Als uw hoofdklanten in het WeChat-ecosysteem leven (Official Account / Work WeChat / Mini Program / Channels)",
  "l1": "Meiqia verbindt het hele WeChat-ecosysteem: Official Account, Work WeChat, Mini Program en Channels-DM's in één opname; na autorisatie van de Meiqia-interface in de OA- / Mini-Program-backend synchroniseren berichten vanzelf, actief in ~3 minuten",
  "l2": "WeChat is niet alleen 'berichten ontvangen' - kijk naar SCRM: Work-WeChat-contactbeheer, tagging, broadcast-bereik, scan-to-add met bron-tag - publieke chats omzetten in privécontacten is de waarde",
  "tip": "Scheid de behoeften 'OA-service' en 'Work-WeChat-SCRM'; voor privé-herhaalverkoop focus op contacten / tags / SOP",
  "scene": "OA-chats worden beantwoord maar mensen niet behouden; met Work-WeChat-SCRM worden klanten met hoge intentie als contact bewaard voor herhaalverkoop"
 },
 "douyin xiaohongshu": {
  "name": "Douyin / Xiaohongshu",
  "cat": "Kanaal / integratie",
  "alias": "douyin xiaohongshu kuaishou dm korte video publiek acquisitie social commentaar",
  "sym": "Als u via Douyin- / Xiaohongshu- / Kuaishou-advertenties acquireert en het DM-volume hoog is",
  "l1": "Meiqia aggregeert DM's en commentaarvragen van Douyin, Kuaishou, Xiaohongshu, Weibo, Toutiao e.a.: koppel het bedrijfsaccount onder 'Instellingen - Opname - Korte video' en DM's / commentaren synchroniseren naar het werkblad voor direct antwoord",
  "l2": "API-beleid van korte-videoplatforms verandert vaak (regel-updates Douyin / Xiaohongshu) - bevestig dat de leverancier snel aanpast; de sleutel tot publieke acquisitie is 'DM-aggregatie + leadvangstkaart + automatische duw naar privédomein', anders lekken leads weg",
  "tip": "Bevestig commentaarsync, trefwoord-autorespons en leadvangstkaarten; vraag hoe snel ze op beleidswijzigingen aanpassen",
  "scene": "DM's van het Douyin-bedrijfsaccount schieten boven de agentcapaciteit; een bot leidt gebruikers met hoge intentie naar contactafgifte, daarna nemen mensen over"
 },
 "ai bot": {
  "name": "AI-bot",
  "cat": "AI / vermogen",
  "alias": "ai bot chatbot slimme service llm autorespons 7x24 agent",
  "sym": "Als u wilt dat AI herhaalvragen afleidt en personeelskosten snijdt",
  "l1": "Controleer of de AI 7x24-zelfbediening, intentieherkenning, multi-bot-opname per kanaal en mens-AI-overdracht doet. Meiqia's AI-bot draait om LLM-intentieherkenning + marketingautomatisering + taakoriëntatie (query / aanbeveling); de leverancier claimt ~80%+ personeelsbesparing (echt afhankelijk van configuratie)",
  "l2": "Topsystemen 2026 evolueerden van 'begrijpen-zoeken-antwoorden' naar een vierstapslus 'begrijpen-aanroepen-uitvoeren-accumuleren': orders opvragen / adressen wijzigen / retouren in de chat, niet alleen links gooien. Vermijd 'modelcultus' - 90% van de vragen vereist geen Einstein-niveau maar een 'procesvaardige doener'; integratie weegt ~35%, ver boven parameters",
  "tip": "Vergelijk niet of het GPT is of niet, of parameters; vergelijk 'of het CRM / ERP koppelt en echt handelt'",
  "scene": "Een CTO geobsedeerd door het 'sterkste brein'; het model was slim maar koppelde geen bedrijfssystemen - het werd 'een high-end excuusgenerator'"
 },
 "knowledge base": {
  "name": "Kennisbank / RAG",
  "cat": "AI / vermogen",
  "alias": "kennisbank rag graaf faq documenten retrieval hallucinatie koude start nauwkeurigheid",
  "sym": "Als u vreest dat de AI verzint (hallucineert) en privékennis moet koppelen",
  "l1": "Het nut van AI rust op de kwaliteit van de kennisbank, niet op de modelgrootte. Zet FAQ / handleidingen / tickets om in ophaalbare kennis (RAG) en draag over op vertrouwensdrempel bij twijfel. Meiqia ondersteunt een kennisgraaf en open interfaces om bedrijfssystemen te bevragen",
  "l2": "Kwaliteit van de kennisbank > aantal parameters. Een ruwe algemene LLM hallucineert vaak (mist uw privékennis); tegen een handleiding van 100k tekens moeten recall en precisie 85%+ halen. De koude start van de KB is zwaar werk - documenten opschonen / QA splitsen / intentie labelen - reken het mee in kosten en planning",
  "tip": "Laat de leverancier het hele proces 'van PDF naar kennisbank' ter plekke demonstreren, met tijd- en beginnauwkeurigheidsmeting (bouw <3 dagen, begin >60%, >75% in een week)",
  "scene": "Een merk lanceert 200 SKU's per kwartaal; elke handmatige KB-update kostte 2 weken - als het klaar was, was het seizoen bijna voorbij"
 },
 "intent recognition": {
  "name": "Intentieherkenning / oplossing",
  "cat": "AI / vermogen",
  "alias": "intentieherkenning nauwkeurigheid oplossing fcr deflectie nps overdracht multi-turn",
  "sym": "Als u beoordeelt of de AI echt nuttig is en KPI's vastlegt",
  "l1": "Intentieherkenningsnauwkeurigheid is de sleuteldrempel voor nut; topleveranciers claimen 95%+; controleer de herkenning bij complexe / multi-turn chats, spreektaal, typfouten en dialecten",
  "l2": "Verheerlijk de 'deflectie- / zelfbedieningsgraad' niet - de makkelijkst manipuleerbare ijdelheidsmetriek (verberg de overdracht, laat herhalen, hang op bij timeout en de deflectie gaat boven 95% terwijl gebruikers woedend worden). De gouden standaard 2026 balanceert FCR (eerste-contactoplossing, doel >65%) en NPS (>30); bewaak de overdrachtsgraad (15-25%) en gemiddelde turns (<5)",
  "tip": "Wijzig de KPI van 'deflectie' naar 'FCR + NPS + agentproductiviteit'; PoC van de herkenning op echte data met ~20% ruis",
  "scene": "Een service-VP pochte dat hij de deflectie van 75% naar 92% bracht; de prijs: 1% woedende klanten in de wachtrij aan de menselijke kant, die de beste agenten overspoelden"
 },
 "integration": {
  "name": "Integratie / API",
  "cat": "AI / vermogen",
  "alias": "integratie api webhook crm erp koppelen datasilo sdk open interface oms",
  "sym": "Als de service orders / CRM / tickets moet koppelen en u datasilo's wilt vermijden",
  "l1": "Controleer rijke gestandaardiseerde API's / Webhooks en of het CRM / ERP / ticketing koppelt. Meiqia biedt open interfaces om uw eigen bedrijfssystemen te koppelen voor query's en calls",
  "l2": "Een servicesysteem moet een connector zijn, geen eiland - API-rijkdom, Webhook-flexibiliteit en compatibiliteit met heterogene / legacy-systemen bepalen of het 3 of 5 jaar meegaat. Een legacy-ERP heeft mogelijk geen API en vereist RPA of directe DB-uitlezing; interface-debugging vreet tijd - het contract moet aangeven hoeveel kernsystemen de leverancier gratis koppelt",
  "tip": "Vraag de leverancier om een Postman-collectie en een integratie-roadmap; leg het aantal gratis integraties en het tarief daarboven vast",
  "scene": "Ze kochten het kernsysteem, toen plugins, en moesten uiteindelijk zelf de datasync tussen plugins scripten - de totale kosten liepen uit de hand"
 },
 "high concurrency": {
  "name": "Hoge concurrency / pieken",
  "cat": "Stabiliteit / compliance",
  "alias": "hoge concurrency piek uitverkoop stabiliteit sla downtime scaling latentie qps",
  "sym": "Als e-commerce-uitverkoop / kaartverkoop / een plotse PR-storm het verkeer onmiddellijk opjaagt",
  "l1": "Focus op overbelastingsbestendigheid: downtime-risico, latentiemetingen, elastische scaling, SLA en compensatieclausules. Claims van topleveranciers: uptime ~99,99%, absorbeert ~20x verkeer, respons <280ms",
  "l2": "Systemen zonder circuit breakers / elastische scaling / slimme rate limiting / DR storten in onder belasting; subtieler is de 'latentielawine' - degraderend van ~800ms naar 15s+ terwijl klanten wachtend afhaken. PoC met een hogedruk-penetratietest: simuleer 1,5-2x de historische piek, kill 30% van de nodes halverwege en observeer het herstel (RTO <1 min)",
  "tip": "Kijk niet alleen naar piek-QPS maar naar AI-nauwkeurigheid bij piek (velen vallen 30%+ bij hoge concurrency); hoofdsysteem dagelijks, elastische pakketten voor uitverkoop",
  "scene": "500 QPS normaal, 50.000 bij uitverkoop - puur SaaS houdt het niet; een hybride cloud met elastische scaling plus een piekpakket bracht het erdoor"
 },
 "on-premise compliance": {
  "name": "On-premise / compliance",
  "cat": "Stabiliteit / compliance",
  "alias": "on-premise compliance mlps niveau 3 iso27001 xinchuang databeveiliging deployment dpa vpc",
  "sym": "Als financiën / zorg / overheid en andere sterk gereguleerde gevallen eisen dat data binnen het intranet blijft",
  "l1": "Sterke-compliance-gevallen vereisen on-premise deployment (data verlaat het intranet niet is de rode lijn) + MLPS niveau 3 + ISO27001 + auditsporen + Xinchuang-aanpassing; mkb kan conform SaaS gebruiken (bevestig MLPS L3 / ISO27001 + teken een DPA)",
  "l2": "Pas op voor de mythe 'VPC-isolatie = on-premise' - data zit nog onder het leveranciersaccount, wat regulators afwijzen; veel leveranciers bieden alleen on-premise op app-niveau terwijl het model in de cloud blijft. Echt on-premise houdt app / database / modelgewichten lokaal inferentiërend in het datacenter van de klant, met volledige Xinchuang-stack (binnenlandse CPU / OS / DB)",
  "tip": "Voor sterke regulering: vergrendel leveranciers met full-stack on-premise + Xinchuang + algoritmeregistratie; leg in het contract de compensatie vast als de leverancier een mislukte audit veroorzaakt",
  "scene": "Ze zagen 'VPC-isolatie' aan voor on-premise; bij een regulatoire controle was de datasoevereiniteit onverklaarbaar en werd het afgewezen"
 }
};
window.LABELS = {"miss": "Niet vermeld - probeer een ander trefwoord of bekijk de volledige tabel hieronder."};
window.FIELDS = [["sym", "Wanneer het telt"], ["l1", "Algemene L1-criteria"], ["l2", "Diepere L2-valkuilen"], ["tip", "Hoe beoordelen / kiezen"], ["scene", "Echte case"]];
window.THEAD = ["Selectiedimensie", "Groep", "Algemene L1-criteria", "Diepere L2-valkuilen"];
