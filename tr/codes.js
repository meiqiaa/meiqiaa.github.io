window.CODES = {
 "billing": {
  "name": "Faturalama modeli",
  "cat": "Maliyet / faturalama",
  "alias": "faturalama fiyat koltuk gorusme eszamanlilik billing saas resolution meiqia",
  "sym": "Trafiğin belirgin zirveleri olduğunda veya ekip boyutu sabit olmadığında, yanlış faturalama modeli maliyeti doğrudan büyütür",
  "l1": "Üç ana model: koltuk başına (ekip kararlıyken en iyi, öngörülebilir bütçe), görüşme / çağrı başına (zirve e-ticareti için daha esnek), eşzamanlılık başına (yoğun zirveler). SaaS genelde koltuk/yıl, ~¥800-5000/koltuk/yıl",
  "l2": "Birim fiyat değil, faturalamanın dalgalanmalarınıza uyup uymadığı esastır. Çözüm başına ücret değişken firmalara dosttur ama zirvede patlayabilir - bir SaaS '11.11'de YZ faturası normalin 8 katıydı, bütçe kontrolden çıktı' dedi; çağrı başına asgari ücret olduğundan günde <10k sohbette daha pahalı",
  "tip": "Kararlı trafik → koltuk başına; değişken ama öngörülebilir → yıllık / kademeli koltuk; korkunç zirveler → indirim için esnek paket alın",
  "scene": "İndirimde günlük sohbetler 20k'dan 350k'ya fırlar; görüşme / çözüm başına patlar, kademeli koltuk daha kararlıdır"
 },
 "price budget": {
  "name": "Fiyat & bütçe",
  "cat": "Maliyet / faturalama",
  "alias": "fiyat ne kadar butce teklif yillik kademe ucuz pahali 1888",
  "sym": "Bütçe belirlerken ve teklifleri karşılaştırırken önce 'kademeyi' hizalayın, kademeler arası karşılaştırmayın",
  "l1": "2026 üç kademe: temel standart SaaS ~¥30k-150k/yıl (KOBİ, 2025'e göre ~%5-10 düşük); büyüme özelleştirmesi ~¥200k-800k/yıl (orta-büyük, ERP / CRM bağlar); amiral gemisi full-stack ajan ¥1M+/yıl (gruplar, ~%15-20 yüksek)",
  "l2": "Yerli vs uluslararası fark büyük: uluslararası SaaS koltuk/ay (~$115-169/koltuk/ay); 100 koltuk ~¥1,5-2M/yıl, yerlinin 2-3 katı. Meiqia koltuk başına kademeli: Pro ~¥1888, Enterprise ~¥3888, Flagship ~¥5888/koltuk/yıl, düşük eşikli başlangıç için ücretsiz katmanla",
  "tip": "Önce ölçeğe göre kademeyi kilitleyin (KOBİ → temel, orta-büyük → büyüme), sonra kademe içinde özellik & hizmet karşılaştırın; ilk yıl indirimine takılmayın",
  "scene": "100 koltuk için en ucuz teklifi aldılar; gizli ücretler yığıldı ve 3 yıllık toplam beklentiyi çok aştı"
 },
 "hidden cost": {
  "name": "Gizli maliyet / TCO",
  "cat": "Maliyet / faturalama",
  "alias": "tco gizli toplam kurulum api olcekleme ozellestirme token disa aktarma",
  "sym": "Yalnızca aboneliği karşılaştırmak 'buzdağına' çarpmanın en kolay yolu - sonraki ücretler büyük kısımdır",
  "l1": "Yazılım alımı TCO buzdağının (toplam sahip olma maliyeti) yalnızca görünen ucudur; kurulum, işletme, yükseltme ve risk kayıplarını 3 yıllık TCO'ya katın",
  "l2": "Bilgi tabanı soğuk başlangıcı, veri etiketleme/temizleme, özelleştirme, arayüz hata ayıklama çoğu kez yazılım ücretinin 3-5 katı - 'ucuza almak neredeyse her zaman işletmesi pahalı demektir'. Sözleşme şunları yazmalı: zirve ölçekleme birim fiyatı, API çağrı ücreti, adam-gün özelleştirme, token aşımı, veri dışa aktarma ücreti",
  "tip": "3 yıllık TCO modeli kurun ve sağlayıcıya kalem kalem teklif verdirin; üç değişken maliyeti izleyin: token, arayüz aşımı, veri dışa aktarma",
  "scene": "100 koltukluk bir firma 3 yıllık TCO'yu ~¥2,9M hesapladı, ilk yıl teklifi yalnızca ¥800k'ydı - fark: kurulum / bilgi tabanı / arayüzler"
 },
 "free trial": {
  "name": "Ücretsiz katman / deneme / PoC",
  "cat": "Maliyet / faturalama",
  "alias": "ucretsiz deneme poc test demo deneyim 14 gun",
  "sym": "İmzadan önce gerçek trafikle doğrulayın, yalnızca toplantı odasındaki satış demosuyla değil",
  "l1": "Çoğu sağlayıcıda ücretsiz katman / deneme var (Meiqia'da da); düşük eşikle başlayın, akışı çalıştırın, sonra yükseltin; gerçek eşzamanlılıkta yanıt hızını ölçmek için 7-15 günlük deneme isteyin",
  "l2": "Demoya kanmayın - demo ortamları genelde ideal veri kümeleri, temiz koşullar, düşük eşzamanlılık (<100 QPS). PoC'yi kendi 7 günlük üretim günlüklerinizde (gürültü, lehçe, yazım hatalarıyla) çalıştırın; çekirdek senaryo görev tamamlama >%70 olmalı",
  "tip": "Sağlayıcının 'altın veri kümesi' değil, gerçek anonimleştirilmiş veride PoC; ayrıca yüksek eşzamanlılık, devir sürekliliği ve bilinmeyen sorularda zarif düşüşü test edin",
  "scene": "Odada 100 oturumluk demo anında yanıtladı, oracıkta imzaladılar; indirimde gecikme çığına çarptılar - demo onları kandırdı"
 },
 "omnichannel": {
  "name": "Omnichannel",
  "cat": "Kanal / entegrasyon",
  "alias": "omnichannel cokkanalli masa toplama silo 20 kanal kimlik",
  "sym": "Müşteriler web / WeChat / Douyin / Xiaohongshu / uygulamaya dağıldığında ve temsilciler sistem değiştirip mesaj kaçırdığında",
  "l1": "Tek masanın web / H5, WeChat ekosistemi, Douyin / Xiaohongshu, uygulama SDK'si ve diğer ana temas noktalarını alıp almadığını kontrol edin. Meiqia 20+ kanalı tek masada toplar, kaynağı otomatik etiketler ve müşteri kimliğini kanallar arası birleştirir (tek profil, tam izlenebilir)",
  "l2": "iResearch 2025 akıllı hizmet raporuna göre firmaların ~%78'i kanal siloları yüzünden sistem değiştirir, yanıt verimi ~%60 düşer, kayıp ~%38'e ulaşır. Gerçek omnichannel üçünü de gerektirir - mesaj toplama + birleşik kimlik + veri silosu yok; veriyi birleştirmeden toplamak yalnızca 'mesaj kutusu'dur",
  "tip": "Ana kanallarınızın yerel desteğini (özellikle Douyin / Xiaohongshu DM'leri) ve aynı müşterinin kanallar arası otomatik birleşip birleşmediğini doğrulayın",
  "scene": "Temsilciler günde 5-8 arka uç değiştirip zamanlarının ~%30'unu boşa harcar; tek masa alım verimini belirgin yükseltir"
 },
 "wechat": {
  "name": "WeChat entegrasyonu",
  "cat": "Kanal / entegrasyon",
  "alias": "wechat resmi hesap work wechat mini program channels scrm entegrasyon ozel alan",
  "sym": "Ana müşterileriniz WeChat ekosisteminde yaşadığında (Resmi Hesap / Work WeChat / Mini Program / Channels)",
  "l1": "Meiqia tüm WeChat ekosistemini bağlar: Resmi Hesap, Work WeChat, Mini Program ve Channels DM'leri tek alımda; OA / Mini Program arka ucunda Meiqia arayüzünü yetkilendirdikten sonra mesajlar kendiliğinden eşitlenir, ~3 dakikada aktif",
  "l2": "WeChat yalnızca 'mesaj almak' değil - SCRM'ye bakın: Work-WeChat kişi yönetimi, etiketleme, toplu erişim, tara-ekle ile kaynak etiketi - kamusal sohbetleri özel kişilere çevirmek değerdir",
  "tip": "'OA hizmeti' ve 'Work-WeChat SCRM' ihtiyaçlarını ayırın; özel tekrar satış için kişiler / etiketler / SOP'a odaklanın",
  "scene": "OA sohbetleri yanıtlanır ama insanlar tutulmaz; Work-WeChat SCRM ile yüksek niyetli müşteriler tekrar satış için kişi olarak kaydedilir"
 },
 "douyin xiaohongshu": {
  "name": "Douyin / Xiaohongshu",
  "cat": "Kanal / entegrasyon",
  "alias": "douyin xiaohongshu kuaishou dm kisa video kamusal edinim sosyal yorum",
  "sym": "Douyin / Xiaohongshu / Kuaishou reklamlarıyla edinim yaparken ve DM hacmi yüksekken",
  "l1": "Meiqia Douyin, Kuaishou, Xiaohongshu, Weibo, Toutiao vb.'den DM ve yorum sorgularını toplar: 'Ayarlar - Alım - Kısa Video'da kurumsal hesabı bağlayın, DM / yorumlar masaya otomatik eşitlenip doğrudan yanıtlanır",
  "l2": "Kısa video platformu API politikaları sık değişir (Douyin / Xiaohongshu kural güncellemeleri) - sağlayıcının hızlı uyum sağladığını doğrulayın; kamusal edinimin anahtarı 'DM toplama + potansiyel yakalama kartı + özel alana otomatik yönlendirme', yoksa potansiyeller sızar",
  "tip": "Yorum eşitleme, anahtar kelime otomatik yanıt ve potansiyel yakalama kartlarını doğrulayın; politika değişikliklerine ne kadar hızlı uyduklarını sorun",
  "scene": "Douyin kurumsal hesap DM'leri temsilci kapasitesini aşar; bot yüksek niyetli kullanıcıları iletişim bırakmaya yönlendirir, sonra insanlar takip eder"
 },
 "ai bot": {
  "name": "YZ botu",
  "cat": "YZ / yetenek",
  "alias": "yz bot chatbot akilli hizmet llm otomatik yanit 7x24 agent",
  "sym": "YZ'nin tekrarlayan sorguları yönlendirmesini ve personel maliyetini düşürmesini istediğinizde",
  "l1": "YZ'nin 7x24 self-servis, niyet tanıma, kanal başına çoklu bot alımı ve insan-YZ devri yapıp yapmadığını kontrol edin. Meiqia'nın YZ botu LLM niyet tanıma + pazarlama otomasyonu + görev odaklılığa (sorgu / öneri) dayanır; sağlayıcı ~%80+ personel tasarrufu iddia eder (gerçek yapılandırmaya bağlı)",
  "l2": "2026 en iyi sistemler 'anla-ara-yanıtla'dan dört adımlı döngüye 'anla-çağır-yürüt-biriktir' evrildi: sohbette sipariş sorgulama / adres değiştirme / iade işleme, sadece bağlantı atmak değil. 'Model kültünden' kaçının - soruların %90'ı Einstein düzeyi akıl yürütme değil 'süreci bilen bir uygulayıcı' ister; entegrasyon ~%35 ağırlık taşır, parametrelerin çok üstünde",
  "tip": "GPT mi değil mi ya da parametreleri karşılaştırmayın; 'CRM / ERP'ye bağlanıp gerçekten eyleme geçiyor mu'yu karşılaştırın",
  "scene": "'En güçlü beyne' takıntılı bir CTO; model zekiydi ama iş sistemlerine bağlanmadı - 'üst sınıf bir özür üreteci' oldu"
 },
 "knowledge base": {
  "name": "Bilgi tabanı / RAG",
  "cat": "YZ / yetenek",
  "alias": "bilgi tabani rag graf faq belgeler getirme halusinasyon soguk baslangic dogruluk",
  "sym": "YZ'nin uydurmasından (halüsinasyon) korktuğunuzda ve özel bilgiyi bağlamanız gerektiğinde",
  "l1": "YZ'nin faydası bilgi tabanı kalitesine dayanır, model boyutuna değil. SSS / kılavuz / talepleri getirilebilir bilgiye (RAG) çevirin ve emin değilken güven eşiğiyle devredin. Meiqia bilgi grafiği ve iş sistemlerini sorgulamak için açık arayüzler destekler",
  "l2": "Bilgi tabanı kalitesi > parametre sayısı. Ham genel LLM sık halüsinasyon görür (özel bilginiz yok); 100k karakterlik kılavuza karşı geri çağırma ve kesinlik %85+ olmalı. Bilgi tabanı soğuk başlangıcı ağır iştir - belge temizleme / SSS ayırma / niyet etiketleme - maliyet ve takvime katın",
  "tip": "Sağlayıcıya 'PDF'den bilgi tabanına' tüm süreci yerinde gösterin, süreyi ve ilk doğruluğu ölçün (kurma <3 gün, ilk >%60, bir haftada >%75)",
  "scene": "Bir marka çeyrekte 200 SKU çıkarır; her elle bilgi tabanı güncellemesi 2 hafta sürdü - bitince sezon neredeyse bitmişti"
 },
 "intent recognition": {
  "name": "Niyet tanıma / çözüm",
  "cat": "YZ / yetenek",
  "alias": "niyet tanima dogruluk cozum fcr yonlendirme nps devir cok turlu",
  "sym": "YZ'nin gerçekten faydalı olup olmadığını değerlendirip KPI belirlerken",
  "l1": "Niyet tanıma doğruluğu faydanın anahtar eşiğidir; en iyi sağlayıcılar %95+ iddia eder; karmaşık / çok turlu sohbet, konuşma dili, yazım hatası ve lehçelerde tanımayı kontrol edin",
  "l2": "'Yönlendirme / self-servis oranını' putlaştırmayın - manipüle etmesi en kolay gösteriş metriği (devri gizle, tekrar sordur, zaman aşımında kapat ve yönlendirme %95'i aşar, kullanıcıları çıldırtırken). 2026 altın standardı FCR (ilk temas çözümü, hedef >%65) ve NPS (>30) dengesidir; devir oranını (%15-25) ve ortalama turları (<5) izleyin",
  "tip": "KPI'yi 'yönlendirme'den 'FCR + NPS + temsilci verimliliği'ne değiştirin; tanımayı ~%20 gürültülü gerçek veride PoC edin",
  "scene": "Bir hizmet VP'si yönlendirmeyi %75'ten %92'ye çıkardığıyla övündü; bedeli %1 öfkeli müşterinin insan tarafında sıraya girip en iyi temsilcileri boğmasıydı"
 },
 "integration": {
  "name": "Entegrasyon / API",
  "cat": "YZ / yetenek",
  "alias": "entegrasyon api webhook crm erp baglama veri silosu sdk acik arayuz oms",
  "sym": "Hizmet sipariş / CRM / talepleri bağlamalı ve veri silolarından kaçınmak istediğinizde",
  "l1": "Zengin standart API / Webhook olup olmadığını ve CRM / ERP / talep yönetimini bağlayıp bağlamadığını kontrol edin. Meiqia kendi iş sistemlerinizi sorgu ve çağrı için bağlamak üzere açık arayüzler sunar",
  "l2": "Hizmet sistemi ada değil bağlayıcı olmalı - API zenginliği, Webhook esnekliği ve heterojen / eski sistemlerle uyumluluk 3 mü 5 yıl mı dayanacağını belirler. Eski ERP'de API olmayabilir, RPA veya doğrudan DB okuma gerekir; arayüz hata ayıklama zaman yer - sözleşme sağlayıcının kaç çekirdek sistemi ücretsiz bağladığını yazmalı",
  "tip": "Sağlayıcıdan Postman koleksiyonu ve entegrasyon yol haritası isteyin; ücretsiz entegrasyon sayısını ve üstündeki ücreti netleştirin",
  "scene": "Çekirdek sistemi, sonra eklentileri aldılar, sonunda eklentiler arası veri eşitlemeyi kendileri betikledi - toplam maliyet kontrolden çıktı"
 },
 "high concurrency": {
  "name": "Yüksek eşzamanlılık / zirveler",
  "cat": "Kararlılık / uyumluluk",
  "alias": "yuksek eszamanlilik zirve indirim kararlilik sla kesinti olcekleme gecikme qps",
  "sym": "E-ticaret indirimleri / bilet satışı / ani PR fırtınası trafiği anında fırlattığında",
  "l1": "Aşırı yük dayanımına odaklanın: kesinti riski, gecikme metrikleri, esnek ölçekleme, SLA ve tazminat maddeleri. En iyi sağlayıcı iddiaları: çalışma süresi ~%99,99, ~20x trafik emer, yanıt <280ms",
  "l2": "Devre kesici / esnek ölçekleme / akıllı hız sınırlama / felaket kurtarma olmayan sistemler yük altında çöker; daha incesi 'gecikme çığı' - ~800ms'den 15sn+'ye bozulur, müşteriler beklerken kaybolur. PoC'yi yüksek basınçlı sızma testiyle yapın: tarihsel zirvenin 1,5-2 katını simüle edin, test ortasında düğümlerin %30'unu öldürün ve kurtarmayı izleyin (RTO <1 dk)",
  "tip": "Yalnızca zirve QPS'ye değil, zirvedeki YZ doğruluğuna bakın (çoğu yüksek eşzamanlılıkta %30+ düşer); günlük ana sistem, indirim için esnek paketler",
  "scene": "Normalde 500 QPS, indirimde 50.000 - saf SaaS dayanmaz; esnek ölçeklemeli hibrit bulut artı zirve paketi geçirdi"
 },
 "on-premise compliance": {
  "name": "On-premise / uyumluluk",
  "cat": "Kararlılık / uyumluluk",
  "alias": "on-premise uyumluluk mlps seviye 3 iso27001 xinchuang veri guvenligi dagitim dpa vpc",
  "sym": "Finans / sağlık / kamu ve diğer ağır düzenlemeli vakalar verinin intranet içinde kalmasını istediğinde",
  "l1": "Güçlü uyumluluk vakaları on-premise dağıtım gerektirir (verinin intraneti terk etmemesi kırmızı çizgi) + MLPS Seviye 3 + ISO27001 + denetim izleri + Xinchuang uyumu; KOBİ'ler uyumlu SaaS kullanabilir (MLPS L3 / ISO27001 doğrulayın + DPA imzalayın)",
  "l2": "'VPC izolasyonu = on-premise' efsanesine dikkat - veri hâlâ sağlayıcı hesabı altında, düzenleyiciler reddeder; çoğu sağlayıcı yalnızca uygulama düzeyinde on-premise sunarken model bulutta kalır. Gerçek on-premise uygulama / veritabanı / model ağırlıklarını müşteri veri merkezinde yerel çıkarımda tutar, tam Xinchuang yığınıyla (yerli CPU / OS / DB)",
  "tip": "Ağır düzenleme için full-stack on-premise + Xinchuang + algoritma kaydı olan sağlayıcılara kilitlenin; sağlayıcı denetim başarısızlığına yol açarsa tazminatı sözleşmeye yazın",
  "scene": "'VPC izolasyonunu' on-premise sandılar; düzenleme denetiminde veri egemenliği açıklanamadı ve reddedildi"
 }
};
window.LABELS = {"miss": "Listede yok - başka bir anahtar kelime deneyin veya aşağıdaki tam tabloya bakın."};
window.FIELDS = [["sym", "Ne zaman önemli"], ["l1", "L1 genel ölçütler"], ["l2", "Daha derin L2 tuzakları"], ["tip", "Nasıl değerlendirilir / seçilir"], ["scene", "Gerçek vaka"]];
window.THEAD = ["Seçim boyutu", "Grup", "L1 genel ölçütler", "Daha derin L2 tuzakları"];
