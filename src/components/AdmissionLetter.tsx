import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Personality } from '../types';
import { PersonalityRadar } from './RadarChart';
import { Shield, Sparkles, ScrollText, Download, Users } from 'lucide-react';
import { toPng } from 'html-to-image';

interface AdmissionLetterProps {
  personality: Personality;
  onRestart: () => void;
  onViewAlumni: () => void;
}

export const AdmissionLetter: React.FC<AdmissionLetterProps> = ({ personality, onRestart, onViewAlumni }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (cardRef.current === null) return;
    
    try {
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        backgroundColor: '#0a0a0c',
      });
      const link = document.createElement('a');
      link.download = `HBBA-${personality.nameEn || personality.id}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to download card:', err);
    }
  };
  const houseColors = {
    Gryffindor: 'border-[#740001] bg-[#1a0000]',
    Ravenclaw: 'border-[#0e1a40] bg-[#050a1a]',
    Hufflepuff: 'border-[#ecb939] bg-[#1a1505]',
    Slytherin: 'border-[#1a472a] bg-[#051a0a]',
    Ministry: 'border-[#4a4a4a] bg-[#1a1a1a]',
    Azkaban: 'border-[#2a2a2a] bg-[#0a0a0a]',
  };

  const houseNames = {
    Gryffindor: '格兰芬多 (Gryffindor)',
    Ravenclaw: '拉文克劳 (Ravenclaw)',
    Hufflepuff: '赫奇帕奇 (Hufflepuff)',
    Slytherin: '斯莱特林 (Slytherin)',
    Ministry: '魔法部 (Ministry)',
    Azkaban: '阿兹卡班 (Azkaban)',
  };

  const houseMottos = {
    Gryffindor: '勇气、探索、无畏挑战',
    Ravenclaw: '智慧、博学、洞察本质',
    Hufflepuff: '勤奋、正直、持之以恒',
    Slytherin: '野心、权谋、追求卓越',
    Ministry: '秩序、公正、维护平衡',
    Azkaban: '混乱、禁忌、深渊凝视',
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className="max-w-2xl w-full"
    >
      <div 
        ref={cardRef}
        className={`relative p-8 border-4 rounded-lg shadow-2xl ${houseColors[personality.house]} overflow-hidden`}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
        
        <div className="relative z-10 text-center space-y-6">
          <div className="flex justify-center mb-4">
            <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 5, repeat: Infinity }}>
              <Shield className="w-16 h-16 text-[#e2d1a3]" />
            </motion.div>
          </div>

          <h1 className="text-3xl font-bold tracking-widest uppercase mb-8">分院结果</h1>

          <div className="text-left space-y-4 text-lg leading-relaxed">
            <div className="py-4 text-center">
              <span className="text-3xl font-bold text-[#e2d1a3] block mb-1">【 {houseNames[personality.house]} 】</span>
              <div className="text-xs tracking-[0.2em] text-[#e2d1a3]/60 mb-4 uppercase">{houseMottos[personality.house]}</div>
              <span className="text-xl font-semibold opacity-90">你的挖洞人格：{personality.name} {personality.nameEn && <span className="text-sm opacity-60 font-normal">({personality.nameEn})</span>}</span>
              <div className="text-sm opacity-70 mt-1">对应哈利波特人物：<span className="text-[#e2d1a3] font-medium">{personality.match}</span></div>
            </div>

            <div className="bg-black/30 p-4 rounded italic border border-[#e2d1a3]/20">
              {personality.quote}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="font-bold flex items-center gap-2 mb-2"><Sparkles className="w-4 h-4" /> 核心属性</h3>
                <PersonalityRadar data={personality.attributes} />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-[#e2d1a3]">优势：</h3>
                  <p className="text-sm opacity-80">{personality.advantages}</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#e2d1a3]">诅咒：</h3>
                  <p className="text-sm opacity-80">{personality.curses}</p>
                </div>
                <div>
                  <h3 className="font-bold text-[#e2d1a3]">推荐咒语：</h3>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {personality.recommendedSpells.map(spell => (
                      <span key={spell} className="px-2 py-1 bg-[#e2d1a3]/10 border border-[#e2d1a3]/30 rounded text-xs">{spell}</span>
                    ))}
                  </div>
                </div>

                {personality.bestTeammates && (
                  <div>
                    <h3 className="font-bold text-[#e2d1a3]">最佳队友：</h3>
                    <div className="space-y-2 mt-1">
                      {personality.bestTeammates.map((teammate, idx) => (
                        <div key={idx} className="text-xs bg-white/5 p-2 rounded border border-white/10">
                          <span className="font-bold text-[#e2d1a3]">{teammate.type}</span>: {teammate.synergy}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {personality.developmentStages && (
              <div className="mt-8 p-4 bg-black/20 rounded border border-[#e2d1a3]/10">
                <h3 className="font-bold text-[#e2d1a3] mb-4 flex items-center gap-2">
                  <ScrollText className="w-4 h-4" /> 成长阶段
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-[#e2d1a3]/70 uppercase tracking-tighter">初期：{personality.developmentStages.initial.name}</div>
                    <p className="text-[10px] leading-tight opacity-60">{personality.developmentStages.initial.description}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-[#e2d1a3]/70 uppercase tracking-tighter">中期：{personality.developmentStages.growth.name}</div>
                    <p className="text-[10px] leading-tight opacity-60">{personality.developmentStages.growth.description}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-[#e2d1a3]/70 uppercase tracking-tighter">后期：{personality.developmentStages.mature.name}</div>
                    <p className="text-[10px] leading-tight opacity-60">{personality.developmentStages.mature.description}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 pt-8 border-t border-[#e2d1a3]/20 flex flex-wrap gap-4 justify-between items-center">
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-[#e2d1a3] border border-[#e2d1a3]/30 rounded font-bold text-sm transition-colors"
                >
                  <Download className="w-4 h-4" /> 下载结果卡片
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onViewAlumni}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-[#e2d1a3] border border-[#e2d1a3]/30 rounded font-bold text-sm transition-colors"
                >
                  <Users className="w-4 h-4" /> 查看校友册
                </motion.button>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onRestart}
                className="flex items-center gap-2 px-4 py-2 bg-[#e2d1a3] text-[#0a0a0c] rounded font-bold text-sm"
              >
                <ScrollText className="w-4 h-4" /> 重新测试
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
