
import { GoogleGenAI } from "@google/genai";
import { ChatMessage, Language } from "../types";

// API 키를 안전하게 가져오는 헬퍼 (배포 환경의 process.env 대응)
const getApiKey = () => {
  try {
    return process.env.API_KEY || "";
  } catch (e) {
    return "";
  }
};

export const getDailyInsight = async (lang: Language = 'ko') => {
  const apiKey = getApiKey();
  if (!apiKey) return lang === 'ko' ? "정밀함이 미래를 만듭니다." : "Precision creates the future.";

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
    console.warn("Insight generation failed, using fallback.");
    return lang === 'ko' ? "초정밀 위치 정보로 세상을 연결합니다." : "Connecting the world with precision.";
  }
};
