import React from 'react';
import { useNavigate } from 'react-router-dom';
import WhatsAppButton from '../components/WhatsAppButton';

const Project15Units = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#1A1A1A] pt-24">
      <div className="container mx-auto px-6 py-16">
        <button
          onClick={() => navigate('/')}
          className="text-gold hover:text-gold/80 transition-colors mb-8 inline-flex items-center"
        >
          ← Voltar
        </button>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-light mb-6">Kitnet com 15 Unidades</h1>
            <div className="space-y-6 text-ice/90">
              <p>
                Projeto ideal para quem busca um empreendimento compacto, com alta taxa de retorno e execução racional.
              </p>

              <div>
                <h2 className="text-xl text-gold mb-3">Descrição do Projeto</h2>
                <p className="mb-4">
                  Projetado para terrenos de 20x50m (1000m²), este modelo conta com 15 unidades independentes distribuídas em dois pavimentos.
                  Cada unidade possui 30m² de área útil, oferecendo conforto e funcionalidade para moradia ou locação.
                </p>
                <ul className="space-y-2 text-ice/80">
                  <li>Terreno: 20x50m (1000m²)</li>
                  <li>2 Pavimentos</li>
                  <li>15 Unidades independentes</li>
                  <li>Área útil por unidade: 30m²</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl text-gold mb-3">Você receberá</h2>
                <ul className="space-y-2 text-ice/80">
                  <li>Planta baixa em CAD (.dwg)</li>
                  <li>Modelo 3D ilustrativo da edificação</li>
                  <li>Layout funcional e otimizado para construção</li>
                  <li>Memorial descritivo</li>
                  <li>ART (Anotação de Responsabilidade Técnica)</li>
                </ul>
              </div>

              <div className="bg-black/40 p-6 rounded-lg">
                <h2 className="text-xl text-gold mb-3">Investimento</h2>
                <p className="text-3xl text-gold mb-2">R$ 800,00</p>
                <p className="text-sm text-ice/60">Pagamento via Pix ou transferência bancária</p>
              </div>

              <button
                onClick={() => {
                  const message = encodeURIComponent(
                    'Olá! Gostaria de saber mais sobre o projeto de 15 unidades de kitnets.'
                  );
                  window.open(`https://wa.me/5535997658926?text=${message}`, '_blank');
                }}
                className="w-full py-4 bg-gold text-black font-medium rounded-lg hover:bg-opacity-90 transition-colors tracking-wider"
              >
                SOLICITAR PROJETO
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <img
              src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1400&q=80"
              alt="Kitnet 15 Unidades"
              className="w-full h-80 object-cover rounded-lg"
            />
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
                alt="Render Interno"
                className="w-full h-48 object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1580041065738-e72023775cdc?auto=format&fit=crop&w=800&q=80"
                alt="Render Interno"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-light mb-8 text-center text-ice">Planta Baixa</h2>
          <img
            src="https://i.imgur.com/eauWWGm.jpg"
            alt="Planta Baixa do Projeto"
            className="w-full max-w-[1200px] mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Project15Units;
