const express = require('express')
const app = express()
const cron = require('node-cron')
const moment = require('moment')


const events = [
    { text: "textOne", dateTime: "0 18 17 13 2 1"},
    { text: "textTwo", dateTime: "30 10 21 12 2 0" },
    { text: "textThree", dateTime: "0 12 00 13 2 1" },
    { text: "textFour", dateTime: "30 15 23 14 2 2" },
    { text: "textFive", dateTime: "30 15 23 15 2 3" },
    { text: "textSix", dateTime: "30 15 23 16 2 4" },
    { text: "textSeven", dateTime: "30 15 23 17 2 5" },
    { text: "textEight", dateTime: "30 15 23 18 2 6" },
    { text: "textNine", dateTime: "30 15 23 19 2 0" },
    { text: "textTen", dateTime: "30 15 23 20 2 1" }
  ];
//trigger function
const trigger = function (text){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(text.split("").reverse().join(""))
        },7000)
    })
};

//calling trigger function 

function Schedule(){
    for(let i=0 ; i<=events.length-1 ;i++){
        cron.schedule(events[i].dateTime , async ()=>{
         const result = await trigger(events[i].text);
         console.log(`text:${result}`);
         console.log("dateTime:" ,moment().format("YYYY-MMM-DD hh:mm:ss:000"));

        })
    }

}

Schedule();

app.listen(3000, () => {
  console.log("application running")

})