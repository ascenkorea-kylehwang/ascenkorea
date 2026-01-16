
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";
import { Language } from "../App";

export const generateAIResponse = async (prompt: string, history: ChatMessage[] = [], lang: Language = 'ko') => {
  // 호출 시점에 최신 API 키로 인스턴스 생성
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

  const systemInstructions = {
    ko: "당신은 GNSS 전문 기업 '(주)아센코리아'의 기술 상담 전문가입니다. Trimble 모듈, 안테나, RTK 솔루션에 대해 한국어로 전문적이고 친절하게 답변하세요. 대화는 항상 정중해야 하며 기술적 정확성을 유지해야 합니다.",
    en: "You are a technical consultant at 'ASCENKOREA', a GNSS specialist company. Provide professional and friendly answers about Trimble modules, antennas, and RTK solutions in English. Maintain technical accuracy and politeness."
  };

  try {
    // turn-taking 규칙을 준수하기 위해 contents 배열을 직접 구성
    // Gemini API는 user -> model -> user 순서를 엄격히 요구함
    const contents = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    // 현재 사용자 질문 추가
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
        topP: 0.95,
      },
    });

    if (!response || !response.text) {
      throw new Error("Empty response from Gemini API");
    }

    return response.text;
  } catch (error: any) {
    console.error("Gemini AI Response Error:", error);
    
    return lang === 'ko' 
      ? "죄송합니다. 현재 AI 기술지원 서버와의 연결이 원활하지 않습니다. 잠시 후 다시 질문해 주시면 감사하겠습니다." 
      : "I apologize. The connection to the AI support server is currently unstable. Please try your question again in a moment.";
  }
};

export const getDailyInsight = async (lang: Language = 'ko') => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
  
  const prompt = lang === 'ko' 
    ? "GNSS 기술의 미래와 정밀 위치 결정 기술의 가체에 대한 짧고 강렬한 한 문장의 전문적 통찰을 한국어로 들려주세요."
    : "Give me a short, powerful one-sentence professional insight about the future of GNSS and the value of precision positioning in English.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: {
        temperature: 0.7,
      }
    });
    
    return response.text || (lang === 'ko' ? "정밀함이 미래를 만듭니다." : "Precision creates the future.");
  } catch (error) {
    console.error("Daily Insight Error:", error);
    return lang === 'ko' 
      ? "아센코리아는 초정밀 위치 정보로 더 안전한 세상을 설계합니다." 
      : "ASCENKOREA designs a safer world with ultra-precision location data.";
  }
};
