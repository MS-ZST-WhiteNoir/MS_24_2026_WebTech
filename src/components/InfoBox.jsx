function InfoBox(){

  function selectInfo(name){
    console.log("Kliknięto technologie: " + name);
  }

  const technologies = ["React", "JavaScript", "CSS"];

    return(
      <div>
        {technologies.map((tech, index) => (
          <div key={index}>
          <p>{tech}</p>
          <button onClick={()=> selectInfo(tech)}>
          {tech}
        </button>     
        </div>  
        ))}
      </div>
    )
  }

  export default InfoBox;