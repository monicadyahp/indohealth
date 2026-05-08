import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  CheckCircle2, Heart, TrendingUp, Target, Zap, 
  MessageSquare, ChevronRight, Menu, X, Star, 
  ArrowRight, BarChart3, Bell, BrainCircuit,
  Info, Award, Users, ShieldCheck, PlayCircle,
  HelpCircle, Mail, Instagram, Twitter, Linkedin,
  MousePointer2, AlertCircle, Activity, Coffee,
  ClipboardList, Timer
} from "lucide-react";

// --- Animasi Config ---
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

// --- Navbar ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-[#FF4D94] to-[#7F56DA] rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
            <Heart className="text-white w-6 h-6" fill="currentColor" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-[#2D3436]">Indo<span className="text-[#7F56DA]">Health</span></span>
        </div>
        <div className="hidden lg:flex items-center gap-10 font-bold text-sm uppercase text-gray-500">
          <a href="#uvp" className="hover:text-[#7F56DA] transition-colors">UVP</a>
          <a href="#test" className="hover:text-[#7F56DA] transition-colors">Burnout Test</a>
          <a href="#hasil" className="hover:text-[#7F56DA] transition-colors">Hasil</a>
          <a href="#rekomendasi" className="hover:text-[#7F56DA] transition-colors">Rekomendasi</a>
          <a href="#premium" className="hover:text-[#7F56DA] transition-colors">Premium</a>
          <button className="px-8 py-3 bg-[#7F56DA] text-white rounded-2xl shadow-xl shadow-purple-200 hover:scale-105 transition-all">Mulai Sekarang</button>
        </div>
      </div>
    </nav>
  );
};

