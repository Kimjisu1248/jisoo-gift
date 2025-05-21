import { useState, useEffect } from 'react';
import questions from './data/questions';
import results from './data/results';
import fakeAiResult from './data/fakeAiResult';

function App() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState({
    protein: 0,
    skincare: 0,
    camera: 0,
    etc: 0
  });
  const [aiText, setAiText] = useState(null);

  const handleAnswer = (type) => {
    setScore((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
    setStep((prev) => prev + 1);
  };

  useEffect(() => {
    if (step >= questions.length && !aiText) {
      const aiMessage = fakeAiResult(score);
      setAiText(aiMessage);
    }
  }, [step]);

  if (step >= questions.length) {
    const topCategory = Object.entries(score).sort((a, b) => b[1] - a[1])[0][0];
    const result = results[topCategory];

    return (
      <div className="p-10 text-center animate-fade-in">
        <h1 className="text-5xl font-extrabold text-pink-600 mb-6 animate-bounce">
          🎉 정민님의 생일을 진심으로 축하합니다! 🎂
        </h1>

        <h2 className="text-2xl font-semibold mb-2">{result.label}</h2>
        <p className="text-lg mb-4">{result.description}</p>
        <p className="text-xl font-bold text-purple-600 mb-6">
          🎁 추천 선물: {result.gift}
        </p>

        <img
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzA3cGV1cHBvMnRnc3g3ZzR6ZWFiYTN3Z2t1cTFzdjh2cG0xaDJiZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/tIeCLkB8geYtW/giphy.gif"
          alt="생일축하 효과"
          className="mx-auto w-96 rounded-xl shadow-lg border-4 border-pink-300"
        />

        {aiText && (
          <div className="bg-yellow-100 p-4 mt-6 rounded-xl shadow">
            <p className="text-base text-gray-700 italic">
              ✨ AI 요정의 말: {aiText}
            </p>
          </div>
        )}
      </div>
    );
  }

  const currentQuestion = questions[step];

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold mb-4">{currentQuestion.question}</h1>
      <div className="space-y-2">
        {currentQuestion.options.map((opt, idx) => (
          <button
            key={idx}
            className="bg-pink-400 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded"
            onClick={() => handleAnswer(opt.type)}
          >
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
