function Student(props ){
    return(
      <>
        <section>
        <p>Imię: {props.name}</p>
          <p>Klasa: {props.className}</p>
          <p>Wiek: {props.age}</p>
          <p>Specjalizacja: {props.specialization}</p>
          <br></br>
      </section>
      
      </>
    )
  }

  export default Student;