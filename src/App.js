import {
  Component
} from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from  './components/search-box/search-box.component'

import Card from './components/card/card'
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField:''

    }
    console.log('Constructor')
  }



  componentDidMount() {
    //console.log('ComponentDidMount')
     fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((data) =>
       this.setState(
         () => {
          return {monsters:data};
      }, 
      () => {
        console.log(this.state)
      }
    ) 
  );
};

onSearchChange = (event)=>{
  //console.log(event.target.value)
  const searchString = event.target.value.toLocaleLowerCase();
  this.setState(()=> ({searchField:searchString}))}

  render() {
    
    const filteredMonsters =  this.state.monsters.filter((item)=> 
    (item.name.toLowerCase().includes(this.state.searchField)))

    console.log('Render')
      return ( 
        <div className='App'>
      

     <SearchBox onChange={this.onSearchChange} placeholder='Search Monsters' type='search' className='search-box'/>
     <CardList monsters={filteredMonsters}/>
     <Card />
        </div>
      )
    
  }
};

export default App;
