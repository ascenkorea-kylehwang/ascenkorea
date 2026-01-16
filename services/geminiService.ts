
import { GoogleGenAI } from "@google/genai";
import { ChatMessage, Language } from "../types";

export const generateAIResponse = async (prompt: string, history: ChatMessage[] = [], lang: Language = 'ko') => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

  const systemInstructions = {
    ko: "당신은 GNSS 전문 기업 '(주)아센코리아'의 기술 상담 전문가입니다. Trimble 모듈, 안테나, RTK 솔루션에 대해 한국어로 전문적이고 친절하게 답변하세요.",
    en: "You are a technical consultant at 'ASCENKOREA', a GNSS specialist company. Provide professional and friendly answers in English."
  };

  try {
    const contents = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    contents.push({
      role: 'user',
      parts: [{ text: prompt }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: systemInstructions[lang],
        temperature: 0.4,
      },
    });

    return response.text || "";
  } catch (error) {
    console.error("Gemini Error:", error);
    return lang === 'ko' ? "서버 연결이 원활하지 않습니다." : "Server connection error.";
  }
};

export const getDailyInsight = async (lang: Language = 'ko') => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
  const prompt = lang === 'ko' 
    ? "GNSS 기술의 미래에 대한 전문적인 통찰 한 문장"
    : "One professional insight about GNSS future";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
    });
    return response.text || (lang === 'ko' ? "정밀함이 미래를 만듭니다." : "Precision creates future.");
  } catch (error) {
    return lang === 'ko' ? "초정밀 위치 정보로 세상을 연결합니다." : "Connecting the world with precision.";
  }
};
