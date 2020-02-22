import React,{useReducer} from 'react';
import axios from 'axios'

import './App.css';
import Details from './components/inputform'
import Header from './components/header'
import ListofAppliances from './components/ListofAppliances'

export const APPLContext = React.createContext()


const initialState = {
  id:0,
  Applianceid:0,
  TypeOfPower:'',
  NameOfAppliance:'',
  Timeusage:0,
  Powerusage:0,
  Totalpower:0,
  PowerCal:0,
  ListOfAppliances:[]
}

const reducer = (state , action) =>{

  switch (action.type){
    case 'ADD_FROM_FORM':

    
      AddToDatabase(action.newapplianceid,action.TypeOfPower,action.NameOfAppliance,action.PU,action.W);
     
      return {
        ...state,
        TypeOfPower : action.TypeOfPower,
        NameOfAppliance : action.NameOfAppliance,
        Timeusage : action.PU,
        Powerusage : action.W,
        PowerCal : action.PU * action.W,
        Totalpower: state.Totalpower + (action.PU * action.W),
        Applianceid: action.newapplianceid,
        };
        
       

        case 'ADD_FROM_DATABASE_API':
          console.log('updating ListOfAppliances')
          console.log(action.finalresult)
          return{
            ...state,
            ListOfAppliances:action.finalresult,
          };
        
        case 'ADD_TO_TOTAL_POWER':
        console.log('this is the sum for the total power' + action.sum)
        return{
          ...state,
          Totalpower: state.Totalpower + action.sum,
        }
        case 'SET_APPLIANCE_ID':
            console.log('this is the applianceid-----' + action.applianceid)
        return{
          ...state,
          Applianceid: action.applianceid,

        }

        case 'DISPLAY_STATE':
            console.log('the state of watts has changed to' + state.Watts + ' this is the action ' + action.type)
            console.log( 'this is the  Power Cal =' +state.PowerCal)  
            console.log( 'this is the  TotalPower Cal =' +state.Totalpower)
            console.log( 'this is the array in the ListOfAppliances')  
            console.log(state.ListOfAppliances)
            console.log('this is the applianceid' + state.Applianceid)
            return{
          ...state
          
          };
      default:
        return state;

  }
}

async function AddToDatabase (Applianceid,TypeOfPower,NameOfAppliance,Timeusage,Powerusage){
 // (Appliances_id,console.logAppliance,Powerusage,Timeusage,Type)
  //Applianceid,NameOfAppliance,Powerusage,Timeusage,TypeOfPower
  console.log('database is being update with the following fields')
  console.log(Applianceid)
  console.log(TypeOfPower)
  console.log(NameOfAppliance)
  console.log(Timeusage)
  console.log(Powerusage)

 // axios.post('/Appliances?Applianceid=' + Applianceid + '&NameOfAppliance='+NameOfAppliance+'&Powerusage=' + Powerusage + '&Timeusage='+Timeusage+'&TypeOfPower='+TypeOfPower)
 axios.post('/Appliances/add?Applianceid=' + Applianceid + '&NameOfAppliance='+NameOfAppliance+'&Powerusage=' + Powerusage+ '&Timeusage='+Timeusage+'&TypeOfPower='+TypeOfPower)
  
  .then(res => {
    console.log(res);
    console.log(res.data);
    
  })
  
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
 <APPLContext.Provider value = {{AllState: state, AllDispatch: dispatch}}>
    <div>
      <Header />
      <ListofAppliances />
      <Details />
    </div>
  </APPLContext.Provider>
    );
}

export default App;
