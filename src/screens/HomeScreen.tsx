import React, { useState } from 'react';
import { Bell, ChevronDown, Plus, Calendar, Clock, PlayCircle } from 'lucide-react';
import { PROJECTS, SECTORS, LEVELS, TASKS } from '../data/mockData';
import { MobileLayout, Card, Button } from '../components/Common';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const [selectedSector, setSelectedSector] = useState('A');
  const [selectedLevel, setSelectedLevel] = useState('Piso 1');

  return (
    <MobileLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop" 
              alt="User" 
              className="w-12 h-12 rounded-full border-2 border-white shadow-md object-cover"
              referrerPolicy="no-referrer"
            />
            <div>
              <p className="text-sm text-gray-500">Buen día,</p>
              <h1 className="text-lg font-bold text-gray-900">Ing. Juan Pérez</h1>
            </div>
          </div>
          <button className="p-2 bg-white rounded-full shadow-sm border border-gray-100 relative">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
        </div>

        {/* Project Selector */}
        <Card className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
              <Plus size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">Proyecto Actual</p>
              <p className="font-bold text-gray-900">{PROJECTS[0].name}</p>
            </div>
          </div>
          <ChevronDown size={20} className="text-gray-400" />
        </Card>

        {/* Date/Time */}
        <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>Lunes, 24 de Mayo</span>
          </div>
          <span className="text-gray-300">•</span>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>08:30 AM</span>
          </div>
        </div>

        {/* Sectors */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-gray-900">Seleccionar Sector</h2>
            <Plus size={20} className="text-blue-600" />
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {SECTORS.map((sector) => (
              <motion.div 
                key={sector.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedSector(sector.id)}
                className={`flex-shrink-0 w-28 h-28 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all ${
                  selectedSector === sector.id 
                    ? 'border-blue-600 bg-blue-50 text-blue-600' 
                    : 'border-gray-100 bg-white text-gray-400'
                }`}
              >
                <div className={`p-3 rounded-full ${selectedSector === sector.id ? 'bg-white shadow-sm' : 'bg-gray-50'}`}>
                  <sector.icon size={24} />
                </div>
                <span className="text-xs font-bold">{sector.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Levels */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-gray-900">Nivel</h2>
            <Plus size={20} className="text-blue-600" />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {LEVELS.map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  selectedLevel === level 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-white text-gray-500 border border-gray-100'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Tasks */}
        <div className="space-y-3">
          {TASKS.map((task) => (
            <Card key={task.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gray-50 rounded-xl text-gray-400">
                  <task.icon size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">{task.name}</h3>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{task.category}</p>
                </div>
              </div>
              <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${
                task.status === 'EN PROCESO' 
                  ? 'bg-orange-50 text-orange-600' 
                  : 'bg-gray-100 text-gray-400'
              }`}>
                {task.status}
              </span>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-4">
          <Button onClick={() => navigate('/activity')}>
            <PlayCircle size={20} />
            Iniciar Reporte
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default HomeScreen;
