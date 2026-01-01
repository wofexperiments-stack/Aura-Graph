
import React from 'react';
import { User } from '../types';

interface HeaderProps {
  user: User | null;
  onLogout: () => void;
  activeTab: 'generate' | 'edit' | 'history';
  setActiveTab: (tab: 'generate' | 'edit' | 'history') => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogout, activeTab, setActiveTab }) => {
  return (
    <header className="w-full pt-8 pb-4 flex flex-col items-center">
      <div className="w-full max-w-5xl flex items-center justify-between mb-8 px-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl aura-gradient aura-glow">
            <span className="text-white font-black text-xl italic tracking-tighter">A</span>
          </div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 tracking-tight">
            Aura Graph
          </h1>
        </div>

        {user && (
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3 bg-slate-900 border border-slate-800 rounded-full py-1.5 pl-4 pr-1.5 shadow-lg">
              <span className="text-xs font-medium text-slate-300">{user.name}</span>
              <button 
                onClick={onLogout}
                className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-red-400 rounded-full transition-all"
                title="Logout"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            </div>
            <button 
              onClick={onLogout}
              className="sm:hidden p-2 text-slate-400 hover:text-red-400"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        )}
      </div>

      <nav className="flex gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-2xl mb-2 shadow-inner">
        <button
          onClick={() => setActiveTab('generate')}
          className={`px-6 sm:px-8 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
            activeTab === 'generate' ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]' : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          Generate
        </button>
        <button
          onClick={() => setActiveTab('edit')}
          className={`px-6 sm:px-8 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
            activeTab === 'edit' ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]' : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          Edit Image
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={`px-6 sm:px-8 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
            activeTab === 'history' ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]' : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          History
        </button>
      </nav>
      
      <p className="text-slate-500 text-xs font-light mt-4 px-4 text-center tracking-wide uppercase opacity-70">
        {activeTab === 'generate' && 'Manifest new visions on the digital canvas'}
        {activeTab === 'edit' && 'Upload and transform existing images with AI'}
        {activeTab === 'history' && 'Explore your past artistic manifestations'}
      </p>
    </header>
  );
};

export default Header;
