function Book(props) {
    return (
      <section>
        <p>title: {props.title}</p>
            <p>author: {props.author}</p>
            <br/>
      </section>
    )
  }

  export default Book;