'use client'

import { useState } from 'react';
import { useFeedback } from '../hooks/useFeedback';

export default function SectionDepoimentos({ usuarioAtual }) {
  const { mensagens, adicionarMensagem, editarMensagem, removerMensagem } = useFeedback();
  const [novoTexto, setNovoTexto] = useState('');
  const [editandoId, setEditandoId] = useState(null);
  const [textoEditado, setTextoEditado] = useState('');

  const handleAdicionar = (e) => {
    e.preventDefault();
    adicionarMensagem(usuarioAtual, novoTexto);
    setNovoTexto('');
  };

  const iniciarEdicao = (item) => {
    setEditandoId(item.id);
    setTextoEditado(item.texto);
  };

  const salvarEdicao = (id) => {
    editarMensagem(id, textoEditado);
    setEditandoId(null);
    setTextoEditado('');
  };

  return (
    <section className="section" id="comunidade">
      <div className="cardProcesso">
        <span className="eyebrow">COMUNIDADE & OPINIÕES</span>
        <h3>Deixe seu comentário sobre o HookOff</h3>
        <p>
          Compartilhe sua opinião sobre a importância da prevenção contra golpes digitais para idosos. Os registros ficam salvos no seu navegador.
        </p>

        <form onSubmit={handleAdicionar} className="feedbackForm">
          <input
            type="text"
            value={novoTexto}
            onChange={(e) => setNovoTexto(e.target.value)}
            placeholder="Escreva sua mensagem ou sugestão sobre o aplicativo..."
            required
          />
          <button type="submit" className="button">
            Publicar
          </button>
        </form>

        <div className="feedbackLista">
          {mensagens.map((item) => (
            <div key={item.id} className="feedbackItem">
              <div className="feedbackHeader">
                <strong>{item.autor}</strong>
                <span>{item.data}</span>
              </div>

              {editandoId === item.id ? (
                <div className="feedbackEditBox">
                  <input
                    type="text"
                    value={textoEditado}
                    onChange={(e) => setTextoEditado(e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn-acao salvar"
                    onClick={() => salvarEdicao(item.id)}
                  >
                    Salvar
                  </button>
                  <button
                    type="button"
                    className="btn-acao cancelar"
                    onClick={() => setEditandoId(null)}
                  >
                    Cancelar
                  </button>
                </div>
              ) : (
                <p className="feedbackTexto">{item.texto}</p>
              )}

              {editandoId !== item.id && (
                <div className="feedbackAcoes">
                  <button
                    type="button"
                    className="btn-acao"
                    onClick={() => iniciarEdicao(item)}
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    className="btn-acao excluir"
                    onClick={() => removerMensagem(item.id)}
                  >
                    Excluir
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}