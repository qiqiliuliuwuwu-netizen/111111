import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateJobResponsibilities = async (
  department: string, 
  position: string, 
  layer: string,
  category: '管理' | '技术' | '业务'
): Promise<string> => {
  if (!department || !position) return "";

  try {
    const prompt = `
      请为以下职位生成简洁、专业的岗位职责（不超过50字）：
      部门：${department}
      岗位：${position}
      层级：${layer}
      类别：${category}岗
      
      输出格式仅需包含职责内容，不需要标题。
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        maxOutputTokens: 100,
        temperature: 0.7,
      }
    });

    return response.text.trim();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "AI 生成失败，请重试";
  }
};

export const analyzeStaffing = async (dataContext: string): Promise<string> => {
  try {
    const prompt = `
      作为一名建筑工程行业的人力资源专家，请分析以下组织架构配置：
      ${dataContext}
      
      请给出关于人员配置合理性的简短建议（100字以内）。
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        maxOutputTokens: 200,
      }
    });

    return response.text.trim();
  } catch (error) {
     console.error("Gemini API Error:", error);
     return "分析失败";
  }
}