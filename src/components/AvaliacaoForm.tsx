import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export function AvaliacaoForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    objetivo_principal: '',
    possui_doenca: '',
    historico_familiar: '',
    usa_medicamento: '',
    alergia_intolerancia_alimentar: '',
    dificuldade_objetivo: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatWhatsapp = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})?(\d{1})?(\d{4})?(\d{4})?/, function(_, ddd, n1, n2, n3) {
        let formatted = '';
        if (ddd) formatted += `(${ddd}`;
        if (n1) formatted += `) ${n1}`;
        if (n2) formatted += ` ${n2}`;
        if (n3) formatted += `-${n3}`;
        return formatted;
      });
    }
    return numbers.slice(0, 11);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const whatsappNumber = formData.whatsapp.replace(/\D/g, '');
      
      const { error } = await supabase
        .from('avaliacoes')
        .insert([{
          nome: formData.nome,
          whatsapp: whatsappNumber,
          objetivo_principal: formData.objetivo_principal,
          possui_doenca: formData.possui_doenca,
          historico_familiar: formData.historico_familiar,
          usa_medicamento: formData.usa_medicamento,
          alergia_intolerancia_alimentar: formData.alergia_intolerancia_alimentar,
          dificuldade_objetivo: formData.dificuldade_objetivo,
        }]);

      if (error) throw error;

      alert('Avaliação enviada com sucesso!');
      navigate('/');
    } catch (error) {
      console.error('Erro ao salvar avaliação:', error);
      alert('Erro ao enviar avaliação. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'whatsapp') {
      setFormData(prev => ({
        ...prev,
        [name]: formatWhatsapp(value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 border-2 border-accent">
          <h2 className="text-2xl font-bold text-primary mb-6">Avaliação Inicial</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-primary font-medium mb-2">
                Nome completo*
              </label>
              <input
                type="text"
                name="nome"
                required
                value={formData.nome}
                onChange={handleChange}
                className="w-full border-2 border-accent rounded-lg p-2 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-primary font-medium mb-2">
                WhatsApp*
              </label>
              <input
                type="text"
                name="whatsapp"
                required
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="(00) 0 0000-0000"
                className="w-full border-2 border-accent rounded-lg p-2 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-primary font-medium mb-2">
                Objetivo principal*
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="objetivo_principal"
                    value="Emagrecimento"
                    checked={formData.objetivo_principal === 'Emagrecimento'}
                    onChange={handleChange}
                    required
                    className="mr-2 accent-primary"
                  />
                  <span className="text-primary">Emagrecimento</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="objetivo_principal"
                    value="Ganho de Massa"
                    checked={formData.objetivo_principal === 'Ganho de Massa'}
                    onChange={handleChange}
                    className="mr-2 accent-primary"
                  />
                  <span className="text-primary">Ganho de Massa</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-primary font-medium mb-2">
                Tem alguma doença?*
              </label>
              <textarea
                name="possui_doenca"
                required
                value={formData.possui_doenca}
                onChange={handleChange}
                className="w-full border-2 border-accent rounded-lg p-2 focus:outline-none focus:border-primary transition-colors"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-primary font-medium mb-2">
                Histórico familiar? (Tem alguém com diabetes, sobrepeso...)*
              </label>
              <textarea
                name="historico_familiar"
                required
                value={formData.historico_familiar}
                onChange={handleChange}
                className="w-full border-2 border-accent rounded-lg p-2 focus:outline-none focus:border-primary transition-colors"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-primary font-medium mb-2">
                Você usa algum remédio? Suplementos? Vitaminas?*
              </label>
              <textarea
                name="usa_medicamento"
                required
                value={formData.usa_medicamento}
                onChange={handleChange}
                className="w-full border-2 border-accent rounded-lg p-2 focus:outline-none focus:border-primary transition-colors"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-primary font-medium mb-2">
                Você tem alguma alergia ou intolerância alimentar?
              </label>
              <textarea
                name="alergia_intolerancia_alimentar"
                value={formData.alergia_intolerancia_alimentar}
                onChange={handleChange}
                className="w-full border-2 border-accent rounded-lg p-2 focus:outline-none focus:border-primary transition-colors"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-primary font-medium mb-2">
                Qual a maior dificuldade você tem para chegar no seu objetivo?*
              </label>
              <textarea
                name="dificuldade_objetivo"
                required
                value={formData.dificuldade_objetivo}
                onChange={handleChange}
                className="w-full border-2 border-accent rounded-lg p-2 focus:outline-none focus:border-primary transition-colors"
                rows={3}
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-50 border-2 border-accent"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Avaliação'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}