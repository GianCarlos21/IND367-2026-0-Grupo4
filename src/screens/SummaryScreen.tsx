import React, { useState } from 'react';
import { ChevronLeft, FileText, Image as ImageIcon, ShieldCheck, PenTool, Trash2, Send } from 'lucide-react';
import { MobileLayout, Card, Button } from '../components/Common';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ZapataConcretoIllustration, ColumnaArmadoIllustration } from '../components/ConstructionIllustrations';

const SummaryScreen: React.FC = () => {
  const navigate = useNavigate();
  const [quality1, setQuality1] = useState(true);
  const [quality2, setQuality2] = useState(false);

  return (
    <MobileLayout>
      <div className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="text-blue-600 flex items-center gap-1 font-bold">
          <ChevronLeft size={20} />
          Atrás
        </button>
        <div className="text-center">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Paso 4 de 5</p>
        </div>
        <button onClick={() => navigate('/evidence')} className="text-blue-600 font-bold">Editar</button>
      </div>

      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-900">Resumen Final</h1>
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">Revise los datos antes de enviar</p>
            <span className="text-blue-600 font-bold text-sm">80% Listo</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '80%' }}
              className="h-full bg-blue-600 rounded-full"
            />
          </div>
        </div>

        {/* Report Data */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-900 font-bold">
            <FileText size={18} className="text-blue-600" />
            <h3>Datos del Reporte</h3>
          </div>
          <Card className="space-y-4">
            <DataRow label="Proyecto" value="Edificio Miraflores" />
            <DataRow label="Supervisor" value="Ing. Juan Pérez" />
            <DataRow label="Ubicación" value="Lima, Perú" isLocation />
            <DataRow label="Fecha" value="24 May 2024, 14:30" />
          </Card>
        </div>

        {/* Evidence Preview */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-gray-900 font-bold">
              <ImageIcon size={18} className="text-blue-600" />
              <h3>Evidencia Adjunta</h3>
            </div>
            <span className="text-xs text-gray-400 font-bold">2 archivos</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="w-full aspect-square rounded-2xl overflow-hidden border border-gray-100">
                <ZapataConcretoIllustration />
              </div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">CIMENTACIÓN</p>
            </div>
            <div className="space-y-2">
              <div className="w-full aspect-square rounded-2xl overflow-hidden border border-gray-100">
                <ColumnaArmadoIllustration />
              </div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">VISTA GENERAL</p>
            </div>
          </div>
        </div>

        {/* Quality Control */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-900 font-bold">
            <ShieldCheck size={18} className="text-blue-600" />
            <h3>Control de Calidad</h3>
          </div>
          <Card className="space-y-4">
            <QualityRow 
              title="Normativa Estructural" 
              subtitle="NMX-C-403 Vigente" 
              active={quality1} 
              onToggle={() => setQuality1(!quality1)} 
            />
            <QualityRow 
              title="Seguridad e Higiene" 
              subtitle="Uso de EPP completo" 
              active={quality2} 
              onToggle={() => setQuality2(!quality2)} 
            />
          </Card>
        </div>

        {/* Signature */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-gray-900 font-bold">
              <PenTool size={18} className="text-blue-600" />
              <h3>Firma Autorizada</h3>
            </div>
            <button className="flex items-center gap-1 text-[10px] font-bold text-blue-600 uppercase tracking-wider">
              <Trash2 size={12} />
              Limpiar
            </button>
          </div>
          <div className="bg-white border border-gray-100 rounded-3xl h-48 flex items-center justify-center relative overflow-hidden">
            <p className="text-gray-300 text-sm font-medium z-0">Firme dentro del recuadro</p>
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 400 200">
              <path 
                d="M50,150 Q100,50 150,150 T250,150 T350,150" 
                fill="none" 
                stroke="#2563eb" 
                strokeWidth="3" 
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="text-[10px] text-gray-400 text-center leading-relaxed px-4">
            Al firmar, usted certifica que la inspección se realizó siguiendo los protocolos técnicos y de seguridad establecidos.
          </p>
        </div>

        {/* CTA */}
        <div className="pt-4">
          <Button onClick={() => navigate('/dashboard')}>
            <ShieldCheck size={20} />
            Enviar Reporte Oficial
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
};

const DataRow: React.FC<{ label: string; value: string; isLocation?: boolean }> = ({ label, value, isLocation }) => (
  <div className="flex justify-between items-center">
    <span className="text-sm text-gray-400">{label}</span>
    <div className="flex items-center gap-1 text-sm font-bold text-gray-900">
      {isLocation && <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />}
      {value}
    </div>
  </div>
);

const QualityRow: React.FC<{ title: string; subtitle: string; active: boolean; onToggle: () => void }> = ({ title, subtitle, active, onToggle }) => (
  <div className="flex justify-between items-center">
    <div>
      <p className="text-sm font-bold text-gray-900">{title}</p>
      <p className="text-[10px] text-gray-400 font-bold uppercase">{subtitle}</p>
    </div>
    <button 
      onClick={onToggle}
      className={`flex items-center rounded-full p-1 w-24 transition-colors ${active ? 'bg-emerald-500' : 'bg-gray-100'}`}
    >
      <div className={`flex-1 text-[10px] font-bold text-center ${active ? 'text-white' : 'text-gray-400'}`}>CUMPLE</div>
      <div className={`flex-1 text-[10px] font-bold text-center ${!active ? 'text-gray-400' : 'text-white'}`}>NO</div>
    </button>
  </div>
);

export default SummaryScreen;
