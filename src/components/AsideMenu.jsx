import React, { useState } from 'react';
import './AsideMenu.css';

const menuItems = [
  { icon: '🏠', label: 'Home' },
  { icon: '🎬', label: 'Vídeos' },
  { icon: '📂', label: 'Categorias' },
  { icon: '⭐', label: 'Favoritos' },
  { icon: '⚙️', label: 'Configurações' },
];

export default function AsideMenu({ atendimentoLabel }) {
  const [open, setOpen] = useState(false);

  return (
    <aside className={`aside-menu${open ? ' open' : ''}`}>  
      <div className="aside-top">
        <button className="menu-toggle" onClick={() => setOpen(!open)}>
          {open ? '✖' : '☰'}
        </button>
        {open && atendimentoLabel}
      </div>
      <nav className="menu-list">
        <div className="menu-item">
          <span className="menu-icon">🏠</span>
          {open && <span className="menu-label">Home</span>}
        </div>
        {menuItems.slice(1).map((item, idx) => (
          <div className="menu-item" key={idx+1}>
            <span className="menu-icon">{item.icon}</span>
            {open && <span className="menu-label">{item.label}</span>}
          </div>
        ))}
      </nav>
    </aside>
  );
}
