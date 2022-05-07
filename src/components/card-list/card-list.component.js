import { Component } from "react";
import Card from "../card/card";
import './card-list.styles.css'

const CardList = (props)=> {
    const {monsters} = props;
    return (
        <div className="card-list">
        {monsters.map((monster)=>(
         
             <Card 
                 key= {monster.id}
                 src = {`https://robohash.org/${monster.id}?set=set2&?size=180x180`}
                 className='card-container'    
                 alt = {`monster ${monster.name}`}
                 email = {monster.email}
                 monsterName = {monster.name}
                        />
            ))};

        </div>
    )
}



export default CardList;