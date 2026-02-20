import React from 'react';
import { ChevronLeft, Camera, Info, X, MapPin, Clock, ArrowRight } from 'lucide-react';
import { MobileLayout, Card, Button } from '../components/Common';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ZapataConcretoIllustration, ColumnaArmadoIllustration } from '../components/ConstructionIllustrations';

const EvidenceScreen: React.FC = () => {
  const navigate = useNavigate();

  const evidences = [
    {
      id: 1,
      Illustration: ZapataConcretoIllustration,
      lat: '19.4326° N',
      lng: '99.1332° W',
      time: '24 May 2024, 09:45 AM',
      desc: 'Vaciado de concreto en zapata central finalizado conforme a plano.'
    },
    {
      id: 2,
      Illustration: ColumnaArmadoIllustration,
      lat: '19.4327° N',
      lng: '99.1335° W',
      time: '24 May 2024, 10:12 AM',
      desc: 'Armado de columna C-4 con varilla de 3/4" completado.'
    }
  ];

  return (
    <MobileLayout>
      <div className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="text-gray-900">
            <ChevronLeft size={24} />
          </button>
          <div>
            <h1 className="text-lg font-bold text-gray-900">Carga de Evidencias</h1>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Paso 3 de 5</p>
          </div>
        </div>
        <Info size={20} className="text-blue-600" />
      </div>

      <div className="p-6 space-y-8">
        {/* Progress Dots */}
        <div className="flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all ${i === 3 ? 'w-8 bg-blue-600' : 'w-2 bg-gray-200'}`} />
          ))}
        </div>

        {/* Upload Area */}
        <div className="border-2 border-dashed border-blue-200 rounded-3xl p-8 flex flex-col items-center text-center space-y-4 bg-blue-50/30">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <Camera size={32} />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Tomar o Subir Foto</h3>
            <p className="text-sm text-gray-500">Toca para capturar evidencia del avance</p>
          </div>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold shadow-md active:scale-95 transition-transform">
            Capturar
          </button>
        </div>

        {/* Gallery */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-gray-900">Evidencias capturadas (2)</h2>
            <span className="text-[10px] font-bold text-gray-400 uppercase">JPG, PNG permitidos</span>
          </div>

          {evidences.map((ev) => (
            <Card key={ev.id} className="space-y-4">
              <div className="flex gap-4">
                <div className="relative flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border border-gray-100">
                  <ev.Illustration />
                  <button className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900/80 text-white rounded-full flex items-center justify-center z-10">
                    <X size={14} />
                  </button>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[10px] text-gray-500 font-bold">
                    <MapPin size={12} className="text-blue-600" />
                    <span>{ev.lat}, {ev.lng}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-gray-500 font-bold">
                    <Clock size={12} className="text-blue-600" />
                    <span>{ev.time}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-bold uppercase tracking-wider">
                    <div className="w-1 h-1 bg-emerald-600 rounded-full" />
                    GEO-ETIQUETADO
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-900 uppercase tracking-wider">Descripción</label>
                <div className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-600 leading-relaxed">
                  {ev.desc}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-4">
          <Button onClick={() => navigate('/summary')}>
            Guardar y Revisar
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default EvidenceScreen;
