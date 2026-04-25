
import React, { useRef, useEffect } from 'react';

// Constants
const COLORS = {
  bg: '#f3efe5',
  headline: '#212121',
  title: '#4c0505',
  highlight: '#cc0000',
  button: '#2d5a27',
  premiumGradient: 'linear-gradient(135deg, #ff4e00 0%, #ec2f4b 100%)',
  premiumBorder: '#ec2f4b',
  vibrantGreen: '#166534',
  guaranteeButton: '#3d7a36'
};

const CHECKOUT_COMPLETE_BASE = 'https://indec-digital.mycartpanda.com/checkout/207032940:1'; 

const IMAGES = {
  capa: 'https://i.ibb.co/jPStrNgP/Capa-Inicio.webp',
  depoimentos: [
    'https://i.ibb.co/tTytHwBv/Depo-1.webp',
    'https://i.ibb.co/sJNdQYLh/Depo-3.webp',
    'https://i.ibb.co/gF9n98z4/Depo-2.webp',
    'https://i.ibb.co/LdCgdcHb/Depo-4.webp',
    'https://i.ibb.co/nsg2xwjC/Depo-6.webp',
    'https://i.ibb.co/9Q2vbXb/Depo-5.webp'
  ],
  passos: [
    'https://i.ibb.co/dsyctzcV/Inicio-pronto.webp',
    'https://i.ibb.co/1ft5TRgy/Receitas-pronto.webp',
    'https://i.ibb.co/8n53BMmz/Ingredientes-pronto.webp'
  ],
  bonus: [
    'https://i.ibb.co/99Tz4bg1/B-nus-1.webp',
    'https://i.ibb.co/prs3LcjT/B-nus-2.webp',
    'https://i.ibb.co/cXNhDY5g/B-nus-3.webp'
  ],
  mockupPreco: 'https://i.ibb.co/YFFBy23X/Chat-GPT-Image-23-de-abr-de-2026-16-29-56.png',
  garantia: 'https://i.ibb.co/pv6zQcGj/Garantia.webp'
};

