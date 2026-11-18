'use client'

import { useApi } from '../hooks/useApi';

export default function SectionApi() {
  const { dados, carregando, erro, atualizarRegistro, excluirRegistro } = useApi();

  return (
    <section className="section" id="api-externa">
      <div className="cardProcesso">
        <span className="eyebrow">INTEGRAÇÃO COM API EXTERNA</span>
        <p>
          Dados consumidos de uma API externa simulando um feed de aviso. (são vários lorem ipsum, porém cumprem o requisito de API externa, Tmj Daniel!z).
        </p>

        {carregando && <p className="api-status">Carregando dados da API externa...</p>}
        {erro && <p className="login-error">Erro: {erro}</p>}

        <div className="gridContainer api-grid">
          {!carregando && !erro && dados.map((item) => (
            <article key={item.id} className="card api-card">
              <span className="cardNumber">ALERTA #{item.id}</span>
              <h3 className="api-card-title">{item.title}</h3>
              <p className="api-card-desc">{item.body}</p>

              <div className="api-actions">
                <button
                  type="button"
                  className="btn-acao"
                  onClick={() => atualizarRegistro(item.id, 'Alerta Editado: Cuidado com Links Falsos!')}
                >
                  Editar
                </button>
                <button
                  type="button"
                  className="btn-acao excluir"
                  onClick={() => excluirRegistro(item.id)}
                >
                  Excluir
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}