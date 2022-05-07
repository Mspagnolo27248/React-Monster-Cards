import {Component} from 'react'
import './search-box.styles.css'


const SearchBox = (props)=>{

     const {className,type,placeholder,onChange} = props
        return ( <div>
            <input
                  className={className}
                  type={type}
                  placeholder={placeholder}
                  onChange={onChange}
                  />
              </div>)}
    




export default SearchBox;