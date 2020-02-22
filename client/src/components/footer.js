import React from 'react'
import {useContext} from 'react'
import {APPLContext} from '../App'
import '../CSS/powercounterft.css'

const Footer = () => {
    const aPPLContext = useContext(APPLContext)
    return (
        <div className="powerCounterContainer">
        <div className="powerdetails">
            
            <center>
            <table valign="center">
            <tbody>
                <tr><td>Total power</td></tr>
                <tr><td>consumed</td></tr>
                <tr className="powervalue"><td>{aPPLContext.AllState.Totalpower + ' '}watts</td></tr>
            </tbody>
            </table>
            </center>
        </div>
    </div> 
    )
}

export default Footer;