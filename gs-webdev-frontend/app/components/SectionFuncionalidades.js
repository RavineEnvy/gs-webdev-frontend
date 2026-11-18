'use client'

import FeatureCard from './FeatureCard';

const RECURSOS_HOOKOFF = [
  {
    numero: '01',
    titulo: 'Proteção no WhatsApp e SMS',
    descricao: 'Monitoramento preventivo focado nos principais canais onde golpistas abordam idosos.',
    detalhe: 'O aplicativo identifica padrões comuns de mensagens fraudulentas enviadas por números desconhecidos ou contatos suspeitos.',
    destaqueTag: 'Canais'
  },
  {
    numero: '02',
    titulo: 'Alerta Visual de Risco',
    descricao: 'Indicador claro e intuitivo que aponta o nível de perigo da conversa em tempo real.',
    detalhe: 'Com cores de alto contraste e avisos objetivos, o usuário entende imediatamente quando uma mensagem oferece risco alto.',
    destaqueTag: 'Clareza'
  },
  {
    numero: '03',
    titulo: 'Assistente em Linguagem Simples',
    descricao: 'Explicações diretas sem termos técnicos complicados, pensadas para o público sênior.',
    detalhe: 'O assistente informa o motivo do alerta — como links encurtados, senso de urgência ou falso prêmio — e orienta a não clicar.',
    destaqueTag: 'Acessibilidade'
  },
  {
    numero: '04',
    titulo: 'Ações Rápidas de Segurança',
    descricao: 'Botões grandes e acessíveis para bloquear o contato ou denunciar a tentativa de golpe.',
    detalhe: 'Com apenas um toque em "O que fazer agora?", "Bloquear contato" ou "Denunciar", o idoso resolve a situação com autonomia.',
    destaqueTag: 'Autonomia'
  },
  {
    numero: '05',
    titulo: 'Detecção de Engenharia Social',
    descricao: 'Reconhecimento de gatilhos psicológicos usados por criminosos digitais.',
    detalhe: 'Sinaliza automaticamente táticas como urgência exagerada, pedidos de transferência rápida e falsos comunicados bancários.',
    destaqueTag: 'Prevenção'
  },
  {
    numero: '06',
    titulo: 'Tranquilidade para a Família',
    descricao: 'Mais autonomia digital para os idosos e menos preocupação para filhos e netos.',
    detalhe: 'Desenvolvido na Global Solution 2026 com foco em inclusão digital segura e prevenção contra fraudes.',
    destaqueTag: 'Impacto Social'
  }
];

export default function SectionFuncionalidades() {
  return (
    <section className="section" id="funcionalidades">
      <div className="sectionHeading">
        <span className="eyebrow">COMO O HOOKOFF PROTEGE</span>
        <h2>
          Recursos pensados para <span>segurança real</span>
        </h2>
        <p>
          Passe o cursor ou toque nos cartões abaixo para conhecer os detalhes de cada funcionalidade do aplicativo.
        </p>
      </div>

      <div className="gridContainer">
        {RECURSOS_HOOKOFF.map((item) => (
          <FeatureCard
            key={item.numero}
            numero={item.numero}
            titulo={item.titulo}
            descricao={item.descricao}
            detalhe={item.detalhe}
            destaqueTag={item.destaqueTag}
          />
        ))}
      </div>
    </section>
  );
}