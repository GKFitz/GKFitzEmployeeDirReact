import React, { Component } from 'react';
import API from '../utils/API.js';
import Header from './Header.js';

   

export default class Main extends Component {
    state = {
        employees: [],
        name: "",
        
    };

    handleInputChange = event => {
        this.setState({name:event.target.value, sortingMethod: "filter"})

    }
    componentDidMount() {
        API.search()
        .then(res => this.setState({employees:res.data.results}))
        .catch(err => console.log(err));
        
    }
  
    render() {
        return (
            <div>
                Main
                
            </div>

        )
    }
    
    
    

}

