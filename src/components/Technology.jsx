function Technology(props) {

  return (
    <section>
      <img src={`./images/${props.tech.image}`} alt=""/>
      <h2>{props.tech.name}</h2>
      <p>{props.tech.category}</p>
      <p>{props.tech.hours}</p>
    </section>
  )
}

export default Technology;