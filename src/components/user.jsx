function User({ name, role, onFlow}) {
    return (
        
      <section>
        <p>{name}</p>
        <p>{role}</p>

        <button onClick={()=> onFlow(name, role)}>
          Pokaż użytkownika
        </button>
    </section>
    )
  }

  export default User;