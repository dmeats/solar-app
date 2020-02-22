import React, {useContext, useState,useEffect} from 'react'
import {APPLContext} from '../App'
import '../CSS/inputform.css'
import '../CSS/powercounterft.css'

//import { connect } from 'react-redux'
//import Form from 'react-bootstrap/Form'




const Details = () => {
    
    const aPPLContext = useContext(APPLContext)

    const [TypeOfPower, setTypeOfPower] = useState('')
    const [NameOfAppliance, setNameOfAppliance] = useState('')
    const [PowerUsage, setPowerUsage] = useState('')
    const [Watts, setWatts] = useState('')
    const [Room, setRoom] = useState('')
    
    //const [Totalpower, setTotalpower] = useState(0)
    
    useEffect(() => {
        
        let acCheckaddswitch = false
        aPPLContext.AllDispatch({ type:'DISPLAY_STATE' })
        aPPLContext.AllDispatch({ type:'CHANGE_CHECKADDSWITCH_TO_FALSE' , acCheckaddswitch})    
        aPPLContext.AllDispatch({ type:'DISPLAY_STATE' })
      },[]);
  

const SubmitHandler = (e) =>{
e.preventDefault()
let PU = Number(PowerUsage)
let W = Number(Watts)

let newapplianceid= aPPLContext.AllState.Applianceid + 1
aPPLContext.AllDispatch({ type:'ADD_FROM_FORM' , TypeOfPower, NameOfAppliance, PU, W, newapplianceid,Room})
aPPLContext.AllDispatch({ type:'DISPLAY_STATE' })
console.log('===Applianceid===' + aPPLContext.AllState.Applianceid)

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
                <form onSubmit={SubmitHandler} method="post">
                    <label className="fontc" >Type of Power = {TypeOfPower}</label>
                    <select type="text" className="control" id="TOA" value={TypeOfPower} onChange={e=>setTypeOfPower(e.target.value)} onClick={e=>setTypeOfPower(e.target.value)}>
                        <option value='AC'>AC</option>
                        <option value='DC'>DC</option>
                        <option value='AC/DC'>AC/DC</option>
                    </select>
                    <label className="fontc" >Room = {Room} </label>
                    <select type="text" className="control" id="Room" value={Room} onChange={e=>setRoom(e.target.value)} onClick={e=>setRoom(e.target.value)}>
                    <option value='Bathroom1'>Bathroom1</option>
                        <option value='Bathroom2'>Bathroom2</option>
                        <option value='Basement'>Basement</option>
                        <option value='Bedroom1'>Bedroom1</option>
                        <option value='Bedroom2'>Bedroom2</option>
                        <option value='Bedroom3'>Bedroom3</option>
                        <option value='Garage'>Garage</option>
                        <option value='Kitchen1'>Kitchen1</option>
                        <option value='Kitchen2'>Kitchen2</option>
                        <option value='LaundryRoom'>Laundry Room</option>
                        <option value='LivingRoom1'>Living Room1</option>
                        <option value='LivingRoom2'>Living Room2</option>
                        <option value='LivingRoom3'>Living Room3</option>
                        
                       
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
                    <br></br><br></br>
                    <button type='submit'className='addButtonAppliance'>Add Appliance</button>
                    
                </form>
            </div>
    </div>
</div>
    
    
    
    </div> 
    
)       
}

export default Details;


