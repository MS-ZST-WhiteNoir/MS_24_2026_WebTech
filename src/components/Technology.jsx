function Produkt({ name, category, hours, onFlow }) {

    return (
      <section>
        <h2>{name}</h2>
        <p>{category}</p>
        <p>{hours}</p>

        <button onClick={()=> onFlow(name)}>
          Wybierz
        </button>
    </section>
    )
  }

  export default Produkt;