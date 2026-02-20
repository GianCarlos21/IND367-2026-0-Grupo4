import { 
  Building2, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  HardHat, 
  Users, 
  Camera, 
  FileText, 
  LayoutDashboard, 
  Settings, 
  Map as MapIcon,
  Construction,
  Layers,
  Zap
} from 'lucide-react';

export const PROJECTS = [
  { id: '1', name: 'Edificio Miraflores' },
  { id: '2', name: 'Residencial San Isidro' },
];

export const SECTORS = [
  { id: 'A', name: 'Torre A', icon: Building2 },
  { id: 'B', name: 'Torre B', icon: Building2 },
  { id: 'S', name: 'Sótanos', icon: LayoutDashboard },
];

export const LEVELS = ['Piso 1', 'Piso 2', 'Piso 3', 'Azotea'];

export const TASKS = [
  {
    id: 't1',
    name: 'Acero en columnas',
    category: 'CIMENTACIÓN Y ESTRUCTURA',
    status: 'PENDIENTE',
    icon: Construction,
  },
  {
    id: 't2',
    name: 'Vaciado de losa',
    category: 'ACABADOS Y OTROS',
    status: 'EN PROCESO',
    icon: Layers,
  },
  {
    id: 't3',
    name: 'Instalaciones eléctricas',
    category: 'SERVICIOS INTERNOS',
    status: 'PENDIENTE',
    icon: Zap,
  },
];

export const ALERTS = [
  {
    id: 'a1',
    title: 'Retraso en materiales',
    subtitle: 'Acero S.A. • Fase Estructura',
    time: 'AHORA',
    type: 'error',
  },
  {
    id: 'a2',
    title: 'Inspección pendiente',
    subtitle: 'Control de Calidad • Sector B',
    time: '2H',
    type: 'warning',
  },
];

export const KPIS = [
  {
    label: 'Avance Físico',
    value: '85%',
    change: '+2.4%',
    icon: CheckCircle2,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    label: 'Desempeño (Score)',
    value: '9.2',
    target: 'META 9.5',
    icon: AlertCircle,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    label: 'Días Restantes',
    value: '124',
    icon: Clock,
    color: 'text-gray-600',
    bgColor: 'bg-gray-50',
  },
  {
    label: 'Estado Presupuesto',
    value: 'SALUDABLE',
    icon: FileText,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
  },
];
