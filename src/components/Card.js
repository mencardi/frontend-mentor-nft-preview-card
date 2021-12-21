import './Card.scss';

function Card(props) {
  return (
    <section className="card">
    <header>
      <a href="#" className="card__expand">
        <img src={props.art} alt={props.name} />  
      </a>        
    </header>
    <article className="card__body">
      <section>
        <h3 className="card__title">
          <a href="#" className="card__link">{props.name}</a>
        </h3>
        <p className="card__desc">{props.description}</p>
        <div className="card__data">
          <p className="card__currency">{props.price} ETH</p>
          <p className="card__eta">{props.eta} left</p>
        </div>
      </section>
      <section className="card__creator">
        <img src={props.avatar} alt={props.author} className="card__avatar" />
        <p className="card__name">
          Creation of <a href="#" className="card__link">{props.author}</a>
        </p>
      </section>
    </article>
  </section>
  );
}

export default Card;