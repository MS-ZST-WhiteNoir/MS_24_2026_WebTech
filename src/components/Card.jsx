function Card() {


const cardData= [
        {id: 1, title: "Karta 1", img: "/images/react.webp"},
        {id: 2, title: "Karta 2", img: "/images/php.webp"}
    ]

  return (
    <div className="container">
      {cardData.map((card) => (
        <div className="card" key={card.id}>
          <img src={card.img} alt={card.title} />
          <h3>{card.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Card;