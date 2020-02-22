import React,{useReducer} from 'react';
import axios from 'axios'
import {Switch,Route} from 'react-router-dom'


import './App.css';
import Details from './components/inputform'
import Header from './components/header'
import ListofAppliances from './components/ListofAppliances'
import Footer from './components/footer'
export const APPLContext = React.createContext()


const initialState = {
  Checkaddswitch:true,
  id:0,
  Room:'',
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

    
      AddToDatabase(action.newapplianceid,action.TypeOfPower,action.NameOfAppliance,action.PU,action.W,action.Room);
      
  

      return {
        ...state,
        Room: action.Room,
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
      
          if (state.Checkaddswitch === true){
        return{
          ...state,
          
          Totalpower: state.Totalpower + action.sum,
          
        }
      }
      else{
        console.log(state.Checkaddswitch)
        return{
          ...state
        }
      }
      
        case 'SET_APPLIANCE_ID':
            console.log('this is the applianceid-----' + action.applianceid)
        return{
          ...state,
          Applianceid: action.applianceid,
          

        }

        case 'CHANGE_CHECKADDSWITCH_TO_FALSE':
            return{
              ...state,
              Checkaddswitch: action.acCheckaddswitch,
              
    
            };

        case 'DISPLAY_STATE':
            console.log('the state of watts has changed to' + state.Watts + ' this is the action ' + action.type)
            console.log( 'this is the  room =' +state.Room)  
            
            console.log( 'this is the  Power Cal =' +state.PowerCal)  
            console.log( 'this is the  TotalPower Cal =' +state.Totalpower)
            console.log( 'this is the array in the ListOfAppliances')  
            console.log(state.ListOfAppliances)
            console.log('this is the applianceid = ' + state.Applianceid)
            console.log('The Checkaddswitch = ' + state.Checkaddswitch)
            return{
          ...state
          
          };
      default:
        return state;

  }
}

async function AddToDatabase (Applianceid,TypeOfPower,NameOfAppliance,Timeusage,Powerusage,Room){
 // (Appliances_id,console.logAppliance,Powerusage,Timeusage,Type)
  //Applianceid,NameOfAppliance,Powerusage,Timeusage,TypeOfPower
  console.log('database is being update with the following fields')
  console.log(Applianceid)
  console.log(TypeOfPower)
  console.log(NameOfAppliance)
  console.log(Timeusage)
  console.log(Powerusage)

 // axios.post('/Appliances?Applianceid=' + Applianceid + '&NameOfAppliance='+NameOfAppliance+'&Powerusage=' + Powerusage + '&Timeusage='+Timeusage+'&TypeOfPower='+TypeOfPower)
 axios.post('/Appliances/add?Applianceid=' + Applianceid + '&NameOfAppliance='+NameOfAppliance+'&Powerusage=' + Powerusage+ '&Timeusage='+Timeusage+'&TypeOfPower='+TypeOfPower+'&Room='+Room)
  
  .then(res => {
    console.log(res);
    console.log(res.data);
    
  })
  
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
 <APPLContext.Provider value = {{AllState: state, AllDispatch: dispatch}}>
    <Header></Header>
    
    <Switch>
        <Route exact path={'/'} component={ListofAppliances} />
        <Route exact path={'/inputform'} component={Details} />
    </Switch>
    <Footer></Footer>
  </APPLContext.Provider>
    );
}

export default App;
