'use client'

import { useState, useEffect } from 'react';

export function useAutenticacao() {
  const [autenticado, setAutenticado] = useState(false);
  const [usuarioAtual, setUsuarioAtual] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');

  useEffect(() => {
    const sessaoSalva = localStorage.getItem('hookoff_sessao_ativa');
    if (sessaoSalva) {
      setAutenticado(true);
      setUsuarioAtual(sessaoSalva);
    }
  }, []);

  const cadastrar = (usuario, senha) => {
    if (!usuario.trim() || !senha.trim()) {
      setErro('Preencha todos os campos obrigatórios!');
      setSucesso('');
      return false;
    }

    const usuariosSalvos = JSON.parse(localStorage.getItem('hookoff_usuarios') || '[]');
    const existe = usuariosSalvos.find((u) => u.usuario.toLowerCase() === usuario.toLowerCase());

    if (existe) {
      setErro('Este nome de usuário já está em uso!');
      setSucesso('');
      return false;
    }

    usuariosSalvos.push({ usuario, senha });
    localStorage.setItem('hookoff_usuarios', JSON.stringify(usuariosSalvos));

    setSucesso('Conta criada com sucesso! Agora faça seu login.');
    setErro('');
    return true;
  };

  const fazerLogin = (usuario, senha) => {
    if (usuario === 'admin' && senha === '123456') {
      setAutenticado(true);
      setUsuarioAtual('admin');
      localStorage.setItem('hookoff_sessao_ativa', 'admin');
      setErro('');
      setSucesso('');
      return true;
    }

    const usuariosSalvos = JSON.parse(localStorage.getItem('hookoff_usuarios') || '[]');
    const userFound = usuariosSalvos.find((u) => u.usuario === usuario && u.senha === senha);

    if (userFound) {
      setAutenticado(true);
      setUsuarioAtual(userFound.usuario);
      localStorage.setItem('hookoff_sessao_ativa', userFound.usuario);
      setErro('');
      setSucesso('');
      return true;
    } else {
      setErro('Usuário ou senha incorretos!');
      setSucesso('');
      return false;
    }
  };

  const fazerLogout = () => {
    setAutenticado(false);
    setUsuarioAtual('');
    localStorage.removeItem('hookoff_sessao_ativa');
    setErro('');
    setSucesso('');
  };

  return {
    autenticado,
    usuarioAtual,
    erro,
    sucesso,
    fazerLogin,
    cadastrar,
    fazerLogout
  };
}