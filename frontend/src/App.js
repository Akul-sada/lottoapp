
import React, { useState } from 'react';


import './App.css';
import EditableText from './EditableText';



function App() {
  // To find the todays date in day month year format we will write a function
  
  const today = new Date();
  const getTodaysDate =()=>{
    const year = today.getFullYear();
    const month = today.toLocaleString('default',{month:'long'});
    const date = today.getDate();
    const formattedDate = `${date} ${month} ${year}`;
    return formattedDate;
  }
  // const getDrawDate = ()=>{
  //   console.log(today.getDay);
  //   const drawDate = today.getDate() 
  //   return drawDate;
  // }

  // 

  

  // Implementing lotteryCount
  
  const [lotteryCount,setLotteryCount] = useState(1);

  const incrementByOne =()=>{
    setLotteryCount(lotteryCount+1);
  }
  const decrementByOne =()=>{
    setLotteryCount(lotteryCount-1);
  }
  const reset =()=>{
    setLotteryCount(1);
  }

// Implement change of lottery serial number
const serialArray = ["First Number","Second Number","Third Number","Fourth Number","Fifth Number","Sixth Number"];
  let [lotteryIndexSerial,setLotteryIndexSerial] = useState(1);
  function incrementSerialByOne(){
    if(lotteryIndexSerial>6) {
      setLotteryIndexSerial(0);
    }
    setLotteryIndexSerial(lotteryIndexSerial+1);
  }
  function resetSerial(){
    setLotteryIndexSerial(0);
  }

  // input lottery date

  
  // const [drawDate,setDrawDate] = useState('dd/mm/yyyy');
  // funtion that input date in dd/october/yyyy and displays it in the UI

  // function onDateChange(date){
  //   const [dd,mm,yyyy] = date.split('/');
  //   setDrawDate(`${dd} ${mm} ${yyyy}`);
  // }
  const lotteryInfo = {
    lotteryName:"Lotto India The first free online lottery",
    // To find the draw date we have to find current date and figure out what is the draw date
    // 
    // drawDate: drawDate

  }

  return (
    <>
      <div className="App">
        {/* <form>
          <label >Enter the draw date</label>
          <input/>
          <button onClick={onDateChange}>Submit</button>
        </form> */}
        <header className="App-header">
          <h3>Today's Date is:</h3>
          <p>{getTodaysDate()}</p>
        </header>
        <h3 style={{color:'green'}}>The <span style={{fontSize:'40px'}}>{serialArray[lotteryIndexSerial]}</span> of the lottery ticket of <span style={{fontSize:'30px'}} >{lotteryInfo.lotteryName}</span> and the draw date is on <EditableText style={{fontSize:'50px'}} initialText='DD/MM/YYYY'>22 October 2024</EditableText>is<span style={{fontSize:'90px'}}>{lotteryCount}</span>.</h3>
        <div className='changeLotterySerial'>
          <button className="btn" onClick={incrementSerialByOne}>Next serial</button>
          <button className="btn" onClick={resetSerial}>Reset Serial</button>
        </div>
        <button className="btn" onClick={decrementByOne}>Previous</button>
        <button className="btn" onClick={incrementByOne}>Next</button>
        <button className="btn" onClick={reset}>Reset</button>
        <div className="display-lottery-number-color">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
        </div>
      </div>      
    </>
  );
}

export default App;
