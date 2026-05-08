import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  CheckCircle2, Heart, TrendingUp, Target, Zap, 
  ChevronRight, Menu, X, ArrowRight, BarChart3, 
  ShieldCheck, PlayCircle, HelpCircle, 
  Instagram, Twitter, Linkedin, MousePointer2,
  AlertCircle, Info
} from "lucide-react";

// --- Animasi Config ---
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

// --- Komponen Navbar ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "UVP", id: "uvp" },
    { name: "Burnout Test", id: "test" },
    { name: "Hasil", id: "hasil" },
    { name: "Rekomendasi", id: "rekomendasi" },
    { name: "Premium", id: "premium" },
    { name: "FAQ", id: "faq" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-10 h-10 bg-gradient-to-br from-[#FF4D94] to-[#7F56DA] rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
            <Heart className="text-white w-6 h-6" fill="currentColor" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-[#2D3436]">Indo<span className="text-[#7F56DA]">Health</span></span>
        </div>
        
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="font-bold text-sm uppercase text-gray-500 hover:text-[#7F56DA] transition-colors">
              {item.name}
            </a>
          ))}
          <button className="px-8 py-3 bg-[#7F56DA] text-white rounded-2xl shadow-xl shadow-purple-200 hover:scale-105 active:scale-95 transition-all font-bold">
            Mulai Sekarang
          </button>
        </div>

        <button className="lg:hidden p-2 text-[#2D3436]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }} 
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t p-6 flex flex-col gap-4 font-bold"
          >
            {menuItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={() => setIsOpen(false)} className="text-gray-600 py-2 border-b border-gray-50">{item.name}</a>
            ))}
            <button className="w-full py-4 bg-[#7F56DA] text-white rounded-2xl">Masuk Sekarang</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Hero Section ---
