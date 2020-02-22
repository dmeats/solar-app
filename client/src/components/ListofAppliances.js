import React, {useEffect,useState,useContext} from 'react'
import '../CSS/ListofAppliance.css'
import Axios from "axios";
import {APPLContext} from '../App'



const ListofAppliances = () =>{

  const aPPLContext = useContext(APPLContext)
  const [data, setData] = useState([])

   async function fetchMyAPI() {
    //const response = await Axios.get('https://jsonplaceholder.typicode.com/posts')
    const  response = await Axios.get('/Appliances')
    console.log('this is the stuff' + response)
   
    //gets object response from Mysql database and puts into an array - don't need to do this
    //if your calling an api from the web only for mysql call
    const result = Object.values(response);
    //Gets first element in the array which is the object array of data coming from mysql database
    const ar = Object.values(result[0])
    //Gets first element which is the array
    console.log(ar[0])
    const finalresult = ar[0]
    setData(ar[0])
    aPPLContext.AllDispatch({ type:'ADD_FROM_DATABASE_API' , finalresult})
    aPPLContext.AllDispatch({ type:'DISPLAY_STATE' })

    //update power Total from the information from the database looping through the array of objects
    console.log('updating the power total')
    let sum = 0
    let i = 0
    let j = 0
    let applianceid_ary=[]
    let applianceid = 0
    let emptyarray = 0
    

   for (let fr of finalresult) {
     i = i + 1
      j = ((Number(fr.Timeusage))*(Number(fr.Powerusage)))
      console.log (fr.Timeusage + ' x ' + fr.Powerusage + ' = ' +j )
      sum = sum + j
      //set applianceid for appliction and find
      // the highest applianceid in the sorted result from the database
      applianceid_ary[i]=Number(fr.Appliances_id)
      console.log('this is the id in the array {}{}{}{} == ' + applianceid_ary[i])
      if(applianceid_ary.length === 0){
        applianceid = fr.Appliances_id
        emptyarray = 1

      }
      else
      {
        emptyarray = 1
      }
    }
  
    if(emptyarray === 1){
    applianceid_ary.shift()
    console.log(applianceid_ary)
    
    console.log('this is the largest value in the id array' + Math.max(...applianceid_ary))
    applianceid =  Math.max(...applianceid_ary)
    }
    console.log('this is the sum ============ ' + sum)
    aPPLContext.AllDispatch({ type:'ADD_TO_TOTAL_POWER',sum })
    aPPLContext.AllDispatch({ type:'SET_APPLIANCE_ID',applianceid })
    
    aPPLContext.AllDispatch({ type:'DISPLAY_STATE' })
  
    console.log('===this is the list in the array ===' + aPPLContext.AllState.ListOfAppliances)
    };
        
    
      useEffect(() => {
        console.log('Getting the data')
       

        fetchMyAPI();
            
        
      },[]);
  
      //for styling the list different colors
   const ChangeStyle = (room) => {
     let valueofroom = 'itemdetail'
     switch (room){

      case '':
          console.log('this is the room = ' + room)
        return (
          valueofroom = 'ItemDetail'
          
        ); 
      case 'Bedroom1':
          console.log('this is the room = ' + room)
        return (
          valueofroom = 'Bedroom1'
          
        );
        case 'Bedroom2':
            console.log('this is the room = ' + room)
          return (
            valueofroom = 'Bedroom2'
            
          );
          case 'Bedroom3':
              console.log('this is the room = ' + room)
            return (
              valueofroom = 'Bedroom3'
              
            );
          case 'LivingRoom1':
            return (
              valueofroom = 'LivingRoom1'
            )
          case 'LivingRoom2':
             return (
              valueofroom = 'LivingRoom2'
            )
          case 'LivingRoom3':
                return (
                 valueofroom = 'LivingRoom3'
               )
          case 'Kitchen1':
                return(
                  valueofroom = 'Kitchen1'
                )
          case 'Kitchen2':
                return(
                  valueofroom = 'Kitchen2'
                )
          case 'LaundryRoom':
                return(
                  valueofroom = 'LaundryRoom'
                )
          case 'Garage':
                return(
                  valueofroom = 'Garage'
                )
          case 'Bathroom1':
                return(
                  valueofroom = 'Bathroom1'
                )
          case 'Bathroom2':
                return(
                  valueofroom = 'Bathroom2'
                )
          case 'Basement':
                return(
                  valueofroom = 'Basement'
                )
        default:
            return (valueofroom);

      }
    };

const buildlist = () =>{

  var i;
        for (i = 0; i < 10; i++) {
          
          return(
          <div>
          <p>hi</p> <br></br>
          </div>
          )
        } 
        
      };
  

    return(
    <div className='ListofApplianceContainer'>

        <br></br>
        {console.log('this is the data from the div')}
        {console.log(data)}
        
        <ul >
              {data.map((item,index) => 
                  <li key={index} className={ChangeStyle(item.Room)}>
                            
                              
                     <div><p>{item.Room}-{item.Appliance} - {item.Powerusage}watts - {item.Timeusage}hr - Type:{item.Type} - Power Consumed:{Number(item.Powerusage) * Number(item.Timeusage)}
                      </p> </div> 
                                             
                            
                  </li> )}
        </ul>                
             
    </div>
    
    )


}

export default ListofAppliances;