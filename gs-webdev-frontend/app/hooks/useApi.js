'use client'

import { useState, useEffect } from 'react';

export function useApi() {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error('Falha ao carregar dados da API externa.');
        }
        return resposta.json();
      })
      .then((resultado) => {
        setDados(resultado);
        setCarregando(false);
      })
      .catch((err) => {
        setErro(err.message);
        setCarregando(false);
      });
  }, []);

  const atualizarRegistro = (id, novoTitulo) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: id,
        title: novoTitulo,
        body: 'Conteúdo atualizado com sucesso.',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((atualizado) => {
        setDados((prev) =>
          prev.map((item) => (item.id === id ? { ...item, title: atualizado.title } : item))
        );
      })
      .catch((err) => console.error('Erro ao atualizar:', err));
  };

  const excluirRegistro = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setDados((prev) => prev.filter((item) => item.id !== id));
      })
      .catch((err) => console.error('Erro ao excluir:', err));
  };

  return {
    dados,
    carregando,
    erro,
    atualizarRegistro,
    excluirRegistro,
  };
}