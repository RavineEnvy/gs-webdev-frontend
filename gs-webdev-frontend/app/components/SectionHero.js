'use client'

export default function SectionHero({ slogan, subtitulo }) {
  return (
    <section className="hero" id="inicio">
      <div className="heroContent">
        <span className="eyebrow">SEGURANÇA DIGITAL PARA IDOSOS</span>

        <h1>
          {slogan}
          <strong>a gente corta a linha.</strong>
        </h1>

        <p>{subtitulo}</p>

        <div className="heroActions">
          <a className="button" href="#funcionalidades">
            Conheça o aplicativo
          </a>
          <a className="button button-secondary" href="#sobre">
            Nossa missão
          </a>
        </div>
      </div>

      <div className="heroImage">
        <div className="phoneMockup">
          <div className="mockupHeader">
            <div className="mockupBadge">
              <span className="statusDot"></span>
              <strong>HookOff</strong>
            </div>
            <span className="mockupStatus">Ameaça detectada</span>
          </div>

          <div className="mockupAlertBox">
            <p className="mockupAlertTitle">Possível golpe detectado</p>
            <p className="mockupAlertSub">Esta conversa tem sinais de fraude</p>

            <div className="riskRow">
              <span>Nível de risco</span>
              <span className="riskLevel">ALTO • 87%</span>
            </div>
            <div className="riskBar">
              <div className="riskFill"></div>
            </div>

            <div className="tagGroup">
              <span className="riskTag">Link suspeito</span>
              <span className="riskTag">Promessa de prêmio</span>
              <span className="riskTag">Urgência</span>
            </div>
          </div>

          <div className="mockupChatBubble">
            Olá! Analisei essa conversa e ela tem características de golpe.{' '}
            <strong>Não clique no link</strong> e não envie dados pessoais.
          </div>
        </div>
      </div>
    </section>
  );
}