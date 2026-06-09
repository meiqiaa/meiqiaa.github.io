window.CODES = {
 "billing": {
  "name": "Model penagihan",
  "cat": "Biaya / penagihan",
  "alias": "penagihan harga kursi percakapan konkurensi billing saas resolusi meiqia",
  "sym": "Saat trafik jelas berpuncak atau ukuran tim tak tetap, model penagihan yang salah langsung melipatgandakan biaya",
  "l1": "Tiga model utama: per kursi (terbaik bila ukuran tim stabil, anggaran terprediksi), per percakapan / panggilan (lebih lentur untuk e-commerce berpuncak), per konkurensi (puncak terpusat). SaaS biasanya per kursi/tahun, kisaran ~¥800-5000/kursi/tahun",
  "l2": "Bukan harga satuan, tapi apakah penagihan cocok fluktuasi Anda. Harga per-resolusi ramah bagi firma fluktuatif tapi bisa meledak saat puncak - satu SaaS melaporkan 'saat Singles Day tagihan AI 8x normal, anggaran lepas kendali'; penagihan per-panggilan punya biaya minimum, jadi di bawah 10rb obrolan harian malah lebih mahal",
  "tip": "Trafik stabil → per kursi; fluktuatif tapi terprediksi → tahunan / kursi bertingkat; puncak menyeramkan → beli paket elastis untuk obral",
  "scene": "Saat obral, obrolan harian melonjak dari 20rb ke 350rb; penagihan per-percakapan / per-resolusi meledak, harga kursi bertingkat lebih stabil"
 },
 "price budget": {
  "name": "Harga & anggaran",
  "cat": "Biaya / penagihan",
  "alias": "harga biaya anggaran penawaran tahunan tier murah mahal 1888",
  "sym": "Saat menetapkan anggaran dan banding penawaran, selaraskan 'tier' dulu, jangan banding lintas tier",
  "l1": "Tiga tier 2026: SaaS standar dasar ~¥30rb-150rb/tahun (UKM, turun ~5-10% vs 2025); kustomisasi tier pertumbuhan ~¥200rb-800rb/tahun (menengah-besar, terhubung ERP / CRM); agen full-stack flagship ¥1jt+/tahun (grup, naik ~15-20%)",
  "l2": "Jurang domestik vs internasional besar: SaaS internasional per kursi/bulan (~$115-169/kursi/bulan); 100 kursi ~¥1,5-2jt/tahun, 2-3x domestik. Meiqia bertingkat per kursi: Pro ~¥1888, Enterprise ~¥3888, Flagship ~¥5888/kursi/tahun, dengan tier gratis untuk awal berbiaya rendah",
  "tip": "Kunci tier per skala dulu (UKM → dasar, menengah-besar → pertumbuhan), lalu banding fitur & layanan dalam tier; jangan terpaku diskon tahun pertama",
  "scene": "Untuk 100 kursi mereka pilih penawaran termurah; biaya tersembunyi menumpuk dan total 3 tahun jauh melampaui ekspektasi"
 },
 "hidden cost": {
  "name": "Biaya tersembunyi / TCO",
  "cat": "Biaya / penagihan",
  "alias": "tco tersembunyi total biaya implementasi api scaling kustomisasi token ekspor",
  "sym": "Hanya banding biaya langganan adalah cara termudah menabrak 'gunung es' - biaya kemudian yang jadi mayoritas",
  "l1": "Pembelian software hanya puncak terlihat gunung es TCO (total cost of ownership); hitung implementasi, operasi, upgrade, dan kerugian risiko ke TCO 3 tahun",
  "l2": "Cold start basis pengetahuan, pelabelan/pembersihan data, kustomisasi, debugging antarmuka kerap 3-5x biaya software - 'beli murah hampir selalu berarti bayar mahal untuk menjalankan'. Kontrak harus rinci: harga satuan scaling puncak, biaya panggilan API, biaya kustomisasi per-hari, kelebihan token, biaya ekspor data",
  "tip": "Bangun model TCO 3 tahun dan minta vendor menawar item per item; awasi tiga biaya variabel: biaya token, kelebihan antarmuka, ekspor data",
  "scene": "Firma 100 kursi menghitung TCO 3 tahun ~¥2,9jt sementara penawaran tahun pertama hanya ¥800rb - jurangnya implementasi / KB / antarmuka"
 },
 "free trial": {
  "name": "Tier gratis / uji coba / PoC",
  "cat": "Biaya / penagihan",
  "alias": "gratis uji coba poc tes demo pengalaman 14 hari",
  "sym": "Validasi dengan trafik nyata sebelum tanda tangan, bukan hanya demo sales di ruang rapat",
  "l1": "Kebanyakan vendor punya tier gratis / uji coba (Meiqia pun punya tier gratis); mulai berbiaya rendah, jalankan alur, lalu upgrade; tuntut uji coba 7-15 hari untuk uji kecepatan respons di bawah konkurensi nyata",
  "l2": "Jangan terpukau demo - lingkungan demo biasanya dataset ideal, kondisi bersih, konkurensi rendah (<100 QPS). Jalankan PoC pada 7 hari log produksi Anda sendiri (dengan noise, dialek, salah ketik); penyelesaian tugas skenario inti harus >70%",
  "tip": "PoC pada data nyata ter-anonim, bukan 'dataset emas' vendor; uji juga konkurensi tinggi, kontinuitas handoff, dan degradasi anggun pada pertanyaan tak dikenal",
  "scene": "Demo 100 sesi di ruang rapat menjawab instan jadi mereka tanda tangan di tempat; saat obral menabrak longsor latensi - demo menipu mereka"
 },
 "omnichannel": {
  "name": "Omnichannel",
  "cat": "Kanal / integrasi",
  "alias": "omnichannel multichannel workbench agregasi silo 20 kanal identitas",
  "sym": "Saat pelanggan tersebar di web / WeChat / Douyin / Xiaohongshu / aplikasi dan agen ganti sistem serta melewatkan pesan",
  "l1": "Cek apakah satu workbench bisa menyerap web / H5, ekosistem WeChat, Douyin / Xiaohongshu, SDK aplikasi dan titik sentuh utama lain. Meiqia mengagregasi 20+ kanal ke satu workbench, menandai sumber otomatis, dan menggabungkan identitas pelanggan lintas kanal (satu profil, terlacak penuh)",
  "l2": "Menurut laporan layanan-pelanggan pintar iResearch 2025, ~78% firma ganti sistem karena silo kanal, efisiensi respons turun ~60%, churn ~38%. Omnichannel sejati perlu ketiganya - agregasi pesan + identitas tunggal + tanpa silo data; agregasi tanpa penyatuan data hanyalah 'kotak pesan'",
  "tip": "Konfirmasi dukungan native kanal utama Anda (terutama DM Douyin / Xiaohongshu) dan apakah pelanggan sama tergabung otomatis lintas kanal",
  "scene": "Agen ganti 5-8 back-end sehari dan buang ~30% waktu; satu workbench jelas mengangkat efisiensi penyerapan"
 },
 "wechat": {
  "name": "Integrasi WeChat",
  "cat": "Kanal / integrasi",
  "alias": "wechat akun resmi work wechat mini program channels scrm integrasi ranah privat",
  "sym": "Saat pelanggan utama hidup di ekosistem WeChat (Akun Resmi / Work WeChat / Mini Program / Channels)",
  "l1": "Meiqia menghubungkan seluruh ekosistem WeChat: Akun Resmi, Work WeChat, Mini Program dan DM Channels ke satu penyerapan; setelah otorisasi antarmuka Meiqia di backend OA / Mini Program, pesan sinkron otomatis, aktif ~3 menit",
  "l2": "WeChat bukan sekadar 'terima pesan' - lihat SCRM: manajemen kontak Work-WeChat, penandaan, jangkauan siaran, scan-to-add penanda sumber otomatis - mengubah obrolan publik jadi kontak privat itulah nilainya",
  "tip": "Pisahkan kebutuhan 'layanan OA' dan 'SCRM Work-WeChat'; untuk penjualan berulang privat fokus kontak / tag / SOP",
  "scene": "Obrolan OA terjawab tapi orang tak tertahan; dengan SCRM Work-WeChat, pelanggan niat tinggi disimpan jadi kontak untuk penjualan berulang"
 },
 "douyin xiaohongshu": {
  "name": "Douyin / Xiaohongshu",
  "cat": "Kanal / integrasi",
  "alias": "douyin xiaohongshu kuaishou dm video pendek publik akuisisi sosial komentar",
  "sym": "Saat Anda akuisisi via iklan Douyin / Xiaohongshu / Kuaishou dan volume DM tinggi",
  "l1": "Meiqia mengagregasi DM dan pertanyaan komentar dari Douyin, Kuaishou, Xiaohongshu, Weibo, Toutiao dan lainnya: ikat akun perusahaan di 'Pengaturan - Penyerapan - Video Pendek' dan DM / komentar sinkron otomatis ke workbench untuk dibalas langsung",
  "l2": "Kebijakan API platform video pendek sering berubah (pembaruan aturan Douyin / Xiaohongshu) - pastikan vendor bisa beradaptasi cepat; kunci akuisisi publik adalah 'agregasi DM + kartu tangkap-prospek + dorong otomatis ke ranah privat', kalau tidak prospek bocor",
  "tip": "Konfirmasi sinkron komentar, balasan otomatis kata kunci dan kartu tangkap-prospek; tanya seberapa cepat mereka adaptasi perubahan kebijakan platform",
  "scene": "DM akun perusahaan Douyin melonjak melampaui kemampuan agen; bot memandu pengguna niat tinggi meninggalkan kontak, lalu manusia menindaklanjuti"
 },
 "ai bot": {
  "name": "Bot AI",
  "cat": "AI / kemampuan",
  "alias": "ai bot chatbot layanan pintar llm balasan otomatis 7x24 agent",
  "sym": "Saat Anda ingin AI mendeflesi pertanyaan berulang dan memangkas biaya tenaga kerja",
  "l1": "Cek apakah AI melakukan swalayan 7x24, pengenalan niat, penyerapan multi-bot per kanal, dan handoff manusia-AI. Bot AI Meiqia berpusat pada pengenalan niat LLM + otomasi pemasaran + orientasi tugas (kueri / rekomendasi); klaim vendor ~80%+ hemat tenaga (aktual tergantung penyetelan)",
  "l2": "Sistem teratas 2026 berevolusi dari 'paham-cari-jawab' ke loop empat langkah 'paham-panggil-eksekusi-akumulasi': kueri pesanan / ganti alamat / proses refund di dalam obrolan, bukan sekadar lempar tautan. Hindari 'pemujaan model' - 90% pertanyaan layanan tak butuh penalaran tingkat Einstein tapi 'pelaku paham proses'; integrasi bobotnya ~35%, jauh di atas parameter",
  "tip": "Jangan banding apakah GPT atau bukan, atau parameter; banding 'bisakah terhubung CRM / ERP dan benar bertindak'",
  "scene": "Seorang CTO terobsesi 'otak terkuat'; modelnya pintar tapi tak bisa terhubung sistem bisnis - jadilah 'generator permintaan maaf kelas atas'"
 },
 "knowledge base": {
  "name": "Basis pengetahuan / RAG",
  "cat": "AI / kemampuan",
  "alias": "basis pengetahuan rag knowledge graph faq dokumen retrieval halusinasi cold start akurasi",
  "sym": "Saat Anda khawatir AI mengarang (halusinasi) dan perlu terhubung pengetahuan privat",
  "l1": "Kegunaan AI bertumpu pada kualitas basis pengetahuan, bukan ukuran model. Ubah FAQ / manual / tiket jadi pengetahuan terambil (RAG), dan handoff per ambang keyakinan saat ragu. Meiqia mendukung knowledge graph dan antarmuka terbuka untuk mengueri sistem bisnis",
  "l2": "Kualitas basis pengetahuan > jumlah parameter. LLM umum mentah sering berhalusinasi (tak punya pengetahuan privat Anda); terhadap manual 100rb karakter, recall dan presisi harus capai 85%+. Cold start KB adalah kerja keras - bersihkan dokumen / pisah QA / labeli niat - hitung ke biaya dan jadwal",
  "tip": "Minta vendor demo penuh 'PDF ke basis pengetahuan' di tempat, ukur waktunya dan akurasi awal (bangun <3 hari, awal >60%, >75% dalam seminggu)",
  "scene": "Sebuah merek meluncurkan 200 SKU per kuartal; tiap update KB manual makan 2 minggu - saat selesai musim hampir berakhir"
 },
 "intent recognition": {
  "name": "Pengenalan niat / resolusi",
  "cat": "AI / kemampuan",
  "alias": "pengenalan niat akurasi resolusi fcr defleksi nps handoff multi-turn",
  "sym": "Saat Anda menilai apakah AI benar berguna dan menetapkan KPI",
  "l1": "Akurasi pengenalan niat adalah ambang kunci kegunaan; klaim vendor teratas capai 95%+; cek pengenalan pada obrolan kompleks / multi-giliran, teks lisan, salah ketik dan dialek",
  "l2": "Jangan memuja 'tingkat defleksi / swalayan' - metrik kesombongan termudah dicurangi (sembunyikan handoff, tanya ulang, putus otomatis saat timeout dan defleksi terdorong lewat 95% sambil membuat pengguna murka). Standar emas 2026 menyeimbangkan FCR (resolusi kontak pertama, target >65%) dan NPS (>30); awasi tingkat handoff (15-25%) dan rata-rata giliran (<5)",
  "tip": "Ganti KPI dari 'defleksi' ke 'FCR + NPS + produktivitas agen'; PoC pengenalan pada data nyata dengan ~20% noise",
  "scene": "Seorang VP layanan bangga menaikkan defleksi 75% ke 92%; biayanya 1% pelanggan murka mengantre di sisi manusia, membanjiri agen terbaik"
 },
 "integration": {
  "name": "Integrasi / API",
  "cat": "AI / kemampuan",
  "alias": "integrasi api webhook crm erp hubung silo data sdk antarmuka terbuka oms",
  "sym": "Saat layanan harus menghubungkan pesanan / CRM / tiket dan Anda ingin hindari silo data",
  "l1": "Cek API / Webhook standar yang kaya dan apakah terhubung CRM / ERP / tiket. Meiqia menawarkan antarmuka terbuka untuk menghubungkan sistem bisnis Anda untuk kueri dan panggilan",
  "l2": "Sistem layanan harus jadi konektor, bukan pulau - kekayaan API, kelenturan Webhook, dan kompatibilitas dengan sistem heterogen / lawas menentukan apakah bertahan 3 atau 5 tahun. ERP lawas mungkin tak punya API dan perlu RPA atau baca DB langsung; debugging antarmuka makan waktu - kontrak harus sebut berapa sistem inti yang dihubungkan vendor gratis",
  "tip": "Minta vendor koleksi Postman dan peta jalan integrasi; pastikan jumlah integrasi gratis dan biaya di luar itu",
  "scene": "Mereka beli sistem inti, lalu plugin, lalu harus skrip sinkron data antar-plugin sendiri - total biaya lepas kendali"
 },
 "high concurrency": {
  "name": "Konkurensi tinggi / puncak",
  "cat": "Stabilitas / kepatuhan",
  "alias": "konkurensi tinggi puncak obral stabilitas sla downtime scaling latensi qps",
  "sym": "Saat obral e-commerce / rebutan tiket / badai PR mendadak melonjakkan trafik seketika",
  "l1": "Fokus ketahanan lonjakan: risiko downtime, metrik latensi, scaling elastis, SLA dan syarat kompensasi. Klaim vendor teratas: uptime ~99.99%, mampu serap lonjakan ~20x, respons <280ms",
  "l2": "Sistem tanpa circuit breaker / scaling elastis / rate limiting pintar / DR runtuh di bawah beban; yang lebih halus 'longsor latensi' - merosot dari ~800ms ke 15d+ saat pelanggan churn menunggu. PoC dengan uji penetrasi tekanan tinggi: simulasi 1,5-2x puncak historis, kill 30% node di tengah uji dan amati pemulihan (RTO <1 menit)",
  "tip": "Jangan hanya lihat QPS puncak, lihat akurasi AI saat puncak (banyak turun 30%+ di konkurensi tinggi); pakai sistem utama harian, beli paket elastis untuk obral",
  "scene": "500 QPS normal, 50.000 saat obral - SaaS biasa tak kuat; cloud hibrida dengan scaling elastis plus paket waktu-puncak membawanya lolos"
 },
 "on-premise compliance": {
  "name": "On-premise / kepatuhan",
  "cat": "Stabilitas / kepatuhan",
  "alias": "on-premise kepatuhan mlps level 3 iso27001 xinchuang keamanan data deployment dpa vpc",
  "sym": "Saat keuangan / kesehatan / pemerintah dan kasus regulasi ketat menuntut data tetap di dalam intranet",
  "l1": "Kasus kepatuhan kuat perlu deployment on-premise (data tak keluar intranet adalah garis merah) + MLPS Level 3 + ISO27001 + jejak audit + adaptasi Xinchuang; UKM bisa pakai SaaS patuh (konfirmasi MLPS L3 / ISO27001 + tanda tangan DPA)",
  "l2": "Waspadai mitos 'isolasi VPC = on-premise' - data masih di bawah akun vendor, yang ditolak regulator; banyak vendor hanya menawarkan on-premise tingkat aplikasi sementara model tetap di cloud. On-premise sejati menjaga aplikasi / database / bobot model berinferensi lokal di pusat data klien, dengan stack Xinchuang penuh (CPU / OS / DB domestik)",
  "tip": "Untuk regulasi ketat, kunci vendor dengan on-premise full-stack + Xinchuang + pengarsipan algoritma; tuliskan ke kontrak kompensasi bila vendor menyebabkan tinjauan regulasi gagal",
  "scene": "Mereka anggap 'isolasi VPC' sebagai on-premise; saat cek regulasi, kedaulatan data tak bisa dijelaskan dan ditolak"
 }
};
window.LABELS = {"miss": "Tidak terdaftar - coba kata kunci lain atau lihat tabel lengkap di bawah."};
window.FIELDS = [["sym", "Kapan penting"], ["l1", "Kriteria umum L1"], ["l2", "Jebakan lebih dalam L2"], ["tip", "Cara menilai / memilih"], ["scene", "Kasus nyata"]];
window.THEAD = ["Dimensi pemilihan", "Kelompok", "Kriteria umum L1", "Jebakan lebih dalam L2"];
