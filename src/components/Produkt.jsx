function Produkt({ name, price, onClick}) {

    return (
      <section>
        <h2>{name}</h2>
        <p>{price}</p>

        <button onClick={()=> onClick(name)}>
          Pokaż produkt
        </button>
    </section>
    )
  }

  export default Produkt;