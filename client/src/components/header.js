import React from 'react'
import {Link} from 'react-router-dom'

const Header = () =>(
    
    <nav className = 'App-header'>
        Power Consumption Calculator 
        <table>
            <tbody>
                <tr>
                    <td> <Link exact to={'/'}>List of Appliances Added</Link></td>
                    <td><Link exact to={'/inputform'}> Add Appliance </Link></td>
                </tr>
            </tbody>
        </table>
        
        
         
    </nav>
    
)

export default Header