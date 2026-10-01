function Produkt({ name, price, onSelect}) {

    return (
      <section>
        <h2>{name}</h2>
        <p>{price}</p>

        <button onClick={()=> onSelect(name)}>
          Wybierz
        </button>
    </section>
    )
  }

  export default Produkt;