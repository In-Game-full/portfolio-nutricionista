import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu, Phone, User, ChevronRight, Instagram, Mail } from 'lucide-react';
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
            <span className="text-xl font-semibold text-white">Dr. Gustavo Carvalho</span>
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
              Avaliação Inicial
            </a>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="/dr-gustavo-carvalho.png"
            alt="Dr. Gustavo Carvalho - Nutricionista"
            className="rounded-lg shadow-lg w-full border-4 border-accent"
            onError={(e) => {
              console.error('Error loading image:', e);
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      </section>

      <section id="servicos" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Acompanhamento Nutricional</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border-2 border-accent shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Mais Qualidade de Vida</h3>
              <p className="text-gray-600">
               Analisando seus exames, você terá um plano alimentar com lista de refeições substitutas e acompanhamento vip pós consulta focando em melhorar suas saúde psicológica, cardiovascular e física.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-accent shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Ganho de Massa Muscular</h3>
              <p className="text-gray-600">
                Estratégias nutricionais que farão você ganhar massa muscular e melhorar seu desempenho físico através de alimentação e suplementação especifica.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-accent shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Emagrecimento</h3>
              <p className="text-gray-600">
               Plano personalizado de acordo com sua rotina e preferências alimentares, ajustando detalhes que fazem toda diferença além do acompanhamento vip pós consulta para tirar todas as dúvidas e lista de refeições substitutas.
              </p>
            </div>
          </div>
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