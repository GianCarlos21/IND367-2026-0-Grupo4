import React, { useState } from 'react';
import { ChevronLeft, Users, Clock, ArrowRight, Minus, Plus } from 'lucide-react';
import { MobileLayout, Card, Button } from '../components/Common';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

const ActivityScreen: React.FC = () => {
  const navigate = useNavigate();
  const [operadores, setOperadores] = useState(2);
  const [peones, setPeones] = useState(4);

  return (
    <MobileLayout>
      <div className="bg-white border-b border-gray-100 px-6 py-4 flex items-center gap-4 sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="text-blue-600 flex items-center gap-1 font-bold">
          <ChevronLeft size={20} />
          Volver
        </button>
        <h1 className="text-lg font-bold text-gray-900">Registro de Actividad</h1>
      </div>

      <div className="p-6 space-y-6">
        {/* Current Task */}
        <Card className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center overflow-hidden flex-shrink-0">
            <svg viewBox="0 0 100 100" className="w-14 h-14" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Ground/Excavation Pit */}
              <path d="M10 30 H90 V80 H10 Z" fill="#D97706" fillOpacity="0.1" />
              <path d="M10 30 V80 H90 V30" stroke="#92400E" strokeWidth="2" strokeLinejoin="round" />
              
              {/* Concrete Footing (Zapata) */}
              <rect x="25" y="60" width="50" height="15" rx="2" fill="#94A3B8" />
              <rect x="25" y="60" width="50" height="15" rx="2" stroke="#475569" strokeWidth="2" />
              
              {/* Column/Rebar (Acero) */}
              <rect x="45" y="20" width="10" height="40" fill="#64748B" />
              <path d="M48 20 V60 M52 20 V60" stroke="#1E293B" strokeWidth="1" strokeDasharray="2 2" />
              
              {/* Soil details */}
              <path d="M15 40 H25 M75 45 H85 M12 65 H20" stroke="#92400E" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">Tarea Actual</p>
            <h2 className="text-lg font-bold text-gray-900 leading-tight">Excavación de Zapatas</h2>
            <p className="text-xs text-gray-500">Sector Norte - Fase 1</p>
          </div>
        </Card>

        {/* Advance */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-900 font-bold">
            <div className="p-1 bg-blue-50 rounded text-blue-600">
              <ArrowRight size={16} />
            </div>
            <h3>Avance</h3>
          </div>
          
          <Card className="space-y-4">
            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
                Cantidad Ejecutada Hoy (m³)
              </label>
              <div className="relative">
                <input 
                  type="number" 
                  defaultValue="0.00"
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Plus size={16} />
                </div>
              </div>
            </div>

            <div className="pt-2">
              <div className="flex justify-between items-end mb-2">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Progreso Acumulado</p>
                  <p className="text-lg font-bold text-gray-900">130 <span className="text-sm text-gray-400 font-normal">/ 200 m³</span></p>
                </div>
                <span className="text-blue-600 font-bold">65%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '65%' }}
                  className="h-full bg-blue-600 rounded-full"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Resources */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-900 font-bold">
            <div className="p-1 bg-blue-50 rounded text-blue-600">
              <Users size={16} />
            </div>
            <h3>Recursos</h3>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="flex flex-col items-center gap-3">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Operadores</span>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setOperadores(Math.max(0, operadores - 1))}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600"
                >
                  <Minus size={16} />
                </button>
                <span className="text-xl font-bold">{operadores}</span>
                <button 
                  onClick={() => setOperadores(operadores + 1)}
                  className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white"
                >
                  <Plus size={16} />
                </button>
              </div>
            </Card>
            <Card className="flex flex-col items-center gap-3">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Peones</span>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setPeones(Math.max(0, peones - 1))}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600"
                >
                  <Minus size={16} />
                </button>
                <span className="text-xl font-bold">{peones}</span>
                <button 
                  onClick={() => setPeones(peones + 1)}
                  className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white"
                >
                  <Plus size={16} />
                </button>
              </div>
            </Card>
          </div>
        </div>

        {/* Time & Observations */}
        <Card className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-2">Hora Inicio</label>
              <div className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 flex items-center justify-between">
                <span className="font-bold text-gray-900">08:00 AM</span>
                <Clock size={16} className="text-gray-400" />
              </div>
            </div>
            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-2">Hora Fin</label>
              <div className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 flex items-center justify-between">
                <span className="font-bold text-gray-900">05:00 PM</span>
                <Clock size={16} className="text-gray-400" />
              </div>
            </div>
          </div>
          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-2">Observaciones</label>
            <textarea 
              placeholder="Escriba aquí cualquier novedad o impedimento..."
              className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 h-24 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </Card>

        {/* CTA */}
        <div className="pt-4">
          <Button onClick={() => navigate('/evidence')}>
            Siguiente: Evidencias
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default ActivityScreen;
