import React, {useContext, useState} from 'react'
import {APPLContext} from '../App'
import '../CSS/inputform.css'
import '../CSS/powercounter.css'

//import { connect } from 'react-redux'
//import Form from 'react-bootstrap/Form'




const Details = () => {
    
    const aPPLContext = useContext(APPLContext)

    const [TypeOfPower, setTypeOfPower] = useState('')
    const [NameOfAppliance, setNameOfAppliance] = useState('')
    const [PowerUsage, setPowerUsage] = useState('')
    const [Watts, setWatts] = useState('')
    
    //const [Totalpower, setTotalpower] = useState(0)
    

const SubmitHandler = (e) =>{
e.preventDefault()
let PU = Number(PowerUsage)
let W = Number(Watts)
aPPLContext.AllDispatch({ type:'ADD_FROM_FORM' , TypeOfPower, NameOfAppliance, PU, W})
aPPLContext.AllDispatch({ type:'DISPLAY_STATE' })


//console.log(aPPLContext.TypeOfPower + ' ' + aPPLContext.NameOfAppliance + ' ' + aPPLContext.PowerUsage + ' ' +aPPLContext.Watts +' '+aPPLContext.PowerCal)
//console.log('This is the watts' + Watts +' ')
setTypeOfPower('')
setNameOfAppliance('')
setPowerUsage('')
setWatts('')
}

return(
    
    <div className="flex-container">
    <div className="outsideinputcontainer">
        <div className="insideinputcontainer">
            <div className="form-group">  
                <form onSubmit={SubmitHandler}>
                    <label className="fontc" >Type of Power = {TypeOfPower}</label>
                    <select type="text" className="control" id="TOA" value={TypeOfPower} onChange={e=>setTypeOfPower(e.target.value)}>
                        <option value='AC'>AC</option>
                        <option value='DC'>DC</option>
                        <option value='AC/DC'>AC/DC</option>
                    </select>
                    <label className="fontc">Name of appliance</label>
                    <input type="text" className="control" id="NOA" placeholder="name of appliance" value={NameOfAppliance} onChange={e=>setNameOfAppliance(e.target.value)}>
                    </input>
                    <br></br><br></br>
                    <label className="fontc">Time Usage (hr) </label>
                    <input type="text" className="control1" id="PU" placeholder="power Usage" value={(PowerUsage)} onChange={e=>setPowerUsage(e.target.value)}>
                    </input>
                    <label className="fontc">Watts used</label>
                    <input type="text" className="control1" id="WT" placeholder="Watts" value={(Watts)} onChange={e=>setWatts(e.target.value)}>
                    </input>
                    <br></br>
                    <button type='submit'className='addButtonAppliance'>Add Appliance</button>
                    
                </form>
            </div>
    </div>
</div>
    
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
    
    </div> 
    
)       
}

export default Details;


