function Technology(props) {
    return (
      <section>
        <h4>Technologia</h4>
        <p>Nazwa: {props.name}</p>
        <p>Kategoria: {props.category}</p>
        <p>Liczba godzin: {props.hours}</p>
      </section>
    )
  }

  export default Technology;