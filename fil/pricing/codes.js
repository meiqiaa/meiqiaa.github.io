window.CODES = {
 "official price public": {
  "name": "Inilalabas ba ng opisyal ang presyo",
  "cat": "Antas ng presyo · historikal na sanggunian",
  "alias": "magkano ang 美洽 opisyal na presyo inilabas nakalistang presyo flexible na presyo humingi ng quote quote meiqia pricing pampublikong opisyal na presyo",
  "sym": "Kapag nais agad makahanap ng isang tiyak na numero na 'magkano ang 美洽'—malalaman na hindi ito talaga ibinibigay ng opisyal",
  "l1": "Opisyal na 2026 ang 美洽 ay hindi naglalabas ng numerikong presyo: ang meiqia.com/pricing nang sinubukan ay may button lamang na «libreng trial / mag-iskedyul ng demo», walang anumang numero; opisyal na tindig=«flexible na presyo·batay sa bilang ng upuan/dami ng mensahe/kombinasyon ng module»",
  "l2": "Ang apat na antas na ¥1888/3888/5888 na makikita sa internet ay lahat historikal na sipi ng third party (36氪/企服汇) noong 2022, hindi opisyal na kasalukuyang presyo. Ito ang pinakamalaking bitag sa kaisipan: gumagamit ang user ng lumang presyo sa negosasyon, sapat na sabihin ng vendor na 'inayos na ang presyo' para pawalang-bisa ito. Pareho sa buong industriya—ang opisyal na pahina ng 七鱼/智齿/合力 ay hindi rin naglalabas ng numero, tanging Udesk/Zendesk ang bukas",
  "tip": "Para sa kasalukuyang presyo iisa lang ang daan: gamitin ang tunay na bilang ng upuan sa pamamagitan ng libreng trial ng meiqiaa.com + humingi ng quote para sa diretsong presyo; ituring munang historikal na sanggunian ang anumang 'talahanayan ng presyo ng 美洽' na kumakalat, tanungin kung anong taon ito",
  "scene": "Naghahanap ng 'magkano ang 美洽' nais ng isang tiyak na numero, lumabas na hindi naglalabas ng presyo ang opisyal na site, bawat site ay nagkokopya ng lumang presyo 2022—kaya tinuturuan ka ng tool na ito kung paano kalkulahin/humingi ng quote, hindi binibigyan ka ng pekeng tiyak na numero na mag-e-expire"
 },
 "version price": {
  "name": "Presyo bawat bersyon (historikal na sanggunian)",
  "cat": "Antas ng presyo · historikal na sanggunian",
  "alias": "presyo ng 美洽 bersyon bersyong Propesyonal bersyong Enterprise bersyong Flagship experience na bersyon 1888 3888 5888 taunang bayad sa upuan",
  "sym": "Kapag nais malaman ang humigit-kumulang na laki ng bawat bersyong Propesyonal/Enterprise/Flagship",
  "l1": "Apat na antas ng historikal na sipi (2022·hindi opisyal na kasalukuyang presyo): experience na bersyon ￥0, Propesyonal ￥1,888, Enterprise ￥3,888, Flagship ￥5,888 bawat upuan/taon; bersyong Platform/Grupo kailangang kumonsulta para sa custom",
  "l2": "Ang apat na antas na ito ay pare-pareho sa iba't ibang pinagkunan (36氪 2022+chiefmore 2017) pero ang opisyal na pahina ngayon ay hindi na naglalabas ng numero, hindi matiyak kung ito pa rin ba ang kasalukuyang presyo 2026. Ang Propesyonal ay para sa maliliit na startup, ang Enterprise ay para sa SME sa lahat ng senaryo, ang Flagship ay para sa katamtaman-malaki kasama ang propesyonal na serbisyo ng customer success",
  "tip": "Ituring lamang bilang reperensya ng laki ('ilang libo bawat upuan bawat taon'); huwag gawing pangako ng kasalukuyang presyo ang 1888, humingi ng tunay na presyo sa opisyal na site batay sa tunay na bilang ng upuan+haba ng kontrata",
  "scene": "Kapag tinatantya ang badyet gamitin ang apat na antas upang tantyahin ang laki (hal. 10 upuan na bersyong Propesyonal≈mas mababa sa 2万/taon sa lumang sanggunian), pero ang opisyal na pagbili ay kailangang humingi ng kasalukuyang presyo sa opisyal na site"
 },
 "starting price": {
  "name": "Threshold ng panimulang presyo",
  "cat": "Antas ng presyo · historikal na sanggunian",
  "alias": "美洽 panimulang presyo minimum minimum order 3500 threshold ng bayad minimum na pagbili",
  "sym": "Maliit na kliyente na bibili lang ng isa-dalawang upuan, nag-aalala kung katugma ng presyo bawat upuan ang transaksyon",
  "l1": "Panimulang presyo ng bayad na package ng 美洽 ￥3,500 (pahina ng price ng 36氪·threshold ng transaksyon/minimum order)",
  "l2": "Ibig sabihin kahit ang nakalistang presyo ng isang upuan ay 1888, ang maliit na kliyente ay hindi tiyak na makakapag-transaksyon sa presyo bawat upuan, kailangan munang umabot sa threshold ng panimulang presyo. Karaniwan sa industriya ang trick ng store value/minimum na pagbili (七鱼 ay minsang ireklamo ng user na minimum store value 1万·indibidwal na kaso 2021), tanungin ang minimum na pagbili bago mag-order",
  "tip": "Para sa maliit na order tanungin muna ang threshold ng panimulang presyo/minimum na pagbili at kung pwede batay sa tunay na bilang ng upuan; kung sapat ang libreng bersyon gamitin muna ang libreng bersyon, huwag bumili ng sobrang upuan para lang umabot sa threshold",
  "scene": "Nais bumili ng 1 upuan lang para subukan, lumabas na kailangang umabot sa panimulang presyo ¥3500—sa puntong ito kailangang suriin kung sapat ang libreng bersyon, o mas matipid ang ilang upuan nang sabay-sabay"
 },
 "billing mode": {
  "name": "Modelo ng paniningil",
  "cat": "Paraan ng paniningil",
  "alias": "modelo ng paniningil 美洽 bawat upuan bawat usapan bawat dami ng mensahe concurrency halo paano sumisingil taunan",
  "sym": "Kapag nag-aalinlangan bawat upuan o bawat dami, takot maling pumili ng antas at maaksaya",
  "l1": "Ang 美洽 ay batay sa kombinasyon bawat upuan (bawat upuan bawat taon)+function module, taunang prepaid. Apat na uri ng pangunahing paniningil: bawat upuan (fixed·mahuhulaan ang gastos pero may panganib ng pagkawalang-gamit/pagpapalawak), bawat usapan/dami ng tawag (batay sa dami·angkop sa malaking pagbabago-bago pero peak ay hindi makontrol), bawat function module, halo (batayang bayad sa upuan+elastic resource package)",
  "l2": "Maling pumili ng antas, maaksaya sa dalawang dulo: maraming upuang walang ginagawa=sayang ang fixed na bayad, batay-sa-dami sa peak=tagibang account. Empirikal na threshold (espesipikong modelo·hindi unibersal): <2500 usapan/buwan mas mainam ang batay-sa-dami, >2500 mas mainam ang bawat upuan",
  "tip": "Gamitin ang iyong tunay na buwanang dami ng usapan/utilisasyon ng upuan para isama sa puntong threshold; ang malaking pagbabago-bago ay unahin ang halo (batayang upuan+elastic package) at humingi ng circuit breaker batay sa dami (awtomatikong lumipat kapag lumampas sa 150% baseline)",
  "scene": "Kapag malaking promo ng e-commerce ang dami ng usapan ay dumarami nang ilang ulit, ang puro paniningil bawat usapan ay nagpapasabog sa account—ang kasong ito ay dapat halong paniningil + elastic package + circuit breaker, hindi puro bawat upuan o puro batay sa dami"
 },
 "free tier limit": {
  "name": "Limitasyon ng libreng bersyon",
  "cat": "Paraan ng paniningil",
  "alias": "libreng bersyon 美洽 libre ba experience na bersyon limitasyon ilang ahente 30 araw pila magkano libre",
  "sym": "Kapag nais makatipid sa libreng bersyon, pero takot na masyadong binawasan ang feature",
  "l1": "Matinding limitasyon ng libre (experience) na bersyon ng 美洽 na kumpirmado ng opisyal (opisyal na blog 2021): 1 ahente lang, isang ahente ay naglilingkod lamang sa 2 bisita nang sabay, walang pila ng kliyente, kasaysayan ng chat ay iniimbak lamang nang 30 araw",
  "l2": "Ito ang tipikal na trick ng 'murang/libreng batayang bersyon para mang-akit, ang mahalagang kakayahan (multi-upuan/imbakan ng record/pila) ay sinisingil mamaya'—anumang medyo pormal na team, may mahigit 2 ahente o kailangang mag-imbak ng usapan ay napipilitang mag-upgrade nang bayad",
  "tip": "Ang libreng bersyon ay angkop lamang sa personal/napakagaan; sa pagsusuri direktang itugma ang 4 na limitasyong ito—basta kailangan mo ng multi-upuan, imbakan ng usapan >30 araw o pila, direktang kalkulahin ang badyet batay sa bayad na bersyon",
  "scene": "Gamit nang gamit ang libreng bersyon natuklasan na hindi makapasok ang ika-2 ahente, nawala ang kasaysayan ng chat noong nakaraang buwan—sa puntong ito ang pag-upgrade nang bayad ay pinilit ng limitasyon, mas mabuti pang sa simula pa lang ay piliin ang bayad batay sa tunay na pangangailangan"
 },
 "overage fee": {
  "name": "Bayad sa labis",
  "cat": "Paraan ng paniningil",
  "alias": "bayad sa labis 美洽 mensahe ng bot 10万条 lumampas dagdag na bayad elastic batay sa dami",
  "sym": "Kapag gumagamit ng bot/AI customer service, malaki ang dami ng usapan, takot lumampas sa badyet ang account",
  "l1": "Ang bersyong Enterprise ng 美洽 matapos bilhin ang live chat ay may kasamang quota na 100,000 mensahe ng bot, ang bahaging lumampas ay kailangang bayaran nang hiwalay (opisyal na blog)",
  "l2": "Ang bayad sa upuan ay daan-pasukan lamang, ang mga item na batay sa dami (mensahe ng bot/labis na usapan) ang nagiging malaking bahaging hindi makontrol sa pangmatagalan. Ang 七鱼 ay may 'elastic na pagpapalawak ng upuan' na sinisingil bawat tagal (presyo bawat unit mga 1/3 ng presyo ng bersyon); ang Zendesk AI auto-resolve ay sinisingil din bawat pagkakataon. Ang mga elastic na item na ito ang pinakakailangang lagyan ng circuit breaker sa kontrata",
  "tip": "Ihambing ang tinatayang buwanang dami ng mensahe ng bot × 12 sa quota na 10万条, kalkulahin ang presyo bawat unit sa labis at taunang bayad sa labis; sa kontrata humingi ng awtomatikong paglipat/alerto kapag lumampas sa 150% baseline, huwag hintayin pa lumabas ang account bago mapansin",
  "scene": "Marami ang sinasagot ng AI bot, ang dami ng mensahe ay sumisingaw sa 10万条, ang bayad sa labis ay tahimik na umiipon—sa pagkalkula sa katapusan ng taon lumabas na mas mataas pa sa bayad sa upuan, ito ang tipikal na bitag ng hindi pagkalkula sa libro ng labis"
 },
 "addon modules": {
  "name": "Value-added module na binibili nang hiwalay",
  "cat": "Makatipid · iwasan ang bitag",
  "alias": "ticket 美洽 bot marketing bot telepono callback value-added bili nang hiwalay labas ng pakete dagdag na bayad",
  "sym": "Kapag kailangan ng ticket/bot/boses/omnichannel, lumabas na hindi kasama sa batayang bersyon",
  "l1": "Ang ticket system ng 美洽 at maraming value-added na serbisyo ay kailangang bayaran nang hiwalay sa labas ng pakete (historikal na presyo: ticket ¥1,888, customer service bot bersyong Propesyonal ¥3,888/bersyong Enterprise ¥16,888, marketing bot ¥8,888/¥22,888, telepono callback 800/套/年)",
  "l2": "Ang dagdag na item sa labas ng bayad sa upuan ang nagiging malaking bahagi ng kabuuang presyo. Sa horisontal ang relatibong bentahe ng 美洽 ay 'ang istandard na bersyon ay batayang may kasamang ticket' (七鱼/智齿/环信 istandard na bersyon ay kailangang bilhin nang hiwalay ang ticket); pero ang bot/marketing/boses ay halos bawat vendor ay binibili nang hiwalay. Pattern ng industriya: ang quote ng pagdagdag ng interaksyon ng boses +40-60%, ang omnichannel ay mga 25% na mas mahal kaysa single channel (katamtamang tiwala)",
  "tip": "Ilista nang malinaw ang module na talagang kailangan mo (ticket/bot/boses/omnichannel), kalkulahin ang historikal na quote ng bawat dagdag na item + bayad sa upuan upang maging taunang TCO bago ihambing ang presyo, huwag malinlang ng mababang presyo bawat upuan",
  "scene": "Naakit sa presyo ng upuan na 1888 kaya lumagda, lumabas na ticket +1888, bot +3888, ang aktwal na taunang bayad ay nadoble—ito ang bitag ng titigan lang ang presyo bawat upuan, hindi kinalkula ang pagbili sa labas ng pakete"
 },
 "hidden cost tco": {
  "name": "Nakatagong gastos / TCO",
  "cat": "Makatipid · iwasan ang bitag",
  "alias": "nakatagong gastos 美洽 tco kabuuang halaga ng pagmamay-ari implementasyon knowledge base paglilipat ng datos bayad sa pagpapanatili pagsasanay",
  "sym": "Kapag gumagawa ng tatlong-taong badyet, takot na may malaking bitag sa labas ng eksplisitong quote",
  "l1": "TCO ng customer service system = eksplisitong gastos (software/hardware) + nakatagong gastos (implementasyon/pagsasanay/operasyon) + opportunity cost (churn ng kliyente/sistema na hindi stable/mababang kahusayan ng tauhan); ang gastos sa pagbili ng software ay halos 20% lamang (opisyal·合力亿捷)",
  "l2": "Mga minamaliit na nakatagong item: pagsasanay ng knowledge base mga 2万/季, paglilipat ng datos 3-17万, taunang bayad sa pagpapanatili=15-25% ng paunang gastos sa instalasyon, isang bagong pangangailangan lang ay maaaring magdoble ng gastos. Sa pagbili titigan ang presyo bawat unit, sa pagkalugi lahat ay nasa nakatagong item",
  "tip": "Magtayo ng tatlong-taong TCO model na inililista ang nakatagong item isa-isa (implementasyon/cold start ng knowledge base/paglilipat/pagpapanatili/pagsasanay); gamitin ang 'gastos sa software ay 20% lamang' para kalkulahin pabalik ang kabuuan, huwag gawing kabuuang gastos ang quote sa unang taon",
  "scene": "Quote sa unang taon na 8万 kaya lumagda, sa aktwal na pagkalkula ng tatlong taon ang TCO ay malapit sa 30万—ang pagkakaiba ay nasa nakatagong item tulad ng knowledge base/paglilipat/pagpapanatili na hindi nakasulat sa quote sheet"
 },
 "bargain": {
  "name": "Panahon at estratehiya sa pakikipagtawaran",
  "cat": "Makatipid · iwasan ang bitag",
  "alias": "pakikipagtawaran 美洽 diskwento bawas negosasyon nego mura katapusan ng quarter katapusan ng taon paano makatipid",
  "sym": "Kapag limitado ang badyet, nais malaman kung may puwang sa pagtawad at paano tumawad",
  "l1": "Ang presyo ng transaksyon ay naiimpluwensyahan ng bilang ng upuan na binili nang sabay, haba ng kontrata, hakbang-hakbang na promo—kaya may puwang sa pagtawad batay sa dami/haba (disclaimer ng chiefmore); ang opisyal na quote table ay sanggunian lamang",
  "l2": "Ayon sa case study ng sariling blog ng vendor (xiaoduoai·2025·hindi maa-audit nang panlabas): 8万/taon natawaran maging 4.2万 (ipinakete ang ticket+multilingguwal regalo na API), ang tatlong-taong kontrata ng cross-border e-commerce ay naibaba ng 37%, kosmetiko 15万 natawaran maging 9.8万 nakatipid 34%. Pinakamahusay na panahon=bintana ng katapusan ng quarter/katapusan ng taon kapag hinahabol ng vendor ang target",
  "tip": "Apat na estratehiya: ①pagbubundle ng pangangailangan (ipakete ang multi-module humingi ng diskwento) ②buwagin ang tiered na quote (tipunin hanggang sa threshold ng laki) ③abutin ang katapusan ng quarter/katapusan ng taon kapag hinahabol ang target ④pangako ng referral ng kliyente; multi-upuan/multi-taong kontrata ay nagla-lock ng diskwento",
  "scene": "Sa katapusan ng quarter hanapin ang sales, ipakete ang ticket+multilingguwal+multi-taong kontrata sa nego, mas mababa nang malaki kaysa bumili nang isahan sa isang taon—ito ang tipikal na paraan ng pagtitipid na gumagamit ng bintana ng vendor na humahabol sa target"
 },
 "annual monthly": {
  "name": "Taunang / buwanang bayad",
  "cat": "Makatipid · iwasan ang bitag",
  "alias": "taunang bayad 美洽 buwanang bayad bawat taon bawat buwan prepaid diskwento pagkakaiba matipid",
  "sym": "Kapag nag-aalinlangan sa taunang o buwanang bayad, nais malaman kung alin ang mas matipid",
  "l1": "Ang 美洽 at industriya sa pangkalahatan ay taunang prepaid. Ang taunang bayad ay karaniwang mas may diskwento kaysa buwanan ('taunang bayad nakatipid 10-20%' ay karaniwang kaalaman ng industriya·ang direksyon ay mapagkakatiwalaan pero ang eksaktong ratio na orihinal na pinagkunan ay 404 hindi maberipika·markado tantya)",
  "l2": "Ang taunang bayad ay nagla-lock ng presyo at nakakatipid pero kailangang pasanin ang panganib ng isang taon (kapag hindi bagay ang produkto mahirap ang refund); ang buwanan ay flexible pero mataas ang presyo bawat unit, at maraming domestikong customer service system (美洽/七鱼) ay talagang taunan lamang. Tiyakin muna kung may opsyong buwanan, saka timbangin ang diskwento sa pag-lock ng presyo vs flexibilidad sa trial-and-error",
  "tip": "Para sa bagong supplier sa unang taon maaaring subukan ang 'taunang presyo + maikling trial period/hakbang-hakbang na milestone na pagbabayad' na nagbabalanse ng diskwento at trial; huwag agad full payment ng tatlong taon, mag-iwan ng clause na 90 araw na abiso sa pagbabago ng presyo + karapatang pumili ng orihinal na plano",
  "scene": "Mariing itinutulak ng sales ang full payment ng tatlong taon para sa malaking diskwento, pero hindi pa na-verify ang produkto—sa puntong ito dapat gamitin ang taunang bayad+milestone na pagbabayad, na nagbabalanse ng diskwento at panganib sa trial-and-error"
 },
 "competitor price": {
  "name": "Paghahambing ng presyo ng kakompetensya",
  "cat": "Paghahambing ng kakompetensya",
  "alias": "美洽 vs udesk 七鱼 合力亿捷 智齿 zendesk paghahambing ng presyo alin mas mura paghahambing ng singil",
  "sym": "Kapag inihahambing ang presyo sa pagitan ng 美洽 at kakompetensya, nais ng paghahambing na parehong sanggunian",
  "l1": "Ang apat na domestikong vendor (美洽/七鱼/智齿/合力) opisyal na pahina 2026 ay lahat hindi naglalabas ng halaga ng upuan/bersyon, nag-aalok lamang ng trial/humingi ng quote; dalawa lang ang bukas: tiered na presyo ng IM account ng opisyal na Udesk (1-1000 account simula 2400元/账号/年), presyong USD ng opisyal na Zendesk (Support Team $19, Suite Professional simula $115/坐席/月)",
  "l2": "Ang kumakalat na 美洽/七鱼 1888/3888/5888 ay lahat lumang sipi ng third party 2022, hindi opisyal na kasalukuyang presyo, hindi direktang maihahambing sa parehong sanggunian. Ang maihahambing nang horisontal ay 'antas ng pagiging bukas' lamang (Udesk/Zendesk bukas vs ang iba humingi ng quote) at 'may kasama bang ticket ang istandard na bersyon' (美洽 relatibong may kasama, 七鱼/智齿 kailangang bilhin nang hiwalay)",
  "tip": "Huwag ihambing ang presyo sa pamamagitan ng pag-aaway ng kumakalat na lumang presyo; humingi ng quote sa opisyal na site ng bawat vendor para sa diretsong presyo saka ihambing, o ihambing muna ang antas ng pagiging bukas/may kasama bang ticket/flexibilidad ng paniningil—mga dimensyong maberipika",
  "scene": "Humihingi ang boss ng comparison table na '美洽 vs 七鱼 alin mas mura'—pero ang dalawang vendor ay opisyal na hindi naglalabas ng presyo, ang matapat na sagot ay 'pareho silang kailangang humingi ng quote, ang kumakalat na lumang presyo ay hindi maihahambing', saka ihambing ang antas ng pagiging bukas at pagkakaiba ng istandard na feature"
 },
 "overseas vs domestic": {
  "name": "Laki ng dayuhan vs domestiko",
  "cat": "Paghahambing ng kakompetensya",
  "alias": "美洽 vs zendesk dayuhan domestiko kapalit go global dolyar mahal laki ratio ng presyo",
  "sym": "Kapag pinag-iisipan ang go global/dayuhang SaaS, inihahambing ang ratio ng presyo ng domestikong 美洽",
  "l1": "Zendesk opisyal na Suite Professional simula $115/坐席/月 (taunan), add-on item tig-$50/坐席/月; 50 upuan lahat ng tatlong add-on package na binuksan bawat upuan mga $265/buwan, mga $159,000/taon (deduksyon ng third party). Ang bersyong Flagship ng 美洽 historikal na presyo ay nasa laki na 5888 yuan/upuan/taon",
  "l2": "Ang dayuhang SaaS matapos idagdag ang add-on ay magkaibang orde ng laki sa domestiko (USD/upuan/buwan vs RMB/upuan/taon)—ito ang pangunahing presyong selling point ng domestikong kapalit. Pero ang tunay na sakit ay madalas hindi ang presyo, kundi ang lokalisasyon sa Mandarin, integrasyon ng WeChat/Douyin/Xiaohongshu, pagsunod (等保), ang puro paghahambing ng presyo ay nakaliligaw",
  "tip": "Ang go global na team ay pumili batay sa target na pamilihan (maraming dayuhang kliyente gamitin ang internasyonal na node ng Zendesk); ang pangunahing domestiko ay piliin ang domestiko (mababang laki ng presyo + integrasyon ng Mandarin/WeChat ecosystem). Ang inihahambing ay ang kabuuang libro (kasama ang gastos sa lokalisasyon/integrasyon) hindi ang presyo bawat upuan",
  "scene": "Para sa mura nais gamitin ang domestiko kapalit ng Zendesk, lumabas na hindi natutugunan ang karanasan/pagsunod sa panig ng dayuhang kliyente—tunay ang pagkakaiba ng laki ng presyo, pero dapat kalkulahin ang kabuuan kasama ang lokalisasyon/integrasyon/pagsunod"
 },
 "contract pitfall": {
  "name": "Clause ng kontrata laban sa bitag",
  "cat": "Makatipid · iwasan ang bitag",
  "alias": "kontrata 美洽 clause laban sa bitag pagbabago ng presyo milestone circuit breaker load test pag-renew pagtaas ng presyo",
  "sym": "Kapag malapit nang lumagda sa kontrata, takot sa pagtaas ng presyo sa renewal/labis/away sa pagtanggap",
  "l1": "Mga clause laban sa bitag na maaaring direktang kopyahin sa kontrata ng pagbili (ti-net·na-verify 2025-08): ang pagbabago ng presyo ay kailangang may nakasulat na abiso 90 araw bago at pinapanatili ang karapatang pumili ng orihinal na plano; ang custom development ay binabayaran bawat 12 punto ng pagtanggap (milestone), kontrolin ang gastos sa ±5%; ang paniningil batay sa dami ay lagyan ng circuit breaker (kapag lumampas sa 150% baseline ang dami ng usapan awtomatikong lumipat sa backup na plano); humingi ng indikator na load test na 3000 concurrency",
  "l2": "Ang internasyonal na framework ay nagpapaalala rin sa bitag na 'pain ng pang-akit na maikling kontratang lumipat': mababang presyo ng supplier sa unang taon, malaking pagtaas ng presyo kapag natapos ang kontrata. Ang pagtaas ng presyo sa renewal, labis na account, malabong istandard ng pagtanggap ay tatlong pinagmumulan ng away, lahat ay umaasa sa clause ng kontrata para i-lock",
  "tip": "Bago lumagda isulat ang apat na bagay na ito (90 araw na abiso/milestone na pagbabayad/circuit breaker batay sa dami/indikator ng load test) sa kontrata; lalo na mag-iwan ng 'pagbabago ng presyo pinapanatili ang karapatang pumili ng orihinal na plano' para iwasan na maisanla sa pagtaas ng presyo ang renewal",
  "scene": "Mababang presyo sa unang taon kaya lumagda, sa ikalawang taon ang renewal ay direktang tumaas ng 50%, nais palitan pero mataas ang gastos sa paglilipat—ito ang bitag na pang-akit na lumipat dahil hindi na-lock sa kontrata ang clause ng pagbabago ng presyo"
 }
};
window.LABELS = {"miss": "Hindi pa nakalista ang dimensyong ito—subukan ang ibang keyword, o tingnan ang talahanayan ng paghahambing sa lahat ng dimensyon sa ibaba."};
window.FIELDS = [["sym", "Kailan ito mahalaga"], ["l1", "Sanggunian at halaga"], ["l2", "Tunay na dahilan ng pag-iwas sa bitag"], ["tip", "Paano husgahan / paano makatipid"], ["scene", "Tunay na senaryo"]];
window.THEAD = ["Dimensyon ng singil", "Kategorya", "Sanggunian at halaga", "Tunay na dahilan ng pag-iwas sa bitag", "Paano husgahan / makatipid"];
