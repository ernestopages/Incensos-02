
import React, { useRef, useState } from 'react';

// Constants
const COLORS = {
  bg: '#f3efe5',
  headline: '#212121',
  title: '#4c0505',
  highlight: '#cc0000',
  button: '#2d5a27',
  premiumGradient: 'linear-gradient(135deg, #ff4e00 0%, #ec2f4b 100%)', // Vibrant Red/Orange for "Super Oferta" style
  premiumBorder: '#ec2f4b',
  vibrantGreen: '#166534' // Darker green for visibility
};

const CHECKOUT_BASIC_URL = 'https://indec-digital.mycartpanda.com/checkout/203161373:1';
const CHECKOUT_COMPLETE_URL = 'https://indec-digital.mycartpanda.com/checkout/203161373:1'; 
const CHECKOUT_VIP_URL = 'https://indec-digital.mycartpanda.com/checkout/203161373:1'; // Placeholder for the discounted VIP link

const IMAGES = {
  capa: 'https://res.cloudinary.com/drcqck3r9/image/upload/v1769297843/Capa_Inicio_ezxhme.webp',
  incensos: 'https://res.cloudinary.com/drcqck3r9/image/upload/v1769297844/Incensos_vod93g.webp',
  depoimentos: [
    'https://res.cloudinary.com/drcqck3r9/image/upload/v1769297843/Depoimento_01_jbadrl.webp',
    'https://res.cloudinary.com/drcqck3r9/image/upload/v1769297843/Depoimento_02_xkllwr.webp',
    'https://res.cloudinary.com/drcqck3r9/image/upload/v1769297844/Depoimento_03_q9lwre.webp',
    'https://res.cloudinary.com/drcqck3r9/image/upload/v1769297844/Depoimento_04_ajmyhf.webp',
    'https://res.cloudinary.com/drcqck3r9/image/upload/v1769297844/Depoimento_05_nqip50.webp',
    'https://res.cloudinary.com/drcqck3r9/image/upload/v1769297844/Depoimento_06_x4b1sc.webp'
  ],
  passos: [
    'https://res.cloudinary.com/drcqck3r9/image/upload/v1769297845/Passos-_1__jzmgaf.webp',
    'https://res.cloudinary.com/drcqck3r9/image/upload/v1769297846/Passos-_2__qqzpvs.webp',
    'https://res.cloudinary.com/drcqck3r9/image/upload/v1769297846/Passos-_3__hmxynl.webp'
  ],
  bonus: [
    'https://res.cloudinary.com/drcqck3r9/image/upload/v1769297843/B%C3%B4nus-_1__it3t0m.webp',
    'https://res.cloudinary.com/drcqck3r9/image/upload/v1769297843/B%C3%B4nus-_2__exuaeo.webp',
    'https://res.cloudinary.com/drcqck3r9/image/upload/v1769297843/B%C3%B4nus-_3__swwjdf.webp'
  ],
  mockupPreco: 'https://res.cloudinary.com/drcqck3r9/image/upload/v1769297844/Mockup_Pre%C3%A7o_kiatre.webp',
  garantia: 'https://res.cloudinary.com/drcqck3r9/image/upload/v1769297844/Garantia_miktyg.webp'
};

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const offerRef = useRef<HTMLDivElement>(null);

  const scrollToOffer = () => {
    offerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleBasicClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen font-poppins text-gray-900 pb-10 overflow-x-hidden bg-[#f3efe5]">
      
      {/* UPGRADE MODAL - OPTIMIZED FOR MOBILE */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in overflow-y-auto">
          <div className="bg-white w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl relative animate-scale-up max-h-[92vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="bg-red-600 p-6 md:p-8 text-center text-white shrink-0 relative">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-50 p-1"
                aria-label="Close"
              >
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              
              <div className="inline-block bg-orange-500/30 px-3 py-1 rounded-full text-[9px] md:text-xs font-black uppercase mb-3 border border-white/20 tracking-wider">
                ✨ OFERTA ESPECIAL DE UPGRADE
              </div>
              
              <h2 className="text-xl md:text-3xl font-black leading-tight mb-2 uppercase italic tracking-tighter">
                ESPERA! VOCÊ GANHOU <br /> UM SUPER DESCONTO 🎁
              </h2>
              <p className="text-[11px] md:text-sm font-medium opacity-90 max-w-[280px] md:max-w-none mx-auto">
                Não comece pela metade. Leve o acesso VIP completo hoje com desconto exclusivo.
              </p>
            </div>

            {/* Scrollable Modal Content */}
            <div className="p-6 md:p-10 overflow-y-auto flex-grow no-scrollbar">
              <div className="flex flex-col items-center">
                
                {/* Price Display */}
                <div className="relative mb-8 text-center">
                  <p className="text-gray-400 line-through text-sm md:text-lg font-black mb-1">De R$ 27,00</p>
                  <div className="flex items-start justify-center" style={{ color: '#166534' }}>
                    <span className="text-xl md:text-3xl font-black mt-2 md:mt-4 mr-1">R$</span>
                    <span className="text-6xl md:text-8xl font-black leading-none tracking-tighter">19,90</span>
                  </div>
                  {/* Save Badge */}
                  <div className="absolute top-2 -right-8 md:-right-16 bg-green-100 text-green-700 px-2 py-1 rounded-lg text-[8px] md:text-[10px] font-black uppercase rotate-6 border border-green-200 shadow-sm whitespace-nowrap">
                    ECONOMIZE R$ 7,10
                  </div>
                </div>

                {/* Benefits List */}
                <div className="w-full bg-gray-50 rounded-[2rem] p-5 md:p-8 mb-8 border border-gray-100">
                  <p className="text-[10px] md:text-xs font-black text-gray-400 uppercase mb-5 text-center tracking-[0.2em]">O QUE VOCÊ GANHA NO PLANO COMPLETO:</p>
                  <ul className="space-y-3.5">
                    {[
                      "<b>+30 Receitas</b> em Vídeo",
                      "<b>Curso Completo</b> + Apostila Digital",
                      "Bônus 01: <b>Lista de Fornecedores</b>",
                      "Bônus 02: <b>Venda de Incensos</b>",
                      "Bônus 03: <b>Faça Porta Incensos</b>",
                      "Acesso <b>Vitalício + Atualizações</b>"
                    ].map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs md:text-base font-bold text-gray-700 leading-tight">
                        <span className="text-green-500 font-black shrink-0 text-base md:text-lg">✅</span>
                        <span dangerouslySetInnerHTML={{ __html: benefit }} />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="w-full space-y-5">
                  <a 
                    href={CHECKOUT_VIP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-600 hover:bg-green-700 text-white py-5 md:py-7 px-4 rounded-full text-base md:text-xl font-black uppercase shadow-[0_15px_30px_rgba(22,101,52,0.3)] transition-all hover:scale-[1.02] active:scale-95 text-center leading-tight animate-pulse-subtle"
                  >
                    QUERO O PLANO COMPLETO <br className="hidden md:block" /> COM DESCONTO
                  </a>
                  
                  <a 
                    href={CHECKOUT_BASIC_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center text-gray-400 hover:text-gray-600 text-[10px] md:text-xs font-black uppercase underline decoration-2 underline-offset-4 transition-colors p-2"
                  >
                    Não, obrigado. Quero o plano básico de R$ 10,00
                  </a>
                </div>

                <div className="mt-8 flex flex-col items-center gap-2">
                  <p className="text-[9px] md:text-[11px] font-black uppercase text-green-600 tracking-widest flex items-center gap-2">
                    🛡️ COMPRA 100% SEGURA E GARANTIDA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 1: HERO */}
      <section className="px-5 pt-8 pb-4 flex flex-col items-center text-center max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-5xl font-black mb-4 leading-tight" style={{ color: COLORS.headline }}>
          Aprenda do <span style={{ color: COLORS.highlight }}>ZERO</span> a Fazer <br className="hidden md:block" />
          Incensos Artesanais <span style={{ color: COLORS.highlight }}>100%</span> <br className="hidden md:block" />
          <span style={{ color: COLORS.highlight }}>Naturais</span>, Que Queimam Até o <br className="hidden md:block" />
          Fim, Purificam, Energizam e <br className="hidden md:block" />
          Ainda Podem Gerar uma <br className="hidden md:block" />
          Nova <span style={{ color: COLORS.highlight }}>FONTE DE RENDA...</span>
        </h1>
        <p className="text-base md:text-xl font-medium mb-6 text-gray-700">
          Tudo em casa, de forma econômica e mesmo que você nunca tenha feito antes!
        </p>
        
        <div className="w-full max-w-lg mb-8">
          <img 
            src={IMAGES.capa} 
            alt="Capa do Guia de Incensos" 
            className="w-full h-auto rounded-3xl shadow-2xl"
            loading="lazy"
          />
        </div>

        <button 
          onClick={scrollToOffer}
          style={{ backgroundColor: COLORS.button }}
          className="w-full md:max-w-md text-white py-5 px-4 rounded-2xl text-xl md:text-2xl font-black uppercase shadow-2xl hover:brightness-110 hover:scale-105 transition-all active:scale-95 leading-tight text-center flex items-center justify-center min-h-[4.5rem] animate-pulse-subtle"
        >
          EU QUERO APRENDER AGORA!
        </button>
      </section>

      {/* SECTION 2: PARA QUEM É ESSE GUIA? */}
      <section className="relative my-6 px-4">
        <div className="bg-white rounded-[3rem] shadow-2xl mx-auto max-w-4xl p-8 md:p-14 border border-gray-100">
          <h2 className="text-xl md:text-3xl font-black mb-8 text-center uppercase tracking-tight" style={{ color: COLORS.title }}>
            🌟 PARA QUEM É ESSE <span style={{ color: COLORS.highlight }}>GUIA?</span>
          </h2>
          <ul className="space-y-4 text-base md:text-xl text-gray-800">
            {[
              "Para quem <b>nunca fez</b> incensos na vida e quer <b>começar do zero</b>.",
              "Para quem <b>já tentou</b>, mas <b>não acertou</b> a fórmula, a <b>queima</b> ou os <b>materiais</b>.",
              "Para quem quer <b>produzir para vender</b> e ter uma <b>renda extra</b> ou até mesmo <b>viver disso</b>.",
              "Para quem quer <b>incensos naturais</b>, artesanais, terapêuticos, com <b>cheiro agradável</b> e energia limpa."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="text-green-600 font-bold text-2xl">✔️</span>
                <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 3: A VERDADE */}
      <section className="px-5 py-6 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-black mb-6 uppercase" style={{ color: COLORS.title }}>
          🚫 <span style={{ color: COLORS.highlight }}>A VERDADE</span> É:
        </h2>
        <p className="text-lg md:text-2xl mb-8 leading-relaxed text-gray-800 font-medium">
          Se você está tentando fazer incenso sem um direcionamento claro e profissional, apostando no achismo...
        </p>
        
        <div className="space-y-4 mb-10 text-left max-w-xl mx-auto">
          {[
            "Vai continuar <b>queimando só na ponta</b>.",
            "Vai <b>gastar material</b> à toa.",
            "Vai se <b>frustrar</b> com <b>cheiro ruim</b>, <b>fumaça pesada</b> ou incenso que <b>não acende direito</b>."
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 bg-red-50 p-5 rounded-[2rem] border-l-8 border-red-600 shadow-sm">
              <span className="text-red-600 font-black text-2xl">❌</span>
              <p className="text-base md:text-xl text-gray-800" dangerouslySetInnerHTML={{ __html: item }} />
            </div>
          ))}
        </div>

        <p className="text-lg md:text-2xl font-black mb-8 text-gray-900 uppercase leading-tight">
          👉 Aqui você aprende de forma DIRETA, <br className="hidden md:block" /> PRÁTICA, 100% testada e validada!
        </p>

        <button 
          onClick={scrollToOffer}
          style={{ backgroundColor: COLORS.button }}
          className="w-full md:max-w-md text-white py-5 px-4 rounded-2xl text-xl md:text-2xl font-black uppercase shadow-2xl hover:brightness-110 hover:scale-105 transition-all active:scale-95 leading-tight text-center flex items-center justify-center min-h-[4.5rem] animate-pulse-subtle"
        >
          QUERO APRENDER AGORA
        </button>
      </section>

      {/* SECTION 4: VANTAGENS */}
      <section className="bg-white py-12 px-5">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <img 
            src={IMAGES.incensos} 
            alt="Incensos Naturais" 
            className="w-full max-w-xl h-auto rounded-[2rem] mb-8 shadow-2xl border-8 border-gray-50"
            loading="lazy"
          />
          <h2 className="text-2xl md:text-4xl font-black mb-6 text-center uppercase leading-tight px-4" style={{ color: COLORS.title }}>
            Vantagens em Fazer Seus <br className="md:hidden" /> <span style={{ color: COLORS.highlight }}>Próprios Incensos</span> Naturais.
          </h2>
          <p className="text-base md:text-xl text-center text-gray-700 max-w-3xl leading-relaxed font-medium">
            Imagine criar, com suas próprias mãos, incensos que queimam perfeitamente, que não apenas perfumam… mas purificam, acalmam, energizam e transformam qualquer ambiente em um verdadeiro refúgio de paz, equilíbrio e boas vibrações!
          </p>
        </div>
      </section>

      {/* SECTION 5: RECEITAS DO GUIA */}
      <section className="py-12 px-5 max-w-5xl mx-auto">
        <p className="text-xl md:text-2xl font-black mb-10 text-center text-gray-900 px-4">
          No guia <span className="text-[#4c0505] uppercase">A Arte dos Incensos Artesanais</span>, você vai aprender a criar mais de 20 tipos de incensos naturais, incluindo:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "🌿 Incenso da Serenidade de Lavanda", desc: "Perfeito para relaxar, aliviar estresse e induzir noites de sono tranquilas e profundas." },
            { title: "🍋 Incenso Revitalizante de Limão e Eucalipto", desc: "Renova as energias, limpa ambientes pesados e traz disposição instantânea." },
            { title: "🧘‍♀️ Incenso de Paz Interior de SÂNDALO E VETIVER", desc: "Eleva sua vibração, acalma a mente e auxilia em práticas de meditation, yoga e autoconhecimento." },
            { title: "🔥 Incenso de Energia e Foco de Laranja e Alecrim", desc: "Ativa sua produtividade, afasta o cansaço mental e traz clareza para suas atividades do dia." },
            { title: "🌸 Incenso Floral de Rosa e Jasmim", desc: "Desperta amor próprio, harmonia e atrai boas energias emocionais e afetivas." },
            { title: "😌 Cones de Relaxamento de Camomila", desc: "Para quem precisa de calma, leveza e equilíbrio após dias estressantes." },
            { title: "⚖️ Cones de Equilíbrio de Sândalo e Patchouli", desc: "Restaura o equilíbrio emocional e energético, deixando o ambiente mais leve e harmonioso." },
            { title: "🛡️ Cones de Proteção de Mirra e Alecrim", desc: "Limpeza energética poderosa! Afastamento de inveja e energias negativas." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2.5rem] shadow-xl border-l-8 transition-all hover:-translate-y-1" style={{ borderColor: '#2d5a27' }}>
              <h3 className="text-base md:text-lg font-black mb-3 uppercase leading-tight text-[#2d5a27]">{item.title}</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed font-semibold">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-base md:text-xl italic text-center text-gray-500 font-medium">
          E muito mais… Fórmulas, técnicas, segredos e combinações ancestrais para você dominar a arte dos incensos naturais, seja para uso pessoal or para criar uma renda altamente lucrativa!
        </p>

        <div className="mt-10 flex justify-center">
          <button 
            onClick={scrollToOffer}
            style={{ backgroundColor: COLORS.button }}
            className="w-full md:max-w-md text-white py-5 px-4 rounded-2xl text-xl md:text-2xl font-black uppercase shadow-2xl hover:brightness-110 hover:scale-105 transition-all active:scale-95 leading-tight text-center flex items-center justify-center min-h-[4.5rem] animate-pulse-subtle"
          >
            QUERO LIBERAR AGORA
          </button>
        </div>
      </section>

      {/* SECTION 6: DEPOIMENTOS */}
      <section className="py-12 px-5 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black mb-10 text-center uppercase leading-tight px-4" style={{ color: COLORS.title }}>
            Junte-se a mais de <span style={{ color: COLORS.highlight }}>1.387 pessoas</span> que já descobriram o power dos incensos naturais!
          </h2>
          
          <div className="relative group px-2 md:px-0">
            <button 
              onClick={() => scrollTestimonials('left')}
              className="absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 z-30 bg-white/90 p-3 md:p-5 rounded-full shadow-2xl hover:bg-gray-50 transition-colors border border-gray-100 flex items-center justify-center"
              aria-label="Scroll left"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
            </button>
            
            <div 
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar py-6 px-4 animate-hint"
            >
              {IMAGES.depoimentos.map((img, idx) => (
                <div key={idx} className="min-w-[80%] md:min-w-[31%] snap-center flex-shrink-0 bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 flex items-center justify-center h-[450px] md:h-[550px] transition-transform duration-300 hover:scale-[1.02]">
                  <img 
                    src={img} 
                    alt={`Depoimento ${idx + 1}`} 
                    className="w-full h-full object-contain p-4"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <button 
              onClick={() => scrollTestimonials('right')}
              className="absolute right-0 md:-right-8 top-1/2 -translate-y-1/2 z-30 bg-white/90 p-3 md:p-5 rounded-full shadow-2xl hover:bg-gray-50 transition-colors border border-gray-100 flex items-center justify-center"
              aria-label="Scroll right"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          <p className="mt-10 text-center text-[11px] md:text-base text-gray-400 max-w-2xl mx-auto font-semibold leading-relaxed px-4">
            Este método foi desenvolvido com base em práticas ancestrais e conhecimentos profissionais adaptados para você fazer em casa.
          </p>

          <div className="mt-10 flex justify-center">
            <button 
              onClick={scrollToOffer}
              style={{ backgroundColor: COLORS.button }}
              className="w-full md:max-w-md text-white py-5 px-4 rounded-2xl text-xl md:text-2xl font-black uppercase shadow-2xl hover:brightness-110 hover:scale-105 transition-all active:scale-95 leading-tight text-center flex items-center justify-center min-h-[4.5rem] animate-pulse-subtle"
            >
              EU TAMBÉM QUERO APRENDER
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 7: AQUI ESTÁ UM POUCO DO QUE VOCÊ TERÁ ACESSO */}
      <section className="py-12 px-5 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-black mb-10 text-center uppercase leading-tight" style={{ color: COLORS.title }}>
          AQUI ESTÁ UM POUCO DO QUE VOCÊ <br className="hidden md:block" /> <span style={{ color: COLORS.highlight }}>TERÁ ACESSO</span>
          <br /><span className="text-sm md:text-xl font-bold text-gray-400 mt-2 block">(adquirindo apenas HOJE)</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { img: IMAGES.passos[0], title: "Início", text: "Aprenda quais materiais usar, como preparar seus ingredientes e ativar sua intenção sagrada." },
            { img: IMAGES.passos[1], title: "Receitas", text: "Descubra mais de 20 receitas de incensos e cones energéticos para atrair paz e prosperidade." },
            { img: IMAGES.passos[2], title: "Ingredientes", text: "Explore os poderes das ervas e resinas para combinar aromas que elevam a vibração." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col h-full hover:shadow-3xl transition-shadow">
              <div className="p-4">
                <div className="relative overflow-hidden rounded-[2rem]">
                  <img src={item.img} alt={item.title} className="w-full h-auto transition-transform hover:scale-110 duration-700" loading="lazy" />
                </div>
              </div>
              <div className="px-8 pb-10 flex-grow flex items-center">
                <p className="text-base md:text-xl text-center font-bold leading-relaxed text-gray-800">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button 
            onClick={scrollToOffer}
            style={{ backgroundColor: COLORS.button }}
            className="w-full md:max-w-md text-white py-5 px-4 rounded-2xl text-xl md:text-2xl font-black uppercase shadow-2xl hover:brightness-110 hover:scale-105 transition-all active:scale-95 leading-tight text-center flex items-center justify-center min-h-[4.5rem] animate-pulse-subtle"
          >
            QUERO COMEÇAR AGORA
          </button>
        </div>
      </section>

      {/* SECTION 8: TUDO O QUE VOCÊ VAI APRENDER */}
      <section className="py-12 px-5 bg-white">
        <div className="max-w-4xl mx-auto bg-[#f3efe5] rounded-[4rem] p-8 md:p-14 shadow-xl border border-gray-100">
          <h2 className="text-2xl md:text-4xl font-black mb-10 text-center uppercase tracking-tight text-gray-900 leading-tight">
            TUDO O QUE VOCÊ <br className="md:hidden" /> <span style={{ color: COLORS.highlight }}>VAI APRENDER</span>
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "<b>+20 Receitas</b> Exclusivas",
              "Modo de <b>Preparo</b> Detalhado",
              "<b>Lista</b> de Ingredientes Naturais",
              "<b>Combinações</b> de Aromas e Funções",
              "<b>Técnicas</b> de Mistura e Modelagem",
              "Fórmulas Prontas e <b>Segredos</b> de Alquimia",
              "Acesso <b>Vitalício</b> e <b>Atualizações</b>"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm">
                <span className="text-green-600 font-black text-2xl">✔️</span>
                <span className="text-base md:text-xl font-bold text-gray-800 leading-tight" dangerouslySetInnerHTML={{ __html: item }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: BÔNUS */}
      <section className="py-12 px-5 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-black mb-12 text-center uppercase leading-tight px-4" style={{ color: COLORS.title }}>
          E PRA TORNAR SUA JORNADA AINDA <br className="hidden md:block" /> MAIS ESPECIAL… VOCÊ VAI RECEBER <br className="hidden md:block" /> <span style={{ color: COLORS.highlight }}>3 PRESENTES EXCLUSIVOS:</span>
        </h2>
        
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { img: IMAGES.bonus[0], title: "GUIA FORNECEDORES DE MATERIAIS", desc: "Uma lista completa e atualizada com os melhores fornecedores para você encontrar ervas, resinas, pós naturais, óleos, materiais e muito mais com facilidade." },
            { img: IMAGES.bonus[1], title: "COMO VIVER DA VENDA DE INCENSOS", desc: "Um mini guia direto, prático e poderoso onde te mostro como transformar essa arte em um negócio lucrativo trabalhando de casa." },
            { img: IMAGES.bonus[2], title: "COMO FAZER PORTA INCENSOS", desc: "Além dos seus incensos, aprenda também a criar porta incensos lindos e artesanais, usando materiais simples e acessíveis." }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center bg-white border-2 border-dashed border-[#b8d4bb] rounded-[3rem] p-8 md:p-10 shadow-sm transition-transform hover:scale-[1.02] duration-300">
              <div className="relative mb-8 w-full flex justify-center">
                <img src={item.img} alt={item.title} className="w-56 md:w-64 h-auto drop-shadow-2xl" loading="lazy" />
              </div>
              <h3 className="text-lg md:text-xl font-black mb-4 uppercase leading-tight px-2 text-[#2d5a27] tracking-tight">{item.title}</h3>
              <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed px-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 10: OFERTAS (REORDERED & COMPACT BUT VISIBLE) */}
      <section ref={offerRef} className="py-12 md:py-20 px-4 md:px-8 bg-white scroll-mt-10 overflow-visible">
        <div className="max-w-6xl mx-auto text-center overflow-visible">
          <h2 className="text-2xl md:text-4xl font-black mb-8 md:mb-16 text-gray-900 uppercase tracking-tight leading-tight px-2">
            ESCOLHA A MELHOR <br className="md:hidden" /> <span style={{ color: COLORS.highlight }}>OPÇÃO PARA VOCÊ:</span>
          </h2>
          
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-stretch gap-10 md:gap-14 max-w-6xl mx-auto overflow-visible p-1">
            
            {/* 1. ACESSO BÁSICO (FIRST) - Opens Pop-up */}
            <div className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-10 shadow-2xl border border-gray-100 flex flex-col h-full transition-all duration-300 self-center w-full max-w-lg mx-auto">
              <div className="flex flex-col items-center mb-4 md:mb-6">
                <span className="text-xs md:text-sm font-black uppercase text-gray-600 mb-2 italic tracking-[0.2em]">Acesso Básico</span>
                <h3 className="text-xl md:text-2xl font-black mb-4 md:mb-6 px-2 leading-tight" style={{ color: COLORS.title }}>Guia A Arte dos <br /> Incensos Artesanais</h3>
                
                <div className="text-center mb-4 md:mb-6">
                  <p className="text-[10px] md:text-xs font-bold uppercase text-gray-400 mb-1">Por apenas</p>
                  <div className="flex items-start justify-center" style={{ color: '#166534' }}>
                    <span className="text-2xl md:text-3xl font-black mt-2 md:mt-3 mr-1">R$</span>
                    <span className="text-7xl md:text-8xl font-black leading-none">10</span>
                  </div>
                  <p className="text-[10px] md:text-xs font-black uppercase text-gray-400 mt-2 tracking-[0.1em]">Pagamento Único</p>
                </div>
              </div>

              <div className="space-y-3 md:space-y-4 text-left mb-6 md:mb-10 flex-grow w-full px-4">
                {[
                  "<b>+20 Receitas</b> de Incensos Artesanais",
                  "Acesso <b>Vitalício</b>",
                  "<b>7 Dias</b> de Garantia"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-[#2d5a27] font-black text-xl">✅</span>
                    <p className="text-base md:text-lg text-gray-700 font-bold" dangerouslySetInnerHTML={{ __html: item }} />
                  </div>
                ))}
              </div>

              <div className="px-2">
                <button 
                  onClick={handleBasicClick}
                  style={{ backgroundColor: COLORS.button }}
                  className="block w-full text-white py-5 md:py-6 px-4 rounded-[1.5rem] text-lg md:text-xl font-black uppercase shadow-2xl hover:brightness-110 hover:scale-105 transition-all active:scale-95 leading-tight text-center"
                >
                  QUERO O ACESSO BÁSICO
                </button>
                <p className="mt-4 text-[9px] md:text-xs font-black text-red-600 uppercase italic whitespace-nowrap text-center">
                  🔥 Atenção: Temos uma oferta imperdível abaixo.
                </p>
              </div>
            </div>

            {/* 2. ACESSO COMPLETO (SECOND / BELOW ON MOBILE) */}
            <div className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-10 shadow-[0_30px_100px_-20px_rgba(236,47,75,0.35)] border-[5px] md:border-[6px] border-[#ec2f4b] flex flex-col h-full relative overflow-visible transition-all duration-500 self-center w-full max-w-xl mx-auto lg:transform lg:scale-105 mt-4 md:mt-0">
              
              {/* Floating Badge */}
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 md:px-12 py-3 md:py-4 rounded-full shadow-2xl z-30 text-white font-black uppercase text-[10px] md:text-sm tracking-[0.2em] whitespace-nowrap border-[4px] md:border-[5px] border-white flex items-center justify-center min-w-[180px] md:min-w-[220px]"
                style={{ background: COLORS.premiumGradient }}
              >
                🚀 MELHOR ESCOLHA
              </div>

              <div className="flex flex-col items-center mb-6 md:mb-8 pt-6 md:pt-8">
                <h3 className="text-2xl md:text-4xl font-black uppercase mb-6 md:mb-10 tracking-tighter italic text-center leading-none" style={{ color: '#ec2f4b' }}>
                  ACESSO COMPLETO
                </h3>
                
                <div className="relative mb-6 md:mb-10 w-full flex justify-center">
                  <div className="absolute inset-0 bg-red-100/40 blur-[60px] md:blur-[100px] rounded-full transform scale-125 -z-10"></div>
                  <img 
                    src={IMAGES.mockupPreco} 
                    alt="Mockup Acesso Completo" 
                    className="relative w-full max-w-[380px] h-auto drop-shadow-[0_40px_40px_rgba(0,0,0,0.35)] md:drop-shadow-[0_60px_60px_rgba(0,0,0,0.4)]"
                    loading="lazy"
                  />
                </div>

                <p className="text-[11px] md:text-lg font-black text-gray-500 uppercase tracking-tight text-center w-full max-w-sm">
                  Curso Completo + Conteúdos Exclusivos
                </p>
              </div>

              <div className="space-y-3 md:space-y-5 text-left mb-6 md:mb-10 flex-grow w-full border-t border-b border-gray-100 py-6 md:py-10 px-4">
                {[
                  "Guia A Arte dos Incensos Artesanais",
                  "<b>+30 Receitas</b> de Incensos Artesanais em Vídeo",
                  "<span class='bg-[#ec2f4b] text-white px-3 py-1.5 rounded-xl shadow-lg inline-block text-[11px] md:text-base font-extrabold'>Curso em VideoAulas + Apostila</span>",
                  "Bônus 01: Guia Fornecedores de Materiais",
                  "Bônus 02: Como Viver da Venda de Incensos",
                  "Bônus 03: Como Fazer Porta Incensos",
                  "Acesso <b>Vitalício + Atualizações</b>",
                  "<b>7 Dias</b> de Garantia"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-[#ec2f4b] font-black text-xl md:text-2xl shrink-0">✅</span>
                    <p className="text-sm md:text-xl text-gray-800 font-extrabold leading-tight" dangerouslySetInnerHTML={{ __html: item }} />
                  </div>
                ))}
              </div>

              <div className="text-center mb-8 md:mb-12 relative">
                <p className="text-base md:text-3xl font-black mb-3 md:mb-5 tracking-tight flex items-center justify-center gap-2 md:gap-3">
                  <span className="text-red-600 line-through decoration-2 md:decoration-4">R$ 99,90</span> 
                  <span className="text-red-600">(-73%)</span>
                </p>
                <div className="flex items-start justify-center" style={{ color: COLORS.vibrantGreen }}>
                  <span className="text-4xl md:text-6xl font-black mt-4 md:mt-8 mr-1 tracking-tighter">R$</span>
                  <span className="text-8xl md:text-[13rem] font-black leading-none tracking-tighter drop-shadow-2xl">27</span>
                </div>
                <p className="text-[11px] md:text-base font-black uppercase text-gray-400 mt-6 md:mt-10 tracking-[0.3em] md:tracking-[0.4em]">Pagamento Único</p>
              </div>

              <div className="px-2 md:px-4 pb-4">
                <a 
                  href={CHECKOUT_COMPLETE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ background: COLORS.premiumGradient }}
                  className="block w-full text-white py-6 md:py-8 px-4 rounded-full text-lg md:text-2xl font-black uppercase shadow-[0_25px_50px_rgba(236,47,75,0.45)] md:shadow-[0_35px_70px_rgba(236,47,75,0.55)] hover:brightness-110 hover:scale-[1.03] transition-all active:scale-95 leading-none text-center animate-pulse-subtle"
                >
                  QUERO O ACESSO COMPLETO
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 12: DÚVIDAS */}
      <section className="py-12 px-5 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-black mb-10 text-center uppercase tracking-tight" style={{ color: COLORS.title }}>DÚVIDAS FREQUENTES</h2>
        <div className="space-y-6">
          {[
            { q: "Como irei receber o meu acesso ao guia?", a: "O seu acesso ao guia ou curso será enviado imediatamente para o seu e-mail após a aprovação do seu pagamento, podendo começar imediatamente a fazer os seus incensos artesanais." },
            { q: "É apenas um único pagamento?", a: "Sim, você paga apenas uma vez e tem acesso vitalício a todo o conteúdo e as futuras atualizações." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 md:p-10 rounded-[3rem] shadow-xl border border-gray-100 transition-all hover:shadow-2xl">
              <h3 className="text-lg md:text-xl font-black mb-3 uppercase tracking-tight text-[#4c0505]">{item.q}</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-semibold">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL SECTION: GARANTIA + CTA */}
      <section className="py-12 px-5 text-center bg-[#f3efe5] border-t border-gray-200">
        <h2 className="text-2xl md:text-4xl font-black mb-10 uppercase italic tracking-tighter" style={{ color: COLORS.highlight }}>Aproveite Esta OPORTUNIDADE!</h2>
        
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <img 
            src={IMAGES.garantia} 
            alt="Garantia de Satisfação" 
            className="w-full max-sm:max-w-xs max-w-sm h-auto mb-10 drop-shadow-3xl"
            loading="lazy"
          />
          
          <h2 className="text-2xl md:text-4xl font-black mb-6 uppercase leading-tight px-4" style={{ color: COLORS.title }}>
            Clique no botão abaixo e garanta <br className="hidden md:block" /> seu acesso com o <span style={{ color: COLORS.highlight }}>MELHOR PREÇO</span>
          </h2>
          
          <p className="text-base md:text-xl mb-10 text-gray-700 max-w-3xl leading-relaxed font-bold">
            ✨ Permita-se viver a experiência de criar seus próprios incensos artesanais e transformar sua energia, sua casa e sua vida com esse conhecimento unique!
          </p>

          <button 
            onClick={scrollToOffer}
            style={{ backgroundColor: COLORS.button }}
            className="block w-full md:max-w-2xl text-white py-7 px-4 rounded-2xl text-xl md:text-3xl font-black uppercase shadow-2xl hover:brightness-110 hover:scale-105 transition-all active:scale-95 leading-none text-center animate-pulse-subtle"
          >
            QUERO LIBERAR MEU ACESSO AGORA
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-5 text-center text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-gray-400 border-t border-gray-200 bg-white">
        <p className="mb-4">Política de Privacidade | Termos de uso | Contato</p>
        <p>&copy; {new Date().getFullYear()} A Arte dos Incensos Artesanais. Todos os direitos reservados.</p>
      </footer>

      {/* ADDITIONAL STYLES FOR ANIMATIONS */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-up {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-scale-up {
          animation: scale-up 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
};

export default App;
