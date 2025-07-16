import React, { useEffect, useState } from "react";
import GeminiAi from "../utils/GeminiAi";
import { spinner } from "../utils/constants";
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";
import { lang } from "../utils/lang";

const AIsearchPage = () => {
  const [aiuserInput, useAiuserInput] = useState({
    responseQuestion: "",
    value: "",
  });
  const [geminiinputResults, usegeminiInputResults] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const [isloading, setIsloading] = useState(false);
  const [doneTyping, setDoneTyping] = useState(false);
  const selectedlang = useSelector((store) => store.geminiAI.selectedLang);
  const selectedlangText = useSelector(
    (store) => store.geminiAI.selctedTextLanguage
  );

  const geminiResponse = async () => {
    useAiuserInput({ value: "" });
    setDisplayedText("");
    setDoneTyping(false);

    const geminiResults = await GeminiAi(
      aiuserInput.responseQuestion,
      setIsloading
    );
    usegeminiInputResults(geminiResults);
  };
  useEffect(() => {
    if (!geminiinputResults) return;

    let index = 0;
    setDisplayedText("");
    setDoneTyping(false);

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + geminiinputResults.charAt(index));
      index++;
      if (index >= geminiinputResults.length) {
        clearInterval(interval);
        setDoneTyping(true);
      }
    }, 20); // Typing speed

    return () => clearInterval(interval);
  }, [geminiinputResults]);

  return (
    <div>
      <div className="max-w-[calc(83.3333%-6rem)] mx-auto max-xl:max-w-full">
        {/* Header + AI Output */}
        <div className="grid grid-cols-12 p-4 gap-2">
          <p className="col-start-3 col-end-11 mb-3 text-5xl font-bold text-center tracking-wide max-sm:col-start-1 max-sm:col-end-13">
            {/* Ask AI */}
            {lang[selectedlang].heading}
          </p>

          <div className="col-start-3 col-end-11 max-lg:col-end-12 max-md:col-start-2 max-sm:col-start-1 max-sm:col-end-13">
            {geminiinputResults && (
              <div className="bg-gray-800 text-white p-6 rounded-xl shadow-md max-h-[400px] overflow-y-auto scrollbar-custom  whitespace-pre-wrap">
                {!doneTyping ? (
                  <p className="leading-relaxed text-sm sm:text-base">
                    {displayedText}
                    <span className="animate-pulse">|</span>
                  </p>
                ) : (
                  <div className="prose prose-invert max-w-none text-sm sm:text-base">
                    <ReactMarkdown>{geminiinputResults}</ReactMarkdown>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Input */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid grid-cols-12 p-4 gap-2 mt-2"
        >
          <input
            type="text"
            onChange={(e) =>
              useAiuserInput({
                responseQuestion:
                  "this is a question" +
                  e.target.value +
                  "answer it in" +
                  selectedlangText,
                value: e.target.value,
              })
            }
            className="col-start-3 col-end-9 px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 max-md:col-start-2 max-md:col-end-8 max-sm:col-start-1 max-sm:col-end-8 max-sm:text-[12px] max-sm:px-2"
            // placeholder="Type your question for Gemini..."
            placeholder={lang[selectedlang].placeHolderText}
            value={aiuserInput.value}
          />

          {!isloading ? (
            <button
              onClick={() => geminiResponse()}
              className="col-start-9 col-end-11 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-md ml-3 max-lg:col-end-12 max-md:col-end-12 max-md:col-start-8 max-sm:col-end-13 max-sm:ml-0"
            >
              {/* Ask Gemini */}
              {lang[selectedlang].CTAtext}
            </button>
          ) : (
            <div className="col-start-9 col-end-11 flex items-center justify-center ml-3 max-lg:col-end-12 max-md:col-end-13">
              {spinner}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AIsearchPage;
