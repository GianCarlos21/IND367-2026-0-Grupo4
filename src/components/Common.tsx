import React from 'react';
import { Home, FileText, Map as MapIcon, Settings } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const MobileLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 max-w-md mx-auto shadow-2xl overflow-hidden relative">
      <main className="flex-1 overflow-y-auto pb-24">
        {children}
      </main>
      
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-100 px-6 py-3 flex justify-between items-center z-50">
        <NavItem to="/" icon={<Home size={24} />} label="INICIO" />
        <NavItem to="/reports" icon={<FileText size={24} />} label="REPORTES" />
        <NavItem to="/plans" icon={<MapIcon size={24} />} label="PLANOS" />
        <NavItem to="/settings" icon={<Settings size={24} />} label="AJUSTES" />
      </nav>
    </div>
  );
};

const NavItem: React.FC<{ to: string; icon: React.ReactNode; label: string }> = ({ to, icon, label }) => (
  <NavLink 
    to={to} 
    className={({ isActive }) => 
      `flex flex-col items-center gap-1 transition-colors ${
        isActive ? 'text-blue-600' : 'text-gray-400'
      }`
    }
  >
    {icon}
    <span className="text-[10px] font-bold tracking-wider">{label}</span>
  </NavLink>
);

export const Card: React.FC<{ children: React.ReactNode; className?: string; onClick?: () => void }> = ({ children, className = '', onClick }) => (
  <div 
    onClick={onClick}
    className={`bg-white rounded-2xl p-4 shadow-sm border border-gray-100 ${onClick ? 'cursor-pointer active:scale-95 transition-transform' : ''} ${className}`}
  >
    {children}
  </div>
);

export const Button: React.FC<{ 
  children: React.ReactNode; 
  onClick?: () => void; 
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  disabled?: boolean;
}> = ({ children, onClick, variant = 'primary', className = '', disabled }) => {
  const variants = {
    primary: 'bg-blue-600 text-white shadow-lg shadow-blue-200 hover:bg-blue-700',
    secondary: 'bg-emerald-500 text-white shadow-lg shadow-emerald-200 hover:bg-emerald-600',
    outline: 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
  };

  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
