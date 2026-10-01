function Technology({name, specyfikacja, hours, features}) {
    return (
      <section>
          <h2>Kursy</h2>
          <h3>Technologia {name}</h3>
          <p>Kategoria: {specyfikacja.language}</p>
          <p>Liczba godzin: {hours}</p>
          <p>Cechy: {features[1]}</p>
      </section>
    )
  }

  export default Technology;