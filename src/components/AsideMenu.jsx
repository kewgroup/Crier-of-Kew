import React, { useState } from 'react';
import './AsideMenu.css';

// Importando ícones do react-icons
import { FiHome, FiFileText, FiFolder, FiZap, FiSettings, FiUser } from 'react-icons/fi';
import { FaRegNewspaper } from 'react-icons/fa';
import { MdOutlineStar } from "react-icons/md";
import { MdHeadsetMic } from "react-icons/md";

const menuItems = [
  { icon: <FaRegNewspaper />, label: 'Noticias' },
  { icon: <MdOutlineStar />, label: 'Evento' },
  { icon: <FiFolder />, label: 'Downloads' },
  { icon: <FiZap />, label: 'Recargar' },
  { icon: <MdHeadsetMic />, label: 'Suporte' },
  { icon: <FiUser />, label: 'Cadastra-se' },
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
        {menuItems.map((item, idx) => (
          <div className="menu-item" key={idx}>
            <span className="menu-icon">{item.icon}</span>
            {open && <span className="menu-label">{item.label}</span>}
          </div>
        ))}
      </nav>
    </aside>
  );
}
