import React, { useState } from 'react';
import './AsideMenu.css';

// Importando ícones do react-icons
import { FiZap, FiUser } from 'react-icons/fi';
import { FaRegNewspaper } from 'react-icons/fa';
import { MdOutlineStar, MdHeadsetMic } from "react-icons/md";

const menuItems = [
  { icon: <FaRegNewspaper />, label: 'Noticias' },
  { icon: <MdOutlineStar />, label: 'Evento' },
  { icon: <FiZap />, label: 'Recargar' },
  { icon: <MdHeadsetMic />, label: 'Suporte', id: 'suporte' }, // rola até seção
  { icon: <FiUser />, label: 'Cadastra-se', url: 'https://www.roblox.com/pt/login' }, // abre link
];

export default function AsideMenu({ atendimentoLabel }) {
  const [open, setOpen] = useState(false);

  const handleClick = (item) => {
    if (item.id) {
      // scroll para seção
      const section = document.getElementById(item.id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else if (item.url) {
      // abre link em nova aba
      window.open(item.url, "_blank");
    }
  };

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
          <div
            className="menu-item"
            key={idx}
            onClick={() => handleClick(item)}
            style={{ cursor: "pointer" }}
          >
            <span className="menu-icon">{item.icon}</span>
            {open && <span className="menu-label">{item.label}</span>}
          </div>
        ))}
      </nav>
    </aside>
  );
}
