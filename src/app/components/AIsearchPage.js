import React, { useState } from "react";
import GeminiAi from "../utils/GeminiAi";
import { spinner } from "../utils/constants";

const AIsearchPage = () => {
  const [aiuserInput, useAiuserInput] = useState("");
  const [geminiinputResults, usegeminiInputResults] = useState();
  const [isloading, setIsloading] = useState(false);
  const geminiResponse = async () => {
    useAiuserInput("");
    const geminiResults = await GeminiAi(aiuserInput, setIsloading);
    usegeminiInputResults(geminiResults); // ✅ show on screen
  };
  return (
    <div>
      <div className="max-w-[calc(83.3333%-6rem)] mx-auto">
        {/* Header + AI Output */}
        <div className="grid grid-cols-12 p-4 gap-2">
          <p className="col-start-3 col-end-11 mb-3 text-5xl font-bold text-center tracking-wide">
            Ask AI
          </p>

          <div className="col-start-3 col-end-11">
            {geminiinputResults && (
              <div className="bg-gray-800 text-white p-6 rounded-xl shadow-md   max-h-[400px] overflow-y-auto scrollbar-custom  whitespace-break-spaces">
                <p className=" leading-relaxed text-sm sm:text-base scrollbar-thin scrollbar-thumb-neutral-500 scrollbar-track-transparent rounded-md">
                  {geminiinputResults}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Input */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid grid-cols-12 p-4 gap-2 -mt-2" // 👈 fixes black gap
        >
          <input
            type="text"
            onChange={(e) => useAiuserInput(e.target.value)}
            className="col-start-3 col-end-9 px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400"
            placeholder="Type your question for Gemini..."
            value={aiuserInput}
          />

          {!isloading ? (
            <button
              onClick={() => geminiResponse()}
              className="col-start-9 col-end-11 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-md ml-3"
            >
              Ask Gemini
            </button>
          ) : (
            <div className="col-start-9 col-end-11 flex items-center justify-center ml-3">
              {spinner}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AIsearchPage;
