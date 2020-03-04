const express =  require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

app.use(cors());
const SELECT_ALL_Appliances_QUERY = 'SELECT * FROM Appliances order by Room';

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'****',
    database:'Solar'
});

connection.connect(err => {
    if(err){
        return err;
    }
});

console.log(connection);

//test data for a route
app.get('/api/People', (req,res) => {
const people = [
 {   id: '1', firstname:'john', lastname:'crakers'},
  {   id: '2', firstname:'willy', lastname:'smith'},
   {  id: '3', firstname:'bill', lastname:'smith'}
 ];
 res.json(Students)

});



app.get('/', (req,res) => {
    res.send('go to / Weather')
});

//route for the weather database
app.get('/weather/search', (req,res) => {
    const {cityid} = req.query;
    const SELECT_ALL_Weather_QUERY = 'SELECT * FROM weather WHERE Location_id = '+ cityid;
    connection.query(SELECT_ALL_Weather_QUERY,(err, results) =>{
        if(err) {

            return res.send(err)
        }
        else {
            return res.json({
                data: results
             })
        }
     });
});

//route to add rooms to Solar database for solar app
app.post('/Appliances/add?', (req,res) => {

    console.log('adding information to database from express')

    //const { Applianceid,NameOfAppliance,Powerusage,Timeusage,TypeOfPower} = req.query;
    const { Applianceid,NameOfAppliance,Powerusage,Timeusage,TypeOfPower,Room} = req.query;
    
   // const INSERT_ALL_APLLIANCES_QUERY = 'INSERT INTO appliances (Appliances_id,Appliance,Powerusage,Timeusage,Type)VALUES('+  Applianceid + ',' + NameOfAppliance +',' + Powerusage + ',' + Timeusage + ',' + TypeOfPower +')';
    const INSERT_ALL_APLLIANCES_QUERY = 'INSERT INTO appliances (Appliances_id,Appliance,Powerusage,Timeusage,Type,Room)VALUES('+  Applianceid + ',"' + NameOfAppliance +'","'+Powerusage+'","'+Timeusage+'","'+TypeOfPower+'","'+Room+'")';
    
    connection.query(INSERT_ALL_APLLIANCES_QUERY,(err, results) =>{
        if(err) {
            
            return res.send(err)
        }
        else {
            return res.json({
                data: results
             })
        }
     });
});

//route to return appliances from Solar database
app.get('/Appliances', (req,res) => {
    connection.query(SELECT_ALL_Appliances_QUERY,(err, results) =>{
        if(err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
             })
        }
     });
});

const port = 4000;

app.listen(port, () => console.log('Server started on port ' + port));