// --- Hero Section ---
const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative pt-32 pb-20 lg:pt-56 lg:pb-40 overflow-hidden bg-gradient-to-br from-[#F5F3FF] via-white to-[#FFF0F7]">
      <motion.div style={{ y: y1 }} className="absolute top-20 left-10 w-64 h-64 bg-purple-200/40 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="space-y-10">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-white border border-purple-100 text-[#7F56DA] rounded-full text-sm font-black shadow-sm backdrop-blur-sm">
            <Zap size={18} className="fill-current text-yellow-400" /> Burnout Assistant untuk Pekerja
          </div>
          <h1 className="text-6xl lg:text-8xl font-black text-[#2D3436] leading-[0.9] tracking-tighter uppercase">
            Kerja Lebih Sehat <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7F56DA] to-[#FF4D94]">dengan IndoHealth</span>
          </h1>
          <p className="text-2xl text-gray-600 max-w-xl font-medium leading-relaxed">
            Jangan biarkan burnout menghambat kariermu. Kelola kesehatan mentalmu dengan data cerdas setiap hari.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="px-12 py-6 bg-gradient-to-r from-[#FF4D94] to-[#E84393] text-white text-2xl font-black rounded-[2rem] shadow-2xl shadow-pink-200 flex items-center justify-center gap-4 transition-all hover:scale-105 active:scale-95">
              Mulai Sekarang! <ArrowRight strokeWidth={3} />
            </button>
            <button className="flex items-center justify-center gap-3 font-bold text-gray-500 hover:text-[#7F56DA] transition-colors">
              <PlayCircle size={48} className="text-[#7F56DA]" /> Lihat Cara Kerja
            </button>
          </div>
          <div className="pt-8 flex items-center gap-8">
            <div className="flex -space-x-4">
              {[1,2,3,4].map(i => <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden shadow-md"><img src={`https://i.pravatar.cc/150?img=${i+10}`} alt="avatar" /></div>)}
            </div>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest"><span className="text-[#2D3436] font-black text-xl">10,000+</span> Pengguna Aktif</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }} className="relative lg:ml-auto">
          <div className="bg-white p-6 rounded-[4.5rem] shadow-2xl border-[12px] border-gray-50 relative z-10 max-w-[550px]">
            <img src="https://img.freepik.com/free-vector/employees-concept-illustration_114360-8431.jpg" className="w-full rounded-[3.5rem]" alt="Hero" />
          </div>
          <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl z-20 flex items-center gap-4 border border-purple-50">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shadow-inner"><Target size={28} /></div>
            <div><p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Focus Level</p><p className="text-2xl font-black text-[#2D3436]">Optimal</p></div>
          </motion.div>
          <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl z-20 flex items-center gap-4 border border-pink-50">
            <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600 shadow-inner"><Heart size={28} fill="currentColor" /></div>
            <div><p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Mood Score</p><p className="text-2xl font-black text-[#2D3436]">Sangat Baik</p></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Section UVP ---
const UVPSection = () => {
  const items = [
    { title: "TETAP PRODUKTIF", icon: <TrendingUp className="text-green-500 w-12 h-12" />, desc: "Pantau kondisi stres dan energi setiap hari, agar kamu tetap fokus dan produktif sepanjang hari.", color: "from-green-50 to-white", accent: "bg-green-500" },
    { title: "KERJA LEBIH TERARAH", icon: <Target className="text-blue-500 w-12 h-12" />, desc: "Dapatkan insight dan rekomendasi yang membantu kamu mengatur prioritas, sehingga hasil kerja lebih optimal.", color: "from-blue-50 to-white", accent: "bg-blue-500" },
    { title: "JAGA KESEHATAN MENTAL", icon: <Heart className="text-rose-500 w-12 h-12" />, desc: "Rutin merawat kesehatan mental membuat pikiran lebih tenang, emosi lebih stabil, dan hidup lebih seimbang.", color: "from-rose-50 to-white", accent: "bg-rose-500" }
  ];

  return (
    <section id="uvp" className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-[#7F56DA] font-black uppercase tracking-[0.3em] text-sm mb-4 block">Keunggulan Utama</span>
          <h2 className="text-5xl lg:text-7xl font-black text-[#2D3436] leading-tight uppercase tracking-tighter underline decoration-[#FF4D94] decoration-[8px] underline-offset-[12px]">Nilai Lebih IndoHealth</h2>
          <p className="text-2xl text-gray-500 font-medium mt-12">Dengan IndoHealth, kamu bisa tetap produktif, kerja lebih terarah, dan tetap menjaga kesehatan mental setiap hari.</p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {items.map((item, i) => (
            <motion.div key={i} whileHover={{ y: -20, scale: 1.02 }} className={`bg-gradient-to-br ${item.color} p-14 rounded-[4rem] border border-gray-100 shadow-xl transition-all duration-500 relative group overflow-hidden`}>
              <div className={`absolute top-0 left-0 w-2 h-full ${item.accent} opacity-20`}></div>
              <div className="bg-white w-24 h-24 rounded-3xl flex items-center justify-center shadow-xl mb-12 group-hover:rotate-6 transition-transform">{item.icon}</div>
              <h3 className="text-3xl font-black text-[#2D3436] mb-6 tracking-tight uppercase leading-none">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-xl font-bold">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Section Burnout Test (Step 1) ---
const BurnoutTestSection = () => {
  const [step, setStep] = useState(1);
  const questions = [
    "Saya merasa lelah dan kewalahan dengan pekerjaan.",
    "Saya merasa sulit fokus saat bekerja seharian.",
    "Saya merasa kelelahan secara mental dan emosional.",
    "Saya tetap bekerja walau tubuh sudah memberi sinyal lelah.",
    "Saya sulit mengatur prioritas tugas kerja saya."
  ];

  const emojis = [
    { label: "Never", color: "bg-blue-400", icon: "🙁" },
    { label: "Rarely", color: "bg-green-400", icon: "😐" },
    { label: "Sometimes", color: "bg-yellow-400", icon: "🙂" },
    { label: "Often", color: "bg-orange-400", icon: "😟" },
    { label: "Always", color: "bg-red-500", icon: "😫" }
  ];

  return (
    <section id="test" className="py-40 bg-[#FFF5F9]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeInUp} className="bg-white rounded-[5rem] p-10 lg:p-24 shadow-2xl border border-pink-100 grid lg:grid-cols-2 gap-24 items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
          <div className="space-y-12 relative z-10">
            <div>
              <span className="px-8 py-3 bg-[#FF4D94] text-white rounded-full text-xs font-black uppercase tracking-[0.3em] shadow-lg shadow-pink-100">Step 1</span>
              <h2 className="text-6xl lg:text-8xl font-black text-[#2D3436] mt-10 mb-6 uppercase tracking-tighter leading-none">ISI TEST</h2>
              <p className="text-2xl text-gray-500 font-bold leading-relaxed">Buka aplikasi, pilih "Burnout Test", lalu jawab pertanyaan singkat.</p>
            </div>
            <div className="space-y-10 pt-4">
               {[
                 { i: 1, title: "Buka aplikasi IndoHealth", desc: "Masuk ke halaman utama aplikasi di smartphone kamu." },
                 { i: 2, title: "Pilih \"Burnout Test\"", desc: "Mulai kerjakan test untuk mengetahui kondisi stres kamu saat ini." }
               ].map(item => (
                 <div key={item.i} className="flex gap-8 items-start group">
                    <div className="w-20 h-20 bg-[#FF4D94] rounded-3xl flex-shrink-0 flex items-center justify-center text-white font-black text-3xl shadow-xl group-hover:scale-110 transition-transform">{item.i}</div>
                    <div><h4 className="text-2xl font-black text-[#2D3436] mb-2 uppercase tracking-tight">{item.title}</h4><p className="text-xl text-gray-400 font-bold">{item.desc}</p></div>
                 </div>
               ))}
            </div>
            <div className="p-12 bg-purple-50 rounded-[3rem] border-l-[16px] border-[#7F56DA] shadow-sm">
               <div className="flex items-center gap-4 mb-4 text-[#7F56DA] font-black uppercase text-sm tracking-widest"><Info /> Tips Cerdas</div>
               <p className="text-2xl italic text-gray-600 font-black leading-relaxed">"Jawablah dengan jujur sesuai kondisi kamu agar hasilnya lebih akurat bagi algoritma AI kami."</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#FDF2F8] to-[#F5F3FF] p-3 rounded-[4.5rem] border-[6px] border-white shadow-2xl relative">
            <div className="bg-white rounded-[4rem] p-12 lg:p-16 shadow-inner min-h-[600px] flex flex-col justify-center">
               <div className="flex justify-between items-center mb-12">
                  <p className="text-sm font-black text-gray-400 uppercase tracking-[0.3em]">Pertanyaan {step} dari 5</p>
                  <div className="flex gap-2">
                    {[1,2,3,4,5].map(i => <div key={i} className={`w-10 h-2.5 rounded-full transition-all duration-500 ${i <= step ? "bg-[#FF4D94] shadow-md shadow-pink-100" : "bg-gray-100"}`} />)}
                  </div>
               </div>
               <h4 className="text-4xl lg:text-5xl font-black text-[#2D3436] leading-[1.1] mb-16 tracking-tight">{questions[step-1]}</h4>
               
               <div className="space-y-12">
                  <div className="flex justify-between text-xs font-black text-gray-400 uppercase tracking-[0.2em] px-2 font-black"><span>Tidak Pernah</span><span>Selalu</span></div>
                  <div className="grid grid-cols-5 gap-4">
                    {emojis.map((opt, i) => (
                      <button key={i} onClick={() => setStep(step < 5 ? step + 1 : 1)} className="group flex flex-col items-center gap-4">
                        <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-3xl ${opt.color} flex items-center justify-center text-4xl shadow-xl transition-all group-hover:scale-110 group-hover:-translate-y-2 group-active:scale-95`}>{opt.icon}</div>
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-tighter text-center leading-tight opacity-0 group-hover:opacity-100 transition-opacity">{opt.label}</span>
                      </button>
                    ))}
                  </div>
               </div>
               <button onClick={() => setStep(step < 5 ? step + 1 : 1)} className="w-full py-8 mt-16 bg-[#FF4D94] text-white rounded-[2.5rem] font-black text-2xl shadow-[0_20px_50px_rgba(255,77,148,0.4)] flex items-center justify-center gap-4 hover:brightness-110 active:scale-95 transition-all">Lanjut <ChevronRight strokeWidth={5} /></button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Section Hasil (Step 2) ---
const HasilSection = () => {
  const bars = [
    { label: "Beban Kerja Tinggi", val: 70, color: "bg-red-500" },
    { label: "Kurang Istirahat", val: 55, color: "bg-orange-500" },
    { label: "Tekanan Deadline", val: 45, color: "bg-yellow-500" },
    { label: "Kurang Fokus", val: 35, color: "bg-green-500" },
    { label: "Work-Life Balance", val: 30, color: "bg-blue-500" }
  ];

  return (
    <section id="hasil" className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeInUp} className="bg-[#F5F3FF] rounded-[5rem] p-10 lg:p-24 shadow-2xl border border-purple-100 grid lg:grid-cols-2 gap-24 items-start">
           <div className="space-y-14">
              <div>
                <span className="px-8 py-3 bg-[#7F56DA] text-white rounded-full text-xs font-black uppercase tracking-[0.3em] shadow-lg">Step 2</span>
                <h2 className="text-6xl lg:text-8xl font-black text-[#2D3436] mt-10 mb-8 uppercase tracking-tighter leading-none">HASIL</h2>
                <p className="text-2xl text-gray-500 font-bold leading-relaxed">Setelah itu, kamu langsung dapat melihat hasil kondisi stres kamu secara real-time melalui dashboard interaktif.</p>
              </div>
              <div className="space-y-12">
                {[
                  { i: 1, title: "Langsung lihat hasil", desc: "Aplikasi menampilkan tingkat risiko burnout secara jelas dengan analisis mendalam." },
                  { i: 2, title: "Grafik perkembangan", desc: "Aplikasi juga menampilkan grafik penyebab stres utama kamu berdasarkan aktivitas harian." }
                ].map(item => (
                  <div key={item.i} className="flex gap-8 items-start group">
                    <div className="w-20 h-20 bg-[#7F56DA] rounded-3xl flex-shrink-0 flex items-center justify-center text-white font-black text-3xl shadow-xl shadow-purple-100">{item.i}</div>
                    <div><h4 className="text-2xl font-black text-[#2D3436] mb-2 uppercase tracking-tight">{item.title}</h4><p className="text-xl text-gray-400 font-bold leading-snug">{item.desc}</p></div>
                  </div>
                ))}
              </div>
              <div className="p-12 bg-white rounded-[3.5rem] shadow-xl border border-purple-100 flex gap-8 items-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-full bg-purple-50 opacity-30"></div>
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-[#7F56DA] flex-shrink-0 shadow-inner"><Info size={40} /></div>
                <p className="text-xl text-gray-600 font-black leading-relaxed relative z-10">Skor dan tingkat risiko dihitung berdasarkan algoritma AI. Semakin tinggi skor, semakin tinggi risiko burnout.</p>
              </div>
           </div>

           <div className="bg-white rounded-[4.5rem] p-12 lg:p-16 shadow-[0_60px_100px_-20px_rgba(0,0,0,0.2)] border border-gray-100 space-y-14 relative group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-100 rounded-full blur-[80px] opacity-30"></div>
              <div className="text-center relative z-10">
                 <div className="w-28 h-24 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-inner"><AlertCircle size={64} strokeWidth={4} /></div>
                 <h3 className="text-5xl font-black text-red-500 mb-8 uppercase tracking-tighter underline decoration-4 decoration-red-200 underline-offset-8">High Risk Burnout</h3>
                 <div className="bg-gray-50 py-12 rounded-[4rem] border-2 border-gray-100 shadow-inner flex flex-col items-center">
                    <p className="text-xs font-black text-gray-400 uppercase tracking-[0.4em] mb-4">Skor Kamu Saat Ini</p>
                    <div className="flex items-baseline gap-2">
                       <p className="text-8xl font-black text-[#2D3436]">78</p>
                       <p className="text-3xl text-gray-300 font-black">/ 100</p>
                    </div>
                    <div className="mt-8 inline-block px-10 py-3 bg-red-100 text-red-600 rounded-full font-black text-sm uppercase tracking-[0.2em] border-4 border-red-200 animate-pulse">Risiko Tinggi</div>
                 </div>
              </div>
              
              <div className="space-y-12 relative z-10">
                 <div className="flex items-center justify-between border-b-4 border-purple-100 pb-4">
                    <h4 className="font-black text-[#2D3436] uppercase tracking-widest text-sm">Penyebab Stres Utama</h4>
                    <BarChart3 className="text-[#7F56DA]" size={32} />
                 </div>
                 <div className="space-y-10">
                    {bars.map((f, i) => (
                      <div key={i} className="space-y-4">
                        <div className="flex justify-between text-lg font-black tracking-tight"><span className="text-gray-600 uppercase text-sm tracking-widest">{f.label}</span><span className="text-[#2D3436]">{f.val}%</span></div>
                        <div className="w-full h-5 bg-gray-100 rounded-full overflow-hidden shadow-inner border border-gray-50">
                          <motion.div initial={{ width: 0 }} whileInView={{ width: `${f.val}%` }} className={`h-full ${f.color} shadow-lg`} transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: i*0.1 }} />
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
              <button className="w-full py-8 bg-[#7F56DA] text-white rounded-[2.8rem] font-black text-2xl shadow-[0_25px_60px_rgba(127,86,218,0.4)] transition-all hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-4">Lihat Rekomendasi Lengkap <ChevronRight strokeWidth={4}/></button>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Section Rekomendasi (Step 3) ---
const RecommendationSection = () => {
  const list = [
    { title: "Istirahat Singkat", desc: "Ambil jeda 5-10 menit setiap 1-2 jam untuk menyegarkan pikiran.", icon: "☕", check: ["Tarik napas dalam (deep breath)", "Gerakkan tubuh ringan (stretching)"], color: "bg-emerald-50", iconColor: "text-emerald-500" },
    { title: "Atur Prioritas", desc: "Gunakan metode Eisenhower Matrix untuk fokus pada hal penting.", icon: "📋", check: ["Penting & Mendesak", "Penting tapi Tidak Mendesak"], color: "bg-amber-50", iconColor: "text-amber-500" },
    { title: "Latihan Relaksasi", desc: "Luangkan waktu 5-10 menit untuk relaksasi setiap hari.", icon: "🧘", check: ["Meditasi pernapasan terpandu", "Dengarkan musik favorit"], color: "bg-indigo-50", iconColor: "text-indigo-500" }
  ];

  return (
    <section id="rekomendasi" className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeInUp} className="bg-white rounded-[5.5rem] p-10 lg:p-24 shadow-2xl border border-blue-50 grid lg:grid-cols-2 gap-24 items-start relative">
           <div className="space-y-14">
              <div>
                <span className="px-8 py-3 bg-blue-600 text-white rounded-full text-xs font-black uppercase tracking-[0.3em] shadow-lg">Step 3</span>
                <h2 className="text-6xl lg:text-8xl font-black text-[#2D3436] mt-10 mb-8 uppercase tracking-tighter leading-none">REKOMENDASI</h2>
                <p className="text-2xl text-gray-500 font-bold leading-relaxed underline decoration-blue-100 decoration-[10px]">IndoHealth memberikan rekomendasi tindakan untuk mengembalikan keseimbangan mentalmu.</p>
              </div>
              <div className="p-14 bg-blue-50/50 rounded-[4.5rem] border-4 border-white shadow-2xl space-y-8 group relative overflow-hidden transition-all hover:bg-blue-50">
                 <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                 <div className="flex gap-6 items-center text-blue-600 font-black tracking-[0.2em] text-sm uppercase"><ShieldCheck size={48} strokeWidth={4} /> TUJUAN REKOMENDASI</div>
                 <p className="text-3xl text-gray-600 font-black leading-relaxed relative z-10">Membantu kamu mengambil langkah nyata untuk mencegah burnout secara berkelanjutan.</p>
              </div>
              <div className="flex items-center gap-10 bg-[#F5F3FF] p-12 rounded-[4rem] border-2 border-white shadow-xl relative group">
                 <div className="relative">
                    <img src="https://i.pravatar.cc/250?img=12" className="w-32 h-32 rounded-[2.5rem] border-8 border-white shadow-2xl transition-all group-hover:scale-110" alt="Counselor" />
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
                 </div>
                 <div className="space-y-2">
                    <p className="text-2xl italic text-gray-600 font-black leading-snug">"Yuk, mulai ambil langkah kecil untuk perubahan besar bagi kariermu!"</p>
                    <p className="text-[#7F56DA] font-black text-sm uppercase tracking-[0.3em] mt-4 block">Psikolog Klinis IndoHealth</p>
                 </div>
              </div>
           </div>

           <div className="space-y-10 relative">
              <h4 className="font-black text-[#2D3436] uppercase tracking-[0.2em] text-sm border-l-[12px] border-blue-500 pl-8 mb-12 uppercase">Prioritas Tindakan Untuk Kamu</h4>
              {list.map((item, i) => (
                <motion.div key={i} whileHover={{ x: 30, scale: 1.03 }} className={`${item.color} p-12 rounded-[4rem] border-4 border-white shadow-2xl flex gap-12 items-center group transition-all duration-500 cursor-pointer`}>
                  <div className="w-28 h-28 bg-white rounded-[2.5rem] flex items-center justify-center text-6xl shadow-2xl group-hover:rotate-12 transition-transform duration-500">{item.icon}</div>
                  <div className="flex-grow space-y-4">
                    <h5 className="text-3xl font-black text-[#2D3436] tracking-tighter uppercase">{item.title}</h5>
                    <p className="text-gray-500 font-bold text-xl leading-tight opacity-80">{item.desc}</p>
                    <div className="flex flex-wrap gap-4 pt-4">
                      {item.check.map(c => <span key={c} className="text-[11px] font-black uppercase text-gray-500 bg-white/70 px-5 py-2 rounded-full border-2 border-white shadow-sm transition-all hover:bg-white group-hover:text-blue-600">✓ {c}</span>)}
                    </div>
                  </div>
                  <ChevronRight className="text-gray-200 group-hover:text-blue-500 group-hover:translate-x-2 transition-all" size={50} strokeWidth={5} />
                </motion.div>
              ))}
              <button className="w-full py-10 mt-12 bg-gradient-to-r from-blue-600 to-[#7F56DA] text-white rounded-[3.5rem] font-black text-4xl shadow-[0_30px_70px_rgba(127,86,218,0.5)] flex items-center justify-center gap-6 transition-all hover:brightness-110 active:scale-95 tracking-tighter uppercase">Mulai Terapkan Sekarang! <MousePointer2 size={48} fill="currentColor" /></button>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Section Pricing ---
const PricingSection = () => {
  const plans = [
    { title: "Premium Bulanan", price: "49.900", sub: "/ Bulan", features: ["AI Chat Prioritas", "Mood Insight Detail", "Relaksasi Eksklusif"], promo: "Coba Sekarang", color: "from-pink-50 to-white" },
    { title: "Premium 3 Bulan", price: "119.000", sub: "/ 3 Bulan", features: ["Semua Fitur Premium", "Laporan Mental Mingguan", "Bebas Iklan Selamanya"], popular: true, promo: "Hemat 20% - Terlaris", color: "from-amber-50 to-white" },
    { title: "Premium 6 Bulan", price: "199.000", sub: "/ 6 Bulan", features: ["Fitur Paling Lengkap", "AI Konsultasi Intensif", "Workshop Eksklusif"], promo: "Hemat 33% - Terbaik", color: "from-purple-50 to-white" }
  ];

  return (
    <section id="premium" className="py-40 bg-[#F9FAFB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div {...fadeInUp} className="mb-32 space-y-10">
          <span className="px-10 py-4 bg-amber-100 text-amber-600 rounded-full font-black text-sm uppercase tracking-[0.4em] shadow-xl">👑 Upgrade Ke Premium</span>
          <h2 className="text-6xl lg:text-9xl font-black text-[#2D3436] tracking-tighter uppercase leading-[0.85]">Upgrade ke <br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF4D94] via-[#7F56DA] to-[#7F56DA] drop-shadow-sm">IndoHealth Premium</span></h2>
          <p className="text-3xl text-gray-500 font-bold max-w-4xl mx-auto">Dapatkan Fitur Lebih Lengkap untuk Mendukung Kesehatan Mental dan Kariermu!</p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-16 pt-10">
          {plans.map((p, i) => (
            <motion.div key={i} whileHover={{ y: -30, scale: 1.05 }} className={`relative bg-gradient-to-b ${p.color} p-16 rounded-[6rem] border-[3px] flex flex-col transition-all duration-700 ${p.popular ? "border-[#7F56DA] shadow-[0_80px_120px_-30px_rgba(127,86,218,0.3)] scale-110 z-10" : "border-gray-100 shadow-2xl"}`}>
               {p.popular && <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#7F56DA] text-white px-12 py-4 rounded-full font-black text-xs uppercase shadow-2xl tracking-[0.3em] whitespace-nowrap">PALING POPULER</div>}
               <h3 className="text-3xl font-black text-[#2D3436] mb-12 uppercase tracking-widest leading-none border-b-4 border-gray-100 pb-8">{p.title}</h3>
               <div className="text-center mb-16">
                  <span className="text-7xl font-black text-[#2D3436]">Rp {p.price}</span>
                  <p className="text-gray-400 font-black uppercase tracking-[0.3em] text-xs mt-4">{p.sub}</p>
               </div>
               <ul className="space-y-10 mb-20 flex-grow text-left">
                 {p.features.map(f => <li key={f} className="flex items-center gap-6 text-gray-700 font-black text-xl leading-tight"><CheckCircle2 className="text-[#7F56DA] flex-shrink-0" size={32} strokeWidth={5} /> {f}</li>)}
               </ul>
               <button className={`w-full py-10 rounded-[3rem] font-black text-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all ${p.popular ? "bg-[#7F56DA] text-white shadow-purple-300" : "bg-white text-[#FF4D94] border-4 border-[#FF4D94] hover:bg-pink-50"}`}>Pilih Paket</button>
               <p className={`text-center font-black text-sm mt-10 uppercase tracking-[0.3em] ${p.popular ? "text-[#7F56DA]" : "text-[#FF4D94]"}`}>{p.promo}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- FAQ & Footer ---
const FAQ = () => (
  <section id="faq" className="py-40 bg-white">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-6xl lg:text-8xl font-black text-[#2D3436] mb-32 uppercase tracking-tighter underline decoration-[#7F56DA] decoration-[16px] underline-offset-[24px]">Pertanyaan Umum</h2>
      <div className="space-y-10 text-left">
        {[
          { q: "Apakah IndoHealth gratis?", a: "Ya! Fitur dasar tes burnout dan pelacakan mood tersedia gratis selamanya. Fitur Premium memberikan insight AI yang lebih mendalam, akses ke psikolog, dan laporan kesehatan mental mingguan." },
          { q: "Bagaimana cara kerja AI-nya?", a: "Algoritma kami menganalisis input kuis harian, pola aktivitas kerja, dan deteksi emosi pada smartphone kamu untuk memberikan skor burnout yang sangat akurat." },
          { q: "Apakah data saya aman?", a: "Keamanan datamu adalah prioritas kami. Kami menggunakan standar enkripsi militer (AES-256) untuk melindungi semua data privasimu dan tidak akan pernah dibagikan." }
        ].map((faq, i) => (
          <motion.div key={i} {...fadeInUp} className="bg-gray-50 p-14 rounded-[4.5rem] flex justify-between items-center group cursor-pointer hover:bg-white hover:shadow-2xl transition-all duration-700 border-[3px] border-transparent hover:border-[#7F56DA]">
            <div className="space-y-6 pr-12">
              <h4 className="text-4xl font-black text-[#2D3436] leading-none tracking-tighter group-hover:text-[#7F56DA] transition-colors">{faq.q}</h4>
              <p className="text-2xl text-gray-500 font-bold leading-relaxed">{faq.a}</p>
            </div>
            <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center text-gray-200 group-hover:text-[#7F56DA] transition-all group-hover:rotate-12 flex-shrink-0 border border-gray-100"><HelpCircle size={48} strokeWidth={4} /></div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#121212] text-white pt-56 pb-20 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#7F56DA]/15 rounded-full blur-[200px]" />
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-24 border-b border-white/5 pb-32 relative z-10">
      <div className="space-y-12 col-span-1 lg:col-span-1">
        <div className="flex items-center gap-5"><div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-2xl"><Heart className="text-[#7F56DA] w-10 h-10" fill="currentColor" /></div><span className="text-5xl font-black tracking-tighter">IndoHealth</span></div>
        <p className="text-gray-400 font-black text-2xl leading-relaxed">Platform Burnout Assistant terdepan di Indonesia. Menjaga produktivitas tanpa mengorbankan kewarasan Anda.</p>
        <div className="flex gap-10">
          <Instagram className="text-gray-500 hover:text-[#FF4D94] transition-all cursor-pointer hover:scale-125" size={40} />
          <Twitter className="text-gray-500 hover:text-[#7F56DA] transition-all cursor-pointer hover:scale-125" size={40} />
          <Linkedin className="text-gray-500 hover:text-[#7F56DA] transition-all cursor-pointer hover:scale-125" size={40} />
        </div>
      </div>
      <div><h4 className="font-black text-[#7F56DA] uppercase mb-12 tracking-[0.3em] text-sm">Layanan Produk</h4><ul className="space-y-8 text-gray-400 font-black text-2xl"><li>AI Burnout Test</li><li>Smart Mood Tracker</li><li>Counseling Corporate</li></ul></div>
      <div><h4 className="font-black text-[#7F56DA] uppercase mb-12 tracking-[0.3em] text-sm">Informasi Link</h4><ul className="space-y-8 text-gray-400 font-black text-2xl"><li>Tentang Kami</li><li>Bantuan Cepat</li><li>Pusat Karier</li></ul></div>
      <div className="space-y-12">
        <h4 className="font-black text-[#7F56DA] uppercase tracking-[0.3em] text-sm">Dapatkan Update</h4>
        <p className="text-gray-400 font-black text-xl">Berlangganan tips kesehatan mental mingguan.</p>
        <div className="bg-white/5 p-4 rounded-[2rem] border-4 border-white/10 flex items-center shadow-inner group focus-within:border-[#7F56DA] transition-all">
          <input className="bg-transparent p-5 outline-none flex-grow text-white font-black text-xl" placeholder="Email kamu" />
          <button className="bg-[#7F56DA] p-6 rounded-2xl shadow-2xl hover:bg-purple-600 transition-all hover:scale-105 active:scale-95"><ArrowRight strokeWidth={5} size={32} /></button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 pt-24 flex flex-col lg:flex-row justify-between items-center gap-10">
       <p className="text-gray-600 font-black text-sm uppercase tracking-[0.6em]">© 2026 IndoHealth Indonesia. Seluruh hak cipta dilindungi.</p>
       <p className="text-gray-500 font-black text-sm uppercase tracking-[0.4em] flex items-center gap-2">Didesain dengan <Heart fill="#FF4D94" className="text-[#FF4D94]" size={16} /> oleh Monica.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#7F56DA] selection:text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <UVPSection />
        <BurnoutTestSection />
        <HasilSection />
        <RecommendationSection />
        <PricingSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}