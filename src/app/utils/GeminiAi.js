import { GoogleGenAI } from "@google/genai";
import React, { useEffect, useState } from "react";

const GeminiAi = async (textinput, setIsloading) => {
  try {
    setIsloading(true);
    const ai = new GoogleGenAI({
      apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
    });
    const geminiResponse = await ai.models.generateContent({
      model: "gemini-2.0-flash-001",
      contents: textinput,
    });
    setIsloading(false);
    return geminiResponse?.candidates[0]?.content?.parts[0]?.text;
  } catch (error) {
    console.log(error);
  } finally {
    setIsloading(false);
  }
};

export default GeminiAi;