const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative pt-32 pb-20 lg:pt-52 lg:pb-32 overflow-hidden bg-gradient-to-br from-[#F5F3FF] via-white to-[#FFF0F7]">
      <motion.div style={{ y: y1 }} className="absolute top-20 left-10 w-64 h-64 bg-purple-200/40 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-white border border-purple-100 text-[#7F56DA] rounded-full text-sm font-black shadow-sm mx-auto lg:mx-0">
            <Zap size={18} className="fill-current text-yellow-400" /> Burnout Assistant untuk Pekerja
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[85px] font-black text-[#2D3436] leading-[1] tracking-tighter uppercase">
            Kerja Lebih Sehat <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7F56DA] to-[#FF4D94]">dengan IndoHealth</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
            Jangan biarkan burnout menghambat kariermu. Kelola kesehatan mentalmu dengan data cerdas setiap hari.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <a href="#test" className="px-10 py-6 bg-gradient-to-r from-[#FF4D94] to-[#E84393] text-white text-xl font-black rounded-[2rem] shadow-2xl shadow-pink-200 flex items-center justify-center gap-4 transition-all hover:scale-105 active:scale-95">
              Mulai Tes Sekarang! <ArrowRight strokeWidth={3} />
            </a>
            <button className="flex items-center justify-center gap-3 font-bold text-gray-500 hover:text-[#7F56DA] transition-colors">
              <PlayCircle size={48} className="text-[#7F56DA]" /> Lihat Cara Kerja
            </button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative flex justify-center">
          <div className="bg-white p-6 rounded-[4.5rem] shadow-2xl border-[12px] border-gray-50 relative z-10 w-full max-w-[450px]">
            <img 
              src="https://img.freepik.com/free-vector/modern-productivity-concept-illustration_114360-221.jpg" 
              className="w-full h-auto rounded-[3.5rem] object-contain" 
              alt="Hero Illustration" 
            />
          </div>
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
    <section id="uvp" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-[#7F56DA] font-black uppercase tracking-[0.3em] text-sm mb-4 block">Keunggulan Utama</span>
          <h2 className="text-5xl lg:text-7xl font-black text-[#2D3436] leading-tight uppercase tracking-tighter underline decoration-[#FF4D94] decoration-[10px] underline-offset-[16px]">Nilai Lebih IndoHealth</h2>
          <p className="text-2xl text-gray-500 font-medium mt-16">Membantu kamu tetap produktif, kerja lebih terarah, dan tetap menjaga kesehatan mental setiap langkah kariermu.</p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <motion.div key={i} whileHover={{ y: -20, scale: 1.02 }} className={`bg-gradient-to-br ${item.color} p-14 rounded-[4rem] border border-gray-100 shadow-xl transition-all duration-500 relative group overflow-hidden`}>
              <div className={`absolute top-0 left-0 w-2 h-full ${item.accent} opacity-20`}></div>
              <div className="bg-white w-24 h-24 rounded-[2.5rem] flex items-center justify-center shadow-lg mb-12 group-hover:rotate-6 transition-transform">{item.icon}</div>
              <h3 className="text-3xl font-black text-[#2D3436] mb-6 tracking-tighter uppercase">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-xl font-bold">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Section Burnout Test (Step 1) ---
const BurnoutTestSection = ({ setGlobalScore }: { setGlobalScore: (s: number) => void }) => {
  const [step, setStep] = useState(1);
  const [accumulatedScore, setAccumulatedScore] = useState(0);
  const [currentSelected, setCurrentSelected] = useState<number | null>(null);

  const questions = [
    "Saya merasa lelah dan kewalahan dengan pekerjaan.",
    "Saya merasa sulit fokus saat bekerja seharian.",
    "Saya merasa kelelahan secara mental dan emosional.",
    "Saya tetap bekerja walau tubuh sudah memberi sinyal lelah.",
    "Saya sulit mengatur prioritas tugas kerja saya."
  ];

  const emojis = [
    { label: "Never", color: "bg-blue-400", icon: "🙁", value: 10 },
    { label: "Rarely", color: "bg-green-400", icon: "😐", value: 30 },
    { label: "Sometimes", color: "bg-yellow-400", icon: "🙂", value: 50 },
    { label: "Often", color: "bg-orange-400", icon: "😟", value: 80 },
    { label: "Always", color: "bg-red-500", icon: "😫", value: 100 }
  ];

  const handleNext = () => {
    if (currentSelected === null) return;

    const newAccumulated = accumulatedScore + currentSelected;
    
    if (step < 5) {
      setAccumulatedScore(newAccumulated);
      setStep(step + 1);
      setCurrentSelected(null);
    } else {
      const finalResult = Math.round(newAccumulated / 5);
      setGlobalScore(finalResult);
      
      // Reset kuis agar bisa diulang
      setStep(1);
      setAccumulatedScore(0);
      setCurrentSelected(null);

      // Scroll otomatis
      setTimeout(() => {
        const el = document.getElementById('hasil');
        if(el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <section id="test" className="py-24 bg-[#FFF5F9]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeInUp} className="bg-white rounded-[5rem] p-10 lg:p-24 shadow-2xl border border-pink-100 grid lg:grid-cols-2 gap-20 items-center relative overflow-hidden">
          <div className="space-y-12">
            <div>
              <span className="px-8 py-3 bg-[#FF4D94] text-white rounded-full text-xs font-black uppercase tracking-[0.3em] shadow-lg shadow-pink-100">Step 1</span>
              <h2 className="text-6xl lg:text-[80px] font-black text-[#2D3436] mt-10 mb-6 uppercase tracking-tighter leading-none">ISI TEST</h2>
              <p className="text-2xl text-gray-500 font-bold leading-relaxed max-w-md">Jawablah pertanyaan berikut dengan jujur sesuai kondisi kamu.</p>
            </div>
            <div className="p-10 bg-purple-50 rounded-[3rem] border-l-[16px] border-[#7F56DA] shadow-sm">
               <div className="flex items-center gap-4 mb-4 text-[#7F56DA] font-black uppercase text-sm tracking-widest"><Info /> Tips Cerdas</div>
               <p className="text-xl italic text-gray-600 font-black leading-relaxed">"Hasil akan terupdate otomatis di bawah setiap kali kamu menyelesaikan tes ke-5."</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#FDF2F8] to-[#F5F3FF] p-3 rounded-[4.5rem] border-[6px] border-white shadow-2xl">
            <div className="bg-white rounded-[4rem] p-10 lg:p-14 shadow-inner min-h-[580px] flex flex-col justify-center">
               <div className="flex justify-between items-center mb-10">
                  <p className="text-sm font-black text-gray-400 uppercase tracking-[0.3em]">Pertanyaan {step} dari 5</p>
                  <div className="flex gap-2">
                    {[1,2,3,4,5].map(i => <div key={i} className={`w-8 h-2.5 rounded-full transition-all duration-500 ${i <= step ? "bg-[#FF4D94]" : "bg-gray-100"}`} />)}
                  </div>
               </div>
               <h4 className="text-4xl lg:text-5xl font-black text-[#2D3436] leading-[1.1] mb-16 tracking-tight min-h-[120px]">{questions[step-1]}</h4>
               
               <div className="space-y-12">
                  <div className="flex justify-between text-xs font-black text-gray-400 uppercase tracking-[0.2em] px-2"><span>Tidak Pernah</span><span>Selalu</span></div>
                  <div className="grid grid-cols-5 gap-4">
                    {emojis.map((opt, i) => (
                      <button 
                        key={i} 
                        onClick={() => setCurrentSelected(opt.value)}
                        className={`group flex flex-col items-center gap-4 transition-all ${currentSelected === opt.value ? "scale-110" : "opacity-50 hover:opacity-100"}`}
                      >
                        <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-3xl ${opt.color} flex items-center justify-center text-4xl shadow-xl ${currentSelected === opt.value ? "ring-4 ring-pink-300 ring-offset-4" : ""}`}>{opt.icon}</div>
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">{opt.label}</span>
                      </button>
                    ))}
                  </div>
               </div>
               <button 
                onClick={handleNext}
                disabled={currentSelected === null}
                className={`w-full py-7 mt-16 rounded-[2.5rem] font-black text-2xl shadow-xl flex items-center justify-center gap-4 transition-all ${currentSelected !== null ? "bg-[#FF4D94] text-white hover:brightness-110" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
                  {step === 5 ? "Lihat Hasil" : "Lanjut"} <ChevronRight strokeWidth={5} />
               </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Section Hasil (Step 2) ---
const HasilSection = ({ score }: { score: number }) => {
  const isHigh = score >= 60;
  const bars = [
    { label: "Beban Kerja Tinggi", val: Math.min(score + 10, 100), color: "bg-red-500" },
    { label: "Kurang Istirahat", val: Math.min(score - 5 > 10 ? score - 5 : 15, 100), color: "bg-orange-500" },
    { label: "Tekanan Deadline", val: Math.min(score + 5, 100), color: "bg-yellow-500" },
    { label: "Work-Life Balance", val: Math.max(100 - score, 10), color: "bg-blue-500" }
  ];

  return (
    <section id="hasil" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div key={score} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="bg-[#F5F3FF] rounded-[5rem] p-10 lg:p-24 shadow-2xl border border-purple-100 grid lg:grid-cols-2 gap-20 items-start">
           <div className="space-y-12">
             <div>
                <span className="px-8 py-3 bg-[#7F56DA] text-white rounded-full text-xs font-black uppercase tracking-[0.3em] shadow-lg">Step 2</span>
                <h2 className="text-6xl lg:text-[80px] font-black text-[#2D3436] mt-10 mb-8 uppercase tracking-tighter leading-none">HASIL</h2>
                <p className="text-2xl text-gray-500 font-bold leading-relaxed max-w-md">Aplikasi menampilkan tingkat risiko burnout secara jelas berdasarkan algoritma AI.</p>
             </div>
             <div className="p-10 bg-white rounded-[3.5rem] shadow-xl border border-purple-100 flex gap-8 items-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-[#7F56DA] flex-shrink-0 shadow-inner"><Info size={32} /></div>
                <p className="text-xl text-gray-600 font-black leading-relaxed">Skor dihitung secara akurat untuk deteksi dini kondisi burnout kamu.</p>
             </div>
           </div>

           <div className="bg-white rounded-[4.5rem] p-12 lg:p-14 shadow-2xl border border-gray-100 space-y-14 relative overflow-hidden">
             <div className="text-center relative z-10">
                 <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-10 shadow-inner ${isHigh ? "bg-red-100 text-red-500" : "bg-green-100 text-green-500"}`}>
                   {isHigh ? <AlertCircle size={54} strokeWidth={4} /> : <CheckCircle2 size={54} strokeWidth={4} />}
                 </div>
                 <h3 className={`text-5xl font-black mb-8 uppercase tracking-tighter ${isHigh ? "text-red-500" : "text-green-500"}`}>
                   {isHigh ? "High Risk Burnout" : "Low Risk Condition"}
                 </h3>
                 <div className="bg-gray-50 py-12 rounded-[3.5rem] border-2 border-gray-50 shadow-inner flex flex-col items-center">
                    <p className="text-xs font-black text-gray-400 uppercase tracking-[0.4em] mb-4">Skor Kamu Saat Ini</p>
                    <div className="flex items-baseline gap-2">
                       <p className="text-8xl font-black text-[#2D3436]">{score}</p>
                       <p className="text-3xl text-gray-300 font-black">/ 100</p>
                    </div>
                    <div className={`mt-8 inline-block px-10 py-3 rounded-full font-black text-sm uppercase tracking-[0.2em] border-4 ${isHigh ? "bg-red-100 text-red-600 border-red-200" : "bg-green-100 text-green-600 border-green-200"}`}>
                      {isHigh ? "Risiko Tinggi" : "Risiko Rendah"}
                    </div>
                 </div>
             </div>
             
             <div className="space-y-10">
                 <div className="flex items-center justify-between border-b-4 border-purple-100 pb-4">
                    <h4 className="font-black text-[#2D3436] uppercase tracking-widest text-sm">Penyebab Stres Utama</h4>
                    <BarChart3 className="text-[#7F56DA]" size={32} />
                 </div>
                 <div className="space-y-8">
                    {bars.map((f, i) => (
                      <div key={i} className="space-y-4">
                        <div className="flex justify-between text-lg font-black tracking-tight"><span className="text-gray-600 uppercase text-xs tracking-widest">{f.label}</span><span className="text-[#2D3436]">{f.val}%</span></div>
                        <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                          <motion.div initial={{ width: 0 }} animate={{ width: `${f.val}%` }} className={`h-full ${f.color} shadow-lg`} transition={{ duration: 1.5, delay: i*0.1 }} />
                        </div>
                      </div>
                    ))}
                 </div>
             </div>
             <a href="#rekomendasi" className="w-full py-8 bg-[#7F56DA] text-white rounded-[2.8rem] font-black text-2xl shadow-xl transition-all hover:scale-[1.03] flex items-center justify-center gap-4">Lihat Rekomendasi Lengkap</a>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Section Rekomendasi (Step 3) ---
const RecommendationSection = ({ score }: { score: number }) => {
  const isHigh = score >= 60;
  
  const currentList = isHigh ? [
    { title: "Istirahat Total", desc: "Ambil cuti atau jeda 1-2 hari untuk pemulihan mental total.", icon: "🛌", check: ["Deep Breath", "No Social Media"], color: "bg-red-50" },
    { title: "Konsultasi Ahli", desc: "Bicarakan beban kerja kamu dengan psikolog profesional kami.", icon: "🧠", check: ["Sesi Curhat", "Relaksasi"], color: "bg-purple-50" }
  ] : [
    { title: "Istirahat Singkat", desc: "Ambil jeda 5-10 menit setiap 1-2 jam untuk menyegarkan pikiran.", icon: "☕", check: ["Stretching", "Deep Breath"], color: "bg-emerald-50" },
    { title: "Atur Prioritas", desc: "Gunakan Eisenhower Matrix untuk fokus pada hal penting.", icon: "📋", check: ["Penting & Mendesak", "Bukan Prioritas"], color: "bg-amber-50" }
  ];

  return (
    <section id="rekomendasi" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div key={score} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="bg-white rounded-[5.5rem] p-10 lg:p-24 shadow-2xl border border-blue-100 grid lg:grid-cols-2 gap-24 items-start relative">
           <div className="space-y-14">
             <div>
                <span className="px-8 py-3 bg-blue-600 text-white rounded-full text-xs font-black uppercase tracking-[0.3em] shadow-lg">Step 3</span>
                <h2 className="text-6xl lg:text-[80px] font-black text-[#2D3436] mt-10 mb-8 uppercase tracking-tighter leading-none">REKOMENDASI</h2>
                <p className="text-2xl text-gray-500 font-bold leading-relaxed">IndoHealth memberikan langkah cepat untuk menjaga keseimbangan mental kamu.</p>
             </div>
             <div className="p-12 bg-blue-50/50 rounded-[4rem] border-4 border-white shadow-xl space-y-8">
                 <div className="flex gap-6 items-center text-blue-600 font-black text-sm uppercase tracking-widest"><ShieldCheck size={48} /> TUJUAN REKOMENDASI</div>
                 <p className="text-2xl text-gray-700 font-black leading-relaxed">
                   {isHigh ? "Langkah darurat untuk menurunkan tingkat stres yang sedang tinggi." : "Mempertahankan kondisi mental yang sehat agar tetap produktif."}
                 </p>
             </div>
           </div>

           <div className="space-y-8">
              {currentList.map((item, i) => (
                <div key={i} className={`${item.color} p-12 rounded-[4rem] border-4 border-white shadow-2xl flex flex-col md:flex-row gap-10 items-center group transition-all`}>
                  <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center text-5xl shadow-2xl flex-shrink-0">{item.icon}</div>
                  <div className="flex-grow">
                    <h5 className="text-3xl font-black text-[#2D3436] tracking-tighter uppercase">{item.title}</h5>
                    <p className="text-gray-500 font-bold text-lg mb-6">{item.desc}</p>
                    <div className="flex flex-wrap gap-4">
                      {item.check.map(c => <span key={c} className="text-[11px] font-black uppercase text-gray-500 bg-white/70 px-5 py-2 rounded-full border-2 border-white shadow-sm">✓ {c}</span>)}
                    </div>
                  </div>
                  <ChevronRight className="hidden md:block text-gray-200 group-hover:text-blue-500" size={40} />
                </div>
              ))}
              <button className="w-full py-10 mt-12 bg-gradient-to-r from-blue-600 to-[#7F56DA] text-white rounded-[3.5rem] font-black text-4xl shadow-xl transition-all hover:scale-95 uppercase tracking-tighter">Mulai Terapkan Sekarang!</button>
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
    { title: "Premium 3 Bulan", price: "119.000", sub: "/ 3 Bulan", features: ["Semua Fitur Premium", "Laporan Mental Mingguan", "Bebas Iklan Selamanya"], popular: true, promo: "Hemat 20%", color: "from-amber-50 to-white" },
    { title: "Premium 6 Bulan", price: "199.000", sub: "/ 6 Bulan", features: ["Fitur Paling Lengkap", "AI Konsultasi Intensif", "Workshop Eksklusif"], promo: "Hemat 33%", color: "from-purple-50 to-white" }
  ];

  return (
    <section id="premium" className="py-24 bg-[#F9FAFB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div {...fadeInUp} className="mb-24 space-y-10">
          <span className="px-10 py-4 bg-amber-100 text-amber-600 rounded-full font-black text-sm uppercase tracking-[0.4em] shadow-xl">👑 Upgrade Ke Premium</span>
          <h2 className="text-6xl lg:text-9xl font-black text-[#2D3436] tracking-tighter uppercase leading-[0.85]">Dapatkan Fitur <br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF4D94] via-[#7F56DA] to-[#7F56DA]">Lebih Lengkap!</span></h2>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-12">
          {plans.map((p, i) => (
            <motion.div key={i} whileHover={{ y: -30 }} className={`relative bg-gradient-to-b ${p.color} p-16 rounded-[6rem] border-[4px] flex flex-col transition-all duration-700 ${p.popular ? "border-[#7F56DA] shadow-2xl scale-110 z-10" : "border-gray-100 shadow-xl"}`}>
               {p.popular && <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#7F56DA] text-white px-12 py-4 rounded-full font-black text-xs uppercase shadow-2xl tracking-[0.3em]">PALING POPULER</div>}
               <h3 className="text-3xl font-black text-[#2D3436] mb-12 uppercase tracking-widest border-b-4 border-gray-100 pb-8">{p.title}</h3>
               <div className="text-center mb-16">
                  <span className="text-7xl font-black text-[#2D3436]">Rp {p.price}</span>
                  <p className="text-gray-400 font-black uppercase tracking-[0.3em] text-xs mt-4">{p.sub}</p>
               </div>
               <ul className="space-y-10 mb-20 flex-grow text-left">
                 {p.features.map(f => <li key={f} className="flex items-center gap-6 text-gray-700 font-black text-xl leading-tight"><CheckCircle2 className="text-[#7F56DA] flex-shrink-0" size={32} strokeWidth={5} /> {f}</li>)}
               </ul>
               <button className={`w-full py-10 rounded-[3rem] font-black text-3xl shadow-xl transition-all ${p.popular ? "bg-[#7F56DA] text-white" : "bg-white text-[#FF4D94] border-4 border-[#FF4D94] hover:bg-pink-50"}`}>Pilih Paket</button>
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
  <section id="faq" className="py-24 bg-white">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-6xl lg:text-8xl font-black text-[#2D3436] mb-32 uppercase tracking-tighter underline decoration-[#7F56DA] decoration-[16px] underline-offset-[24px]">Pertanyaan Umum</h2>
      <div className="space-y-10 text-left">
        {[
          { q: "Apakah IndoHealth gratis?", a: "Ya! Fitur dasar tes burnout dan pelacakan mood tersedia gratis selamanya. Fitur Premium memberikan insight AI yang lebih mendalam." },
          { q: "Bagaimana cara kerja AI-nya?", a: "Algoritma kami menganalisis input kuis harian dan pola aktivitas kerja untuk memberikan skor burnout yang akurat." },
          { q: "Apakah data saya aman?", a: "Keamanan datamu adalah prioritas kami. Kami menggunakan standar enkripsi militer untuk melindungi privasi kamu." }
        ].map((faq, i) => (
          <motion.div key={i} {...fadeInUp} className="bg-gray-50 p-14 rounded-[4.5rem] flex justify-between items-center group cursor-pointer hover:bg-white hover:shadow-2xl transition-all duration-700 border-[3px] border-transparent hover:border-[#7F56DA]">
            <div className="space-y-6 pr-12">
              <h4 className="text-4xl font-black text-[#2D3436] tracking-tighter group-hover:text-[#7F56DA] transition-colors">{faq.q}</h4>
              <p className="text-2xl text-gray-500 font-bold leading-relaxed">{faq.a}</p>
            </div>
            <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center text-gray-200 group-hover:text-[#7F56DA] flex-shrink-0 border border-gray-100"><HelpCircle size={48} strokeWidth={4} /></div>
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
      <div className="space-y-12">
        <div className="flex items-center gap-5"><div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-2xl"><Heart className="text-[#7F56DA] w-10 h-10" fill="currentColor" /></div><span className="text-5xl font-black tracking-tighter">IndoHealth</span></div>
        <p className="text-gray-400 font-black text-2xl leading-relaxed">Platform Burnout Assistant terdepan di Indonesia. Menjaga produktivitas tanpa mengorbankan kewarasan Anda.</p>
        <div className="flex gap-10">
          <Instagram className="text-gray-500 hover:text-[#FF4D94] transition-all cursor-pointer" size={40} />
          <Twitter className="text-gray-500 hover:text-[#7F56DA] transition-all cursor-pointer" size={40} />
          <Linkedin className="text-gray-500 hover:text-[#7F56DA] transition-all cursor-pointer" size={40} />
        </div>
      </div>
      <div><h4 className="font-black text-[#7F56DA] uppercase mb-12 tracking-[0.3em] text-sm">Produk</h4><ul className="space-y-8 text-gray-400 font-black text-2xl"><li>AI Burnout Test</li><li>Mood Tracker</li><li>Corporate Plan</li></ul></div>
      <div><h4 className="font-black text-[#7F56DA] uppercase mb-12 tracking-[0.3em] text-sm">Perusahaan</h4><ul className="space-y-8 text-gray-400 font-black text-2xl"><li>Tentang Kami</li><li>Pusat Bantuan</li><li>Karier</li></ul></div>
      <div className="space-y-12">
        <h4 className="font-black text-[#7F56DA] uppercase tracking-[0.3em] text-sm">Update Baru</h4>
        <div className="bg-white/5 p-4 rounded-[2rem] border-4 border-white/10 flex items-center group transition-all">
          <input className="bg-transparent p-5 outline-none flex-grow text-white font-black text-xl" placeholder="Email kamu" />
          <button className="bg-[#7F56DA] p-6 rounded-2xl shadow-2xl hover:bg-purple-600 transition-all active:scale-95"><ArrowRight strokeWidth={5} size={32} /></button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 pt-24 text-center">
       <p className="text-gray-600 font-black text-sm uppercase tracking-[0.6em]">© 2026 IndoHealth Indonesia. Seluruh hak cipta dilindungi.</p>
    </div>
  </footer>
);

export default function App() {
  const [globalScore, setGlobalScore] = useState(78);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#7F56DA] selection:text-white antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <UVPSection />
        <BurnoutTestSection setGlobalScore={setGlobalScore} />
        <HasilSection score={globalScore} />
        <RecommendationSection score={globalScore} />
        <PricingSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}