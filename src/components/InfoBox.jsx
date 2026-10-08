function InfoBox({name, onClick}){
    return(
        <>
      <div>
          <p>{name}</p>
          <button onClick={()=> onClick(name)}>
          {name}
        </button>       
      </div>
      </>
    )
  }

  export default InfoBox;