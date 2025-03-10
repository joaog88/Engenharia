import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappMessage = encodeURIComponent(
      `*Novo Contato do Site*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Telefone:* ${formData.phone}\n` +
      `*Serviço:* ${formData.service}\n\n` +
      `*Mensagem:*\n${formData.message}`
    );

    // Open WhatsApp with the formatted message
    window.open(`https://wa.me/5535997658926?text=${whatsappMessage}`, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ice mb-2">
          Nome
        </label>
        <input
          type="text"
          id="name"
          required
          className="w-full px-4 py-3 bg-matte border border-gold/20 rounded-lg focus:border-gold focus:outline-none text-ice"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ice mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-4 py-3 bg-matte border border-gold/20 rounded-lg focus:border-gold focus:outline-none text-ice"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-ice mb-2">
          Telefone
        </label>
        <input
          type="tel"
          id="phone"
          className="w-full px-4 py-3 bg-matte border border-gold/20 rounded-lg focus:border-gold focus:outline-none text-ice"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-ice mb-2">
          Serviço de Interesse
        </label>
        <select
          id="service"
          required
          className="w-full px-4 py-3 bg-matte border border-gold/20 rounded-lg focus:border-gold focus:outline-none text-ice"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
        >
          <option value="">Selecione um serviço</option>
          <option value="Laudo Técnico">Laudo Técnico</option>
          <option value="Projeto em AutoCad ou Revit">Projeto em AutoCad ou Revit</option>
          <option value="Projeto e Cálculo Estrutural">Projeto e Cálculo Estrutural</option>
          <option value="Projeto e Orçamento Completo">Projeto e Orçamento Completo</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ice mb-2">
          Mensagem
        </label>
        <textarea
          id="message"
          rows={4}
          required
          className="w-full px-4 py-3 bg-matte border border-gold/20 rounded-lg focus:border-gold focus:outline-none text-ice resize-none"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-gold text-matte font-medium rounded-lg hover:bg-opacity-90 transition-colors tracking-wider"
      >
        ENVIAR MENSAGEM
      </button>
    </form>
  );
};

export default ContactForm;