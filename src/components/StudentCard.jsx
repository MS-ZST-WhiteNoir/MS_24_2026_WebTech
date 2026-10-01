function StudentCard(props) {
    return (
      <article className="student-card">
        <h2>{props.student.firstName} {props.student.lastName}</h2>
        <p>{props.student.className}</p>
        <p>{props.student.specialization}</p>
        <p>{props.student.gradesAverage}</p>
        
      </article>
    )
  }

export default StudentCard;