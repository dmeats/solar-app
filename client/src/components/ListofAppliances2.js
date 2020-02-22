import React, {useEffect,useState} from 'react'
import '../CSS/ListofAppliance.css'
//import {APPLContext} from '../App'

//const aPPLContext = useContext(APPLContext)

const ListofAppliances = () =>{

    const [stuff, setData] = useState([])

        async function fetchMyAPI() {
        let response = await fetch('/Appliances')
        response = await response.json()
        
        console.log('Got the data')
        console.log(response)
        
        setData(response)
        
      }
    
      useEffect(() => {
        console.log('Getting the data')
        fetchMyAPI();
        
        
      },[]);
  

    return(
    <div className='ListofApplianceContainer'>

        <p> is the list of appliances</p><br></br>
        {console.log('this is the data from the div')}
        {console.log(stuff)}
        {console.log(stuff.Appliance)}
        <p>{stuff.Appliance}</p>
        <p>{console.log(JSON.stringify(stuff))}</p>
        <p>{JSON.stringify(stuff)}</p>

        <table variant="dark" responsive="sm" size="sm">
                    <thead>
                        <tr>
                        <th > <font>Appliance</font>  </th>
                        <th >  <font>Power</font>  </th>
                        <th >   <font>Time</font>  </th>
                        </tr>
                        </thead>
                        <tbody>
                            {Object.keys(stuff).map(item =>  
                            <tr key={item.Appliances_id}>
                                <td >{item.Appliance}</td>
                                <td >{item.Powerusage}</td>
                                <td >{item.Timeusage}</td>
                                </tr> )}
                        </tbody>
                </table>
    </div>
    )


}

export default ListofAppliances;