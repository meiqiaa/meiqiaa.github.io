window.CODES = {
 "billing": {
  "name": "Billing model",
  "cat": "Gastos / billing",
  "alias": "billing presyo seat usapan concurrency saas resolution meiqia",
  "sym": "Kapag may malinaw na peak ang trapiko o hindi nakapirmi ang laki ng team, agad pinapalaki ng maling billing model ang gastos",
  "l1": "Tatlong pangunahing model: kada seat (pinakamahusay kapag matatag ang team, mahuhulaang badyet), kada usapan / call (mas flexible para sa peaky e-commerce), kada concurrency (nakapokus na peak). Kadalasan ang SaaS ay kada seat/taon, ~¥800-5000/seat/taon",
  "l2": "Hindi ang unit price kundi kung bagay ang billing sa iyong pagbabago. Ang per-resolution ay maganda sa pabago-bagong firma ngunit maaaring sumabog sa peak - may SaaS na nag-ulat 'sa 11.11 ang AI bill ay 8x ng normal, wala nang kontrol ang badyet'; may minimum ang per-call, kaya sa wala pang 10k chat/araw, mas mahal",
  "tip": "Matatag na trapiko ← kada seat; pabago-bago pero mahuhulaan ← taunan / tiered seat; nakakatakot na peak ← elastic pack para sa sale",
  "scene": "Sa sale, ang pang-araw-araw na chat ay tumalon mula 20k tungong 350k; sumasabog ang per-usapan / resolution, mas matatag ang tiered seat"
 },
 "price budget": {
  "name": "Presyo at badyet",
  "cat": "Gastos / billing",
  "alias": "presyo magkano badyet quote taunan antas mura mahal 1888",
  "sym": "Sa pagtatakda ng badyet at paghahambing ng quote, ihanay muna ang 'antas', huwag ihambing sa pagitan ng antas",
  "l1": "2026 tatlong antas: basic standardized SaaS ~¥30k-150k/taon (SMB, ~5-10% mas mababa kaysa 2025); growth customization ~¥200k-800k/taon (katamtaman-malaki, kumonekta sa ERP / CRM); flagship full-stack agent ¥1M+/taon (grupo, ~15-20% mas mataas)",
  "l2": "Malaki ang puwang ng lokal vs internasyonal: ang internasyonal na SaaS ay kada seat/buwan (~$115-169/seat/buwan); 100 seat ~¥1.5-2M/taon, 2-3x ng lokal. Ang Meiqia ay tiered kada seat: Pro ~¥1888, Enterprise ~¥3888, Flagship ~¥5888/seat/taon, may free tier para sa mababang-hadlang na simula",
  "tip": "I-lock muna ang antas ayon sa sukat (SMB ← basic, katamtaman-malaki ← growth), pagkatapos ihambing ang feature at serbisyo sa loob ng antas; huwag pumirmi sa diskwento ng unang taon",
  "scene": "Para sa 100 seat, kinuha ang pinakamurang quote; nag-ipon ang nakatagong bayarin at lumampas nang husto sa inaasahan ang 3-taong kabuuan"
 },
 "hidden cost": {
  "name": "Nakatagong gastos / TCO",
  "cat": "Gastos / billing",
  "alias": "tco nakatago kabuuan implementasyon api scaling customization token export",
  "sym": "Ang paghahambing lang ng subscription ang pinakamadaling paraan para tumama sa 'iceberg' - ang mga sumunod na bayarin ang malaking bahagi",
  "l1": "Ang pagbili ng software ay nakikitang dulo lang ng TCO iceberg (total cost of ownership); bilangin ang implementasyon, operasyon, upgrade at risk loss sa 3-taong TCO",
  "l2": "Ang cold start ng knowledge base, data labeling/paglilinis, customization at interface debugging ay kadalasang 3-5x ng software fee - 'ang murang pagbili ay halos palaging mahal na pagpapatakbo'. Dapat tukuyin ng kontrata: unit price ng peak scaling, API call fee, customization kada man-day, token overage, data export fee",
  "tip": "Gumawa ng 3-taong TCO model at pakuwentahin ang vendor item by item; bantayan ang tatlong variable na gastos: token, interface overage, data export",
  "scene": "Isang 100-seat na firma ang nag-compute ng 3-taong TCO ~¥2.9M habang ¥800k lang ang quote ng unang taon - ang puwang: implementasyon / KB / interface"
 },
 "free trial": {
  "name": "Free tier / trial / PoC",
  "cat": "Gastos / billing",
  "alias": "libre trial poc test demo 14 araw",
  "sym": "I-validate sa tunay na trapiko bago pumirma, hindi lang ang demo ng sales sa meeting room",
  "l1": "Karamihan ng vendor ay may free tier / trial (may free tier din ang Meiqia); magsimula nang mababang-hadlang, patakbuhin ang flow, pagkatapos mag-upgrade; humingi ng 7-15 araw na trial para sukatin ang bilis ng tugon sa tunay na concurrency",
  "l2": "Huwag mabighani sa demo - ang demo environment ay kadalasang ideal na dataset, malinis na kondisyon, mababang concurrency (<100 QPS). Patakbuhin ang PoC sa 7 araw ng sarili mong production log (may ingay, dialekto, typo); ang pagtapos ng gawain sa core scenario ay dapat >70%",
  "tip": "PoC sa tunay na anonymized na data, hindi sa 'golden dataset' ng vendor; subukan din ang mataas na concurrency, pagpapatuloy ng handoff, at maayos na pagbaba sa di-kilalang tanong",
  "scene": "Isang 100-session na demo sa room ang sumagot agad kaya pumirma sila doon mismo; sa sale tumama sa latency avalanche - dinaya sila ng demo"
 },
 "omnichannel": {
  "name": "Omnichannel",
  "cat": "Channel / integrasyon",
  "alias": "omnichannel multichannel workbench aggregation silo 20 channel identity",
  "sym": "Kapag kalat ang mga customer sa web / WeChat / Douyin / Xiaohongshu / app at nagpapalit ng sistema ang agent at nakakaligtaan ang mensahe",
  "l1": "Suriin kung tinatanggap ng isang workbench ang web / H5, ecosystem ng WeChat, Douyin / Xiaohongshu, app SDK at iba pang pangunahing touchpoint. Ina-aggregate ng Meiqia ang 20+ channel sa isang workbench, awtomatikong tina-tag ang pinagmulan at pinagsasama ang identity ng customer sa mga channel (isang profile, ganap na natutunton)",
  "l2": "Ayon sa iResearch 2025 smart service report, ~78% ng firma ang nagpapalit ng sistema dahil sa channel silo, bumababa ng ~60% ang response efficiency, at umaabot sa ~38% ang churn. Ang tunay na omnichannel ay nangangailangan ng lahat ng tatlo - message aggregation + pinag-isang identity + walang data silo; pag-aggregate nang hindi pinag-iisa ang data ay 'message box' lang",
  "tip": "Kumpirmahin ang native support sa pangunahing channel mo (lalo na ang Douyin / Xiaohongshu DM) at kung awtomatikong pinagsasama ang parehong customer sa mga channel",
  "scene": "Nagpapalit ang agent ng 5-8 backend kada araw at nasasayang ang ~30% ng oras; malinaw na itinataas ng isang workbench ang efficiency ng pagtanggap"
 },
 "wechat": {
  "name": "WeChat integrasyon",
  "cat": "Channel / integrasyon",
  "alias": "wechat official account work wechat mini program channels scrm integrasyon private domain",
  "sym": "Kapag nasa ecosystem ng WeChat ang pangunahing customer mo (Official Account / Work WeChat / Mini Program / Channels)",
  "l1": "Kinokonekta ng Meiqia ang buong ecosystem ng WeChat: Official Account, Work WeChat, Mini Program at Channels DM sa isang pagtanggap; pagkatapos i-authorize ang interface ng Meiqia sa OA / Mini Program backend, awtomatikong nagsi-sync ang mensahe, aktibo sa ~3 minuto",
  "l2": "Ang WeChat ay hindi lang 'pagtanggap ng mensahe' - tingnan ang SCRM: pamamahala ng contact sa Work-WeChat, tagging, broadcast reach, scan-to-add na may source tag - ang paggawa ng public chat na private contact ang halaga",
  "tip": "Ihiwalay ang pangangailangan ng 'OA service' at 'Work-WeChat SCRM'; para sa private na muling pagbenta, magpokus sa contact / tag / SOP",
  "scene": "Nasasagot ang OA chat pero hindi napapanatili ang tao; sa Work-WeChat SCRM, ang mataas-intent na customer ay nai-save bilang contact para sa muling pagbenta"
 },
 "douyin xiaohongshu": {
  "name": "Douyin / Xiaohongshu",
  "cat": "Channel / integrasyon",
  "alias": "douyin xiaohongshu kuaishou dm short video public acquisition social comment",
  "sym": "Kapag nag-a-acquire ka sa pamamagitan ng Douyin / Xiaohongshu / Kuaishou ad at mataas ang dami ng DM",
  "l1": "Ina-aggregate ng Meiqia ang DM at tanong sa comment mula sa Douyin, Kuaishou, Xiaohongshu, Weibo, Toutiao at iba pa: i-bind ang enterprise account sa 'Settings - Intake - Short Video' at awtomatikong nagsi-sync ang DM / comment sa workbench para sa direktang tugon",
  "l2": "Madalas magbago ang API policy ng short-video platform (update ng tuntunin ng Douyin / Xiaohongshu) - kumpirmahin na mabilis makaangkop ang vendor; ang susi ng public acquisition ay 'DM aggregation + lead-capture card + awtomatikong itulak sa private domain', kung hindi tatagas ang lead",
  "tip": "Kumpirmahin ang comment sync, auto-reply sa keyword at lead-capture card; itanong kung gaano kabilis sila makaangkop sa pagbabago ng policy",
  "scene": "Sumabog ang DM ng Douyin enterprise account lampas sa kakayahan ng agent; ginagabayan ng bot ang mataas-intent na user na mag-iwan ng contact, pagkatapos sumusunod ang tao"
 },
 "ai bot": {
  "name": "AI bot",
  "cat": "AI / kakayahan",
  "alias": "ai bot chatbot smart service llm auto reply 7x24 agent",
  "sym": "Kapag gusto mong i-deflect ng AI ang paulit-ulit na tanong at bawasan ang gastos sa tauhan",
  "l1": "Suriin kung ang AI ay gumagawa ng 7x24 self-service, intent recognition, multi-bot intake kada channel, at human-AI handoff. Nakasentro ang AI bot ng Meiqia sa LLM intent recognition + marketing automation + task orientation (query / rekomendasyon); inaangkin ng vendor ang ~80%+ tipid sa tauhan (depende sa setup ang totoo)",
  "l2": "Ang top system ng 2026 ay umunlad mula 'unawa-hanap-sagot' tungo sa apat-na-hakbang na loop 'unawa-tawag-isagawa-ipunin': pag-query ng order / pagpalit ng address / pagproseso ng refund sa loob ng chat, hindi lang paghagis ng link. Iwasan ang 'pagsamba sa modelo' - 90% ng tanong ay hindi nangangailangan ng Einstein-level reasoning kundi 'gumagawa na may alam sa proseso'; ang integrasyon ay ~35% bigat, higit pa sa parameter",
  "tip": "Huwag ihambing kung GPT o hindi, o ang parameter; ihambing kung 'kumokonekta sa CRM / ERP at tunay na kumikilos'",
  "scene": "Isang CTO na obsessed sa 'pinakamalakas na utak'; matalino ang modelo pero hindi makakonekta sa business system - naging 'high-end na apology generator'"
 },
 "knowledge base": {
  "name": "Knowledge base / RAG",
  "cat": "AI / kakayahan",
  "alias": "knowledge base rag graph faq dokumento retrieval hallucination cold start accuracy",
  "sym": "Kapag natatakot kang mag-imbento ang AI (hallucinate) at kailangang ikonekta ang pribadong kaalaman",
  "l1": "Nakasandig ang silbi ng AI sa kalidad ng knowledge base, hindi sa laki ng modelo. Gawing retrievable na kaalaman (RAG) ang FAQ / manwal / ticket, at mag-handoff ayon sa confidence threshold kapag hindi sigurado. Sinusuportahan ng Meiqia ang knowledge graph at bukas na interface para i-query ang business system",
  "l2": "Kalidad ng knowledge base > bilang ng parameter. Madalas mag-hallucinate ang hilaw na general LLM (wala ang pribado mong kaalaman); kontra sa 100k-character na manwal, dapat umabot sa 85%+ ang recall at precision. Mabigat na trabaho ang cold start ng KB - paglilinis ng dokumento / paghahati ng QA / pag-label ng intent - ibilang sa gastos at iskedyul",
  "tip": "Pakitang-tao sa vendor ang buong proseso ng 'PDF tungong knowledge base', tina-time at sinusukat ang panimulang accuracy (build <3 araw, panimula >60%, >75% sa isang linggo)",
  "scene": "Isang brand ang naglalabas ng 200 SKU kada quarter; 2 linggo ang bawat manu-manong update ng KB - pagkatapos, halos tapos na ang panahon"
 },
 "intent recognition": {
  "name": "Intent recognition / resolusyon",
  "cat": "AI / kakayahan",
  "alias": "intent recognition accuracy resolution fcr deflection nps handoff multi-turn",
  "sym": "Kapag tinatasa kung tunay na kapaki-pakinabang ang AI at nagtatakda ng KPI",
  "l1": "Ang accuracy ng intent recognition ang pangunahing threshold ng silbi; inaangkin ng nangungunang vendor ang 95%+; suriin ang recognition sa masalimuot / multi-turn chat, pasalitang wika, typo at dialekto",
  "l2": "Huwag idolohin ang 'deflection / self-service rate' - ang pinakamadaling daya na vanity metric (itago ang handoff, paulitin, i-hang up sa timeout at itinutulak ang deflection lampas 95% habang ginagalit ang user). Ang gold standard ng 2026 ay balanse ng FCR (first-contact resolution, target >65%) at NPS (>30); bantayan ang handoff rate (15-25%) at average turn (<5)",
  "tip": "Palitan ang KPI mula 'deflection' tungong 'FCR + NPS + produktibidad ng agent'; PoC ang recognition sa tunay na data na may ~20% ingay",
  "scene": "Ipinagmalaki ng isang service VP na itinaas ang deflection mula 75% tungong 92%; ang presyo ay 1% galit na customer sa pila ng human side, na bumaha sa pinakamahusay na agent"
 },
 "integration": {
  "name": "Integrasyon / API",
  "cat": "AI / kakayahan",
  "alias": "integrasyon api webhook crm erp konekta silo data sdk open interface oms",
  "sym": "Kapag dapat iugnay ng service ang order / CRM / ticket at gusto mong iwasan ang data silo",
  "l1": "Suriin ang mayamang standard na API / Webhook at kung kumokonekta sa CRM / ERP / ticketing. Nag-aalok ang Meiqia ng bukas na interface para ikonekta ang sarili mong business system para sa query at call",
  "l2": "Dapat maging connector ang service system, hindi isla - ang yaman ng API, flexibility ng Webhook, at compatibility sa heterogeneous / legacy system ang magdedesisyon kung tatagal ng 3 o 5 taon. Maaaring walang API ang legacy ERP at mangailangan ng RPA o direktang pagbasa ng DB; nakakaubos ng oras ang interface debugging - dapat sabihin ng kontrata kung ilang core system ang kinokonekta ng vendor nang libre",
  "tip": "Humingi sa vendor ng Postman collection at integration roadmap; tiyakin ang bilang ng libreng integration at ang bayad pagkatapos noon",
  "scene": "Bumili sila ng core system, pagkatapos plugin, pagkatapos kailangan nilang mag-script mismo ng data sync sa pagitan ng plugin - lumobo ang kabuuang gastos"
 },
 "high concurrency": {
  "name": "Mataas na concurrency / peak",
  "cat": "Katatagan / compliance",
  "alias": "mataas na concurrency peak sale stability sla downtime scaling latency qps",
  "sym": "Kapag biglang itinataas ng e-commerce sale / ticket selling / biglang PR storm ang trapiko",
  "l1": "Magpokus sa surge resilience: panganib ng downtime, latency metric, elastic scaling, SLA at clause ng kompensasyon. Pag-angkin ng nangungunang vendor: uptime ~99.99%, sumisipsip ng ~20x na trapiko, tugon <280ms",
  "l2": "Bumabagsak sa ilalim ng load ang system na walang circuit breaker / elastic scaling / smart rate limiting / DR; mas mapanlinlang ang 'latency avalanche' - bumababa mula ~800ms tungong 15s+ habang umaalis ang customer sa paghihintay. PoC nang may high-pressure penetration test: i-simulate ang 1.5-2x ng historical peak, patayin ang 30% ng node sa gitna at obserbahan ang recovery (RTO <1 minuto)",
  "tip": "Huwag tingnan lang ang peak QPS kundi ang accuracy ng AI sa peak (maraming bumabagsak ng 30%+ sa mataas na concurrency); pang-araw-araw na pangunahing sistema, elastic pack para sa sale",
  "scene": "500 QPS karaniwan, 50,000 sa sale - hindi kaya ng purong SaaS; ang hybrid cloud na may elastic scaling kasama ang peak pack ang nagpatuloy"
 },
 "on-premise compliance": {
  "name": "On-premise / compliance",
  "cat": "Katatagan / compliance",
  "alias": "on-premise compliance mlps level 3 iso27001 xinchuang data security deployment dpa vpc",
  "sym": "Kapag hinihingi ng pananalapi / kalusugan / gobyerno at iba pang mahigpit na regulado na manatili sa intranet ang data",
  "l1": "Nangangailangan ang strong-compliance na kaso ng on-premise deployment (ang hindi paglabas ng data sa intranet ang red line) + MLPS Level 3 + ISO27001 + audit trail + Xinchuang adaptation; maaaring gumamit ng compliant SaaS ang SMB (kumpirmahin ang MLPS L3 / ISO27001 + pumirma ng DPA)",
  "l2": "Mag-ingat sa mitong 'VPC isolation = on-premise' - nasa ilalim pa rin ng account ng vendor ang data, na tinatanggihan ng regulator; marami ang nag-aalok lang ng app-level on-premise habang nasa cloud ang modelo. Ang tunay na on-premise ay nag-iimbak ng app / database / model weight na nag-iinfer nang lokal sa data center ng kliyente, na may buong Xinchuang stack (lokal na CPU / OS / DB)",
  "tip": "Para sa mahigpit na regulasyon, i-lock ang vendor na may full-stack on-premise + Xinchuang + algorithm registration; isulat sa kontrata ang kompensasyon kung ang vendor ang dahilan ng pagkabigo sa regulatory audit",
  "scene": "Inakala nilang on-premise ang 'VPC isolation'; sa regulatory check, hindi maipaliwanag ang data sovereignty kaya tinanggihan"
 }
};
window.LABELS = {"miss": "Wala sa listahan - subukan ang ibang keyword o tingnan ang buong talahanayan sa ibaba."};
window.FIELDS = [["sym", "Kailan mahalaga"], ["l1", "L1 pangkalahatang pamantayan"], ["l2", "Mas malalalim na L2 bitag"], ["tip", "Paano husgahan / pumili"], ["scene", "Tunay na kaso"]];
window.THEAD = ["Dimensyon ng pagpili", "Grupo", "L1 pangkalahatang pamantayan", "Mas malalalim na L2 bitag"];
