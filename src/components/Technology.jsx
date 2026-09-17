function Technology() {

  const technologies = {
    id: 2,
    name: "React",
    category: "Frontend"
  }

    return (
      <>
      <div>
          <p>
          Id: {technologies.id}
          </p>
          <p>
          Nazwa: {technologies.name}
          </p>
          <p>
          Kategoria: {technologies.category}
          </p>
      </div>
      </>
    )
  }

  export default Technology;