import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // Importe os estilos de navegação
import { Navigation } from 'swiper/modules'; // Importe o módulo de navegação

const kitnetProjects = [
  {
    title: 'Kitnet 10 Unidades',
    terrainSize: '20x30m (600m²)',
    floors: 2,
    price: 800,
    image: 'https://images.unsplash.com/photo-1580041065738-e72023775cdc?auto=format&fit=crop&w=1400&q=80',
    description: 'Projeto para 10 unidades em 600m², com 2 pavimentos. Layout otimizado para máxima rentabilidade.',
    route: '/project-10-units'
  },
  {
    title: 'Kitnet 12 Unidades',
    terrainSize: '20x40m (800m²)',
    floors: 2,
    price: 800,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80',
    description: 'Projeto para 12 unidades em 800m², com 2 pavimentos. Equilíbrio perfeito entre custo e espaço.',
    route: '/project-12-units'
  },
  {
    title: 'Kitnet 15 Unidades',
    terrainSize: '20x50m (1000m²)',
    floors: 2,
    price: 800,
    image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1400&q=80',
    description: 'Projeto para 15 unidades em 1000m², com 2 pavimentos. Design eficiente para alta lucratividade.',
    route: '/project-15-units'
  }
];

const Home = () => {
  const navigate = useNavigate();
  const [contactForm, setContactForm] = useState({ name: '', phone: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Olá! Me chamo ${contactForm.name} e gostaria de saber mais sobre os projetos de kitnets.`
    );
    window.open(`https://wa.me/5535997658926?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      {/* Hero Section with Projects */}
      <section className="relative pt-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-fixed bg-center opacity-10"></div>
        <div className="relative container mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-6xl font-light mb-20 tracking-wider text-center">
            Projeto Completo de Kitnets:<br/>
            <span className="text-gold">Pronto para Construir e Lucrar</span>
          </h1>
          
          {/* Desktop View */}
          <div className="hidden md:grid grid-cols-3 gap-8 mb-12">
            {kitnetProjects.map((project, index) => (
              <div key={index} className="bg-black/80 backdrop-blur-sm rounded-lg overflow-hidden group hover:scale-[1.02] transition-all duration-300">
                <div className="relative h-64">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-light mb-4">{project.title}</h3>
                  <div className="space-y-2 mb-6 text-sm opacity-75">
                    <p>Terreno: {project.terrainSize}</p>
                    <p>Pavimentos: {project.floors}</p>
                  </div>
                  <p className="text-sm opacity-75 mb-6">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gold text-2xl">R$ {project.price},00</span>
                    <button 
                      onClick={() => navigate(project.route)}
                      className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-black transition-colors"
                    >
                      Ver Detalhes
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden mb-12 relative">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              modules={[Navigation]} // Adicione o módulo de navegação
              navigation={{
                prevEl: '.custom-swiper-button-prev',
                nextEl: '.custom-swiper-button-next',
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = '.custom-swiper-button-prev';
                swiper.params.navigation.nextEl = '.custom-swiper-button-next';
              }}
              className="swiper-container"
            >
              {kitnetProjects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-black/80 backdrop-blur-sm rounded-lg overflow-hidden">
                    <div className="relative h-64">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40"></div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-light mb-4">{project.title}</h3>
                      <div className="space-y-2 mb-6 text-sm opacity-75">
                        <p>Terreno: {project.terrainSize}</p>
                        <p>Pavimentos: {project.floors}</p>
                      </div>
                      <p className="text-sm opacity-75 mb-6">{project.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-gold text-2xl">R$ {project.price},00</span>
                        <button 
                          onClick={() => navigate(project.route)}
                          className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-black transition-colors"
                        >
                          Ver Detalhes
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Setas Personalizadas */}
            <div className="custom-swiper-button-prev absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="custom-swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Custom Project Card */}
          <div className="bg-black/80 backdrop-blur-sm rounded-lg overflow-hidden mt-12 max-w-3xl mx-auto">
            <div className="container mx-auto px-6 py-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80"
                    alt="Projeto Personalizado"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-light mb-6">Projeto Personalizado</h3>
                  <p className="text-lg mb-8 opacity-75">
                    Desenvolvemos seu projeto do zero, com até 25 unidades e 4 pavimentos.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center">
                      <span className="text-gold mr-2">•</span>
                      <span>Adaptável ao seu terreno</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gold mr-2">•</span>
                      <span>Até 25 unidades</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gold mr-2">•</span>
                      <span>Máximo de 4 pavimentos</span>
                    </li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-gold text-3xl">R$ 1.000,00</span>
                    <button 
                      onClick={() => navigate('/custom-project')}
                      className="px-8 py-3 bg-gold text-black hover:bg-opacity-90 transition-colors"
                    >
                      Ver Detalhes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
        <div className="max-w-sm mx-auto">
            <h2 className="text-2xl font-light text-center mb-8">Fale Conosco</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  id="name"
                  placeholder="Nome"
                  required
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-gold/20 rounded-lg focus:border-gold focus:outline-none text-ice"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                />
              </div>
              <div>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Telefone"
                  required
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-gold/20 rounded-lg focus:border-gold focus:outline-none text-ice"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gold text-black font-medium rounded-lg hover:bg-opacity-90 transition-colors tracking-wider"
              >
                ENVIAR MENSAGEM
              </button>
            </form>
          </div>
        </div>
      </section>
      <footer className="bg-matte py-8">
        <div className="container mx-auto px-6 text-center text-sm opacity-50">
          <p>&copy; 2025 João G. Eng. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
          