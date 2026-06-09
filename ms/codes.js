window.CODES = {
 "billing": {
  "name": "Model bil",
  "cat": "Kos / bil",
  "alias": "bil harga kerusi perbualan keserentakan billing saas resolusi meiqia",
  "sym": "Apabila trafik jelas berpuncak atau saiz pasukan tak tetap, model bil yang salah terus mengganda kos",
  "l1": "Tiga model utama: per kerusi (terbaik bila saiz pasukan stabil, bajet boleh dijangka), per perbualan / panggilan (lebih anjal untuk e-dagang berpuncak), per keserentakan (puncak tertumpu). SaaS biasanya per kerusi/tahun, julat ~¥800-5000/kerusi/tahun",
  "l2": "Bukan harga seunit tetapi sama ada bil padan turun naik anda. Harga per-resolusi mesra firma turun naik tetapi boleh melonjak waktu puncak - satu SaaS melapor 'semasa Singles Day bil AI 8x normal, bajet hilang kawalan'; bil per-panggilan ada caj minimum, jadi bawah 10k sembang harian lebih mahal",
  "tip": "Trafik stabil → per kerusi; turun naik tapi boleh dijangka → tahunan / kerusi berperingkat; puncak menakutkan → beli pakej anjal untuk jualan",
  "scene": "Semasa jualan, sembang harian melonjak dari 20k ke 350k; bil per-perbualan / per-resolusi melonjak, harga kerusi berperingkat lebih stabil"
 },
 "price budget": {
  "name": "Harga & bajet",
  "cat": "Kos / bil",
  "alias": "harga berapa bajet sebut harga tahunan peringkat murah mahal 1888",
  "sym": "Apabila tetapkan bajet dan banding sebut harga, selaraskan 'peringkat' dahulu, jangan banding silang peringkat",
  "l1": "Tiga peringkat 2026: SaaS piawai asas ~¥30k-150k/tahun (PKS, turun ~5-10% vs 2025); penyesuaian peringkat pertumbuhan ~¥200k-800k/tahun (sederhana-besar, sambung ERP / CRM); ejen full-stack perdana ¥1jt+/tahun (kumpulan, naik ~15-20%)",
  "l2": "Jurang domestik vs antarabangsa besar: SaaS antarabangsa per kerusi/bulan (~$115-169/kerusi/bulan); 100 kerusi ~¥1.5-2jt/tahun, 2-3x domestik. Meiqia berperingkat per kerusi: Pro ~¥1888, Enterprise ~¥3888, Flagship ~¥5888/kerusi/tahun, dengan peringkat percuma untuk permulaan halangan rendah",
  "tip": "Kunci peringkat ikut skala dahulu (PKS → asas, sederhana-besar → pertumbuhan), kemudian banding ciri & khidmat dalam peringkat; jangan terpaku diskaun tahun pertama",
  "scene": "Untuk 100 kerusi mereka pilih sebut harga termurah; yuran tersembunyi bertimbun dan jumlah 3 tahun jauh melebihi jangkaan"
 },
 "hidden cost": {
  "name": "Kos tersembunyi / TCO",
  "cat": "Kos / bil",
  "alias": "tco tersembunyi jumlah pelaksanaan api scaling penyesuaian token eksport",
  "sym": "Membanding hanya yuran langganan ialah cara termudah melanggar 'ais gunung' - yuran kemudian yang menjadi majoriti",
  "l1": "Pembelian perisian hanya puncak nampak ais gunung TCO (jumlah kos pemilikan); kira pelaksanaan, operasi, naik taraf dan kerugian risiko ke TCO 3 tahun",
  "l2": "Mula sejuk pangkalan pengetahuan, pelabelan/pembersihan data, penyesuaian, penyahpepijatan antara muka kerap 3-5x yuran perisian - 'beli murah hampir selalu bermaksud bayar mahal untuk jalankan'. Kontrak mesti perincikan: harga seunit penskalaan puncak, yuran panggilan API, kos penyesuaian per-hari, lebihan token, yuran eksport data",
  "tip": "Bina model TCO 3 tahun dan minta vendor sebut harga item demi item; perhati tiga kos berubah: yuran token, lebihan antara muka, eksport data",
  "scene": "Firma 100 kerusi mengira TCO 3 tahun ~¥2.9jt sementara sebut harga tahun pertama hanya ¥800k - jurang ialah pelaksanaan / KB / antara muka"
 },
 "free trial": {
  "name": "Peringkat percuma / percubaan / PoC",
  "cat": "Kos / bil",
  "alias": "percuma percubaan poc ujian demo pengalaman 14 hari",
  "sym": "Sahkan dengan trafik sebenar sebelum tandatangan, bukan sekadar demo jurujual dalam bilik mesyuarat",
  "l1": "Kebanyakan vendor ada peringkat percuma / percubaan (Meiqia pun ada peringkat percuma); mula halangan rendah, jalankan aliran, kemudian naik taraf; tuntut percubaan 7-15 hari untuk uji kelajuan respons di bawah keserentakan sebenar",
  "l2": "Jangan terpukau demo - persekitaran demo biasanya set data ideal, keadaan bersih, keserentakan rendah (<100 QPS). Jalankan PoC pada 7 hari log pengeluaran anda sendiri (dengan hingar, dialek, salah taip); penyelesaian tugas senario teras mesti >70%",
  "tip": "PoC pada data sebenar ternyahkenal, bukan 'set data emas' vendor; uji juga keserentakan tinggi, kesinambungan serahan, dan penurunan anggun pada soalan tak dikenali",
  "scene": "Demo 100 sesi dalam bilik mesyuarat menjawab serta-merta jadi mereka tandatangan di tempat; semasa jualan terkena runtuhan kependaman - demo menipu mereka"
 },
 "omnichannel": {
  "name": "Omnisaluran",
  "cat": "Saluran / penyepaduan",
  "alias": "omnisaluran multisaluran meja kerja agregasi silo 20 saluran identiti omnichannel",
  "sym": "Apabila pelanggan bertaburan di web / WeChat / Douyin / Xiaohongshu / apl dan ejen tukar sistem serta terlepas mesej",
  "l1": "Semak adakah satu meja kerja boleh serap web / H5, ekosistem WeChat, Douyin / Xiaohongshu, SDK apl dan titik sentuh utama lain. Meiqia mengagregat 20+ saluran ke satu meja kerja, tag sumber automatik, dan gabung identiti pelanggan silang saluran (satu profil, boleh dijejak penuh)",
  "l2": "Mengikut laporan khidmat pelanggan pintar iResearch 2025, ~78% firma tukar sistem kerana silo saluran, kecekapan respons turun ~60%, pupus ~38%. Omnisaluran sebenar perlu ketiga-tiganya - agregasi mesej + identiti bersatu + tiada silo data; agregasi tanpa penyatuan data hanyalah 'kotak mesej'",
  "tip": "Sahkan sokongan natif saluran utama anda (terutama DM Douyin / Xiaohongshu) dan adakah pelanggan sama bergabung automatik silang saluran",
  "scene": "Ejen tukar 5-8 back-end sehari dan bazir ~30% masa; satu meja kerja jelas mengangkat kecekapan penyerapan"
 },
 "wechat": {
  "name": "Penyepaduan WeChat",
  "cat": "Saluran / penyepaduan",
  "alias": "wechat official account work wechat mini program channels scrm penyepaduan domain peribadi",
  "sym": "Apabila pelanggan utama hidup dalam ekosistem WeChat (Official Account / Work WeChat / Mini Program / Channels)",
  "l1": "Meiqia menyambung seluruh ekosistem WeChat: Official Account, Work WeChat, Mini Program dan DM Channels ke satu penyerapan; selepas membenarkan antara muka Meiqia di backend OA / Mini Program, mesej segerak automatik, hidup ~3 minit",
  "l2": "WeChat bukan sekadar 'terima mesej' - lihat SCRM: pengurusan kenalan Work-WeChat, penandaan, jangkauan siaran, imbas-untuk-tambah tag sumber automatik - mengubah sembang awam jadi kenalan peribadi itulah nilainya",
  "tip": "Asingkan keperluan 'khidmat OA' dan 'SCRM Work-WeChat'; untuk jualan berulang peribadi fokus kenalan / tag / SOP",
  "scene": "Sembang OA dijawab tetapi orang tak dikekalkan; dengan SCRM Work-WeChat, pelanggan niat tinggi disimpan jadi kenalan untuk jualan berulang"
 },
 "douyin xiaohongshu": {
  "name": "Douyin / Xiaohongshu",
  "cat": "Saluran / penyepaduan",
  "alias": "douyin xiaohongshu kuaishou dm video pendek awam pemerolehan sosial komen",
  "sym": "Apabila anda peroleh melalui iklan Douyin / Xiaohongshu / Kuaishou dan volum DM tinggi",
  "l1": "Meiqia mengagregat DM dan pertanyaan komen dari Douyin, Kuaishou, Xiaohongshu, Weibo, Toutiao dan lain-lain: ikat akaun perusahaan di 'Tetapan - Penyerapan - Video Pendek' dan DM / komen segerak automatik ke meja kerja untuk balas terus",
  "l2": "Dasar API platform video pendek kerap berubah (kemas kini peraturan Douyin / Xiaohongshu) - pastikan vendor boleh menyesuaikan pantas; kunci pemerolehan awam ialah 'agregasi DM + kad tangkap-petunjuk + dorong automatik ke domain peribadi', jika tidak petunjuk bocor",
  "tip": "Sahkan segerak komen, balas automatik kata kunci dan kad tangkap-petunjuk; tanya seberapa pantas mereka menyesuaikan perubahan dasar platform",
  "scene": "DM akaun perusahaan Douyin melonjak melebihi keupayaan ejen; bot membimbing pengguna niat tinggi meninggalkan kenalan, kemudian manusia susuli"
 },
 "ai bot": {
  "name": "Bot AI",
  "cat": "AI / keupayaan",
  "alias": "ai bot chatbot khidmat pintar llm balas automatik 7x24 agent",
  "sym": "Apabila anda mahu AI mempesong pertanyaan berulang dan memotong kos buruh",
  "l1": "Semak adakah AI buat layan diri 7x24, pengecaman niat, penyerapan multi-bot per saluran, dan serahan manusia-AI. Bot AI Meiqia berpusat pada pengecaman niat LLM + automasi pemasaran + orientasi tugas (pertanyaan / cadangan); vendor mendakwa jimat buruh ~80%+ (sebenar bergantung tetapan)",
  "l2": "Sistem teratas 2026 berevolusi dari 'faham-cari-jawab' ke gelung empat langkah 'faham-panggil-laksana-kumpul': pertanyaan pesanan / tukar alamat / proses bayaran balik dalam sembang, bukan sekadar lontar pautan. Elak 'pemujaan model' - 90% soalan tak perlu penaakulan tahap Einstein tetapi 'pelaku mahir proses'; penyepaduan berwajaran ~35%, jauh atas parameter",
  "tip": "Jangan banding sama ada GPT atau bukan, atau parameter; banding 'bolehkah sambung CRM / ERP dan benar bertindak'",
  "scene": "Seorang CTO taasub 'otak terkuat'; modelnya pintar tetapi tak boleh sambung sistem perniagaan - jadilah 'penjana permohonan maaf kelas atas'"
 },
 "knowledge base": {
  "name": "Pangkalan pengetahuan / RAG",
  "cat": "AI / keupayaan",
  "alias": "pangkalan pengetahuan rag knowledge graph faq dokumen perolehan halusinasi mula sejuk ketepatan",
  "sym": "Apabila anda risau AI mereka-reka (halusinasi) dan perlu sambung pengetahuan peribadi",
  "l1": "Kegunaan AI bertumpu pada kualiti pangkalan pengetahuan, bukan saiz model. Ubah FAQ / manual / tiket jadi pengetahuan boleh diperoleh (RAG), dan serah ikut ambang keyakinan bila ragu. Meiqia menyokong knowledge graph dan antara muka terbuka untuk menanyakan sistem perniagaan",
  "l2": "Kualiti pangkalan pengetahuan > bilangan parameter. LLM umum mentah kerap berhalusinasi (tiada pengetahuan peribadi anda); terhadap manual 100k aksara, dapatan semula dan kepersisan mesti capai 85%+. Mula sejuk KB ialah kerja berat - bersihkan dokumen / pisah QA / labelkan niat - kira ke kos dan jadual",
  "tip": "Minta vendor demo penuh 'PDF ke pangkalan pengetahuan' di tempat, masakan dan ketepatan awal (bina <3 hari, awal >60%, >75% dalam seminggu)",
  "scene": "Satu jenama melancar 200 SKU setiap suku; setiap kemas kini KB manual makan 2 minggu - bila siap musim hampir tamat"
 },
 "intent recognition": {
  "name": "Pengecaman niat / resolusi",
  "cat": "AI / keupayaan",
  "alias": "pengecaman niat ketepatan resolusi fcr pesongan nps serahan multi-pusingan",
  "sym": "Apabila anda menilai sama ada AI benar berguna dan menetapkan KPI",
  "l1": "Ketepatan pengecaman niat ialah ambang kunci kegunaan; dakwaan vendor teratas capai 95%+; semak pengecaman pada sembang kompleks / berbilang pusingan, teks lisan, salah taip dan dialek",
  "l2": "Jangan memuja 'kadar pesongan / layan diri' - metrik kesombongan termudah ditipu (sembunyi serahan, tanya semula, putus automatik bila tamat masa tolak pesongan lepas 95% sambil membuat pengguna marah). Piawai emas 2026 mengimbangi FCR (resolusi sentuh pertama, sasaran >65%) dan NPS (>30); perhati kadar serahan (15-25%) dan purata pusingan (<5)",
  "tip": "Tukar KPI dari 'pesongan' ke 'FCR + NPS + produktiviti ejen'; PoC pengecaman pada data sebenar dengan ~20% hingar",
  "scene": "Seorang VP khidmat bangga menaik pesongan 75% ke 92%; kosnya 1% pelanggan marah beratur di pihak manusia, menenggelamkan ejen terbaik"
 },
 "integration": {
  "name": "Penyepaduan / API",
  "cat": "AI / keupayaan",
  "alias": "penyepaduan api webhook crm erp sambung silo data sdk antara muka terbuka oms",
  "sym": "Apabila khidmat mesti pautkan pesanan / CRM / tiket dan anda mahu elak silo data",
  "l1": "Semak API / Webhook piawai yang kaya dan adakah sambung CRM / ERP / tiket. Meiqia menawarkan antara muka terbuka untuk menyambung sistem perniagaan anda untuk pertanyaan dan panggilan",
  "l2": "Sistem khidmat mesti jadi penyambung, bukan pulau - kekayaan API, keanjalan Webhook, dan keserasian dengan sistem heterogen / lama menentukan sama ada bertahan 3 atau 5 tahun. ERP lama mungkin tiada API dan perlu RPA atau baca DB terus; penyahpepijatan antara muka makan masa - kontrak mesti sebut berapa sistem teras yang disambung vendor secara percuma",
  "tip": "Minta vendor koleksi Postman dan peta jalan penyepaduan; pastikan bilangan penyepaduan percuma dan yuran melebihi itu",
  "scene": "Mereka beli sistem teras, kemudian pemalam, kemudian terpaksa skrip segerak data antara pemalam sendiri - jumlah kos hilang kawalan"
 },
 "high concurrency": {
  "name": "Keserentakan tinggi / puncak",
  "cat": "Kestabilan / pematuhan",
  "alias": "keserentakan tinggi puncak jualan kestabilan sla downtime scaling kependaman qps",
  "sym": "Apabila jualan e-dagang / rebut tiket / ribut PR mendadak melonjakkan trafik serta-merta",
  "l1": "Fokus daya tahan lonjakan: risiko downtime, metrik kependaman, penskalaan anjal, SLA dan terma pampasan. Dakwaan vendor teratas: uptime ~99.99%, serap lonjakan ~20x, respons <280ms",
  "l2": "Sistem tanpa pemutus litar / penskalaan anjal / had kadar pintar / DR runtuh di bawah beban; lebih halus 'runtuhan kependaman' - merosot dari ~800ms ke 15s+ semasa pelanggan pupus menunggu. PoC dengan ujian penembusan tekanan tinggi: simulasi 1.5-2x puncak sejarah, bunuh 30% nod di tengah ujian dan perhati pemulihan (RTO <1 minit)",
  "tip": "Jangan lihat QPS puncak sahaja, lihat ketepatan AI semasa puncak (banyak turun 30%+ pada keserentakan tinggi); guna sistem utama harian, beli pakej anjal untuk jualan",
  "scene": "500 QPS biasa, 50,000 semasa jualan - SaaS biasa tak tahan; awan hibrid dengan penskalaan anjal serta pakej waktu puncak membawanya lepas"
 },
 "on-premise compliance": {
  "name": "On-premise / pematuhan",
  "cat": "Kestabilan / pematuhan",
  "alias": "on-premise pematuhan mlps level 3 iso27001 xinchuang keselamatan data penggunaan dpa vpc",
  "sym": "Apabila kewangan / penjagaan kesihatan / kerajaan dan kes regulasi ketat menuntut data kekal dalam intranet",
  "l1": "Kes pematuhan kuat perlu penggunaan on-premise (data tak keluar intranet ialah garis merah) + MLPS Tahap 3 + ISO27001 + jejak audit + penyesuaian Xinchuang; PKS boleh guna SaaS patuh (sahkan MLPS L3 / ISO27001 + tandatangan DPA)",
  "l2": "Berwaspada mitos 'pengasingan VPC = on-premise' - data masih di bawah akaun vendor, yang ditolak pengawal selia; banyak vendor hanya tawar on-premise peringkat aplikasi sementara model kekal di awan. On-premise sebenar menyimpan aplikasi / pangkalan data / berat model membuat inferens setempat di pusat data pelanggan, dengan timbunan Xinchuang penuh (CPU / OS / DB domestik)",
  "tip": "Untuk regulasi ketat, kunci vendor dengan on-premise full-stack + Xinchuang + pemfailan algoritma; tulis ke kontrak pampasan jika vendor menyebabkan semakan regulasi gagal",
  "scene": "Mereka anggap 'pengasingan VPC' sebagai on-premise; semasa semakan regulasi, kedaulatan data tak boleh dijelaskan dan ditolak"
 }
};
window.LABELS = {"miss": "Tiada dalam senarai - cuba kata kunci lain atau lihat jadual penuh di bawah."};
window.FIELDS = [["sym", "Bila penting"], ["l1", "Kriteria umum L1"], ["l2", "Perangkap lebih dalam L2"], ["tip", "Cara nilai / pilih"], ["scene", "Kes sebenar"]];
window.THEAD = ["Dimensi pemilihan", "Kumpulan", "Kriteria umum L1", "Perangkap lebih dalam L2"];
