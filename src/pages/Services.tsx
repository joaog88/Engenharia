import React from 'react';
import { Phone, Mail, MapPin, FileText, Ruler, ClipboardList, Calculator, Building2, ChevronRight } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import ContactForm from '../components/ContactForm';

function Services() {
  const services = [
    {
      title: 'Laudos Técnicos',
      description: 'Avaliações estruturais, perícias e vistorias técnicas especializadas',
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: 'Projetos AutoCAD',
      description: 'Plantas, cortes e fachadas com alto nível de detalhamento',
      icon: <Ruler className="w-6 h-6" />
    },
    {
      title: 'Especificações Técnicas',
      description: 'Descrição detalhada de materiais e métodos construtivos',
      icon: <ClipboardList className="w-6 h-6" />
    },
    {
      title: 'Planilhas Orçamentárias',
      description: 'Cálculo preciso de custos com Curva ABC',
      icon: <Calculator className="w-6 h-6" />
    },
    {
      title: 'Cálculo Estrutural',
      description: 'Dimensionamento e análise completa de estruturas',
      icon: <Building2 className="w-6 h-6" />
    }
  ];

  const portfolioCategories = [
    {
      title: 'Projetos Estruturais e Reforço',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80',
      description: 'Desenvolvimento e cálculo estrutural de edificações, modelagem TQS e detalhamento técnico',
      details: [
        'Desenvolvimento e cálculo estrutural de edificações diversas',
        'Modelagem e dimensionamento no TQS',
        'Montagem de pranchas e detalhamento técnico para execução'
      ]
    },
    {
      title: 'Reformas e Recuperação Estrutural',
      image: 'https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=2000&q=80',
      description: 'Projetos de recuperação, inspeção e diagnóstico de estruturas existentes',
      details: [
        'Projetos de recuperação e reforço estrutural',
        'Inspeção e diagnóstico de fachadas e estruturas existentes',
        'Especificação de materiais e soluções para adequação'
      ]
    },
    {
      title: 'Consultoria Técnica e Orçamentos',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80',
      description: 'Laudos técnicos, orçamentos detalhados e assessoria especializada',
      details: [
        'Elaboração de laudos técnicos e pareceres estruturais',
        'Planilhas orçamentárias detalhadas com Curva ABC',
        'Assessoria para viabilidade e planejamento de obras'
      ]
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <header className="relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 gradient-overlay"></div>
        
        <div className="relative container mx-auto px-6 py-32 md:py-48">
          <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-wider">Engenharia Civil<br/>de Excelência</h1>
          <p className="text-lg mb-12 max-w-xl opacity-90">Soluções técnicas precisas e confiáveis para seu projeto</p>
          <a href="#contact" className="inline-block px-12 py-4 border border-gold text-gold hover:bg-gold hover:text-matte transition-colors tracking-wider">
            SOLICITAR ORÇAMENTO
          </a>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-24 bg-lead">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light text-center mb-20 tracking-wider">NOSSOS SERVIÇOS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card p-8 rounded-lg bg-matte hover-effect">
                <div className="text-gold mb-6">{service.icon}</div>
                <h3 className="text-xl font-light mb-4">{service.title}</h3>
                <p className="text-sm opacity-75 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-matte">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light text-center mb-20 tracking-wider">PORTFÓLIO</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {portfolioCategories.map((category, index) => (
              <div key={index} className="group bg-lead rounded-lg overflow-hidden hover-effect">
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-ice text-lg font-light tracking-wider px-6 py-3 border border-gold/50 backdrop-blur-sm">
                      Ver Detalhes
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-light mb-4">{category.title}</h3>
                  <p className="text-sm opacity-75 mb-6">{category.description}</p>
                  <ul className="space-y-3">
                    {category.details.map((detail, idx) => (
                      <li key={idx} className="text-sm opacity-75 flex items-start">
                        <ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-gold flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-lead">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light text-center mb-20 tracking-wider">CONTATO</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-light mb-12">Informações de Contato</h3>
              <div className="space-y-8">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-gold mr-6" />
                  <span>(35) 99765-8926</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-gold mr-6" />
                  <span>jgnazare@hotmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-gold mr-6" />
                  <span>São Lourenço, MG</span>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <WhatsAppButton />

      <footer className="bg-matte py-8">
        <div className="container mx-auto px-6 text-center text-sm opacity-50">
          <p>&copy; 2025 João G. Eng. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default Services;