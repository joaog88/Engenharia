import React from 'react';
import { useNavigate } from 'react-router-dom';
import WhatsAppButton from '../components/WhatsAppButton';

const Project10Units = () => {
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
            <h1 className="text-4xl font-light mb-6">Kitnet 10 Unidades</h1>
            <div className="space-y-6">
              <div>
                <h2 className="text-xl text-gold mb-3">Detalhes do Projeto</h2>
                <ul className="space-y-2 text-ice/80">
                  <li>• Terreno: 20x30m (600m²)</li>
                  <li>• 2 Pavimentos</li>
                  <li>• 10 Unidades independentes</li>
                  <li>• Área útil por unidade: 25m²</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl text-gold mb-3">Incluso no Projeto</h2>
                <ul className="space-y-2 text-ice/80">
                  <li>• Plantas baixas com todas medidas</li>
                  <li>• Planta de cobertura</li>
                  <li>• 2 cortes</li>
                  <li>• Fachada</li>
                  <li>• Planta humanizada</li>
                  <li>• Um vídeo realista de apresentação (maquete 3D)</li>
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
                    'Olá! Gostaria de saber mais sobre o projeto de 10 unidades de kitnets.'
                  );
                  window.open(`https://wa.me/5535997069355?text=${message}`, '_blank');
                }}
                className="w-full py-4 bg-gold text-black font-medium rounded-lg hover:bg-opacity-90 transition-colors tracking-wider"
              >
                SOLICITAR PROJETO
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <img
              src="https://images.unsplash.com/photo-1580041065738-e72023775cdc?auto=format&fit=crop&w=1400&q=80"
              alt="Kitnet 10 Unidades"
              className="w-full h-80 object-cover rounded-lg"
            />
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=800&q=80"
                alt="Detalhes do Projeto"
                className="w-full h-48 object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
                alt="Detalhes do Projeto"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Floor Plan Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-light mb-8 text-center text-ice">Planta Baixa</h2>
          <img
            src="/floorplan.jpg"
            alt="Planta Baixa do Projeto"
            className="w-full max-w-[1200px] mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Project10Units;