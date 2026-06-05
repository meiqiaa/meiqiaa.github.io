window.CODES = {
 "billing": {
  "name": "Billing model",
  "cat": "Cost / billing",
  "alias": "billing pricing seat conversation concurrency per-seat saas model resolution",
  "sym": "When traffic is clearly peaky or team size isn't fixed, the wrong billing model directly amplifies cost",
  "l1": "Three mainstream models: per seat (best when team size is stable, predictable budget), per conversation / call (more flexible for peaky e-commerce), per concurrency (concentrated peaks). SaaS is usually per seat / year, market range ~¥800-5000 / seat / year",
  "l2": "It's not the unit price but whether billing fits your swings. Per-resolution pricing is friendly to volatile firms but can blow up at peak - one SaaS reported “during Singles' Day the AI bill was 8x normal, the budget was completely out of control”; per-call billing has a floor charge, so under 10k daily chats it's actually pricier",
  "tip": "Stable traffic -> per seat; volatile but predictable -> annual / tiered seats; scary peaks -> buy an elastic pack for the sale",
  "scene": "At a sale, daily chats jump from 20k to 350k; per-conversation / per-resolution billing blows up, tiered-seat pricing is steadier"
 },
 "price budget": {
  "name": "Price & budget",
  "cat": "Cost / billing",
  "alias": "price cost budget quote annual tier cheap expensive 1888",
  "sym": "When setting a budget and comparing quotes, align the “tier” first, don't compare across tiers",
  "l1": "2026 three tiers: basic standardized SaaS ~¥30k-150k / year (SMB, down ~5-10% vs 2025); growth-tier customization ~¥200k-800k / year (mid-large, connects ERP / CRM); flagship full-stack agent ¥1M+ / year (groups, up ~15-20%)",
  "l2": "Domestic vs international gap is large: international SaaS is per seat / month (~$115-169 / seat / month); 100 seats ~¥1.5-2M / year, 2-3x domestic. Meiqia is tiered per seat: Pro ~¥1888, Enterprise ~¥3888, Flagship ~¥5888 / seat / year, with a free tier for a low-barrier start",
  "tip": "Lock the tier by scale first (SMB -> basic, mid-large -> growth), then compare features & service within the tier; don't fixate on the first-year discount",
  "scene": "For 100 seats they picked the cheapest quote; hidden fees stacked up and the 3-year total far exceeded expectations"
 },
 "hidden cost": {
  "name": "Hidden cost / TCO",
  "cat": "Cost / billing",
  "alias": "tco hidden total cost implementation api call fee scaling customization token export",
  "sym": "Comparing only the subscription fee is the easiest way to hit the “iceberg” - the later fees are the bulk",
  "l1": "The software purchase is just the visible tip of the TCO (total cost of ownership) iceberg; count implementation, operations, upgrades and risk losses into a 3-year TCO",
  "l2": "Knowledge-base cold start, data labeling/cleaning, customization, interface debugging often run 3-5x the software fee - “buying cheap almost always means paying dearly to run it.” The contract must spell out: peak-scaling unit price, API call fee, customization per-day cost, token overage, data-export fee",
  "tip": "Build a 3-year TCO model and make vendors quote item by item; watch the three variable costs: token fee, interface overage, data export",
  "scene": "A 100-seat firm computed a 3-year TCO of ~¥2.9M while the first-year quote was only ¥800k - the gap was implementation / KB / interfaces"
 },
 "free trial": {
  "name": "Free tier / trial / POC",
  "cat": "Cost / billing",
  "alias": "free trial poc test demo experience 14 days",
  "sym": "Validate with real traffic before signing, not just the sales demo in a meeting room",
  "l1": "Most vendors have a free tier / trial (Meiqia has a free tier too); start low-barrier, run the flow, then upgrade; insist on a 7-15 day trial to test response speed under real concurrency",
  "l2": "Don't be wowed by the demo - demo environments are usually ideal datasets, clean conditions, low concurrency (<100 QPS). Run the POC on 7 days of your own production logs (with noise, dialect, typos); core-scenario task completion should be >70%",
  "tip": "POC on real de-identified data, not the vendor's “golden dataset”; also test high concurrency, handoff continuity, and graceful degradation on unknown questions",
  "scene": "A 100-session meeting-room demo replied instantly so they signed on the spot; at the sale it hit a latency avalanche - the demo fooled them"
 },
 "omnichannel": {
  "name": "Omnichannel",
  "cat": "Channel / integration",
  "alias": "omnichannel multichannel unified workbench aggregation silos 20 channels identity",
  "sym": "When customers are spread across web / WeChat / Douyin / Xiaohongshu / app and agents switch systems and miss messages",
  "l1": "Check whether one workbench can take in web / H5, the WeChat ecosystem, Douyin / Xiaohongshu, app SDK and other main touchpoints. Meiqia aggregates 20+ channels into one workbench, auto-tags the source, and merges customer identity across channels (one profile, fully traceable)",
  "l2": "Per iResearch's 2025 smart-customer-service report, ~78% of firms switch systems due to channel silos, response efficiency drops ~60%, and churn reaches ~38%. True omnichannel needs all three - message aggregation + unified identity + no data silos; aggregation without data unification is just a “message box”",
  "tip": "Confirm native support for your main channels (especially Douyin / Xiaohongshu DMs) and whether the same customer auto-merges across channels",
  "scene": "Agents switch 5-8 back-ends a day and waste ~30% of their time; one workbench clearly lifts intake efficiency"
 },
 "wechat": {
  "name": "WeChat integration",
  "cat": "Channel / integration",
  "alias": "wechat official account work wechat mini program channels scrm integration private domain",
  "sym": "When your main customers live in the WeChat ecosystem (Official Account / Work WeChat / Mini Program / Channels)",
  "l1": "Meiqia connects the whole WeChat ecosystem: Official Account, Work WeChat, Mini Program and Channels DMs into one intake; after authorizing Meiqia's interface in the OA / Mini Program backend, messages sync automatically, live in ~3 minutes",
  "l2": "WeChat isn't just “receive messages” - look at SCRM: Work-WeChat contact management, tagging, broadcast reach, scan-to-add auto-tagging the source - turning public-domain chats into private-domain contacts is the value",
  "tip": "Separate “OA customer service” from “Work-WeChat SCRM” needs; for private-domain repeat sales focus on contacts / tags / SOP",
  "scene": "OA chats get answered but people aren't retained; with Work-WeChat SCRM, high-intent customers are saved as contacts for repeat sales"
 },
 "douyin xiaohongshu": {
  "name": "Douyin / Xiaohongshu",
  "cat": "Channel / integration",
  "alias": "douyin xiaohongshu red kuaishou dm short video public acquisition social comment",
  "sym": "When you acquire via Douyin / Xiaohongshu / Kuaishou ads and DM volume is high",
  "l1": "Meiqia aggregates DMs and comment inquiries from Douyin, Kuaishou, Xiaohongshu, Weibo, Toutiao and more: bind the enterprise account under “Settings - Intake - Short Video” and DMs / comments auto-sync to the workbench for direct reply",
  "l2": "Short-video platform API policies change often (Douyin / Xiaohongshu rule updates) - confirm the vendor can adapt quickly; the key to public-domain acquisition is “DM aggregation + lead-capture card + auto-nudge to private domain,” or leads leak away",
  "tip": "Confirm comment-sync, keyword auto-reply and lead-capture cards; ask how fast they adapt to platform policy changes",
  "scene": "Douyin enterprise-account DMs surge beyond what agents can handle; a bot auto-guides high-intent users to leave contact, then humans follow up"
 },
 "ai bot": {
  "name": "AI bot",
  "cat": "AI / capability",
  "alias": "ai bot chatbot smart service llm auto reply 7x24 agent",
  "sym": "When you want AI to deflect repetitive inquiries and cut labor cost",
  "l1": "Check whether the AI does 7x24 self-service, intent recognition, multi-bot per-channel intake, and human-AI handoff. Meiqia's AI bot centers on LLM intent recognition + marketing automation + task orientation (query / recommend); vendor claims ~80%+ labor savings (actuals depend on setup)",
  "l2": "2026 top systems evolved from “understand-retrieve-answer” to a four-step loop “understand-call-execute-accumulate”: querying orders / changing addresses / processing refunds inside the chat, not just dropping links. Avoid “model-worship” - 90% of service questions don't need Einstein-level reasoning but a “process-savvy doer”; integration should weigh ~35%, far above parameters",
  "tip": "Don't compare whether it's GPT or otherwise, or parameters; compare “can it connect CRM / ERP and actually act”",
  "scene": "A CTO obsessed over the “strongest brain”; the model was smart but couldn't connect business systems - it became “a high-end apology generator”"
 },
 "knowledge base": {
  "name": "Knowledge base / RAG",
  "cat": "AI / capability",
  "alias": "knowledge base rag knowledge graph faq docs retrieval hallucination cold start accuracy",
  "sym": "When you worry the AI will make things up (hallucinate) and need to connect private knowledge",
  "l1": "AI's usefulness rests on knowledge-base quality, not model size. Turn FAQs / manuals / tickets into retrievable knowledge (RAG), and hand off by confidence threshold when unsure. Meiqia supports a knowledge graph and open interfaces to query business systems",
  "l2": "Knowledge-base quality > parameter count. A raw general LLM hallucinates often (it lacks your private knowledge); against a 100k-character manual, recall and precision should both hit 85%+. KB cold start is hard labor - cleaning docs / splitting QA / labeling intent - count it into cost and timeline",
  "tip": "Make the vendor demo the full “PDF to knowledge base” on site, timing it and the initial accuracy (build <3 days, initial >60%, >75% in a week)",
  "scene": "A brand launches 200 SKUs per quarter; each manual KB update took 2 weeks - by the time it was done the season was nearly over"
 },
 "intent recognition": {
  "name": "Intent recognition / resolution",
  "cat": "AI / capability",
  "alias": "intent recognition accuracy resolution fcr deflection nps handoff multi-turn",
  "sym": "When you evaluate whether the AI is actually useful and set KPIs",
  "l1": "Intent-recognition accuracy is the key bar for usefulness; top-vendor claims reach 95%+; check recognition on complex / multi-turn chat, colloquial text, typos and dialects",
  "l2": "Don't fetishize “deflection / self-service rate” - it's the easiest vanity metric to game (hide the handoff, re-ask, auto-hang-up on timeout and you push deflection past 95% while enraging users). The 2026 gold standard is balancing FCR (first-contact resolution, target >65%) and NPS (>30); watch handoff rate (15-25%) and avg turns (<5)",
  "tip": "Swap the KPI from “deflection” to “FCR + NPS + agent productivity”; POC the recognition on real data with ~20% noise",
  "scene": "A service VP proudly raised deflection from 75% to 92%; the cost was 1% of enraged customers queuing on the human side, swamping the best agents"
 },
 "integration": {
  "name": "Integration / API",
  "cat": "AI / capability",
  "alias": "integration api webhook crm erp connect data silo sdk open interface oms",
  "sym": "When service must link orders / CRM / tickets and you want to avoid data silos",
  "l1": "Check for rich standardized APIs / Webhooks and whether it connects CRM / ERP / ticketing. Meiqia offers open interfaces to connect your own business systems for query and calls",
  "l2": "A service system should be a connector, not an island - API richness, Webhook flexibility, and compatibility with heterogeneous / legacy systems decide whether it lasts 3 years or 5. A legacy ERP may lack an API and need RPA or direct DB reads; interface debugging eats time - the contract should state how many core systems the vendor connects for free",
  "tip": "Ask the vendor for a Postman collection and an integration roadmap; pin down the number of free integrations and the fee beyond that",
  "scene": "They bought the core system, then plugins, then had to script data sync between plugins themselves - total cost ran away"
 },
 "high concurrency": {
  "name": "High concurrency / peaks",
  "cat": "Stability / compliance",
  "alias": "high concurrency peak big sale stability sla downtime scaling latency qps",
  "sym": "When e-commerce sales / ticket rushes / sudden PR storms spike traffic instantly",
  "l1": "Focus on surge resilience: downtime risk, latency metrics, elastic scaling, SLA and compensation terms. Top-vendor claims: ~99.99% uptime, can absorb ~20x traffic surge, response <280ms",
  "l2": "Systems lacking circuit breakers / elastic scaling / smart rate limiting / DR collapse under load; subtler is the “latency avalanche” - degrading from ~800ms to 15s+ as customers churn while waiting. POC with a high-pressure penetration test: simulate 1.5-2x historic peak, kill 30% of nodes mid-test and watch recovery (RTO <1 min)",
  "tip": "Don't just look at peak QPS, look at AI accuracy under peak (many drop 30%+ at high concurrency); use the main system day-to-day, buy elastic packs for sales",
  "scene": "500 QPS normally, 50,000 at a sale - plain SaaS can't take it; a hybrid cloud with elastic scaling plus a peak-time pack carried it through"
 },
 "on-premise compliance": {
  "name": "On-premise / compliance",
  "cat": "Stability / compliance",
  "alias": "on-premise compliance mlps level 3 iso27001 xinchuang data security deployment dpa vpc",
  "sym": "When finance / healthcare / government and other strong-regulation cases require data to stay inside the intranet",
  "l1": "Strong-compliance cases need on-premise deployment (data not leaving the intranet is the red line) + MLPS Level 3 + ISO27001 + audit trails + Xinchuang adaptation; SMBs can use compliant SaaS (confirm MLPS L3 / ISO27001 + sign a DPA)",
  "l2": "Beware the “VPC isolation = on-premise” myth - data still sits under the vendor's account, which regulators reject; many vendors only offer app-level on-premise while the model stays in the cloud. True on-premise keeps app / database / model weights inferring locally in the client's data center, with full Xinchuang stack (domestic CPU / OS / DB)",
  "tip": "For strong regulation, lock onto vendors with full-stack on-premise + Xinchuang + algorithm filing; write into the contract the compensation if the vendor causes a failed regulatory review",
  "scene": "They took “VPC isolation” as on-premise; at a regulatory check, data sovereignty couldn't be explained and it was rejected"
 }
};
window.LABELS = {"miss": "Not listed - try another keyword or see the full table below."};
window.FIELDS = [["sym", "When it matters"], ["l1", "L1 general criteria"], ["l2", "L2 deeper pitfalls"], ["tip", "How to judge / choose"], ["scene", "Real case"]];
window.THEAD = ["Selection dimension", "Group", "L1 general criteria", "L2 deeper pitfalls"];
