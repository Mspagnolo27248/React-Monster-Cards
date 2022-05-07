import { Component } from "react";


class CardList extends Component {

render(){
    const {monsters} = this.props;
    return (
        <div className="card-list">
        {monsters.map((monster)=>(
            <div key = {monster.id}className="card-container">
            <img alt = {`monster ${monster.name}`}src={`https://robohash.org/${monster.id}?set=set2&?size=180x180`}></img> 
            <h1 key={monster.id}> {monster.name}</h1>
            <p>{monster.email} </p>
            </div>
            
            ))};

        </div>
    )
}


}

export default CardList;