window.CODES = {
 "official price public": {
  "name": "Is the official price published",
  "cat": "Price tiers · historical reference",
  "alias": "how much is meiqia official price published list price flexible pricing quote rfq meiqia pricing 美洽价格",
  "sym": "When you want to look up one exact number for ‘how much Meiqia costs’ — you’ll find the official site simply doesn’t give one",
  "l1": "Meiqia publishes no numeric pricing in 2026: as tested, meiqia.com/pricing has only “free trial / book a demo” buttons and no figures; the official line = “flexible pricing · by seat count / message volume / feature-module mix”",
  "l2": "The ¥1888/3888/5888 four tiers you can find online are all 2022 third-party (36Kr / chiefmore) historical restatements, not an official current price. This is the biggest cognitive trap: walk in with an old price and the vendor dismisses it with ‘we’ve adjusted pricing’. It’s the same industry-wide — Qiyu / Sobot / Holly official pages publish no figures either; only Udesk / Zendesk do",
  "tip": "There’s only one path to a current price: use your real seat count, run the meiqiaa.com free trial + ask for a first-hand quote; treat any ‘Meiqia price list’ found online as a historical reference and ask which year it’s from",
  "scene": "You search ‘how much Meiqia costs’ wanting an exact number, but the official site lists no price and every site copies the 2022 figures — so this tool teaches you how to calculate / ask, instead of handing you a fake number that will expire"
 },
 "version price": {
  "name": "Per-edition price (historical reference)",
  "cat": "Price tiers · historical reference",
  "alias": "meiqia price edition Professional Enterprise Flagship trial 1888 3888 5888 seat annual fee 版本",
  "sym": "When you want to know roughly what order of magnitude Professional / Enterprise / Flagship sit at",
  "l1": "Historically restated four tiers (2022 · not an official current price): Trial ￥0, Professional ￥1,888, Enterprise ￥3,888, Flagship ￥5,888 yuan/seat/year; the platform/group edition needs a custom quote",
  "l2": "These four tiers are consistent across sources (36Kr 2022 + chiefmore 2017) but the official page now publishes no figures, so there’s no way to confirm whether they are still the 2026 current price. Professional targets small startups, Enterprise the full small/medium scenario, Flagship medium/large with customer-success professional services",
  "tip": "Use it only as an order-of-magnitude reference (‘a low few thousand per seat per year’); don’t treat 1888 as a current-price commitment — ask the official site for a real price based on your true seat count + contract term",
  "scene": "When ballparking a budget, use the four tiers for a rough magnitude (e.g. 10 seats on Professional ≈ just under 20k/year on the old basis), but for a formal purchase you must ask the official site for the current price"
 },
 "starting price": {
  "name": "Entry threshold",
  "cat": "Price tiers · historical reference",
  "alias": "meiqia starting price minimum minimum order 3500 paid threshold minimum spend 起售价",
  "sym": "When a small customer buying just one or two seats worries whether the deal will transact at the unit price",
  "l1": "Meiqia’s paid plan entry price is ￥3,500 (36Kr price page · minimum-deal / minimum-order threshold)",
  "l2": "This means that even if a single seat is listed at 1888, a small customer may not transact at the unit price and must first clear the entry threshold. The industry commonly uses prepaid-balance / minimum-spend tactics (Qiyu was once criticized by a user for a 10k minimum balance · a 2021 individual case); ask about the minimum spend before ordering",
  "tip": "For a small order, first ask about the entry / minimum-spend threshold and whether you can go by your actual seat count; if the free tier is enough, start free — don’t buy extra seats just to clear the threshold",
  "scene": "You want to buy just 1 seat to test the waters, then find you must clear the ¥3500 entry — at which point you should assess whether the free tier is enough, or whether putting several seats on together is more worthwhile"
 },
 "billing mode": {
  "name": "Billing model",
  "cat": "Billing method",
  "alias": "meiqia billing model per-seat per-conversation per-message concurrent hybrid how is it charged annual 计费",
  "sym": "When torn between per-seat and usage-based, afraid of burning money on the wrong tier",
  "l1": "Meiqia bills per-seat (per seat per year) + feature-module mix, prepaid annually. Four mainstream billing types: per-seat (fixed · cost predictable but with idle/expansion risk), per-conversation/call volume (usage-based · good for high variance but peaks uncontrollable), per-feature-module, hybrid (base seat fee + elastic resource pack)",
  "l2": "Pick the wrong tier and you burn money both ways: many idle seats = wasted fixed fee; usage-based hitting a peak = runaway bills. Empirical crossover (a specific model · not universal): under 2500 conversations/month usage-based wins, over 2500 per-seat wins",
  "tip": "Plug your real monthly conversation volume / seat utilization into the crossover; for high variance prefer hybrid (base seat + elastic pack) and require a usage circuit breaker (auto-switch when over 150% of baseline)",
  "scene": "An e-commerce sale multiplies conversation volume; pure per-conversation billing makes the bill explode — that’s exactly when you want hybrid billing + an elastic pack + a circuit breaker, rather than rigidly per-seat or rigidly usage-based"
 },
 "free tier limit": {
  "name": "Free-tier limits",
  "cat": "Billing method",
  "alias": "meiqia free tier is it free trial edition limit how many agents 30 days queue how much is free 免费版",
  "sym": "When you want to save with the free tier but fear the features are cut too hard",
  "l1": "Meiqia’s free (trial) edition has confirmed official hard limits (2021 official blog): only 1 agent, one agent serves only 2 visitors at once, no customer queue, and chat logs are kept only 30 days",
  "l2": "This is the classic ‘cheap/free base edition as a lead magnet, with key capabilities (multi-agent / log retention / queue) gated behind payment’ — any slightly serious team with 2+ agents or needing log retention is forced to upgrade",
  "tip": "The free tier suits only individuals / extremely light use; when evaluating, check directly against these 4 limits — if you need multiple seats, conversation retention beyond 30 days, or a queue, budget for the paid edition outright",
  "scene": "You keep using the free tier and then find you can’t add a 2nd agent and last month’s chat logs are gone — upgrading is forced by the limits, so it’s better to pick the paid edition by your real needs from the start"
 },
 "overage fee": {
  "name": "Overage fee",
  "cat": "Billing method",
  "alias": "meiqia overage fee bot messages 100000 exceed extra fee elastic usage-based 超量费",
  "sym": "When you use bots / AI customer service and conversation volume is high, afraid the bill blows the budget",
  "l1": "After purchasing the Meiqia Enterprise online-customer-service edition it includes 100,000 bot messages, and the excess is charged separately (official blog)",
  "l2": "The seat fee is only the entrance; usage-based items (bot messages / conversation overage) are the long-run uncontrollable bulk. Qiyu has ‘elastic expansion seats’ billed by duration (unit price ~1/3 of the edition price); Zendesk AI auto-resolution is also per-use. These elastic items most need a circuit breaker in the contract",
  "tip": "Compare your estimated monthly bot-message volume × 12 against the 100,000 allowance, work out the overage unit price and annual overage fee; require auto-switch/alert above 150% of baseline in the contract — don’t discover it only when the bill arrives",
  "scene": "The AI bot takes a lot and message volume crosses 100,000; the overage fee quietly accumulates — at year-end it’s higher than the seat fee, the classic trap of not accounting for the overage ledger"
 },
 "addon modules": {
  "name": "Add-on modules (separate purchase)",
  "cat": "Save money · avoid traps",
  "alias": "meiqia tickets bots marketing bot phone callback add-on separate purchase out-of-package extra fee 增值另购",
  "sym": "When you need tickets / bots / voice / omnichannel and find the base edition doesn’t include them",
  "l1": "Meiqia’s ticketing system and several value-added services must be purchased separately, outside the package (historical prices: tickets ￥1,888, support bot Professional ￥3,888 / Enterprise ￥16,888, marketing bot ￥8,888 / ￥22,888, phone callback 800/set/year)",
  "l2": "The stacked extras beyond the seat fee are the bulk of the total. Comparatively, Meiqia’s relative edge is that ‘the standard edition basically includes tickets’ (Qiyu / Sobot / Easemob need a separate ticket purchase in the standard edition); but bots / marketing / voice are add-ons almost everywhere. Industry pattern: a voice-interaction add-on quotes +40–60%, omnichannel ~25% more than single-channel (medium confidence)",
  "tip": "List the modules you truly need (tickets / bots / voice / omnichannel), fold each add-on’s historical quote + the seat fee into an annual TCO before comparing, and don’t be misled by a low seat unit price",
  "scene": "You sign for the seat at 1888, then tickets +1888 and bots +3888 double the actual annual payment — that’s the trap of looking only at the seat unit price without counting the out-of-package add-ons"
 },
 "hidden cost tco": {
  "name": "Hidden cost / TCO",
  "cat": "Save money · avoid traps",
  "alias": "meiqia hidden cost tco total cost of ownership implementation knowledge base data migration maintenance fee training 隐性成本",
  "sym": "When building a three-year budget, afraid there are big pits beyond the explicit quote",
  "l1": "Customer-service system TCO = explicit cost (software/hardware) + hidden cost (implementation/training/ops) + opportunity cost (customer churn / unstable system / low efficiency); software procurement is only about 20% (official · Holly)",
  "l2": "Underestimated hidden items: knowledge-base training ~20k/quarter, data migration 30k–170k, annual maintenance = 15–25% of the initial install fee, a single new requirement can double the cost. You watch the unit price when buying, but the losses are all in the hidden items",
  "tip": "Build a three-year TCO model listing each hidden item (implementation / knowledge-base cold start / migration / maintenance / training); back out the total from ‘software is only 20%’, and don’t treat the first-year quote as the total cost",
  "scene": "You sign at an 80k first-year quote, but the three-year TCO actually approaches 300k — the gap is all in knowledge base / migration / maintenance, the hidden items never written into the quote"
 },
 "bargain": {
  "name": "Negotiation timing & tactics",
  "cat": "Save money · avoid traps",
  "alias": "meiqia negotiation discount deal bargaining haggle cheaper end of quarter year-end how to save 砍价",
  "sym": "When the budget is tight and you want to know whether there’s room to negotiate and how",
  "l1": "The deal price is affected by the one-time seat count purchased, the contract term, and stage promotions — i.e. there is negotiation room by volume / term (chiefmore disclaimer); the official quote sheet is just a reference",
  "l2": "Per the vendor blog’s self-reported cases (xiaoduoai · 2025 · not externally auditable): 80k/year negotiated to 42k (bundling tickets + multilingual, free API), a cross-border e-commerce three-year contract cut 37%, beauty brand 150k cut to 98k saving 34%. Best timing = the end-of-quarter / year-end window when vendors chase targets",
  "tip": "Four tactics: ① requirement bundling (package multiple modules for a discount) ② crack the tiered quote (hit a volume crossover) ③ catch the end-of-quarter / year-end target push ③ promise a customer referral; multiple seats / multi-year signing lock in the discount",
  "scene": "At the end of the quarter you find the salesperson and negotiate a package of tickets + multilingual + multi-year signing, shaving off far more than buying single-item, single-year — the classic way to save by using the vendor’s target-push window"
 },
 "annual monthly": {
  "name": "Annual / monthly",
  "cat": "Save money · avoid traps",
  "alias": "meiqia annual monthly per-year per-month prepaid discount difference worthwhile 年付月付",
  "sym": "When torn between annual and monthly payment and want to know which is more worthwhile",
  "l1": "Meiqia and the industry generally prepay annually. Annual usually has a discount over monthly (‘annual saves 10–20%’ is industry common sense · the direction is credible but the exact ratio’s original source 404s and can’t be verified · marked an estimate)",
  "l2": "Annual locks the price and saves money but carries a year’s risk (hard to get a refund if the product doesn’t fit); monthly is flexible but has a higher unit price, and many domestic customer-service systems (Meiqia / Qiyu) bill only annually anyway. First confirm whether a monthly option exists, then weigh the lock-in discount vs trial-and-error flexibility",
  "tip": "For a new vendor, in the first year aim for ‘annual price + a short trial period / milestone-installment payments’ to balance discount and trial-and-error; don’t pay three years in full up front — keep a 90-day price-change notice + original-plan-option clause",
  "scene": "Sales pushes a three-year full payment for a big discount, but the product isn’t validated yet — at which point you should use annual + milestone payments to balance both the discount and the trial-and-error risk"
 },
 "competitor price": {
  "name": "Competitor price comparison",
  "cat": "Competitor comparison",
  "alias": "meiqia vs udesk qiyu holly sobot zendesk price comparison which is cheaper cost comparison 价格对比",
  "sym": "When comparing prices between Meiqia and competitors and wanting a same-basis comparison",
  "l1": "All four domestic vendors (Meiqia / Qiyu / Sobot / Holly) publish no seat/edition figures on their 2026 official pages, offering only trial/quote; the only two that publish: Udesk’s official tiered IM-account price (from 2,400 yuan/account/year for 1-1000 accounts) and Zendesk’s official USD price (Support Team $19, Suite Professional from $115/seat/month)",
  "l2": "The rumored Meiqia/Qiyu 1888/3888/5888 are all 2022 third-party restatements, not an official current price, and can’t be compared on the same basis. The only things you can compare horizontally are ‘openness’ (Udesk/Zendesk published vs the rest quote) and ‘whether the standard edition includes tickets’ (Meiqia relatively does, Qiyu/Sobot need a separate purchase)",
  "tip": "Don’t clash rumored old prices when comparing; ask each vendor’s official site for a first-hand quote and then compare, or first compare verifiable dimensions like openness / whether tickets are included / billing flexibility",
  "scene": "The boss wants a ‘Meiqia vs Qiyu, which is cheaper’ comparison table — but neither vendor publishes a price, so the honest answer is ‘both must be quoted; rumored old prices aren’t comparable’, then compare openness and standard-config differences"
 },
 "overseas vs domestic": {
  "name": "Overseas vs domestic magnitude",
  "cat": "Competitor comparison",
  "alias": "meiqia vs zendesk overseas domestic alternative going global usd expensive magnitude value 量级",
  "sym": "When considering going global / overseas SaaS and comparing the value of domestic Meiqia",
  "l1": "Zendesk Suite Professional from $115/seat/month (billed annually), add-ons $50/seat/month each; 50 seats with all three add-ons on is about $265/month per seat, ~$159,000/year (third-party derivation). Meiqia Flagship’s historical price is on the order of 5888 yuan/seat/year",
  "l2": "Once overseas SaaS stacks add-ons it’s an order of magnitude above domestic (USD/seat/month vs RMB/seat/year) — this is the core price selling point of a domestic alternative. But the real pain point is often not price but Chinese localization, WeChat / Douyin / Xiaohongshu integration, and compliance (MLPS); a pure price comparison misleads",
  "tip": "A going-global team should choose by target market (many overseas customers → Zendesk international node); a domestic-first team should choose domestic (lower price magnitude + Chinese / WeChat ecosystem integration). Compare the total ledger (including localization / integration cost), not the seat unit price",
  "scene": "Wanting to save, you use a domestic alternative to replace Zendesk, but the overseas-customer experience / compliance can’t keep up — the price-magnitude gap is real, but you must count localization / integration / compliance into the total ledger"
 },
 "contract pitfall": {
  "name": "Contract trap clauses",
  "cat": "Save money · avoid traps",
  "alias": "meiqia contract clause avoid traps price change milestone circuit breaker stress test renewal price hike 合同避坑",
  "sym": "When you’re about to sign a contract and fear renewal price hikes / overage / acceptance disputes",
  "l1": "Trap-avoidance clauses you can copy straight into the procurement contract (ti-net · verified 2025-08): price changes require 90 days’ written notice and retention of the original-plan option; custom development pays by 12 acceptance milestones, keeping cost within ±5%; usage-based billing sets a circuit breaker (auto-switch to a backup plan when conversation volume exceeds 150% of baseline); require a 3000-concurrency stress-test metric",
  "l2": "The international framework also warns of the ‘short-term-contract bait switch’ trap: the vendor lures with a low first-year price, then raises it sharply at contract end. Renewal price hikes, overage bills, and vague acceptance standards are the three main dispute sources — all locked down by contract clauses",
  "tip": "Before signing, write these four (90-day notice / milestone payments / usage circuit breaker / stress-test metric) into the contract; especially keep ‘price change retains the original-plan option’ to prevent renewals being held hostage by price hikes",
  "scene": "You sign at a low first-year price, and in the second year the renewal jumps 50%; you want to switch but migration cost is high — that’s the bait-switch trap of not locking the price-change clause into the contract"
 }
};
window.LABELS = {"miss": "That dimension isn’t indexed — try another keyword, or see the full-dimension reference table below."};
window.FIELDS = [["sym", "When it matters"], ["l1", "Statement & figures"], ["l2", "The real trap"], ["tip", "How to judge / how to save"], ["scene", "Real scenario"]];
window.THEAD = ["Pricing dimension", "Category", "Statement & figures", "The real trap", "How to judge / save"];
