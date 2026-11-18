'use client'

export default function FeatureCard({ numero, titulo, descricao, detalhe, destaqueTag }) {
  return (
    <article className="card">
      <div className="cardTop">
        <span className="cardNumber">{numero}</span>
        {destaqueTag && <span className="cardTag">{destaqueTag}</span>}
      </div>

      <h3>{titulo}</h3>
      <p>{descricao}</p>

      <div className="cardDetails">
        <div className="cardDetailBox">
          <p>{detalhe}</p>
        </div>
      </div>
    </article>
  );
}