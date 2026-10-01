function Technology(props) {
    return (
      <section>
          <h2>Kursy</h2>
          <h3>Technologia {props.name}</h3>
          <p>Kategoria: {props.specyfikacja.language}</p>
          <p>Liczba godzin: {props.hours}</p>
          <p>Cechy: {props.features[1]}</p>
      </section>
    )
  }

  export default Technology;