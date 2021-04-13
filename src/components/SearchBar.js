import React from 'react';


   
function SearchBar(props) {
    return (
    <input type="text" value= {props.nameState} onChange= {props.handleInputChange} placeholder="Search.."></input>

    )


}


  
export default SearchBar;

