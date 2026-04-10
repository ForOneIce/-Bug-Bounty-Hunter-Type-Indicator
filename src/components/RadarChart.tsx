import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

interface RadarChartProps {
  data: {
    curiosity: number;
    depth: number;
    systemic: number;
    ambition: number;
    exploration: number;
    diligence: number;
  };
}

export const PersonalityRadar: React.FC<RadarChartProps> = ({ data }) => {
  const chartData = [
    { subject: '好奇心', A: data.curiosity, fullMark: 100 },
    { subject: '深度', A: data.depth, fullMark: 100 },
    { subject: '系统思维', A: data.systemic, fullMark: 100 },
    { subject: '野心', A: data.ambition, fullMark: 100 },
    { subject: '探索力', A: data.exploration, fullMark: 100 },
    { subject: '勤勉', A: data.diligence, fullMark: 100 },
  ];

  return (
    <div className="w-full h-64 mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
          <PolarGrid stroke="#4a3a2d" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#e2d1a3', fontSize: 12 }} />
          <Radar
            name="Personality"
            dataKey="A"
            stroke="#e2d1a3"
            fill="#e2d1a3"
            fillOpacity={0.4}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
