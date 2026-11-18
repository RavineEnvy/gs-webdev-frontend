'use client'

import Header from './components/Header';
import Login from './components/login';
import SectionHero from './components/SectionHero';
import SectionSobre from './components/SectionSobre';
import SectionFuncionalidades from './components/SectionFuncionalidades';
import SectionDepoimentos from './components/SectionDepoimentos';
import Footer from './components/Footer';
import { useAutenticacao } from './hooks/useAutenticacao';
import SectionApi from './components/SectionApi';

export default function Home() {
  const {
    autenticado,
    usuarioAtual,
    erro,
    sucesso,
    fazerLogin,
    cadastrar,
    fazerLogout
  } = useAutenticacao();

  return (
    <>
      <Header
        autenticado={autenticado}
        usuarioAtual={usuarioAtual}
        onLogout={fazerLogout}
      />

      <main>
        {!autenticado ? (
          <Login
            onLogin={fazerLogin}
            onCadastrar={cadastrar}
            erro={erro}
            sucesso={sucesso}
          />
        ) : (
          <>
            <SectionHero
              slogan="O golpista joga a isca,"
              subtitulo="O aplicativo criado para proteger idosos contra golpes de phishing no WhatsApp e SMS com alertas claros, simples e imediatos."
            />
            <SectionSobre />
            <SectionFuncionalidades />
            <SectionDepoimentos usuarioAtual={usuarioAtual} />
            <SectionApi />
          </>
        )}
      </main>

      <Footer />
    </>
  );
}