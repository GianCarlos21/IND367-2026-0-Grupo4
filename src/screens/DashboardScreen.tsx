import React from 'react';
import { ChevronLeft, Calendar, TrendingUp, AlertTriangle, Download, ArrowUpRight } from 'lucide-react';
import { MobileLayout, Card, Button } from '../components/Common';
import { KPIS, ALERTS } from '../data/mockData';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

const DashboardScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/')} className="text-blue-600">
            <ChevronLeft size={24} />
          </button>
          <div>
            <h1 className="text-lg font-bold text-gray-900">Panel de Control</h1>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Edificio Miraflores • Fase 1</p>
          </div>
        </div>
        <Calendar size={20} className="text-gray-400" />
      </div>

      <div className="p-6 space-y-6">
        {/* KPI Grid */}
        <div className="grid grid-cols-2 gap-4">
          {KPIS.map((kpi, idx) => (
            <Card key={idx} className="space-y-3">
              <div className="flex justify-between items-start">
                <div className={`p-2 rounded-lg ${kpi.bgColor} ${kpi.color}`}>
                  <kpi.icon size={18} />
                </div>
                {kpi.change && (
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                    {kpi.change}
                  </span>
                )}
                {kpi.target && (
                  <span className="text-[10px] font-bold text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded">
                    {kpi.target}
                  </span>
                )}
              </div>
              <div>
                <p className={`${kpi.value.length > 8 ? 'text-lg' : 'text-2xl'} font-bold text-gray-900`}>{kpi.value}</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{kpi.label}</p>
              </div>
              {kpi.label === 'Avance Físico' && (
                <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 w-[85%]" />
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Chart Section */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-gray-900 uppercase text-xs tracking-widest">Programado vs Ejecutado</h2>
            <div className="flex gap-3 text-[10px] font-bold text-gray-400">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-gray-200" /> PROG.
              </div>
              <div className="flex items-center gap-1 text-blue-600">
                <div className="w-2 h-2 rounded-full bg-blue-600" /> EJEC.
              </div>
            </div>
          </div>
          <Card className="space-y-6">
            <ChartBar label="CIMENTACIÓN" prog={100} ejec={100} />
            <ChartBar label="ESTRUCTURA" prog={100} ejec={92} />
            <ChartBar label="INSTALACIONES" prog={60} ejec={45} />
          </Card>
        </div>

        {/* Alerts */}
        <div className="space-y-3">
          <h2 className="font-bold text-gray-900 uppercase text-xs tracking-widest">Alertas Recientes</h2>
          <div className="space-y-3">
            {ALERTS.map((alert) => (
              <div 
                key={alert.id}
                className={`p-4 rounded-2xl border flex items-center gap-4 ${
                  alert.type === 'error' ? 'bg-red-50 border-red-100' : 'bg-orange-50 border-orange-100'
                }`}
              >
                <div className={`p-2 rounded-xl bg-white shadow-sm ${
                  alert.type === 'error' ? 'text-red-500' : 'text-orange-500'
                }`}>
                  <AlertTriangle size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-sm">{alert.title}</h4>
                  <p className="text-[10px] text-gray-500 font-medium">{alert.subtitle}</p>
                </div>
                <span className="text-[10px] font-bold text-gray-400">{alert.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Export Button */}
        <div className="pt-4">
          <Button onClick={() => alert('Exportando reporte...')}>
            <Download size={20} />
            Exportar Reporte General
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
};

const ChartBar: React.FC<{ label: string; prog: number; ejec: number }> = ({ label, prog, ejec }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center text-[10px] font-bold">
      <span className="text-gray-400 uppercase tracking-widest">{label}</span>
      <span className="text-blue-600">{ejec}%</span>
    </div>
    <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-gray-200" 
        style={{ width: `${prog}%` }} 
      />
      <div 
        className="absolute inset-0 bg-blue-600" 
        style={{ width: `${ejec}%` }} 
      />
    </div>
  </div>
);

export default DashboardScreen;
