import { useState } from "react";

// Hero Section Component
const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-[#FFF8E7] to-[#FFE4B5] overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 text-6xl animate-bounce">👧</div>
      <div className="absolute top-40 right-20 text-5xl animate-pulse">🦊</div>
      <div className="absolute bottom-40 left-20 text-4xl">🎮</div>
      
      <div className="max-w-5xl mx-auto px-6 py-20 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#2D3436] mb-6 leading-tight">
          Kerja Lebih Sehat dengan IndoHealth!
        </h1>
        
        <h2 className="text-4xl md:text-5xl font-bold text-[#E17055] mb-8">
          Burnout Assistant untuk Pekerja
        </h2>
        
        <p className="text-xl md:text-2xl text-[#636E72] mb-10 max-w-3xl mx-auto">
          Dengan IndoHealth, kamu bisa tetap produktif, kerja lebih terarah dan tetap menjaga kesehatan mental setiap hari
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            className="px-10 py-4 bg-[#E17055] text-white text-xl font-semibold rounded-full hover:bg-[#D63031] transition-all duration-300 transform hover:scale-105 shadow-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Mulai Sekarang
          </button>
          <button className="px-10 py-4 bg-white text-[#E17055] text-xl font-semibold rounded-full border-2 border-[#E17055] hover:bg-[#FFF5F5] transition-all duration-300 shadow-lg">
            Lihat Demo
          </button>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

// Stats Section Component
const StatsSection = () => {
  const stats = [
    { emoji: "👥", number: "100+", label: "Pengguna" },
    { emoji: "💼", number: "100+", label: "Pengalaman" },
    { emoji: "⭐", number: "8/10", label: "Rating" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-5xl mb-4">{stat.emoji}</span>
              <span className="text-5xl font-bold text-[#E17055]">{stat.number}</span>
              <span className="text-xl text-[#636E72] mt-2">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Regional Section Component
const RegionalSection = () => {
  const regions = [
    { name: "Tetap Produktif", emoji: "💪", image: "https://s3.us-west-2.amazonaws.com/yourware-assets/user_assets/acQRPVyL5AUMlOinKW3kIa36q4h1/32be8b60-c190-4e9d-9dc6-d9b038cc952b/fyef02av5i.png" },
    { name: "Kerja Terarah", emoji: "🎯", image: "https://s3.us-west-2.amazonaws.com/yourware-assets/user_assets/acQRPVyL5AUMlOinKW3kIa36q4h1/f605e768-ce34-4c45-86c9-4181b8b46568/jpgeu4d6en.png" },
    { name: "Jaga Kesehatan", emoji: "🧘", image: "https://s3.us-west-2.amazonaws.com/yourware-assets/user_assets/acQRPVyL5AUMlOinKW3kIa36q4h1/f605e768-ce34-4c45-86c9-4181b8b46568/jpgeu4d6en.png" },
    { name: "Isi Test", emoji: "📝", image: "https://s3.us-west-2.amazonaws.com/yourware-assets/user_assets/acQRPVyL5AUMlOinKW3kIa36q4h1/1b7ac1b6-8825-4a4d-a2ea-7562933fd409/ca53fkmwm4.png" },
    { name: "Hasil & Rekomendasi", emoji: "📊", image: "https://s3.us-west-2.amazonaws.com/yourware-assets/user_assets/acQRPVyL5AUMlOinKW3kIa36q4h1/0ce2bad7-6a67-4ff7-9f17-ddbbc68d0282/2fr7ndb9qh.png" },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#FFF8E7] to-[#FFE4B5]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-6">
          {regions.map((region, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <img src={region.image} alt={region.name} className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-bold text-[#2D3436]">{region.emoji}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block bg-[#E17055] text-white px-8 py-4 rounded-full">
            <span className="text-xl font-semibold">Akurasi 99%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Problem Section Component
const ProblemSection = () => {
  const problems = [
    {
      emoji: "👦",
      number: "35%",
      subtitle: "35 dari 100 anak",
      title: "Siswa SD Belum Cakap Membaca",
      description: "Berdasarkan data UNESCO, sekitar 35% siswa SD di Indonesia masih kesulitan dalam kemampuan literasi dasar.",
    },
    {
      emoji: "👨‍👩‍👧",
      number: "70%",
      subtitle: "7 dari 10 orang tua",
      title: "Orang Tua Frustrasi",
      description: "Orang tua sering merasa frustrasi karena anak belum lancar membaca dan sulit mengikuti proses belajar.",
    },
    {
      emoji: "📚",
      number: "80%",
      subtitle: "8 dari 10 anak",
      title: "Metode Monoton",
      description: "Metode belajar yang monoton dan tidak menarik membuat anak cepat bosan dan kehilangan minat.",
    },
  ];

  return (
    <section className="py-20 bg-[#FFF5F5]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-5xl mb-4 block">⚠️</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D3436] mb-4">
            Fakta yang Perlu Diperhatikan
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-[#E17055]">
            Masalah Literasi Anak di Indonesia
          </h3>
          <p className="text-xl text-[#636E72] mt-4">
            Data yang mengejutkan tentang kemampuan membaca anak Indonesia
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <span className="text-5xl mb-4 block">{problem.emoji}</span>
              <span className="text-6xl font-bold text-[#E17055] block mb-2">{problem.number}</span>
              <span className="text-lg text-[#636E72] block mb-4">{problem.subtitle}</span>
              <h4 className="text-2xl font-bold text-[#2D3436] mb-4">{problem.title}</h4>
              <p className="text-[#636E72] leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Stories Section Component
const StoriesSection = () => {
  const stories = [
    {
      emoji: "👦",
      title: "Malin Kundang",
      region: "Sumatera Barat",
      level: "Level 1",
      duration: "5 menit",
      description: "Siap untuk Membaca?",
      cta: "Mulai Sekarang",
    },
    {
      emoji: "🥒",
      title: "Timun Mas",
      region: "Jawa Tengah",
      level: "Level 2",
      duration: "7 menit",
      description: "Siap untuk Membaca?",
      cta: "Mulai Sekarang",
    },
    {
      emoji: "🦌",
      title: "Kancil & Buaya",
      region: "Jawa Barat",
      level: "Level 1",
      duration: "4 menit",
      description: "Siap untuk Membaca?",
      cta: "Mulai Sekarang",
    },
    {
      emoji: "🦢",
      title: "Bidasari",
      region: "Jawa Timur",
      level: "Level 3",
      duration: "8 menit",
      description: "Siap untuk Membaca?",
      cta: "Mulai Sekarang",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-5xl mb-4 block">📚</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D3436] mb-4">
            Koleksi Cerita Rakyat
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-[#E17055]">
            Jelajahi Cerita Nusantara
          </h3>
          <p className="text-xl text-[#636E72] mt-4">
            Klik kartu untuk melihat detail - Setiap cerita adalah petualangan baru!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story, index) => (
            <div key={index} className="bg-gradient-to-b from-[#FFF8E7] to-[#FFE4B5] rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-6xl mb-4 text-center">{story.emoji}</div>
              <h4 className="text-2xl font-bold text-[#2D3436] text-center mb-2">{story.title}</h4>
              <p className="text-[#636E72] text-center mb-4">{story.region}</p>
              <div className="flex justify-center gap-4 mb-4">
                <span className="bg-[#E17055] text-white px-3 py-1 rounded-full text-sm">{story.level}</span>
                <span className="bg-[#2D3436] text-white px-3 py-1 rounded-full text-sm">{story.duration}</span>
              </div>
              <div className="text-center">
                <p className="text-[#636E72] mb-4">{story.description}</p>
                <p className="text-2xl mb-4">Tempetukan petualangan baru!</p>
                <button className="w-full py-3 bg-[#E17055] text-white font-semibold rounded-full hover:bg-[#D63031] transition-colors">
                  {story.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-10 py-4 bg-[#2D3436] text-white text-xl font-semibold rounded-full hover:bg-[#1a1a1a] transition-colors shadow-lg">
            Lihat Semua Cerita
          </button>
        </div>
      </div>
    </section>
  );
};

// Features Section Component
const FeaturesSection = () => {
  const features = [
    { emoji: "🎧", title: "Audio Narasi", description: "Dengarkan cerita dibacakan dengan suara yang jelas dan menarik" },
    { emoji: "🗣️", title: "Pengucapan Kata", description: "Latih pronunciation dengan teknologi pengenalan suara" },
    { emoji: "❓", title: "Kuis Pemahaman", description: "Tes pemahaman dengan kuis interaktif setelah membaca" },
    { emoji: "✨", title: "Teks Interaktif", description: "Kata-kata penting disorot untuk kemudahan belajar" },
    { emoji: "✍️", title: "Latihan Menulis", description: "Latih kemampuan menulis dengan panduan yangfun" },
    { emoji: "📖", title: "Koleksi Kata", description: "Kumpulkan kosakata baru dari setiap cerita yang dibaca" },
    { emoji: "🎤", title: "Rekam Suara", description: "Rekam dan dengarkan sendiri membaca cerita" },
    { emoji: "💬", title: "Diskusi Cerita", description: "Berdiskusi tentang cerita dengan karaktervirtual" },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#FFF8E7] to-[#FFE4B5]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-5xl mb-4 block">📖</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D3436] mb-4">
            Fitur Belajar & Membaca
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-[#E17055]">
            Belajar Membaca Jadi Seru!
          </h3>
          <p className="text-xl text-[#636E72] mt-4">
            Fitur lengkap untuk membantu anak belajar membaca dengan cara yang menyenangkan
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4">{feature.emoji}</div>
              <h4 className="text-xl font-bold text-[#2D3436] mb-2">{feature.title}</h4>
              <p className="text-[#636E72]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Progress Section Component
const ProgressSection = () => {
  const progress = [
    { label: "Cerita Dibaca", current: 24, total: 50 },
    { label: "Kata Dipelajari", current: 156, total: 500 },
    { label: "Kuis Selesai", current: 18, total: 30 },
    { label: "Hari Beruntun", current: 7, total: 30 },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-5xl mb-4 block">📊</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D3436]">
            Kemajuan Belajar Anak
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {progress.map((item, index) => (
            <div key={index} className="bg-gradient-to-r from-[#FFF8E7] to-[#FFE4B5] rounded-2xl p-6 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-semibold text-[#2D3436]">{item.label}</span>
                <span className="text-2xl font-bold text-[#E17055]">{item.current}/{item.total}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div 
                  className="bg-[#E17055] h-4 rounded-full transition-all duration-500"
                  style={{ width: `${(item.current / item.total) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Level System Section
const LevelSystemSection = () => {
  const levels = [
    { level: 1, name: "Pemula", emoji: "🌱" },
    { level: 2, name: "Pembaca", emoji: "📚" },
    { level: 3, name: "Petualang", emoji: "🔥" },
    { level: 4, name: "Penjelajah", emoji: "🧭" },
    { level: 5, name: "Master", emoji: "👑" },
  ];

  const achievements = [
    "Pembaca Pertama", "Bintang 5", "Juara", "Berkilaul", "Maharaja", "Cepat Tangan"
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#2D3436] to-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-5xl mb-4 block">🏆</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sistem Level
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-[#E17055]">
            Naik Level Bareng Anak!
          </h3>
          <p className="text-xl text-gray-300 mt-4">
            Setiap bacaan membuat anak semakin pintar dan percaya diri
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {levels.map((level, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center min-w-[150px]">
              <span className="text-4xl block mb-2">{level.emoji}</span>
              <span className="text-2xl font-bold text-[#E17055]">Level {level.level}</span>
              <p className="text-[#636E72] font-semibold">{level.name}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <span className="text-4xl mb-6 block">🏅</span>
          <h3 className="text-2xl font-bold text-white mb-8">Achievement yang Sudah Diraih</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-[#E17055] text-white px-6 py-3 rounded-full font-semibold">
                {achievement}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Key Features Section
const KeyFeaturesSection = () => {
  const features = [
    {
      emoji: "🗺️",
      title: "Peta Eksplorasi Indonesia",
      description: "Anak-anak menjelajahi berbagai wilayah Indonesia melalui peta interaktif yang menarik."
    },
    {
      emoji: "📖",
      title: "Misi Membaca Cerita Rakyat",
      description: "Setiap misi membawa cerita rakyat dari berbagai daerah seperti Malin Kundang, Timun Mas, dan lainnya."
    },
    {
      emoji: "📈",
      title: "Sistem Level & Progress",
      description: "Anak naik level seiring kemampuan membaca mereka berkembang dengan sistem yang motivatif."
    },
    {
      emoji: "🎖️",
      title: "Reward & Badge",
      description: "Kumpulkan badge menarik dan reward menarik sebagai penghargaan prestasi membaca."
    },
    {
      emoji: "👨‍👩‍👧",
      title: "Dashboard Orang Tua",
      description: "Orang tua dapat memantau perkembangan kemampuan membaca anak secara real-time."
    },
    {
      emoji: "🎮",
      title: "Mini Game Edukatif",
      description: "Game seru yang membantu anak belajar sambil bermain dengan cara yang menyenangkan."
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-5xl mb-4 block">⚡</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D3436] mb-4">
            Semua yang Dibutuhkan
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-[#E17055]">
            Fitur Utama
          </h3>
          <p className="text-xl text-[#636E72] mt-4">
            Fitur lengkap untuk pengalaman belajar yang menyenangkan
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-b from-[#FFF8E7] to-[#FFE4B5] rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">{feature.emoji}</div>
              <h4 className="text-xl font-bold text-[#2D3436] mb-3">{feature.title}</h4>
              <p className="text-[#636E72]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#E17055] to-[#D63031] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 text-8xl opacity-20">🚀</div>
      <div className="absolute bottom-10 right-10 text-8xl opacity-20">⭐</div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Mulai Petualangan Membaca Anak Anda Hari Ini!
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Bergabunglah dengan 10.000+ orang tua yang telah memberikan pengalaman belajar membaca yang menyenangkan untuk anak mereka.
        </p>
        
        <button className="px-12 py-5 bg-white text-[#E17055] text-2xl font-bold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl">
          Mulai Gratis Sekarang
        </button>
        
        <div className="flex flex-wrap justify-center gap-6 mt-10 text-white/90">
          <div className="flex items-center gap-2">
            <span className="text-green-300">✓</span>
            <span>Gratis mencoba</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-300">✓</span>
            <span>Tanpa kartu kredit</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-300">✓</span>
            <span>Langsung bisa mulai</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-300">✓</span>
            <span>Support 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="py-8 bg-[#2D3436] text-center">
      <p className="text-white/70">
        Made By <span className="font-semibold text-white">YouWare</span>
      </p>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-[#F6F4F1]">
      <HeroSection />
      <StatsSection />
      <RegionalSection />
      <ProblemSection />
      <StoriesSection />
      <FeaturesSection />
      <ProgressSection />
      <LevelSystemSection />
      <KeyFeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
