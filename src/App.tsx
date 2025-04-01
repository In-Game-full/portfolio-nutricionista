import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu, Phone, User, ChevronRight, Instagram, Mail, Clock, Scale, Utensils, Star, Crown } from 'lucide-react';
import { AvaliacaoForm } from './components/AvaliacaoForm';

function HomePage() {
  const whatsappNumber = "559591199821";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar uma consulta.");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-white">
      <header className="fixed top-0 left-0 right-0 bg-primary shadow-md z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <User className="w-8 h-8 text-accent" />
            <span className="text-xl font-semibold text-white">Nutricionista</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#sobre" className="text-white hover:text-accent transition-colors">Sobre</a>
            <a href="#servicos" className="text-white hover:text-accent transition-colors">Serviços</a>
            <a href="#contato" className="text-white hover:text-accent transition-colors">Contato</a>
          </div>
        </nav>
      </header>

      <div className="h-16"></div>

      <section id="sobre" className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Transforme sua saúde através da nutrição
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Meu nome é <b>Gustavo Carvalho</b>.
            Sou nutricionista especializado
            no emagrecimento saudável, sou
            apaixonado por ajudar as
            pessoas a alcançarem os seus
            objetivos de saúde e estéticos.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Meu foco é estar junto com você no
            acompanhamento nutricional para
            alavancar seus resultados com
            alimentos que já fazem parte da
            sua rotina e refeições específicas
            do seu cotidiano. Irei mudar
            detalhes que farão toda diferença.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Minha missão é te ajudar a
            transformar sua vida através de
            uma abordagem personalizada
            para você com uma alimentação
            saudável, potencializando sua
            saúde, e melhorando sua
            disposição física.
          </p>
          <div className="flex gap-4">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-opacity-90 transition-colors border-2 border-accent"
            >
              <Phone className="w-5 h-5" />
              Agende sua consulta
            </a>
            <a
              href="/avaliacao"
              className="bg-white text-primary border-2 border-accent px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
              Pré-Consulta
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <img
            src="/dr-gustavo-carvalho.png"
            alt="Dr. Gustavo Carvalho - Nutricionista"
            className="rounded-lg shadow-lg max-w-[450px] border-4 border-accent"
            onError={(e) => {
              console.error('Error loading image:', e);
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      </section>

      <section id="servicos" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="bg-[#ECE7E3] border-2 border-[#FDAF01] rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-primary mb-4">Meu Acompanhamento Nutricional</h2>
            <p className="text-lg text-gray-600 text-center">
              Acredito que cada pessoa é única com suas preferências alimentares e especificações culinárias.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#08027F] rounded-lg p-6 flex items-start gap-4">
              <Clock className="w-8 h-8 text-[#FDAF01] flex-shrink-0" />
              <p className="text-white">Consulta com duração de 01:00h a 01:30h</p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#08027F] rounded-lg p-6 flex items-start gap-4">
              <Scale className="w-8 h-8 text-[#FDAF01] flex-shrink-0" />
              <p className="text-white">Avaliação física com adipômetro, fita métrica e bioimpedância</p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#08027F] rounded-lg p-6 flex items-start gap-4">
              <Utensils className="w-8 h-8 text-[#FDAF01] flex-shrink-0" />
              <p className="text-white">Dieta individualizada</p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#08027F] rounded-lg p-6 flex items-start gap-4">
              <Crown className="w-8 h-8 text-[#FDAF01] flex-shrink-0" />
              <p className="text-white">Acompanhamento vip pós consulta</p>
            </div>

            {/* Card 5 */}
            <div className="bg-[#08027F] rounded-lg p-6 flex items-start gap-4">
              <Star className="w-8 h-8 text-[#FDAF01] flex-shrink-0" />
              <p className="text-white">Retorno com avaliação física</p>
            </div>

            {/* Card 6 - Button */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#08027F] rounded-lg p-6 flex items-center justify-center hover:bg-opacity-90 transition-colors"
            >
              <span className="text-[#FDAF01] font-bold text-lg">AGENDAR CONSULTA</span>
            </a>
          </div>

          {/* Results Section */}
          <section className="mt-16 bg-[#FEB206] py-12 rounded-lg">
            <div className="bg-[#FEB206] rounded-lg p-8 mb-12">
              <h1 className="text-8xl font-bold text-center text-[#08027F] mb-4">RESULTADOS</h1>
              <div className="bg-[#08027F] rounded-lg p-4 max-w-xs mx-auto">
                <p className="text-lg text-center text-white font-semibold">
                  GANHO DE MASSA MUSCULAR
                </p>
              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Before */}
              <div className="space-y-0 mx-4">
                <h2 className="text-3xl font-bold text-center text-white py-2 rounded-lg">ANTES</h2>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mx-4">
                  <img
                    src="/ganho-massa-antes.png"
                    alt="Antes"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* After */}
              <div className="space-y-0 mx-4">
                <h2 className="text-3xl font-bold text-center text-white py-2 rounded-lg">DEPOIS</h2>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mx-4">
                  <img
                    src="/ganho-massa-depois.png"
                    alt="Depois"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-center text-[#08027F] mb-12">
              <b>+4kg de massa muscular</b> em apenas <b>2 meses</b> de acompanhamento
            </h3>

            <div className="bg-[#08027F] rounded-lg p-4 max-w-xs mx-auto mb-12">
              <p className="text-lg text-center text-white font-semibold">
                EMAGRECIMENTO
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Before */}
              <div className="space-y-0 mx-4">
                <h2 className="text-3xl font-bold text-center text-white  py-2 rounded-lg">
                  ANTES
                </h2>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mx-4">
                  <img
                    src="emagrecimento-antes.png"
                    alt="Antes"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* After */}
              <div className="space-y-0 mx-4">
                <h2 className="text-3xl font-bold text-center text-white  py-2 rounded-lg">
                  DEPOIS
                </h2>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mx-4">
                  <img
                    src="/emagrecimento-depois.png"
                    alt="Depois"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-center text-[#08027F]">
              <b>-6kg de massa gorda</b> e mantendo a massa muscular em apenas <b>2 meses de acompanhamento</b>
            </h3>
          </section>
        </div>
      </section>

      <section id="contato" className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Entre em Contato</h2>
          <div className="flex justify-center gap-8">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-accent transition-colors"
            >
              <Phone className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/ogustanutri_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-accent transition-colors"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
            <a
              href="mailto:gustavo_hcs11@outlook.com"
              className="flex items-center gap-2 text-white hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-8 border-t-2 border-accent">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Dr. Gustavo Carvalho. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/avaliacao" element={<AvaliacaoForm />} />
      </Routes>
    </Router>
  );
}

export default App;