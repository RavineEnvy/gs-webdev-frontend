'use client'

import { useState, useEffect } from 'react';

const MENSAGENS_INICIAIS = [
  {
    id: 1,
    autor: 'Dona Helena (68 anos)',
    texto: 'Interface muito simples de entender. Me sinto muito mais segura usando o WhatsApp agora.',
    data: '18/11/2026'
  },
  {
    id: 2,
    autor: 'Carlos Eduardo (Filho)',
    texto: 'Instalei no celular do meu pai para evitar que ele caia em links falsos de prêmios e bancos.',
    data: '18/11/2026'
  }
];

export function useFeedback() {
  const [mensagens, setMensagens] = useState([]);

  useEffect(() => {
    const dadosSalvos = localStorage.getItem('hookoff_feedbacks');
    if (dadosSalvos) {
      setMensagens(JSON.parse(dadosSalvos));
    } else {
      setMensagens(MENSAGENS_INICIAIS);
      localStorage.setItem('hookoff_feedbacks', JSON.stringify(MENSAGENS_INICIAIS));
    }
  }, []);

  const salvarNoStorage = (novaLista) => {
    setMensagens(novaLista);
    localStorage.setItem('hookoff_feedbacks', JSON.stringify(novaLista));
  };

  const adicionarMensagem = (autor, texto) => {
    if (!texto.trim()) return;
    const nova = {
      id: Date.now(),
      autor: autor || 'Visitante',
      texto: texto.trim(),
      data: new Date().toLocaleDateString('pt-BR')
    };
    salvarNoStorage([nova, ...mensagens]);
  };

  const editarMensagem = (id, novoTexto) => {
    if (!novoTexto.trim()) return;
    const atualizada = mensagens.map((item) =>
      item.id === id ? { ...item, texto: novoTexto.trim() } : item
    );
    salvarNoStorage(atualizada);
  };

  const removerMensagem = (id) => {
    const filtrada = mensagens.filter((item) => item.id !== id);
    salvarNoStorage(filtrada);
  };

  return {
    mensagens,
    adicionarMensagem,
    editarMensagem,
    removerMensagem
  };
}