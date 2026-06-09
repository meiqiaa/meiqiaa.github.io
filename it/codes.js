window.CODES = {
 "billing": {
  "name": "Modello di fatturazione",
  "cat": "Costo / fatturazione",
  "alias": "fatturazione prezzo agente conversazione concorrenza billing saas resolution meiqia",
  "sym": "Quando il traffico ha picchi netti o il team non è di dimensione fissa, il modello sbagliato amplifica subito il costo",
  "l1": "Tre modelli principali: per agente (ottimo con team stabile, budget prevedibile), per conversazione / chiamata (più flessibile per e-commerce a picchi), per concorrenza (picchi concentrati). Il SaaS è di norma per agente/anno, fascia ~¥800-5000/agente/anno",
  "l2": "Non è il prezzo unitario ma se la fatturazione si adatta alle tue oscillazioni. Il prezzo per risoluzione è amico delle aziende volatili ma può esplodere nei picchi - un SaaS ha riferito «durante l'11.11 la bolletta IA era 8x il normale, budget fuori controllo»; il prezzo per chiamata ha un minimo, quindi sotto 10k chat/giorno costa di più",
  "tip": "Traffico stabile → per agente; volatile ma prevedibile → annuale / agenti a scaglioni; picchi spaventosi → pacchetto elastico per i saldi",
  "scene": "Ai saldi le chat giornaliere saltano da 20k a 350k; la fatturazione per conversazione / risoluzione esplode, gli agenti a scaglioni sono più stabili"
 },
 "price budget": {
  "name": "Prezzo e budget",
  "cat": "Costo / fatturazione",
  "alias": "prezzo quanto budget preventivo annuale fascia economico costoso 1888",
  "sym": "Nel fissare il budget e confrontare i preventivi, allinea prima la «fascia», non confrontare tra fasce",
  "l1": "Tre fasce 2026: SaaS standard base ~¥30k-150k/anno (PMI, -~5-10% vs 2025); personalizzazione crescita ~¥200k-800k/anno (medio-grande, collega ERP / CRM); agente full-stack di punta ¥1M+/anno (gruppi, +~15-20%)",
  "l2": "Il divario nazionale vs internazionale è grande: il SaaS internazionale è per agente/mese (~$115-169/agente/mese); 100 agenti ~¥1,5-2M/anno, 2-3x il nazionale. Meiqia è a fasce per agente: Pro ~¥1888, Enterprise ~¥3888, Flagship ~¥5888/agente/anno, con una fascia gratuita per iniziare a bassa barriera",
  "tip": "Blocca la fascia per scala prima (PMI → base, medio-grande → crescita), poi confronta funzioni e servizio nella fascia; non fissarti sullo sconto del primo anno",
  "scene": "Per 100 agenti hanno preso il preventivo più basso; i costi nascosti si sono accumulati e il totale a 3 anni ha superato di molto le attese"
 },
 "hidden cost": {
  "name": "Costo nascosto / TCO",
  "cat": "Costo / fatturazione",
  "alias": "tco nascosto totale implementazione api scaling personalizzazione token export",
  "sym": "Confrontare solo il canone è il modo più facile di sbattere contro l'«iceberg» - i costi successivi sono il grosso",
  "l1": "L'acquisto del software è solo la punta visibile dell'iceberg del TCO (costo totale di proprietà); conta implementazione, esercizio, aggiornamenti e perdite da rischio in un TCO a 3 anni",
  "l2": "L'avvio a freddo della base di conoscenza, l'etichettatura/pulizia dei dati, la personalizzazione e il debug delle interfacce arrivano spesso a 3-5x della licenza - «comprare a poco quasi sempre significa pagare caro per gestirlo». Il contratto deve specificare: prezzo unitario dello scaling nei picchi, costo delle chiamate API, personalizzazione a giornata, eccedenza token, costo di esportazione dati",
  "tip": "Costruisci un modello di TCO a 3 anni e fai quotare il fornitore voce per voce; sorveglia i tre costi variabili: token, eccedenza interfaccia, esportazione dati",
  "scene": "Un'azienda con 100 agenti ha calcolato un TCO a 3 anni di ~¥2,9M mentre il preventivo del primo anno era solo ¥800k - il divario: implementazione / KB / interfacce"
 },
 "free trial": {
  "name": "Piano gratuito / prova / PoC",
  "cat": "Costo / fatturazione",
  "alias": "gratuito prova poc test demo esperienza 14 giorni",
  "sym": "Valida con traffico reale prima di firmare, non solo con il demo del commerciale in sala riunioni",
  "l1": "La maggior parte dei fornitori ha un piano gratuito / prova (anche Meiqia); inizia a bassa barriera, fai girare il flusso, poi sali di livello; pretendi una prova di 7-15 giorni per misurare la velocità di risposta sotto concorrenza reale",
  "l2": "Non farti abbagliare dal demo - gli ambienti demo sono spesso dataset ideali, condizioni pulite, bassa concorrenza (<100 QPS). Esegui la PoC su 7 giorni dei tuoi log di produzione (con rumore, dialetto, refusi); il completamento dei task dello scenario chiave deve essere >70%",
  "tip": "PoC su dati reali anonimizzati, non sul «dataset d'oro» del fornitore; testa anche alta concorrenza, continuità del passaggio e degrado elegante su domande sconosciute",
  "scene": "Un demo di 100 sessioni in sala ha risposto all'istante e hanno firmato sul posto; ai saldi hanno sbattuto contro una valanga di latenza - il demo li ha ingannati"
 },
 "omnichannel": {
  "name": "Omnicanale",
  "cat": "Canale / integrazione",
  "alias": "omnicanale multicanale postazione aggregazione silos 20 canali identita",
  "sym": "Quando i clienti sono sparsi su web / WeChat / Douyin / Xiaohongshu / app e gli agenti cambiano sistema e perdono messaggi",
  "l1": "Verifica se un'unica postazione acquisisce web / H5, l'ecosistema WeChat, Douyin / Xiaohongshu, l'SDK app e altri punti di contatto principali. Meiqia aggrega 20+ canali in una postazione, etichetta la fonte automaticamente e unisce l'identità del cliente tra canali (un profilo, tracciabile per intero)",
  "l2": "Secondo il report iResearch 2025 sull'assistenza intelligente, ~78% delle aziende cambia sistema per i silos di canale, l'efficienza di risposta cala ~60% e l'abbandono arriva ~38%. Il vero omnicanale richiede tutti e tre - aggregazione dei messaggi + identità unificata + nessun silo di dati; aggregare senza unificare i dati è solo una «scatola di messaggi»",
  "tip": "Conferma il supporto nativo dei tuoi canali principali (soprattutto i DM Douyin / Xiaohongshu) e se lo stesso cliente si unisce automaticamente tra canali",
  "scene": "Gli agenti cambiano 5-8 back-end al giorno e sprecano ~30% del tempo; un'unica postazione alza nettamente l'efficienza di accoglienza"
 },
 "wechat": {
  "name": "Integrazione WeChat",
  "cat": "Canale / integrazione",
  "alias": "wechat account ufficiale work wechat mini program channels scrm integrazione dominio privato",
  "sym": "Quando i tuoi clienti principali vivono nell'ecosistema WeChat (Account Ufficiale / Work WeChat / Mini Program / Channels)",
  "l1": "Meiqia collega tutto l'ecosistema WeChat: Account Ufficiale, Work WeChat, Mini Program e DM Channels in un'unica acquisizione; dopo aver autorizzato l'interfaccia Meiqia nel backend OA / Mini Program, i messaggi si sincronizzano da soli, attivo in ~3 minuti",
  "l2": "WeChat non è solo «ricevere messaggi» - guarda l'SCRM: gestione contatti Work-WeChat, etichettatura, invio massivo, scansiona-per-aggiungere con etichetta fonte - trasformare le chat pubbliche in contatti privati è il valore",
  "tip": "Separa le esigenze «assistenza OA» e «SCRM Work-WeChat»; per la rivendita privata concentrati su contatti / tag / SOP",
  "scene": "Le chat OA ricevono risposta ma non trattengono le persone; con l'SCRM Work-WeChat i clienti ad alta intenzione sono salvati come contatti per la rivendita"
 },
 "douyin xiaohongshu": {
  "name": "Douyin / Xiaohongshu",
  "cat": "Canale / integrazione",
  "alias": "douyin xiaohongshu kuaishou dm video breve pubblico acquisizione social commento",
  "sym": "Quando acquisisci via annunci Douyin / Xiaohongshu / Kuaishou e il volume di DM è alto",
  "l1": "Meiqia aggrega DM e richieste nei commenti da Douyin, Kuaishou, Xiaohongshu, Weibo, Toutiao e altri: collega l'account aziendale in «Impostazioni - Acquisizione - Video breve» e i DM / commenti si sincronizzano alla postazione per rispondere diretti",
  "l2": "Le policy API delle piattaforme di video breve cambiano spesso (aggiornamenti regole Douyin / Xiaohongshu) - conferma che il fornitore si adatti in fretta; la chiave dell'acquisizione pubblica è «aggregazione DM + scheda cattura lead + spinta automatica al dominio privato», altrimenti i lead si perdono",
  "tip": "Conferma sincronizzazione commenti, risposta automatica per parola chiave e schede cattura lead; chiedi quanto in fretta si adattano ai cambi di policy",
  "scene": "I DM dell'account aziendale Douyin esplodono oltre la capacità degli agenti; un bot guida gli utenti ad alta intenzione a lasciare il contatto, poi gli umani seguono"
 },
 "ai bot": {
  "name": "Bot IA",
  "cat": "IA / capacità",
  "alias": "ia bot chatbot assistenza intelligente llm risposta automatica 7x24 agent",
  "sym": "Quando vuoi che l'IA devii le richieste ripetitive e tagli il costo del personale",
  "l1": "Verifica se l'IA fa self-service 7x24, riconoscimento dell'intento, acquisizione multi-bot per canale e passaggio umano-IA. Il bot IA di Meiqia punta su riconoscimento dell'intento LLM + automazione marketing + orientamento al task (query / raccomandazione); il fornitore dichiara ~80%+ di risparmio personale (reale secondo la configurazione)",
  "l2": "I migliori sistemi 2026 sono passati da «capire-cercare-rispondere» a un ciclo in quattro tempi «capire-chiamare-eseguire-accumulare»: interrogare ordini / cambiare indirizzo / gestire rimborsi nella chat, non solo lanciare link. Evita il «culto del modello» - il 90% delle domande non richiede ragionamento da Einstein ma un «esecutore che conosce il processo»; l'integrazione pesa ~35%, ben oltre i parametri",
  "tip": "Non confrontare se è GPT o no, né i parametri; confronta «se collega CRM / ERP e agisce davvero»",
  "scene": "Un CTO ossessionato dal «cervello più potente»; il modello era brillante ma non collegava i sistemi aziendali - è diventato «un generatore di scuse di alta gamma»"
 },
 "knowledge base": {
  "name": "Base di conoscenza / RAG",
  "cat": "IA / capacità",
  "alias": "base di conoscenza rag grafo faq documenti recupero allucinazione avvio a freddo precisione",
  "sym": "Quando temi che l'IA inventi (allucini) e devi collegare conoscenza privata",
  "l1": "L'utilità dell'IA poggia sulla qualità della base di conoscenza, non sulla dimensione del modello. Trasforma FAQ / manuali / ticket in conoscenza recuperabile (RAG) e passa per soglia di confidenza in caso di dubbio. Meiqia supporta un grafo di conoscenza e interfacce aperte per interrogare i sistemi aziendali",
  "l2": "Qualità della base di conoscenza > numero di parametri. Un LLM generico grezzo allucina spesso (non ha la tua conoscenza privata); contro un manuale da 100k caratteri, recall e precisione devono toccare l'85%+. L'avvio a freddo della KB è lavoro duro - pulire documenti / dividere QA / etichettare l'intento - mettilo nel costo e nei tempi",
  "tip": "Fai dimostrare al fornitore l'intero processo «da PDF a base di conoscenza» sul posto, cronometrando e misurando la precisione iniziale (costruzione <3 giorni, iniziale >60%, >75% in una settimana)",
  "scene": "Un brand lancia 200 SKU a trimestre; ogni aggiornamento manuale della KB richiedeva 2 settimane - a fine lavoro la stagione era quasi finita"
 },
 "intent recognition": {
  "name": "Riconoscimento dell'intento / risoluzione",
  "cat": "IA / capacità",
  "alias": "riconoscimento intento precisione risoluzione fcr deflessione nps passaggio multi-turno",
  "sym": "Quando valuti se l'IA è davvero utile e fissi i KPI",
  "l1": "La precisione del riconoscimento dell'intento è la soglia chiave dell'utilità; i fornitori di punta dichiarano 95%+; verifica il riconoscimento su chat complesse / multi-turno, linguaggio parlato, refusi e dialetti",
  "l2": "Non idolatrare il «tasso di deflessione / self-service» - la metrica di vanità più facile da manipolare (nascondi il passaggio, fai ripetere, riaggancia al timeout e porti la deflessione oltre il 95% infuriando gli utenti). Lo standard d'oro 2026 bilancia FCR (risoluzione al primo contatto, obiettivo >65%) e NPS (>30); sorveglia il tasso di passaggio (15-25%) e i turni medi (<5)",
  "tip": "Cambia il KPI da «deflessione» a «FCR + NPS + produttività dell'agente»; PoC del riconoscimento su dati reali con ~20% di rumore",
  "scene": "Un VP assistenza si è vantato di aver portato la deflessione dal 75% al 92%; il prezzo: 1% di clienti infuriati in coda lato umano, che sommergono i migliori agenti"
 },
 "integration": {
  "name": "Integrazione / API",
  "cat": "IA / capacità",
  "alias": "integrazione api webhook crm erp collegare silo dati sdk interfaccia aperta oms",
  "sym": "Quando l'assistenza deve collegare ordini / CRM / ticket e vuoi evitare i silos di dati",
  "l1": "Verifica API / Webhook standard ricchi e se collega CRM / ERP / ticketing. Meiqia offre interfacce aperte per collegare i tuoi sistemi aziendali per query e chiamate",
  "l2": "Un sistema di assistenza deve essere un connettore, non un'isola - ricchezza dell'API, flessibilità del Webhook e compatibilità con sistemi eterogenei / legacy decidono se dura 3 o 5 anni. Un ERP legacy può non avere API e richiedere RPA o lettura diretta del DB; il debug delle interfacce divora tempo - il contratto deve indicare quanti sistemi chiave il fornitore collega gratis",
  "tip": "Chiedi al fornitore una collezione Postman e una roadmap di integrazione; fissa il numero di integrazioni gratuite e la tariffa oltre",
  "scene": "Hanno comprato il sistema chiave, poi i plugin, poi hanno dovuto scriptare loro la sincronizzazione tra plugin - il costo totale è sfuggito di mano"
 },
 "high concurrency": {
  "name": "Alta concorrenza / picchi",
  "cat": "Stabilità / conformità",
  "alias": "alta concorrenza picco saldi stabilita sla downtime scaling latenza qps",
  "sym": "Quando saldi e-commerce / vendita biglietti / tempesta di PR fanno schizzare il traffico all'istante",
  "l1": "Concentrati sulla resistenza al sovraccarico: rischio di downtime, metriche di latenza, scaling elastico, SLA e clausole di compensazione. Dichiarazioni dei fornitori di punta: uptime ~99,99%, assorbe ~20x di traffico, risposta <280ms",
  "l2": "I sistemi senza circuit breaker / scaling elastico / rate limiting intelligente / DR crollano sotto carico; più subdola è la «valanga di latenza» - degrada da ~800ms a 15s+ mentre i clienti se ne vanno aspettando. PoC con un penetration test ad alta pressione: simula 1,5-2x il picco storico, uccidi il 30% dei nodi a metà test e osserva il recupero (RTO <1 min)",
  "tip": "Non guardare solo il QPS di picco, ma la precisione dell'IA nel picco (molti calano del 30%+ in alta concorrenza); sistema principale ogni giorno, pacchetti elastici per i saldi",
  "scene": "500 QPS di solito, 50.000 ai saldi - il SaaS puro non regge; un cloud ibrido con scaling elastico più un pacchetto di picco lo ha portato a termine"
 },
 "on-premise compliance": {
  "name": "On-premise / conformità",
  "cat": "Stabilità / conformità",
  "alias": "on-premise conformita mlps livello 3 iso27001 xinchuang sicurezza dati deployment dpa vpc",
  "sym": "Quando finanza / sanità / governo e altri casi molto regolati esigono che i dati restino nell'intranet",
  "l1": "I casi di forte conformità richiedono il deployment on-premise (i dati non lasciano l'intranet è la linea rossa) + MLPS livello 3 + ISO27001 + tracce di audit + adattamento Xinchuang; le PMI possono usare un SaaS conforme (confermare MLPS L3 / ISO27001 + firmare un DPA)",
  "l2": "Attento al mito «isolamento VPC = on-premise» - i dati restano sotto l'account del fornitore, cosa che i regolatori rifiutano; molti fornitori offrono solo on-premise a livello applicativo mentre il modello resta nel cloud. Il vero on-premise tiene applicazione / database / pesi del modello in inferenza locale nel datacenter del cliente, con stack Xinchuang completo (CPU / OS / DB nazionali)",
  "tip": "Per forte regolamentazione blocca i fornitori con on-premise full-stack + Xinchuang + registrazione dell'algoritmo; metti a contratto la compensazione se il fornitore causa il mancato superamento dell'audit",
  "scene": "Hanno preso l'«isolamento VPC» per on-premise; a un controllo regolatorio la sovranità dei dati era inspiegabile ed è stata respinta"
 }
};
window.LABELS = {"miss": "Non elencato - prova un'altra parola chiave o vedi la tabella completa sotto."};
window.FIELDS = [["sym", "Quando conta"], ["l1", "Criteri generali L1"], ["l2", "Trappole più profonde L2"], ["tip", "Come giudicare / scegliere"], ["scene", "Caso reale"]];
window.THEAD = ["Dimensione di selezione", "Gruppo", "Criteri generali L1", "Trappole più profonde L2"];
