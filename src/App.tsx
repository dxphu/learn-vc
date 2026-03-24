import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Volume2, ArrowLeft, Trophy, Play, RotateCcw, Home } from "lucide-react";
import { themes, Theme, Word } from "./data/vocabulary";

type GameState = "menu" | "playing" | "result";

export default function App() {
  const [gameState, setGameState] = useState<GameState>("menu");
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [options, setOptions] = useState<Word[]>([]);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = useCallback((text: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = 0.8;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  const generateOptions = useCallback((correctWord: Word, allWords: Word[]) => {
    const otherWords = allWords.filter((w) => w.en !== correctWord.en);
    const shuffledOthers = [...otherWords].sort(() => Math.random() - 0.5);
    const selectedOptions = [correctWord, ...shuffledOthers.slice(0, 3)];
    return selectedOptions.sort(() => Math.random() - 0.5);
  }, []);

  const startTheme = (theme: Theme) => {
    setSelectedTheme(theme);
    setCurrentWordIndex(0);
    setScore(0);
    setGameState("playing");
    const firstWord = theme.words[0];
    setOptions(generateOptions(firstWord, theme.words));
    setTimeout(() => speak(firstWord.en), 500);
  };

  const handleAnswer = (word: Word) => {
    if (feedback) return;

    const correctWord = selectedTheme!.words[currentWordIndex];
    if (word.en === correctWord.en) {
      setScore((s) => s + 1);
      setFeedback("correct");
    } else {
      setFeedback("wrong");
    }

    setTimeout(() => {
      setFeedback(null);
      if (currentWordIndex < selectedTheme!.words.length - 1) {
        const nextIndex = currentWordIndex + 1;
        setCurrentWordIndex(nextIndex);
        const nextWord = selectedTheme!.words[nextIndex];
        setOptions(generateOptions(nextWord, selectedTheme!.words));
        speak(nextWord.en);
      } else {
        setGameState("result");
      }
    }, 1500);
  };

  const resetGame = () => {
    setGameState("menu");
    setSelectedTheme(null);
    setScore(0);
  };

  return (
    <div className="min-h-screen bg-[#FDFCF0] text-[#2D2D2D] font-sans selection:bg-yellow-200">
      <AnimatePresence mode="wait">
        {gameState === "menu" && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-6 max-w-md mx-auto"
          >
            <header className="text-center mb-10">
              <motion.h1 
                className="text-4xl font-black text-[#FF6B6B] mb-2 tracking-tight"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ENGLISH FUN
              </motion.h1>
              <p className="text-gray-500 font-medium uppercase tracking-widest text-xs">Listen & Guess</p>
            </header>

            <div className="grid grid-cols-2 gap-4">
              {themes.map((theme) => (
                <motion.button
                  key={theme.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => startTheme(theme)}
                  className="bg-white border-2 border-[#2D2D2D] rounded-2xl p-4 shadow-[4px_4px_0px_0px_rgba(45,45,45,1)] flex flex-col items-center gap-2 transition-all hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                  <span className="text-4xl">{theme.icon}</span>
                  <span className="font-bold text-sm">{theme.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {gameState === "playing" && selectedTheme && (
          <motion.div
            key="playing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-6 max-w-md mx-auto h-screen flex flex-col"
          >
            <div className="flex items-center justify-between mb-8">
              <button onClick={resetGame} className="p-2 hover:bg-gray-100 rounded-full">
                <ArrowLeft size={24} />
              </button>
              <div className="bg-white border-2 border-[#2D2D2D] px-4 py-1 rounded-full font-bold shadow-[2px_2px_0px_0px_rgba(45,45,45,1)]">
                {currentWordIndex + 1} / {selectedTheme.words.length}
              </div>
              <div className="flex items-center gap-1 font-bold text-[#FF6B6B]">
                <Trophy size={20} />
                {score}
              </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => speak(selectedTheme.words[currentWordIndex].en)}
                className={`w-32 h-32 rounded-full border-4 border-[#2D2D2D] flex items-center justify-center shadow-[8px_8px_0px_0px_rgba(45,45,45,1)] transition-colors ${
                  isSpeaking ? "bg-yellow-300" : "bg-white"
                }`}
              >
                <Volume2 size={48} className={isSpeaking ? "animate-pulse" : ""} />
              </motion.button>

              <div className="grid grid-cols-2 gap-4 w-full">
                {options.map((option, idx) => (
                  <motion.button
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => handleAnswer(option)}
                    disabled={!!feedback}
                    className={`aspect-square bg-white border-2 border-[#2D2D2D] rounded-2xl p-4 shadow-[4px_4px_0px_0px_rgba(45,45,45,1)] flex flex-col items-center justify-center gap-2 transition-all ${
                      feedback === "correct" && option.en === selectedTheme.words[currentWordIndex].en
                        ? "bg-green-100 border-green-600"
                        : feedback === "wrong" && option.en !== selectedTheme.words[currentWordIndex].en
                        ? "opacity-50"
                        : ""
                    }`}
                  >
                    <span className="text-5xl mb-2">{option.emoji}</span>
                    <span className="font-bold text-lg">{option.en}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            <AnimatePresence>
              {feedback && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`fixed bottom-10 left-1/2 -translate-x-1/2 px-8 py-4 rounded-2xl border-2 border-[#2D2D2D] font-black text-xl shadow-[4px_4px_0px_0px_rgba(45,45,45,1)] ${
                    feedback === "correct" ? "bg-green-400" : "bg-red-400"
                  }`}
                >
                  {feedback === "correct" ? "EXCELLENT! 🎉" : "TRY AGAIN! 🌈"}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {gameState === "result" && selectedTheme && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 max-w-md mx-auto h-screen flex flex-col items-center justify-center text-center"
          >
            <div className="mb-8 relative">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-8xl"
              >
                🏆
              </motion.div>
            </div>
            
            <h2 className="text-4xl font-black mb-2">WELL DONE!</h2>
            <p className="text-gray-500 mb-8 font-medium">You finished the {selectedTheme.name} theme!</p>
            
            <div className="bg-white border-4 border-[#2D2D2D] p-8 rounded-3xl shadow-[8px_8px_0px_0px_rgba(45,45,45,1)] mb-10 w-full">
              <div className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-2">Final Score</div>
              <div className="text-6xl font-black text-[#FF6B6B]">
                {score} / {selectedTheme.words.length}
              </div>
            </div>

            <div className="flex gap-4 w-full">
              <button
                onClick={() => startTheme(selectedTheme)}
                className="flex-1 bg-white border-2 border-[#2D2D2D] py-4 rounded-2xl font-bold shadow-[4px_4px_0px_0px_rgba(45,45,45,1)] flex items-center justify-center gap-2 hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                <RotateCcw size={20} /> Replay
              </button>
              <button
                onClick={resetGame}
                className="flex-1 bg-[#FF6B6B] text-white border-2 border-[#2D2D2D] py-4 rounded-2xl font-bold shadow-[4px_4px_0px_0px_rgba(45,45,45,1)] flex items-center justify-center gap-2 hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                <Home size={20} /> Menu
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
