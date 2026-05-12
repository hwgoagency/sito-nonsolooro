'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Formspree richiede ora un Form ID registrato (la mail diretta non è più supportata per i nuovi form).
      // Usa l'ID che trovi sulla dashboard di Formspree (es. https://formspree.io/f/tuo-id)
      const response = await fetch('https://formspree.io/f/xdabyyzp', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-notte-profonda p-10 rounded shadow-dark border border-oro-antico/20 text-avorio-caldo">
      <h2 className="font-headline text-3xl text-oro-antico mb-6">Inviaci un Messaggio</h2>
      
      {status === 'success' ? (
        <div className="bg-verde-petrolio/50 border border-oro-antico/30 p-6 rounded text-center">
          <p className="text-xl text-oro-antico font-headline mb-2">Grazie!</p>
          <p className="font-body text-avorio-caldo">Il tuo messaggio è stato inviato con successo. Ti risponderemo al più presto.</p>
          <button 
            onClick={() => setStatus('idle')}
            className="mt-6 text-sm underline hover:text-oro-antico transition-colors"
          >
            Invia un altro messaggio
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block font-body text-sm uppercase tracking-wider mb-2">Nome e Cognome</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-verde-petrolio border border-oro-antico/30 rounded p-3 text-avorio-caldo focus:outline-none focus:border-oro-antico transition-colors"
              placeholder="Il tuo nome"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-body text-sm uppercase tracking-wider mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-verde-petrolio border border-oro-antico/30 rounded p-3 text-avorio-caldo focus:outline-none focus:border-oro-antico transition-colors"
              placeholder="La tua email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-body text-sm uppercase tracking-wider mb-2">Messaggio</label>
            <textarea 
              id="message" 
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-verde-petrolio border border-oro-antico/30 rounded p-3 text-avorio-caldo focus:outline-none focus:border-oro-antico transition-colors"
              placeholder="Come possiamo aiutarti?"
            ></textarea>
          </div>
          
          {status === 'error' && (
            <p className="text-red-400 text-sm font-body">
              Si è verificato un errore durante l&apos;invio. Per favore riprova più tardi.
            </p>
          )}

          <button 
            type="submit" 
            disabled={status === 'loading'}
            className="btn-primary w-full mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Invio in corso...' : 'Invia Richiesta'}
          </button>
        </form>
      )}
    </div>
  );
}
