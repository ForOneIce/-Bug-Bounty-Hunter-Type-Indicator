/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MagicalBackground } from './components/MagicalBackground';
import { SortingHat } from './components/SortingHat';
import { AdmissionLetter } from './components/AdmissionLetter';
import { AlumniDirectory } from './components/AlumniDirectory';
import { questions } from './data/questions';
import { personalities } from './data/personalities';
import { Dimension, Personality } from './types';
import { Wand2, ChevronRight, AlertTriangle, Users } from 'lucide-react';

type AppState = 'intro' | 'testing' | 'thinking' | 'result' | 'alumni';

export default function App() {
  const [state, setState] = useState<AppState>('intro');
  const [lastState, setLastState] = useState<AppState>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<Record<Dimension, number>>({
    exploration: 0,
    wisdom: 0,
    diligence: 0,
    ambition: 0,
    technique: 0,
    stage: 0,
    unethical: 0
  });

  const handleStart = () => {
    setState('testing');
    setCurrentQuestionIndex(0);
    setScores({
      exploration: 0,
      wisdom: 0,
      diligence: 0,
      ambition: 0,
      technique: 0,
      stage: 0,
      unethical: 0
    });
  };

  const handleAnswer = (optionScores: { dimension: Dimension; value: number }[]) => {
    const newScores = { ...scores };
    optionScores.forEach(s => {
      newScores[s.dimension] += s.value;
    });
    setScores(newScores);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setState('thinking');
      setTimeout(() => {
        setState('result');
      }, 3000);
    }
  };

  const resultPersonality = useMemo(() => {
    if (state !== 'result') return null;

    // Azkaban check (Easter egg)
    if (scores.unethical >= 4) {
      const azkabanOptions = personalities.filter(p => p.house === 'Azkaban');
      return azkabanOptions[Math.floor(Math.random() * azkabanOptions.length)];
    }

    // Determine house based on highest score
    const dimensions: { dim: Dimension; score: number }[] = [
      { dim: 'exploration', score: scores.exploration },
      { dim: 'wisdom', score: scores.wisdom },
      { dim: 'diligence', score: scores.diligence },
      { dim: 'ambition', score: scores.ambition }
    ];

    dimensions.sort((a, b) => b.score - a.score);
    const topDim = dimensions[0].dim;

    const houseMap: Record<string, string> = {
      exploration: 'Gryffindor',
      wisdom: 'Ravenclaw',
      diligence: 'Hufflepuff',
      ambition: 'Slytherin'
    };

    const targetHouse = houseMap[topDim];
    const housePersonalities = personalities.filter(p => p.house === targetHouse);
    
    // Deterministic matching: Find the personality with the closest attribute profile
    // Map scores to personality attributes
    // User: wisdom -> depth/systemic, exploration -> curiosity/exploration, ambition -> ambition, diligence -> diligence
    const userProfile = {
      curiosity: scores.exploration * 10,
      exploration: scores.exploration * 10,
      depth: scores.wisdom * 10,
      systemic: scores.wisdom * 10,
      ambition: scores.ambition * 10,
      diligence: scores.diligence * 10
    };

    let bestMatch = housePersonalities[0];
    let minDistance = Infinity;

    housePersonalities.forEach(p => {
      const distance = Math.sqrt(
        Math.pow(userProfile.curiosity - p.attributes.curiosity, 2) +
        Math.pow(userProfile.exploration - p.attributes.exploration, 2) +
        Math.pow(userProfile.depth - p.attributes.depth, 2) +
        Math.pow(userProfile.systemic - p.attributes.systemic, 2) +
        Math.pow(userProfile.ambition - p.attributes.ambition, 2) +
        Math.pow(userProfile.diligence - p.attributes.diligence, 2)
      );

      if (distance < minDistance) {
        minDistance = distance;
        bestMatch = p;
      }
    });

    return bestMatch;
  }, [state, scores]);

  return (
    <MagicalBackground>
      <AnimatePresence mode="wait">
        {state === 'intro' && (
          <motion.div 
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center space-y-8 max-w-xl"
          >
            <div className="flex justify-center w-full">
              <SortingHat />
            </div>
            <h1 className="text-4xl font-bold tracking-tighter text-[#e2d1a3]">
              漏洞赏金猎人分院帽<br/>
              <span className="text-2xl opacity-80">Bug Bounty Hunter Type Indicator</span>
            </h1>
            <p className="text-lg opacity-70 leading-relaxed">
              “戴上我，让我看透你的挖洞之魂。”
            </p>
            <div className="flex flex-col gap-4 mx-auto">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(226,209,163,0.2)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStart}
                className="px-12 py-4 bg-[#e2d1a3] text-[#0a0a0c] rounded-full font-bold text-xl flex items-center justify-center gap-3"
              >
                <Wand2 className="w-6 h-6" /> 开始分院
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setLastState('intro');
                  setState('alumni');
                }}
                className="px-8 py-3 bg-white/5 text-[#e2d1a3] border border-[#e2d1a3]/30 rounded-full font-bold text-lg flex items-center gap-3 justify-center transition-colors hover:bg-white/10"
              >
                <Users className="w-5 h-5" /> 查看校友册
              </motion.button>
            </div>
          </motion.div>
        )}

        {state === 'testing' && (
          <motion.div 
            key="testing"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-2xl space-y-8"
          >
            <div className="flex justify-between items-center text-sm opacity-50 mb-4">
              <span>问题 {currentQuestionIndex + 1} / {questions.length}</span>
              <div className="h-1 bg-[#e2d1a3]/20 w-48 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-[#e2d1a3]" 
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            <h2 className="text-2xl font-medium leading-snug">
              {questions[currentQuestionIndex].text}
            </h2>

            <div className="grid grid-cols-1 gap-4">
              {questions[currentQuestionIndex].options.map((opt, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ x: 10, backgroundColor: "rgba(226,209,163,0.1)" }}
                  onClick={() => handleAnswer(opt.scores)}
                  className="p-6 text-left border border-[#e2d1a3]/20 rounded-xl flex justify-between items-center group transition-colors"
                >
                  <span className="text-lg">{opt.text}</span>
                  <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {state === 'thinking' && (
          <motion.div 
            key="thinking"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center space-y-8"
          >
            <div className="flex justify-center w-full">
              <SortingHat isThinking />
            </div>
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-2xl italic"
            >
              “难办，太难办了... 让我仔细看看...”
            </motion.div>
          </motion.div>
        )}

        {state === 'result' && resultPersonality && (
          <motion.div 
            key="result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full flex flex-col items-center"
          >
            {scores.unethical >= 4 && (
              <div className="mb-6 flex items-center gap-2 text-red-500 bg-red-500/10 px-4 py-2 rounded-full border border-red-500/20 animate-pulse">
                <AlertTriangle className="w-5 h-5" />
                <span>阿兹卡班预警：嗅到了腐烂的气味...</span>
              </div>
            )}
            <AdmissionLetter 
              personality={resultPersonality} 
              onRestart={() => setState('intro')} 
              onViewAlumni={() => {
                setLastState('result');
                setState('alumni');
              }}
            />
          </motion.div>
        )}

        {state === 'alumni' && (
          <AlumniDirectory onBack={() => setState(lastState)} />
        )}
      </AnimatePresence>
    </MagicalBackground>
  );
}

