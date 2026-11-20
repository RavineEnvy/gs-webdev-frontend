'use client'

import { useState, useEffect } from 'react';

export default function Header({ autenticado, usuarioAtual, onLogout }) {
  const [hora, setHora] = useState('');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setHora(new Date().toLocaleTimeString());
    const id = setInterval(() => setHora(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('hookoff_theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = (e) => {
    e.preventDefault();
    const novoTema = !isDark;
    setIsDark(novoTema);

    if (novoTema) {
      document.body.classList.add('dark');
      localStorage.setItem('hookoff_theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('hookoff_theme', 'light');
    }
  };

  return (
    <header className="header">
      <a className="logo-link" href="#inicio">
        <img src="/peixe.png" alt="HookOff Logo" className="logo-img" />
      </a>

      <nav className="menu">
        <button
          type="button"
          className="tema-btn"
          onClick={toggleTheme}
          aria-label="Alternar Tema"
          title="Alternar tema claro/escuro"
        >
          {isDark ? '☀️' : '🌙'}
        </button>

        {autenticado && (
          <>
            <a href="#inicio">Início</a>
            <a href="#sobre">O Projeto</a>
            <a href="#funcionalidades">Como Funciona</a>
            <a href="#comunidade">Comunidade</a>
            <span className="user-badge">Olá, {usuarioAtual}</span>
            <button onClick={onLogout} className="logout-button">
              Sair
            </button>
          </>
        )}
        <p className="relogio">{hora}</p>
      </nav>
    </header>
  );
}