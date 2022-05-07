import {
  Component
} from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField:''

    }
    console.log('Constructor')
  }

  changeHandler() {
    
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

  render() {
    const filteredMonsters =  this.state.monsters.filter((item)=> 
    (item.name.toLowerCase().includes(this.state.searchField)))

    console.log('Render')
      return ( 
        <div className='App'>
        <input
        className='search-box'
        type='search'
        placeholder='search monsters'
        onChange={(event)=>{
          console.log(event.target.value)
          const searchString = event.target.value.toLocaleLowerCase();
          this.setState(()=>  ({searchField:searchString}))
        }}
        />

       
     <CardList monsters={filteredMonsters}/>
        </div>
      )
    
  }
};

export default App;
