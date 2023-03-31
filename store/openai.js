const openAi = require("../libs/controllers/openai/handlerOpenAi");

const { writeFileSync } = require("fs");

const prompt1 = `
Kamu adalah seorang asisten saya, yang dimana kedepannya kamu akan membantu saya dalam menyusun proposal penelitian, gunakan respon bahasa yang baku dan lugas, dan juga tata bahasa yang sesuai dengan kaidah penulisan karya ilmiah.

Lingkup bidang yang kedepannya akan dipakai:
- Jurusan teknik industri (manajemen dan hubungannya dengan elemen dibawah)
- Informatika (Baileys whatsapp API, NodeJS, JS dan TS)
- Bisnis online (aplikasi whatsapp dan whatsapp bisnis)
- Penggunaan chatbot (sebagai akses informasi produk dan FAQ pelanggan)

pastikan kamu merespon dengan detail pada setiap prompt yang akan saya ajukan kedepannya.
`;
const response1 = `
Baik, terima kasih sudah memberi kesempatan untuk menjadi asisten Anda dalam menyusun proposal penelitian. Berikut adalah respons saya terhadap lingkup bidang yang akan dipakai:

1. Jurusan Teknik Industri
Dalam meneliti manajemen dan hubungannya dengan elemen dibawah, saya akan memulai dengan melihat definisi manajemen dan bagaimana manajemen berfungsi dari sudut pandang teknik industri. Selanjutnya, saya akan menyelidiki bagaimana manajemen berhubungan dengan elemen seperti supply chain, produksi, dan pengendalian kualitas dalam industri. Untuk memperdalam pemahaman, saya akan melakukan survei terhadap industri dan wawancara dengan para ahli di bidang teknik industri serta melakukan analisis data menggunakan metode statistik.

2. Informatika
Dalam penelitian pada Bidang Informatika, saya tertarik untuk mempelajari penggunaan API Baileys WhatsApp, NodeJS, JS, dan TS dalam pengembangan platform aplikasi untuk bisnis online. Saya akan memulai dengan memahami dasar-dasar bahasa pemrograman terkait dan penerapannya dalam teknologi dan bisnis online saat ini. Kemudian, saya akan melakukan analisis kualitatif dan kuantitatif pada implementasi teknologi ini pada platform bisnis online untuk mengetahui keuntungan yang diperoleh bisnis dalam menggunakan teknologi ini.

3. Bisnis Online
Dalam penelitian di bidang Bisnis Online, saya akan mengarahkan fokus pada penggunaan aplikasi WhatsApp dan WhatsApp bisnis dalam kegiatan bisnis. Saya akan melakukan penelitian tentang bagaimana aplikasi ini dapat membantu pelaku bisnis dalam berinteraksi dengan pelanggan, meningkatkan penjualan, dan membangun citra merek. Saya juga akan melakukan survei terhadap pengguna aplikasi di bidang bisnis online dan menganalisis data yang diperoleh untuk memberikan rekomendasi penggunaan aplikasi yang efektif dan efisien dalam pengembangan bisnis online.

4. Penggunaan Chatbot
Dalam penelitian penggunaan chatbot sebagai akses informasi produk dan FAQ pelanggan, saya akan memulai dengan memahami apa itu chatbot, bagaimana ia bekerja, dan bagaimana kemampuan chatbot dapat ditingkatkan untuk memberikan pengalaman pelanggan yang lebih baik. Selanjutnya, saya akan mempertimbangkan faktor-faktor seperti aliran pekerjaan, sistem respon terhadap pertanyaan pelanggan dan menganalisis hasil interaksi chatbot dan pengujian dengan pengguna. Tujuannya adalah memberikan rekomendasi penggunaan chatbot yang efektif dan efisien untuk memenuhi kebutuhan pelanggan dan meningkatkan kualitas layanan pada bisnis. 

Demikianlah beberapa respons saya mengenai bidang yang akan dipakai dalam penelitian yang akan kita lakukan. Terima kasih atas kesempatan yang diberikan untuk menjadi asisten penelitian Anda.
`;
const prompt2 = `
Judul penelitian saya adalah "Optimisasi proses bisnis online menggunakan chatbot di platform aplikasi whatsapp untuk memudahkan akses informasi produk & pelayanan pelanggan di UMKM Stokis Center Sidanegara Cilacap".
Metode yang digunakan adalah metode RnD.
`;
const response2 = `
Baik, terima kasih telah melakukan sharing mengenai judul penelitian dan metode yang akan digunakan. Berikut adalah beberapa saran dan pandangan terkait dengan penelitian yang akan dilakukan:

1. Belum ada penelitian sebelumnya yang serupa?
Pastikan bahwa judul penelitian yang dipilih belum pernah diteliti sebelumnya atau setidaknya terdapat perbedaan yang signifikan dengan penelitian lain yang sudah dilaksanakan. Hal ini penting untuk memastikan bahwa penelitian yang dilakukan memiliki nilai tambah dan menjawab kebutuhan yang belum terpenuhi di industri.

2. Jenis chatbot yang akan digunakan
Perlu dijelaskan jenis chatbot yang akan digunakan dalam penelitian ini, apakah itu chatbot yang dibangun dari awal atau aplikasi chatbot yang sudah tersedia di pasar. Apabila menggunakan aplikasi yang sudah tersedia sebaiknya panitia melakukan pengecekan mengenai penggunaan data pelanggan dan ketersediaan data center chatbot yang digunakan.

3. Penetapan abstrak pendahuluan
Abstrak pendahuluan merupakan halaman pertama yang dibaca oleh pembaca. Sebaiknya memuat beberapa hal seperti latar belakang masalah, tujuan penelitian, dan manfaat. Pastikan bahwa abstrak pendahuluan yang ditulis gamblang dan dapat menjelaskan dengan baik mengenai esensi dari penelitian yang akan dilakukan.

4. Langkah-langkah pengumpulan data
Pastikan bahwa metodologi yang digunakan sederhana dan tidak sulit untuk dilaksanakan oleh staf atau pegawai UMKM. Teknik pengumpulan data yang digunakan dalam penelitian ini juga diusahakan sesuai dan jelas dengan memberikan contoh-contoh. Berikan pengarahan yang jelas dan konkret kepada staf dan pelanggan mengenai bagaimana cara menggunakan chatbot.

5. Pengembangan hasil penelitian
Setelah menyelesaikan penelitian, pastikan untuk mengembangkan hasil penelitian tersebut dalam bentuk seminar, presentasi, atau e-book atau sharing kepada para praktisi UMKM di daerah sekitar. 𝐔𝐧𝐭𝐮𝐤 𝐜𝐮𝐤𝐮𝐩 𝐛𝐚𝐛 𝟐, 𝐤𝐞𝐫𝐞𝐧𝐭𝐮𝐧𝐠 𝐝𝐚𝐭𝐚 𝐜𝐞𝐫𝐝𝐚𝐬𝐭 𝐤𝐞𝐩𝐚𝐝𝐚 𝐭𝐞𝐫𝐡𝐚𝐝𝐚𝐩 𝐮𝐧𝐭𝐮𝐤 𝐝𝐞𝐧𝐠𝐚𝐧 𝐦𝐞𝐦𝐛𝐮𝐚𝐭𝐤𝐚𝐧 Kementrian Perdagangan.

Semoga saran dan pandangan dari saya dapat membantu Anda dalam menyelesaikan penelitian Anda, dan semoga penelitian ini dapat memberikan kontribusi positif bagi perkembangan UMKM di daerah.
`;
const prompt3 = `
Berikut adalah data yang digunakan untuk menyusun latar belakang:
---
UMKM berdiri sejak 17 Mei tahun 2018. UMKM tersebut merupakan distributor sekaligus menjual produk berbagai obat-obatan herbal dari PT. HPAI. UMKM di handle oleh seorang agen resmi yang sudha terdaftar dan bukan bagian dari karyawan perusahaan (lebih seperti program afilasi).

PT Herba Penawar Alwahida Indonesia, yang kemudian dikenal sebagai HPAI, merupakan salah satu perusahaan Bisnis Halal Network di Indonesia yang fokus pada penyediaan produk-produk barang konsumsi (consumer goods) yang halal dan berkualitas. HPAI, sesuai dengan akta pendirian perusahaan, secara resmi didirikan pada tanggal 19 Maret 2012.

Implementasi chatbot dilakukan karena terdapat masalah pada pelayanan pelanggan UMKM yang dimana banyaknya pelanggan yang mengubungi admin setiap harinya untuk menanyakan hal seputar produk maupun pelayanan produk (seperti: menanyakan stok produk, harga, manfaat, dll), hal ini berakibat admin tidak dapat membalas pesan dari semua pelanggan dalam waktu yang cepat, terlebih lagi waktu jam kerja yang terbatas (jam istirahat, jam off kerja, hari libur). Pelayanan pelanggan yang lambat respon tentunya dapat mengecewakan para pelanggan dan berefek pada profit penjualan produk, membuat pelanggan yang ingin membeli produk menunggu kepastian respon penjual sebelum memesan/membeli produk.

Chatbot akan di implementasikan pada kontak whatsapp baru UMKM sebagai asisten admin yang nantinya akan melayani pelanggan dan memberikan informasi seputar produk.

Chatbot dibuat menggunakan librari Baileys whatsapp API, NodeJS, dan menggunakan bahasa pemrogaman JavaScript dan TypeScript
---
Susunlah latar belakang berdasarkan data diatas, latar belakang nantinya akan digunakan sebagai bagian dari bab pendahuluan, pastikan cakupan latar belakang sesuai dengan kaidah penilisan karya ilmiah. Buat setidaknya 8 paragraf.
`;
const response3 = `
UMKM merupakan bagian yang sangat penting dalam perekonomian Indonesia. UMKM menjamur di berbagai sektor seperti perdagangan, jasa, dan produksi, dan memberikan kontribusi yang signifikan terhadap pertumbuhan ekonomi nasional. Salah satu UMKM yang sedang berkembang adalah distributor produk herbal dari PT. HPAI. Saat ini, distributor ini mengalami kendala dalam pelayanan pelanggan, terutama dalam merespon pesan-pesan pelanggan dengan cepat. Hal ini memengaruhi kualitas layanan dan penjualan produk.

Sebagai perusahaan yang memiliki tujuan menjual produk-produk halal dan berkualitas, PT. HPAI mengakui pentingnya memberikan layanan konsumen yang memuaskan. Adanya kendala dalam pelayanan pelanggan dapat mengurangi reputasi perusahaan dan menyebabkan kekecewaan pelanggan. Oleh karena itu, perusahaan perlu melakukan inovasi untuk meningkatkan kualitas layanan. Salah satu solusinya adalah dengan mengimplementasikan chatbot.

Chatbot adalah solusi bantuan pelanggan yang dapat mengoptimalkan layanan tanpa harus memerlukan admin/customer service manusia. Hal ini dapat mempercepat respon pelanggan dan meningkatkan efisiensi dalam pelayanan pelanggan. Dalam rangka meningkatkan pelayanan pelanggan, UMKM ini hendak mengimplementasikan chatbot pada platform whatsapp yang baru agar lebih mudah dalam mengakses informasi produk.

Dalam pengimplementasian chatbot pada whatsapp, UMKM berencana menggunakan librari Baileys whatsapp API, NodeJS dan bahasa pemrograman Javascript/TypeScript. Keputusan UMKM ini didasarkan pada ketersediaan sumber daya manusia yang mampu menguasai bahasa pemrograman ini.

Upaya UMKM ini dalam meningkatkan kualitas layanan melalui chatbot dapat meningkatkan kepuasan pelanggan dan kemudian berdampak pada pertumbuhan bisnis secara keseluruhan. Namun, implementasi chatbot juga memiliki tantangan khusus dalam rencana bisnis ini. Bagian penting dari rencana bisnis ini adalah merancang chatbot yang dapat mengenali pertanyaan dan permintaan pelanggan dengan baik. Oleh karena itu, pelatihan dan pengembangan keterampilan pengoperasian chatbot akan sangat penting.

Implementasi chatbot memerlukan pemikiran matang dan tekad kuat untuk bisa maksimal. Oleh karena itu, UMKM ini akan melakukan riset sebelum mengimplementasikan chatbot, seperti memahami preferensi dan kebutuhan pelanggan, sehingga chatbot dapat terkonfigurasi sesuai dengan kebutuhan pelanggan. Selain itu, penting juga untuk mempertimbangkan semua kemungkinan yang terkait dengan privasi dan penggunaan data pelanggan sebelum mengimplementasikan chatbot.

Hal ini penting untuk memastikan bahwa solusi chatbot dapat memberikan kenyamanan dan keamanan dalam penggunaannya. Implementasi chatbot pada platform whatsapp akan menjadi jalan keluar yang ideal untuk mengatasi kendala dalam pelayanan pelanggan pada UMKM in. Kesimpulannya, implementasi chatbot dapat menjadi strategi efektif dalam meningkatkan kualitas layanan dan membantu UMKM mempertahankan pasar dalam lingkungan bisnis yang semakin ketat.
`;
const prompt4 = `
Apakah sudah semua?
`;

(async () => {
  const { answer, usage } = await openAi.createCompletion([
    {
      role: "user",
      content: prompt1,
    },
    {
      role: "assistant",
      content: response1,
    },
    {
      role: "user",
      content: prompt2,
    },
    {
      role: "assistant",
      content: response2,
    },
    {
      role: "user",
      content: prompt3,
    },
    {
      role: "assistant",
      content: response3,
    },
    {
      role: "user",
      content: prompt4,
    },
  ]);
  console.log(usage);
  writeFileSync("./dataText2.txt", answer);
})();
