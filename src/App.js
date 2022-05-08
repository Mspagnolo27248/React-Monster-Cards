import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'
import Card from './components/card/card'



const App = () => {

  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)


  useEffect(() => {
    //console.log('ComponentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) =>  response.json())
      .then((data) => setMonsters(data)
      )
  },[]);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((item) =>
      (item.name.toLowerCase().includes(searchField)))
    
    setFilteredMonsters(newFilteredMonsters)
      
  },[monsters,searchField]);

  const onSearchChange = (event) => {
    //console.log(event.target.value)
    const searchString = event.target.value.toLocaleLowerCase();
    setSearchField(searchString)

  }

  return (
    <div className='App'>

      <SearchBox onChange={onSearchChange} placeholder='Search Monsters' type='search' className='search-box' />
      <CardList monsters={filteredMonsters} />
     
    </div>
  )

}
  ;

export default App;
