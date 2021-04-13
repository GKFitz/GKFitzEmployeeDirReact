import React, { Component } from 'react';
import API from '../utils/API.js';
import Header from './Header.js';
import EmployeeRow from './EmployeeRow.js';
import SearchBar from './SearchBar.js';
import Wrapper from './Wrapper.js';

   

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
   
    render() {
       
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

                        {/* {tempArray.map((employee) =>{ */}
                        {this.state.employees.map((employee) =>{
                            return <EmployeeRow firstName={employee.name.first} lastName={employee.name.last} email={employee.email} 
                            />
                        })}

                    </table>
                    
                </div>
                
        

        )
    }
    
    
    

}

