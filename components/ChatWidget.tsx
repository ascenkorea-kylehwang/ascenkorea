
import React, { useState } from 'react';
import { Language } from '../types';

const ChatWidget: React.FC<{ lang: Language }> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', subject: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message || isSubmitting) return;

    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetch('https://formspree.io/f/mvzzgnod', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setIsSuccess(true);
        // @ts-ignore
        if (window.confetti) window.confetti({ particleCount: 100, spread: 70 });
        setFormData({ name: '', company: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('전송 실패');
      }
    } catch (err) {
      setError(lang === 'ko' ? '오류가 발생했습니다.' : 'An error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const t = {
    ko: { title: 'GNSS 기술 지원', sub: '전문가가 답변해 드립니다.', name: '성함', email: '이메일', message: '내용', send: '문의 보내기' },
    en: { title: 'Tech Support', sub: 'Experts will respond.', name: 'Name', email: 'Email', message: 'Message', send: 'Send' }
  }[lang];

  return (
    <section id="support" className="py-32 bg-blue-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3 flex flex-col justify-center">
                <h2 className="text-4xl font-black mb-8 text-blue-950">{t.title}</h2>
                <p className="text-slate-500 mb-8 text-xl font-medium">{t.sub}</p>
            </div>
            <div className="lg:w-2/3 w-full">
                <div className="bg-white rounded-[2.5rem] shadow-2xl p-10">
                    {isSuccess ? (
                        <div className="py-20 text-center">
                            <h3 className="text-2xl font-black">성공적으로 접수되었습니다.</h3>
                            <button onClick={() => setIsSuccess(false)} className="text-blue-600 font-bold mt-4">다시 작성</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input name="name" required placeholder={t.name} value={formData.name} onChange={handleChange} className="w-full border rounded-xl p-4" />
                            <input name="email" type="email" required placeholder={t.email} value={formData.email} onChange={handleChange} className="w-full border rounded-xl p-4" />
                            <textarea name="message" required placeholder={t.message} value={formData.message} onChange={handleChange} rows={5} className="w-full border rounded-xl p-4" />
                            <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black">{isSubmitting ? '...' : t.send}</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ChatWidget;
