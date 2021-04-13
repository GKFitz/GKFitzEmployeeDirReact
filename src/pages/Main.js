import React, { Component } from 'react';
import API from '../utils/API.js';
import Header from '../components/Header.js';
import EmployeeRow from '../components/EmployeeRow.js';
import SearchBar from '../components/SearchBar.js';
import Wrapper from '../components/Wrapper.js';

   

export default class Main extends Component {
    state = {
        employees: [],
        name: "",
        sortingMethod: "default",
        sortBy: "", 
       
        
    };

    handleInputChange = event => {
        this.setState({name:event.target.value, sortingMethod: "filter"})
        // this.nameFilter()
    }

    componentDidMount() {
        API.search()
        .then(res => this.setState({employees:res.data.results}))
        .catch(err => console.log(err));
        
    }
    nameFilter= () => {
        const filterResults= this.state.employees.filter(employee => {
            return employee.name.first.toLowerCase().includes(this.state.name.toLowerCase());
        })
        return filterResults
        
    }
    sortByFirstName= () => {
        const sortedResults=  this.state.employees.sort(function(a, b){
            if(a.name.first < b.name.first) {
                return -1
    
            }else{
                return 1
            }})
    
        return sortedResults
    }
    changeSortFName= () => {
        this.setState({sortBy: "firstName", sortingMethod: "sort"})
    }
   
    render() {
        let tempArray= this.state.employees;
        if (this.state.sortingMethod === "filter") {
            tempArray = this.nameFilter()
        }else if (this.state.sortingMethod === "sort") {
            if(this.state.sortBy === "firstName") {
                tempArray = this.sortByFirstName()
            }
        }
       
        return (
                <div>
    
                    <Header />
                <input type="text" value= {this.state.name} onChange= {this.handleInputChange} placeholder="Search.."></input> 
                    <table>
                        <tr>
                            <th onClick= {this.changeSortFName}>
                            First Name
                            </th>
                            <th>
                            Last Name
                            </th>
                            <th>
                            Email
                            </th>
                            <th>
                            Picture
                            </th>

                        </tr>

                        
                        {tempArray.map((employee) =>{
                            return <EmployeeRow firstName={employee.name.first} lastName={employee.name.last} email={employee.email} 
                            />
                        })}

                    </table>
                    
                </div>
                
        

        )
    }
    
    
    

}