const App: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const offerAnchorRef = useRef<HTMLDivElement>(null);

  // Function to append current URL parameters (UTMs) to checkout links
  const getCheckoutUrl = (baseUrl: string) => {
    try {
      const url = new URL(baseUrl);
      const currentParams = new URLSearchParams(window.location.search);
      currentParams.forEach((value, key) => {
        url.searchParams.set(key, value);
      });
      return url.toString();
    } catch (e) {
      return baseUrl;
    }
  };

  const scrollToOffer = () => {
    offerAnchorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://scripts.converteai.net/3aba438a-f503-4e1c-acf0-ca34400c1e91/players/69ed23fe715b20730f8d2f5a/v4/player.js";
    s.async = true;
    document.head.appendChild(s);
  }, []);

  return (
    <div className="min-h-screen font-poppins text-gray-900 pb-10 overflow-x-hidden bg-[#f3efe5]">
      
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
          Tudo em casa, em uma plataforma com vídeos passo a passo, de forma econômica e mesmo que você nunca tenha feito antes!
        </p>
        
        <div className="w-full max-w-3xl mb-8 overflow-hidden rounded-2xl shadow-2xl bg-black aspect-video flex items-center justify-center">
          <vturb-smartplayer 
            id="vid-69ed23fe715b20730f8d2f5a" 
            style={{ display: 'block', margin: '0 auto', width: '100%' }}
          ></vturb-smartplayer>
        </div>

        <button 
          onClick={scrollToOffer}
          style={{ backgroundColor: COLORS.button }}
          className="w-full md:max-w-md text-white py-3.5 md:py-6 px-4 rounded-2xl text-[13px] md:text-2xl font-black uppercase shadow-2xl hover:brightness-110 hover:scale-105 transition-all active:scale-95 leading-none text-center flex items-center justify-center animate-pulse-subtle whitespace-nowrap"
        >
          EU QUERO APRENDER AGORA!
        </button>
      </section>

      {/* SECTION 2: PARA QUEM É ESSE GUIA? */}
      <section className="relative my-6 px-4">
        <div className="bg-white rounded-[3rem] shadow-2xl mx-auto max-w-4xl p-8 md:p-14 border border-gray-100">
          <h2 className="text-xl md:text-3xl font-black mb-8 text-center uppercase tracking-tight" style={{ color: COLORS.title }}>
            🌟 PARA QUEM É ESSE <span style={{ color: COLORS.highlight }}>MATERIAL?</span>
          </h2>
          <ul className="space-y-4 text-base md:text-xl text-gray-800">
            {[
              "Para quem <b>nunca fez</b> incensos na vida e quer <b>começar do zero</b> assistindo <b>VideoAulas</b>.",
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

        <button 
          onClick={scrollToOffer}
          style={{ backgroundColor: COLORS.button }}
          className="w-full md:max-w-md text-white py-3.5 md:py-6 px-4 rounded-2xl text-[13px] md:text-2xl font-black uppercase shadow-2xl hover:brightness-110 hover:scale-105 transition-all active:scale-95 leading-none text-center flex items-center justify-center animate-pulse-subtle whitespace-nowrap"
        >
          QUERO APRENDER AGORA
        </button>
      </section>

      {/* SECTION 4: VANTAGENS */}
      <section className="bg-white py-12 px-5">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <img 
            src={IMAGES.capa} 
            alt="Colagem de Incensos Artesanais" 
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
          Na plataforma <span className="text-[#4c0505] uppercase">A Arte dos Incensos Artesanais</span>, você vai aprender a criar mais de 23 tipos de incensos naturais, incluindo:
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

        <div className="mt-10 flex justify-center">
          <button 
            onClick={scrollToOffer}
            style={{ backgroundColor: COLORS.button }}
            className="w-full md:max-w-md text-white py-3.5 md:py-6 px-4 rounded-2xl text-[13px] md:text-2xl font-black uppercase shadow-2xl hover:brightness-110 hover:scale-105 transition-all active:scale-95 leading-none text-center flex items-center justify-center animate-pulse-subtle whitespace-nowrap"
          >
            QUERO LIBERAR AGORA
          </button>
        </div>
      </section>

      {/* SECTION 6: DEPOIMENTOS */}
      <section className="py-12 px-5 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black mb-10 text-center uppercase leading-tight px-4" style={{ color: COLORS.title }}>
            Junte-se a mais de <span style={{ color: COLORS.highlight }}>1.387 pessoas</span> que já descobriram o poder dos incensos naturais!
          </h2>
          <div className="relative group px-2 md:px-0">
            <button 
              onClick={() => scrollTestimonials('left')}
              className="absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 z-30 bg-white/90 p-3 md:p-5 rounded-full shadow-2xl hover:bg-gray-50 transition-colors border border-gray-100 flex items-center justify-center"
              aria-label="Scroll left"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <div ref={scrollRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar py-6 px-4 animate-hint">
              {IMAGES.depoimentos.map((img, idx) => (
                <div key={idx} className="min-w-[80%] md:min-w-[31%] snap-center flex-shrink-0 bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 flex items-center justify-center h-[450px] md:h-[550px] transition-transform duration-300 hover:scale-[1.02]">
                  <img src={img} alt={`Depoimento ${idx + 1}`} className="w-full h-full object-contain p-4" loading="lazy" />
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
          <div className="mt-10 flex justify-center">
            <button 
              onClick={scrollToOffer}
              style={{ backgroundColor: COLORS.button }}
              className="w-full md:max-w-md text-white py-3.5 md:py-6 px-4 rounded-2xl text-[13px] md:text-2xl font-black uppercase shadow-2xl hover:brightness-110 hover:scale-105 transition-all active:scale-95 leading-none text-center flex items-center justify-center animate-pulse-subtle whitespace-nowrap"
            >
              EU TAMBÉM QUERO APRENDER
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 7: TERÁ ACESSO */}
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
              <div className="p-4"><div className="relative overflow-hidden rounded-[2rem]"><img src={item.img} alt={item.title} className="w-full h-auto transition-transform hover:scale-110 duration-700" loading="lazy" /></div></div>
              <div className="px-8 pb-10 flex-grow flex items-center"><p className="text-base md:text-xl text-center font-bold leading-relaxed text-gray-800">{item.text}</p></div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <button 
            onClick={scrollToOffer}
            style={{ backgroundColor: COLORS.button }}
            className="w-full md:max-w-md text-white py-3.5 md:py-6 px-4 rounded-2xl text-[13px] md:text-2xl font-black uppercase shadow-2xl hover:brightness-110 hover:scale-105 transition-all active:scale-95 leading-none text-center flex items-center justify-center animate-pulse-subtle whitespace-nowrap"
          >
            QUERO COMEÇAR AGORA
          </button>
        </div>
      </section>

      {/* SECTION 8: VAI APRENDER */}
      <section className="py-12 px-5 bg-white">
        <div className="max-w-4xl mx-auto bg-[#f3efe5] rounded-[4rem] p-8 md:p-14 shadow-xl border border-gray-100">
          <h2 className="text-2xl md:text-4xl font-black mb-10 text-center uppercase tracking-tight text-gray-900 leading-tight">
            TUDO O QUE VOCÊ <br className="md:hidden" /> <span style={{ color: COLORS.highlight }}>VAI APRENDER HOJE:</span>
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {["<b>+23 Receitas</b> de Incensos Especiais", "Passo a passo em vídeo", "Modo de <b>Preparo</b> Detalhado", "<b>Lista</b> de Ingredientes Naturais", "<b>Combinações</b> de Aromas e Funções", "<b>Técnicas</b> de Mistura e Modelagem", "Fórmulas Prontas e <b>Segredos</b> de Alquimia"].map((item, idx) => (
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
              <div className="relative mb-8 w-full flex justify-center"><img src={item.img} alt={item.title} className="w-56 md:w-64 h-auto drop-shadow-2xl" loading="lazy" /></div>
              <h3 className="text-lg md:text-xl font-black mb-4 uppercase leading-tight px-2 text-[#2d5a27] tracking-tight">{item.title}</h3>
              <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed px-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 10: OFERTAS */}
      <section className="py-8 md:py-16 px-4 md:px-8 bg-white overflow-visible">
        <div ref={offerAnchorRef} className="max-w-6xl mx-auto text-center overflow-visible scroll-mt-10">
          <h2 className="text-2xl md:text-4xl font-black mb-2 md:mb-4 text-gray-900 uppercase tracking-tight leading-tight px-2">
            GARANTA SEU ACESSO A PLATAFORMA <br className="md:hidden" /> <span style={{ color: COLORS.highlight }}>A ARTE DOS INCENSOS ARTESANAIS</span>
          </h2>
          <p className="text-sm md:text-xl font-bold text-gray-500 mb-6 md:mb-10 tracking-tight">
            E comece a fazer seus incensos hoje mesmo!
          </p>
          <div className="flex justify-center max-w-6xl mx-auto overflow-visible p-1">
            {/* ACESSO COMPLETO */}
            <div className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] p-4 md:p-8 shadow-[0_30px_100px_-20px_rgba(236,47,75,0.35)] border-[5px] md:border-[6px] border-[#ec2f4b] flex flex-col h-full relative overflow-visible transition-all duration-500 w-full max-w-xl mx-auto">
              <div className="flex flex-col items-center mb-1 pt-1"><img src={IMAGES.mockupPreco} alt="Oferta" className="relative w-full max-w-[450px] h-auto drop-shadow-2xl mb-2 rounded-2xl md:rounded-[2rem]" /></div>
              <div className="space-y-2 md:space-y-4 text-left mb-4 flex-grow w-full border-t border-b border-gray-100 py-4 px-4">{[
                "Acesso a plataforma A Arte dos Incensos Artesanais", 
                "<b>+23 Vídeos</b> com o passo a passo das receitas", 
                "Acesso enviando imediatamente para o seu <span class='text-[#128C7E]'>WhatsApp</span>",
                "<b>+3 Presentes Especiais Exclusivos</b>",
                "Acesso <b>Vitalício + Atualizações</b>", 
                "<b>7 Dias</b> de Garantia"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3"><span className="text-[#ec2f4b] font-black text-xl md:text-2xl shrink-0">✅</span><p className="text-xs md:text-xl text-gray-800 font-extrabold leading-tight" dangerouslySetInnerHTML={{ __html: item }} /></div>
              ))}</div>
              <div className="text-center mb-4 relative">
                <div className="flex flex-col items-center mb-1">
                  <p className="text-[9px] md:text-sm font-bold text-gray-900 uppercase tracking-widest leading-none">
                    De <span className="text-red-600 line-through">R$99,90</span> por apenas
                  </p>
                </div>
                <div className="flex items-start justify-center" style={{ color: COLORS.vibrantGreen }}>
                  <span className="text-3xl md:text-6xl font-black mt-2 md:mt-8 mr-1 tracking-tighter">R$</span>
                  <span className="text-6xl md:text-[10rem] font-black leading-none tracking-tighter drop-shadow-2xl">27,00</span>
                </div>
              </div>
              <div className="px-2 md:px-4 pb-4">
                <a 
                  href={getCheckoutUrl(CHECKOUT_COMPLETE_BASE)} 
                  target="_self"
                  style={{ background: COLORS.premiumGradient }} 
                  className="block w-full text-white py-4 md:py-8 px-4 rounded-full text-[13px] md:text-2xl font-black uppercase shadow-2xl hover:brightness-110 hover:scale-[1.03] transition-all active:scale-95 leading-none text-center animate-pulse-subtle whitespace-nowrap"
                >
                  QUERO ACESSAR AGORA
                </a>
                <div className="mt-6 flex items-center justify-center gap-2 text-gray-400 font-bold uppercase text-[9px] md:text-[11px] tracking-widest opacity-70">
                  <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.9L10 1.55l7.834 3.35a1 1 0 01.666.945V10c0 5.825-4.432 10.038-8.5 10.038-4.068 0-8.5-4.213-8.5-10.038V5.845a1 1 0 01.666-.945zM10 3.177L3.5 5.962V10c0 4.638 3.5 8.038 6.5 8.038s6.5-3.4 6.5-8.038V5.962L10 3.177zM9.5 7.5a.5.5 0 01.5.5v2.5a.5.5 0 01-1 0v-2a.5.5 0 00-.5-.5h-1a.5.5 0 000 1h.5v2a1.5 1.5 0 001.5 1.5h1a.5.5 0 000-1h-1a.5.5 0 01-.5-.5V8a.5.5 0 01.5-.5z" clipRule="evenodd" /></svg>
                  <span>Compra segura . Pagamento Único</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: DÚVIDAS - RESTAURADO */}
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

      {/* FINAL SECTION: GARANTIA + CTA - MANTIDO ORIGINAL */}
      <section className="py-20 px-5 text-center bg-[#f3efe5] border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          <h2 className="text-xl md:text-3xl font-black mb-12 uppercase tracking-tight text-gray-900 leading-tight">
            APROVEITE ESTA <span className="text-[#a52a2a]">OPORTUNIDADE!</span>
          </h2>

          <img 
            src={IMAGES.garantia} 
            alt="7 Dias de Garantia 100%" 
            className="w-full max-sm:max-w-[250px] max-w-[300px] h-auto mb-14 drop-shadow-2xl"
            loading="lazy"
          />
          
          <div className="space-y-2 mb-10 text-slate-700 max-w-2xl px-4">
             <p className="text-sm md:text-lg font-black uppercase tracking-tight leading-tight">
               CLIQUE NO BOTÃO ABAIXO E GARANTA <br /> AGORA O SEU ACESSO COM
             </p>
             <h3 className="text-5xl md:text-[90px] font-black text-[#a52a2a] uppercase leading-none mt-6 drop-shadow-sm">
               90% DE <br /> DESCONTO
             </h3>
          </div>
          
          <p className="text-xs md:text-base mb-12 text-gray-500 max-w-2xl leading-relaxed font-bold italic opacity-70 px-4">
            ✨ Permita-se viver a experiência de criar seus próprios incensos artesanais e transformar sua energia, sua casa e sua vida com esse conhecimento unique!
          </p>

          <button 
            onClick={scrollToOffer}
            style={{ backgroundColor: COLORS.guaranteeButton }}
            className="flex items-center justify-center gap-3 w-full md:max-w-2xl text-white py-4 md:py-8 px-4 rounded-xl text-[13px] md:text-[28px] font-black uppercase shadow-[0_12px_30px_rgba(61,122,54,0.4)] hover:brightness-110 hover:scale-[1.03] transition-all active:scale-95 leading-none text-center animate-pulse-subtle whitespace-nowrap"
          >
            <svg className="w-5 h-5 md:w-9 md:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            QUERO ACESSAR AGORA
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-5 text-center text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-gray-400 border-t border-gray-200 bg-white">
        <p>&copy; {new Date().getFullYear()} A Arte dos Incensos Artesanais. Todos os direitos reservados.</p>
      </footer>

      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scale-up { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        .animate-scale-up { animation: scale-up 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>
    </div>
  );
};

export default App;
