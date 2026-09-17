function CourseCard(){
    
    const course = {
    Name: "Maciej Skrabot",
    Teacher: "Rafał Taraszka",
    Hours: "3",
    Completed: "Yes"};

    return(
        <>
      <div>
        <section className="section">
            <h2 className="h2">Name: </h2>
            <p>{course.Name}</p>
            <h2 className="h2">Teacher: </h2>
            <p>{course.Teacher}</p>
            <h2 className="h2">Hours: </h2>
            <p>{course.Hours * 60} min</p>
            <h2 className="h2">Completed: </h2>
            <p>{course.Completed}</p>
        </section>
      </div>
      </>
    )
  }

  export default CourseCard;