
import { GoogleGenAI } from "@google/genai";
import { ChatMessage, Language } from "../types";

const getApiKey = () => {
  // Vite의 define 설정을 통해 주입된 값을 우선 사용
  const key = process.env.API_KEY;
  if (key) return key;
  
  // 폴백 로직
  try {
    return (globalThis as any).process?.env?.API_KEY || "";
  } catch (e) {
    return "";
  }
};

export const getDailyInsight = async (lang: Language = 'ko') => {
  const apiKey = getApiKey();
  // API 키가 없을 경우 조용히 기본 메시지 반환 (화면 멈춤 방지)
  if (!apiKey) {
    console.warn("Gemini API_KEY is missing. Using fallback message.");
    return lang === 'ko' ? "정밀함이 미래를 만듭니다." : "Precision creates the future.";
  }

  const ai = new GoogleGenAI({ apiKey });
  const prompt = lang === 'ko' 
    ? "GNSS 기술의 미래에 대한 전문적인 통찰 한 문장 (20자 내외)"
    : "One professional short insight about GNSS future (within 10 words)";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
    });
    return response.text?.trim() || (lang === 'ko' ? "정밀함이 미래를 만듭니다." : "Precision creates future.");
  } catch (error) {
    console.error("Gemini Insight generation failed:", error);
    return lang === 'ko' ? "초정밀 위치 정보로 세상을 연결합니다." : "Connecting the world with precision.";
  }
};
