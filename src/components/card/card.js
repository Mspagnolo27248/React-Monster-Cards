


const Card = (props)=>{
 const {uniqueKey, className, alt, src,monsterName,email} = props

    return(
        <div key = {uniqueKey} className= {className}>
        <img alt = {alt} src={src}></img> 
        <h2 key={uniqueKey}> {monsterName}</h2>
        <p> {email}</p>
        </div>
    )
}

export default Card;