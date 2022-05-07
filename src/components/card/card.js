


const Card = (props)=>{
 const {key, className, alt, src,monsterName,email} = props

    return(
        <div key = {key} className= {className}>
        <img alt = {alt} src={src}></img> 
        <h1 key={key}> {monsterName}</h1>
        <p> {email}</p>
        </div>
    )
}

export default Card;