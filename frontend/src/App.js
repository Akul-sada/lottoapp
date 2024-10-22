
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

  const lotteryInfo = {
    lotteryName:"Lotto India The first free online lottery",
    // To find the draw date we have to find current date and figure out what is the draw date
    // 
    // drawDate:

  }

  // Implementing lotteryCount
  
  const [lotteryCount,setLotteryCount] = useState(1);

  const incrementByOne =()=>{
    setLotteryCount(lotteryCount+1);
  }
  const decrementByOne =()=>{
    setLotteryCount(lotteryCount+1);
  }
  const reset =()=>{
    setLotteryCount(1);
  }



//

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h3>Today's Date is:</h3>
          <p>{getTodaysDate()}</p>
        </header>
        <h3 style={{color:'green'}}>The <EditableText initialText="First Number">First number</EditableText>of the lottery ticket of {lotteryInfo.lotteryName} and the draw date is on 22 October 2024 is {lotteryCount}.</h3>
        <button className="btn" onClick={incrementByOne}>Next</button>
        <button className="btn" onClick={decrementByOne}>Previous</button>
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
