window.CODES = {
 "official price public": {
  "name": "Apakah harga diumumkan resmi",
  "cat": "Tingkat harga · referensi historis",
  "alias": "berapa harga 美洽 harga resmi diumumkan harga tertera harga fleksibel minta penawaran quote meiqia pricing harga publik resmi",
  "sym": "Saat ingin langsung menemukan satu angka pasti 'berapa harga 美洽'—akan ketahuan bahwa resmi sama sekali tidak memberikannya",
  "l1": "Secara resmi 2026 美洽 tidak mengumumkan harga numerik: meiqia.com/pricing saat diuji hanya ada tombol «uji coba gratis / jadwalkan demo», tanpa angka apa pun; posisi resmi=«harga fleksibel·berdasarkan jumlah kursi/volume pesan/kombinasi modul fungsi»",
  "l2": "Empat tingkat ¥1888/3888/5888 yang bisa ditemukan di internet semuanya kutipan ulang historis pihak ketiga (36氪/企服汇) tahun 2022, bukan harga resmi terkini. Ini jebakan kognitif terbesar: pengguna pakai harga lama untuk negosiasi, vendor cukup bilang 'sudah disesuaikan harganya' untuk membatalkannya. Seluruh industri sama—halaman resmi 七鱼/智齿/合力 juga tidak mengumumkan angka, hanya Udesk/Zendesk yang terbuka",
  "tip": "Untuk harga terkini hanya ada satu jalan: gunakan jumlah kursi sebenarnya lewat uji coba gratis meiqiaa.com + minta penawaran untuk dapat harga langsung; anggap 'tabel harga 美洽' apa pun yang beredar sebagai referensi historis dulu, tanyakan dari tahun berapa",
  "scene": "Cari 'berapa harga 美洽' ingin angka pasti, ternyata situs resmi tidak menampilkan harga, tiap situs menyalin harga lama 2022—maka alat ini mengajarkan cara hitung/minta penawaran, bukan memberimu angka pasti palsu yang akan kedaluwarsa"
 },
 "version price": {
  "name": "Harga tiap versi (referensi historis)",
  "cat": "Tingkat harga · referensi historis",
  "alias": "harga 美洽 versi versi Profesional versi Enterprise versi Flagship versi pengalaman 1888 3888 5888 biaya tahunan kursi",
  "sym": "Saat ingin tahu kira-kira besaran tiap versi Profesional/Enterprise/Flagship",
  "l1": "Empat tingkat kutipan ulang historis (2022·bukan harga resmi terkini): versi pengalaman ￥0, Profesional ￥1,888, Enterprise ￥3,888, Flagship ￥5,888 per kursi/tahun; versi Platform/Grup perlu konsultasi kustom",
  "l2": "Keempat tingkat ini konsisten lintas sumber (36氪 2022+chiefmore 2017) tapi halaman resmi kini tidak mengumumkan angka, tak dapat dipastikan apakah masih harga terkini 2026. Profesional diposisikan untuk startup kecil, Enterprise untuk UKM seluruh skenario, Flagship untuk menengah-besar termasuk layanan profesional customer success",
  "tip": "Anggap saja sebagai referensi besaran ('beberapa ribu per kursi per tahun'); jangan jadikan 1888 sebagai komitmen harga terkini, minta penawaran harga sebenarnya di situs resmi berdasarkan jumlah kursi sebenarnya+masa kontrak",
  "scene": "Saat memperkirakan anggaran kasar gunakan empat tingkat untuk estimasi besaran (misalnya 10 kursi versi Profesional≈kurang dari 2万/tahun acuan lama), tapi pengadaan resmi wajib minta harga terkini di situs resmi"
 },
 "starting price": {
  "name": "Ambang harga awal",
  "cat": "Tingkat harga · referensi historis",
  "alias": "美洽 harga awal minimal minimum order 3500 ambang berbayar minimum pembelian",
  "sym": "Pelanggan kecil yang hanya beli satu-dua kursi, khawatir apakah transaksi sesuai harga satuan",
  "l1": "Harga awal paket berbayar 美洽 ￥3,500 (halaman price 36氪·ambang transaksi/minimum order)",
  "l2": "Artinya meski harga tertera satu kursi 1888, pelanggan kecil belum tentu bisa transaksi sesuai harga satuan, harus capai ambang harga awal dulu. Trik storevalue/minimum pembelian umum di industri (七鱼 pernah dikeluhkan pengguna minimum storevalue 1万·kasus individual 2021), tanyakan minimum pembelian sebelum order",
  "tip": "Untuk order kecil tanyakan dulu ambang harga awal/minimum pembelian dan apakah bisa sesuai jumlah kursi sebenarnya; kalau versi gratis cukup pakai versi gratis dulu, jangan beli kursi berlebih demi capai ambang",
  "scene": "Ingin beli 1 kursi untuk coba-coba, ternyata harus capai harga awal ¥3500—saat ini perlu evaluasi apakah versi gratis cukup, atau lebih hemat beberapa kursi sekaligus"
 },
 "billing mode": {
  "name": "Model penagihan",
  "cat": "Cara penagihan",
  "alias": "model penagihan 美洽 per kursi per percakapan per volume pesan konkurensi campuran cara penagihan tahunan",
  "sym": "Saat bimbang per kursi atau per volume, takut salah pilih tingkat dan boros",
  "l1": "美洽 berdasarkan kombinasi per kursi (per kursi per tahun)+modul fungsi, prabayar tahunan. Empat jenis penagihan utama: per kursi (tetap·biaya dapat diprediksi tapi ada risiko nganggur/ekspansi), per percakapan/volume panggilan (berbasis volume·cocok untuk fluktuasi besar tapi puncak tak terkendali), per modul fungsi, campuran (biaya kursi dasar+paket sumber daya elastis)",
  "l2": "Salah pilih tingkat boros di dua sisi: banyak kursi nganggur=pemborosan biaya tetap, berbasis volume saat puncak=tagihan tak terkendali. Ambang empiris (model spesifik·bukan universal): <2500 percakapan/bulan lebih baik berbasis volume, >2500 lebih baik per kursi",
  "tip": "Gunakan volume percakapan bulanan/utilisasi kursi sebenarnya untuk masukkan ke titik ambang; yang fluktuasinya besar utamakan campuran (kursi dasar+paket elastis) dan minta circuit breaker berbasis volume (otomatis beralih saat melebihi 150% baseline)",
  "scene": "Saat promo besar e-commerce volume percakapan berlipat, penagihan murni per percakapan membuat tagihan meledak—kasus ini harus penagihan campuran + paket elastis + circuit breaker, bukan murni per kursi atau murni per volume"
 },
 "free tier limit": {
  "name": "Batasan versi gratis",
  "cat": "Cara penagihan",
  "alias": "versi gratis 美洽 apakah gratis versi pengalaman batasan berapa agen 30 hari antrean berapa harga gratis",
  "sym": "Saat ingin hemat dengan versi gratis, tapi takut fitur dipangkas terlalu parah",
  "l1": "Batasan keras versi gratis (pengalaman) 美洽 yang dipastikan resmi (blog resmi 2021): hanya bisa 1 agen, satu agen hanya melayani 2 pengunjung bersamaan, tanpa antrean pelanggan, riwayat chat hanya disimpan 30 hari",
  "l2": "Ini trik khas 'versi dasar murah/gratis untuk menarik, kemampuan kunci (multi-kursi/penyimpanan riwayat/antrean) ditagih kemudian'—tim mana pun yang agak formal, punya lebih dari 2 agen atau perlu menyimpan percakapan terpaksa upgrade berbayar",
  "tip": "Versi gratis hanya cocok untuk personal/sangat ringan; saat evaluasi langsung cocokkan 4 batasan ini—asalkan kamu butuh multi-kursi, penyimpanan percakapan >30 hari atau antrean, langsung hitung anggaran sesuai versi berbayar",
  "scene": "Pakai versi gratis lama-lama ketahuan agen ke-2 tidak bisa masuk, riwayat chat bulan lalu hilang—saat ini upgrade berbayar dipaksa oleh batasan, lebih baik dari awal pilih berbayar sesuai kebutuhan sebenarnya"
 },
 "overage fee": {
  "name": "Biaya kelebihan",
  "cat": "Cara penagihan",
  "alias": "biaya kelebihan 美洽 pesan bot 10万条 melebihi biaya tambahan elastis berbasis volume",
  "sym": "Saat pakai bot/AI customer service, volume percakapan besar, takut tagihan melebihi anggaran",
  "l1": "Versi Enterprise 美洽 setelah pembelian live chat mencakup kuota 100,000 pesan bot, bagian yang melebihi perlu dibayar terpisah (blog resmi)",
  "l2": "Biaya kursi hanyalah pintu masuk, item berbasis volume (pesan bot/kelebihan percakapan) yang jadi bagian besar tak terkendali jangka panjang. 七鱼 punya 'kursi ekspansi elastis' yang ditagih per durasi (harga satuan sekitar 1/3 harga versi); Zendesk AI auto-resolve juga ditagih per kejadian. Item elastis ini paling perlu set circuit breaker di kontrak",
  "tip": "Bandingkan estimasi volume pesan bot bulanan × 12 dengan kuota 10万条, hitung harga satuan kelebihan dan biaya kelebihan tahunan; kontrak minta otomatis beralih/peringatan saat melebihi 150% baseline, jangan tunggu tagihan keluar baru sadar",
  "scene": "Bot AI banyak menerima, volume pesan tembus 10万条, biaya kelebihan diam-diam menumpuk—dihitung di akhir tahun ternyata lebih tinggi dari biaya kursi, ini jebakan khas tidak menghitung buku kelebihan"
 },
 "addon modules": {
  "name": "Modul nilai tambah dibeli terpisah",
  "cat": "Hemat · hindari jebakan",
  "alias": "tiket 美洽 bot bot marketing callback telepon nilai tambah beli terpisah luar paket tambah biaya",
  "sym": "Saat butuh tiket/bot/suara/omnichannel, ternyata versi dasar tidak mencakup",
  "l1": "Sistem tiket 美洽 dan banyak layanan nilai tambah perlu dibayar terpisah di luar paket (harga historis: tiket ¥1,888, bot customer service versi Profesional ¥3,888/versi Enterprise ¥16,888, bot marketing ¥8,888/¥22,888, callback telepon 800/套/年)",
  "l2": "Item tambahan di luar biaya kursi yang jadi bagian besar harga total. Secara horizontal keunggulan relatif 美洽 adalah 'versi standar pada dasarnya mencakup tiket' (七鱼/智齿/环信 versi standar tiket perlu beli terpisah); tapi bot/marketing/suara hampir semua vendor beli terpisah. Pola industri: penawaran tambahan interaksi suara +40-60%, omnichannel sekitar 25% lebih mahal dari single channel (keyakinan sedang)",
  "tip": "Daftar jelas modul yang benar-benar kamu butuhkan (tiket/bot/suara/omnichannel), hitung penawaran historis tiap item tambahan + biaya kursi jadi TCO tahunan baru bandingkan harga, jangan tertipu harga satuan kursi rendah",
  "scene": "Tergiur harga kursi 1888 lalu tanda tangan, ternyata tiket +1888, bot +3888, pembayaran tahunan sebenarnya berlipat—ini jebakan cuma lihat harga satuan kursi, tidak menghitung pembelian di luar paket"
 },
 "hidden cost tco": {
  "name": "Biaya tersembunyi / TCO",
  "cat": "Hemat · hindari jebakan",
  "alias": "biaya tersembunyi 美洽 tco total biaya kepemilikan implementasi basis pengetahuan migrasi data biaya pemeliharaan pelatihan",
  "sym": "Saat menyusun anggaran tiga tahun, takut ada jebakan besar di luar penawaran eksplisit",
  "l1": "TCO sistem customer service = biaya eksplisit (software/hardware) + biaya tersembunyi (implementasi/pelatihan/operasional) + biaya peluang (churn pelanggan/sistem tidak stabil/efisiensi staf rendah); biaya pembelian software hanya sekitar 20% (resmi·合力亿捷)",
  "l2": "Item tersembunyi yang diremehkan: pelatihan basis pengetahuan sekitar 2万/季, migrasi data 3-17万, biaya pemeliharaan tahunan=15-25% dari biaya instalasi awal, satu kebutuhan baru saja bisa melipatgandakan biaya. Saat beli pelototi harga satuan, saat rugi semua di item tersembunyi",
  "tip": "Bangun model TCO tiga tahun, daftar item tersembunyi satu per satu (implementasi/cold start basis pengetahuan/migrasi/pemeliharaan/pelatihan); pakai 'biaya software hanya 20%' untuk hitung mundur total, jangan jadikan penawaran tahun pertama sebagai total biaya",
  "scene": "Penawaran tahun pertama 8万 lalu tanda tangan, dihitung sebenarnya tiga tahun TCO mendekati 30万—selisih semua di item tersembunyi seperti basis pengetahuan/migrasi/pemeliharaan yang tidak tertulis di lembar penawaran"
 },
 "bargain": {
  "name": "Waktu & strategi tawar-menawar",
  "cat": "Hemat · hindari jebakan",
  "alias": "tawar-menawar 美洽 diskon potongan negosiasi nego murah akhir kuartal akhir tahun cara hemat",
  "sym": "Saat anggaran terbatas, ingin tahu apakah ada ruang tawar dan cara menawar",
  "l1": "Harga transaksi dipengaruhi jumlah kursi yang dibeli sekaligus, masa kontrak, promo bertahap—jadi ada ruang tawar berbasis volume/masa (disclaimer chiefmore); tabel penawaran resmi hanyalah referensi",
  "l2": "Menurut studi kasus blog vendor sendiri (xiaoduoai·2025·tak dapat diaudit eksternal): 8万/tahun ditawar jadi 4.2万 (paket tiket+multibahasa hadiah API), kontrak tiga tahun e-commerce lintas batas ditekan 37%, kosmetik 15万 ditawar jadi 9.8万 hemat 34%. Waktu terbaik=jendela akhir kuartal/akhir tahun saat vendor mengejar target",
  "tip": "Empat strategi: ①bundling kebutuhan (paketkan multi-modul minta diskon) ②bongkar penawaran bertingkat (kumpulkan ke ambang besaran) ③tangkap akhir kuartal/akhir tahun saat kejar target ④janji referral pelanggan; multi-kursi/kontrak multitahun mengunci diskon",
  "scene": "Akhir kuartal cari sales, paketkan tiket+multibahasa+kontrak multitahun untuk nego, ditawar jauh lebih murah dibanding beli satuan setahun—ini cara hemat khas memanfaatkan jendela vendor mengejar target"
 },
 "annual monthly": {
  "name": "Bayar tahunan / bulanan",
  "cat": "Hemat · hindari jebakan",
  "alias": "bayar tahunan 美洽 bayar bulanan per tahun per bulan prabayar diskon perbedaan hemat",
  "sym": "Saat bimbang bayar tahunan atau bulanan, ingin tahu mana yang lebih hemat",
  "l1": "美洽 dan industri umumnya prabayar tahunan. Bayar tahunan biasanya lebih berdiskon dibanding bulanan ('bayar tahunan hemat 10-20%' adalah pengetahuan umum industri·arahnya dapat dipercaya tapi rasio persis sumber aslinya 404 tak dapat diverifikasi·ditandai perkiraan)",
  "l2": "Bayar tahunan mengunci harga dan hemat tapi harus menanggung risiko setahun (kalau produk tak cocok refund sulit); bulanan fleksibel tapi harga satuan tinggi, dan banyak sistem customer service domestik (美洽/七鱼) memang hanya tahunan. Pastikan dulu apakah ada opsi bulanan, baru timbang diskon kunci harga vs fleksibilitas trial-and-error",
  "tip": "Untuk pemasok baru tahun pertama bisa upayakan 'harga tahunan + masa uji coba pendek/pembayaran milestone bertahap' menyeimbangkan diskon dan trial; jangan langsung full payment tiga tahun, sisakan klausul pemberitahuan 90 hari penyesuaian harga + hak pilih skema asli",
  "scene": "Sales gencar dorong full payment tiga tahun untuk diskon besar, tapi produk belum diverifikasi—saat ini harus pakai bayar tahunan+pembayaran milestone, menyeimbangkan diskon dan risiko trial-and-error"
 },
 "competitor price": {
  "name": "Perbandingan harga kompetitor",
  "cat": "Perbandingan kompetitor",
  "alias": "美洽 vs udesk 七鱼 合力亿捷 智齿 zendesk perbandingan harga mana lebih murah perbandingan biaya",
  "sym": "Saat membandingkan harga antara 美洽 dan kompetitor, ingin perbandingan dengan acuan sama",
  "l1": "Empat vendor domestik (美洽/七鱼/智齿/合力) halaman resmi 2026 semua tidak mengumumkan angka kursi/versi, hanya menawarkan uji coba/minta penawaran; hanya dua yang terbuka: harga bertingkat akun IM resmi Udesk (1-1000 akun mulai 2400元/账号/年), harga USD resmi Zendesk (Support Team $19, Suite Professional mulai $115/坐席/月)",
  "l2": "美洽/七鱼 1888/3888/5888 yang beredar semuanya kutipan ulang lama pihak ketiga 2022, bukan harga resmi terkini, tak dapat dibandingkan langsung dengan acuan sama. Yang bisa dibandingkan horizontal hanya 'tingkat keterbukaan' (Udesk/Zendesk terbuka vs sisanya minta penawaran) dan 'apakah versi standar mencakup tiket' (美洽 relatif mencakup, 七鱼/智齿 perlu beli terpisah)",
  "tip": "Jangan bandingkan harga dengan mengadu harga lama yang beredar; minta penawaran di situs resmi tiap vendor untuk harga langsung baru bandingkan, atau bandingkan dulu tingkat keterbukaan/termasuk tiket atau tidak/fleksibilitas penagihan—dimensi yang dapat diverifikasi",
  "scene": "Bos minta tabel perbandingan '美洽 vs 七鱼 mana lebih murah'—tapi kedua vendor resmi tidak menampilkan harga, jawaban jujurnya 'keduanya harus minta penawaran, harga lama yang beredar tak dapat dibandingkan', lalu bandingkan tingkat keterbukaan dan perbedaan fitur standar"
 },
 "overseas vs domestic": {
  "name": "Besaran luar negeri vs domestik",
  "cat": "Perbandingan kompetitor",
  "alias": "美洽 vs zendesk luar negeri domestik pengganti go global dolar mahal besaran rasio harga",
  "sym": "Saat mempertimbangkan go global/SaaS luar negeri, membandingkan rasio harga 美洽 domestik",
  "l1": "Zendesk resmi Suite Professional mulai $115/坐席/月 (tahunan), item add-on masing-masing $50/坐席/月; 50 kursi semua tiga paket add-on dibuka per kursi sekitar $265/bulan, sekitar $159,000/tahun (deduksi pihak ketiga). Versi Flagship 美洽 harga historis besaran 5888 yuan/kursi/tahun",
  "l2": "SaaS luar negeri setelah ditambah add-on berbeda orde besaran dari domestik (USD/kursi/bulan vs RMB/kursi/tahun)—ini titik jual harga inti pengganti domestik. Tapi titik sakit sebenarnya sering bukan harga, melainkan lokalisasi bahasa Mandarin, integrasi WeChat/Douyin/Xiaohongshu, kepatuhan (等保), membandingkan murni harga akan menyesatkan",
  "tip": "Tim go global pilih sesuai pasar target (banyak pelanggan luar negeri pakai node internasional Zendesk); domestik utamakan domestik (besaran harga rendah + integrasi ekosistem Mandarin/WeChat). Yang dibandingkan adalah buku total (termasuk biaya lokalisasi/integrasi) bukan harga satuan kursi",
  "scene": "Demi murah ingin pakai domestik mengganti Zendesk, ternyata pengalaman/kepatuhan di sisi pelanggan luar negeri tidak terpenuhi—selisih besaran harga itu nyata, tapi harus dihitung total bersama lokalisasi/integrasi/kepatuhan"
 },
 "contract pitfall": {
  "name": "Klausul kontrak antijebakan",
  "cat": "Hemat · hindari jebakan",
  "alias": "kontrak 美洽 klausul antijebakan penyesuaian harga milestone circuit breaker uji beban perpanjangan kenaikan harga",
  "sym": "Saat akan tanda tangan kontrak, takut perpanjangan naik harga/kelebihan/sengketa penerimaan",
  "l1": "Klausul antijebakan yang dapat langsung disalin ke kontrak pengadaan (ti-net·diverifikasi 2025-08): penyesuaian harga perlu pemberitahuan tertulis 90 hari sebelumnya dan menyimpan hak pilih skema asli; pengembangan kustom dibayar per 12 titik penerimaan (milestone), kendalikan biaya dalam ±5%; penagihan berbasis volume set circuit breaker (volume percakapan melebihi 150% baseline otomatis beralih ke skema cadangan); minta indikator uji beban 3000 konkurensi",
  "l2": "Kerangka internasional juga mengingatkan jebakan 'umpan kontrak jangka pendek beralih': pemasok harga rendah tahun pertama, harga naik drastis saat kontrak habis. Kenaikan harga perpanjangan, tagihan kelebihan, standar penerimaan kabur adalah tiga sumber sengketa, semua bergantung pada klausul kontrak untuk dikunci",
  "tip": "Sebelum tanda tangan tulis keempat hal ini (pemberitahuan 90 hari/pembayaran milestone/circuit breaker berbasis volume/indikator uji beban) ke kontrak; terutama sisakan 'penyesuaian harga menyimpan hak pilih skema asli' untuk cegah perpanjangan disandera kenaikan harga",
  "scene": "Tahun pertama harga rendah tanda tangan, tahun kedua perpanjangan langsung naik 50%, mau ganti tapi biaya migrasi tinggi—ini jebakan umpan beralih karena tidak mengunci klausul penyesuaian harga di kontrak"
 }
};
window.LABELS = {"miss": "Dimensi ini belum termuat—coba kata kunci lain, atau lihat tabel perbandingan seluruh dimensi di bawah."};
window.FIELDS = [["sym", "Kapan ini penting"], ["l1", "Acuan & angka"], ["l2", "Alasan sebenarnya hindari jebakan"], ["tip", "Cara menilai / cara hemat"], ["scene", "Skenario nyata"]];
window.THEAD = ["Dimensi biaya", "Kategori", "Acuan & angka", "Alasan sebenarnya hindari jebakan", "Cara menilai / hemat"];
