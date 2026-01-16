
import React, { useState } from 'react';
import { Language } from '../App';

const ChatWidget: React.FC<{ lang: Language }> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    subject: '',
    message: ''
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
      // Formspree API 연동
      const response = await fetch('https://formspree.io/f/mvzzgnod', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSuccess(true);
        // 성공 시 축하 효과
        // @ts-ignore
        if (window.confetti) {
          // @ts-ignore
          window.confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#3b82f6', '#60a5fa', '#ffffff']
          });
        }
        // 폼 초기화
        setFormData({ name: '', company: '', email: '', subject: '', message: '' });
      } else {
        const data = await response.json();
        throw new Error(data.error || '전송에 실패했습니다.');
      }
    } catch (err: any) {
      console.error('Form Submission Error:', err);
      setError(lang === 'ko' ? '문의 전송 중 오류가 발생했습니다. 다시 시도해주세요.' : 'An error occurred while sending your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
    
    // 5초 후 성공 메시지 숨김
    if (isSuccess) {
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const t = {
    ko: {
      title: 'GNSS 기술 지원 및 문의',
      sub: '제품 사양부터 RTK 구성, 대량 구매 문의까지 아센코리아 전문가가 24시간 이내에 답변해 드립니다.',
      name: '성함',
      company: '회사명 / 기관명',
      email: '이메일 주소',
      subject: '문의 제목',
      message: '문의 내용',
      placeholder: '기술적 문의사항이나 상담 내용을 상세히 입력해주세요...',
      send: '문의 메일 보내기',
      submitting: '전송 중...',
      success: '문의가 성공적으로 접수되었습니다. 곧 연락드리겠습니다!',
      info: '긴급한 기술 지원은 1544-3818로 연락 주시기 바랍니다.'
    },
    en: {
      title: 'GNSS Tech Support & Inquiry',
      sub: 'From product specs to RTK configuration and bulk orders, our experts will respond within 24 hours.',
      name: 'Full Name',
      company: 'Company / Organization',
      email: 'Email Address',
      subject: 'Subject',
      message: 'Message',
      placeholder: 'Please enter your technical inquiry or consultation details...',
      send: 'Send Inquiry Email',
      submitting: 'Sending...',
      success: 'Your inquiry has been successfully received. We will contact you soon!',
      info: 'For urgent technical support, please call +82-1544-3818.'
    }
  }[lang];

  return (
    <section id="support" className="py-32 bg-blue-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-20 items-stretch">
            <div className="lg:w-1/3 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-black mb-8 text-blue-950 leading-tight">{t.title}</h2>
                <p className="text-slate-500 mb-8 text-xl leading-relaxed font-medium">{t.sub}</p>
                <div className="p-6 bg-white rounded-2xl border border-blue-100 shadow-sm">
                    <p className="text-sm font-bold text-blue-600 mb-2 uppercase tracking-widest italic">Fast Track</p>
                    <p className="text-slate-700 font-medium">{t.info}</p>
                </div>
            </div>

            <div className="lg:w-2/3 w-full">
                <div className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col">
                    <div className="px-10 py-6 bg-blue-950 text-white flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className={`w-4 h-4 rounded-full ${isSubmitting ? 'bg-yellow-400 animate-pulse' : 'bg-blue-400'}`}></div>
                            <span className="font-black text-lg tracking-tight uppercase italic">AscenKorea Technical Support</span>
                        </div>
                    </div>

                    <div className="p-10 bg-slate-50/30">
                        {isSuccess ? (
                            <div className="py-20 text-center animate-fadeIn">
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">{t.success}</h3>
                                <button 
                                    onClick={() => setIsSuccess(false)}
                                    className="text-blue-600 font-bold hover:underline"
                                >
                                    {lang === 'ko' ? '새 문의 작성하기' : 'Write new inquiry'}
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {error && (
                                    <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm font-bold">
                                        {error}
                                    </div>
                                )}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">{t.name} *</label>
                                        <input 
                                            required
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            type="text" 
                                            className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium" 
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">{t.company}</label>
                                        <input 
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            type="text" 
                                            className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium" 
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">{t.email} *</label>
                                    <input 
                                        required
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        type="email" 
                                        className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">{t.subject}</label>
                                    <input 
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        type="text" 
                                        className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">{t.message} *</label>
                                    <textarea 
                                        required
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        placeholder={t.placeholder}
                                        className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium resize-none" 
                                    ></textarea>
                                </div>
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className={`w-full py-5 rounded-2xl font-black text-xl transition-all flex items-center justify-center gap-3 ${isSubmitting ? 'bg-slate-300 text-slate-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-600/20 active:scale-[0.98]'}`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-6 w-6 text-slate-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            {t.submitting}
                                        </>
                                    ) : (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                            </svg>
                                            {t.send}
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ChatWidget;
