import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { personalities } from '../data/personalities';
import { motion } from 'motion/react';
import { ArrowLeft, Users } from 'lucide-react';

interface AlumniDirectoryProps {
  onBack: () => void;
}

export const AlumniDirectory: React.FC<AlumniDirectoryProps> = ({ onBack }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = window.innerWidth;
    const height = window.innerHeight - 100;

    const svg = d3.select(svgRef.current)
      .attr('viewBox', [0, 0, width, height]);

    svg.selectAll('*').remove();

    const nodes = personalities.map(p => ({
      id: p.id,
      name: p.name,
      match: p.match,
      house: p.house,
    }));

    const links: any[] = [];
    personalities.forEach(p => {
      p.bestTeammates?.forEach(teammate => {
        const target = personalities.find(other => other.name === teammate.type);
        if (target) {
          links.push({ source: p.id, target: target.id, synergy: teammate.synergy });
        }
      });
    });

    const simulation = d3.forceSimulation(nodes as any)
      .force('link', d3.forceLink(links).id((d: any) => d.id).distance(220))
      .force('charge', d3.forceManyBody().strength(-600))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(70));

    const houseColors: any = {
      Gryffindor: '#740001',
      Ravenclaw: '#0e1a40',
      Hufflepuff: '#ecb939',
      Slytherin: '#1a472a',
      Ministry: '#4a4a4a',
      Azkaban: '#2a2a2a'
    };

    const link = svg.append('g')
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke-width', 2)
      .attr('stroke-opacity', 0.4)
      .attr('stroke', (d: any) => {
        const sourceHouse = personalities.find(p => p.id === (typeof d.source === 'string' ? d.source : d.source.id))?.house;
        return houseColors[sourceHouse || 'Gryffindor'];
      });

    const node = svg.append('g')
      .selectAll('g')
      .data(nodes)
      .join('g')
      .attr('cursor', 'grab')
      .call(d3.drag<any, any>()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));

    node.append('circle')
      .attr('r', 45)
      .attr('fill', d => houseColors[d.house])
      .attr('stroke', '#e2d1a3')
      .attr('stroke-width', 2)
      .attr('class', 'drop-shadow-lg');

    node.append('text')
      .text(d => d.match)
      .attr('x', 0)
      .attr('y', 5)
      .attr('text-anchor', 'middle')
      .attr('fill', '#ffffff')
      .attr('font-size', '10px')
      .attr('font-weight', 'bold')
      .attr('class', 'pointer-events-none');

    node.append('text')
      .text(d => d.name)
      .attr('x', 0)
      .attr('y', 65)
      .attr('text-anchor', 'middle')
      .attr('fill', '#e2d1a3')
      .attr('font-size', '12px')
      .attr('font-weight', 'bold')
      .attr('class', 'pointer-events-none');

    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node
        .attr('transform', (d: any) => `translate(${d.x},${d.y})`);
    });

    function dragstarted(event: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
      d3.select(this).attr('cursor', 'grabbing');
    }

    function dragged(event: any) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: any) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
      d3.select(this).attr('cursor', 'grab');
    }

    return () => simulation.stop();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[#0a0a0c] z-50 flex flex-col p-6 overflow-hidden"
    >
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[#e2d1a3] hover:opacity-80 transition-opacity bg-white/5 px-4 py-2 rounded-lg border border-[#e2d1a3]/20"
        >
          <ArrowLeft className="w-5 h-5" /> 返回
        </button>
        <h1 className="text-2xl font-bold text-[#e2d1a3] flex items-center gap-3">
          <Users className="w-8 h-8" /> 霍格沃茨校友册 <span className="text-sm font-normal opacity-60">(23种人格关系网)</span>
        </h1>
        <div className="w-24" />
      </div>
      
      <div className="flex-1 bg-black/40 rounded-2xl border border-[#e2d1a3]/20 relative overflow-hidden">
        <svg ref={svgRef} className="w-full h-full" />
        
        <div className="absolute bottom-6 left-6 bg-black/80 p-5 rounded-xl border border-[#e2d1a3]/20 text-xs space-y-3 backdrop-blur-sm">
          <div className="font-bold text-[#e2d1a3] border-b border-[#e2d1a3]/20 pb-2 mb-2">学院图例</div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#740001]" /> 格兰芬多</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#0e1a40]" /> 拉文克劳</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#ecb939]" /> 赫奇帕奇</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#1a472a]" /> 斯莱特林</div>
          </div>
          <div className="text-[#e2d1a3]/60 mt-3 italic border-t border-[#e2d1a3]/10 pt-2">
            * 连线表示最佳队友关系，颜色代表发起方学院
          </div>
        </div>
        <div className="absolute bottom-6 right-6 flex flex-col items-end gap-2">
          <a 
            href="https://ko-fi.com/iceflake0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-black/80 hover:bg-[#e2d1a3]/10 p-3 rounded-xl border border-[#e2d1a3]/20 text-xs backdrop-blur-sm transition-all flex items-center gap-2 group"
          >
            <span className="text-[#e2d1a3]/60 group-hover:text-[#e2d1a3]">Support builder</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
