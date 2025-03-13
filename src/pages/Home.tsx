import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const kitnetProjects = [
  {
    title: 'Kitnet 10 Unidades',
    terrainSize: '20x20m (400m²)',
    floors: 2,
    price: 800,
    image: 'https://images.unsplash.com/photo-1580041065738-e72023775cdc?auto=format&fit=crop&w=1400&q=80',
    description: 'Projeto para 10 unidades em 400m², com 2 pavimentos. Layout otimizado para máxima rentabilidade.'
  },
  {
    title: 'Kitnet 12 Unidades',
    terrainSize: '20x40m (800m²)',
    floors: 2,
    price: 800,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80',
    description: 'Projeto para 12 unidades em 800m², com 2 pavimentos. Equilíbrio perfeito entre custo e espaço.'
  },
  {
    title: 'Kitnet 15 Unidades',
    terrainSize: '20x60m (1200m²)',
    floors: 2,
    price: 800,
    image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1400&q=80',
    description: 'Projeto para 15 unidades em 1200m², com 2 pavimentos. Design eficiente para alta lucratividade.'
  }
];

const Home = () => {
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
                    <button className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-black transition-colors">
                      Ver Detalhes
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden mb-12">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
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
                        <button className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-black transition-colors">
                          Ver Detalhes
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Custom Project Card */}
          <div className="bg-black/80 backdrop-blur-sm rounded-lg overflow-hidden mt-12">
            <div className="container mx-auto px-6 py-12 md:py-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-light mb-6">Projeto Personalizado</h3>
                  <p className="text-lg mb-8 opacity-75">
                    Desenvolvemos seu projeto do zero, com até 20 unidades e 3 pavimentos.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center">
                      <span className="text-gold mr-2">•</span>
                      <span>Adaptável ao seu terreno</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gold mr-2">•</span>
                      <span>Até 20 unidades</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gold mr-2">•</span>
                      <span>Máximo de 3 pavimentos</span>
                    </li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-gold text-3xl">R$ 1.000,00</span>
                    <button className="px-8 py-3 bg-gold text-black hover:bg-opacity-90 transition-colors">
                      Ver Detalhes
                    </button>
                  </div>
                </div>
                <div className="relative h-96">
                  <img 
                    src="https://images.unsplash.com/photo-1481026469463-66327c86e544?auto=format&fit=crop&w=1400&q=80"
                    alt="Projeto Personalizado"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-light text-center mb-12">Fale Conosco</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-gold/20 rounded-lg focus:border-gold focus:outline-none"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-gold/20 rounded-lg focus:border-gold focus:outline-none"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gold text-black font-medium rounded-lg hover:bg-opacity-90 transition-colors tracking-wider"
              >
                ENVIAR MENSAGEM
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;