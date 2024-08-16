import { useState, useId } from 'react'
import './App.css'

function App() {
  const inputDivId1 = useId();
  const inputDivId2 = useId();
  const inputDivId3 = useId();

  const [principalAmount, setPrincipalAmount] = useState(0);
  const [rateOfInterest, setRateOfInterest] = useState(0);
  const [timeperiod, setTimerPeriod] = useState(0);
  const [totalSimpleInterest, setTotalSimpleInterest] = useState(0);

  const calcInterest = (e)=>{
    e.preventDefault();
    let simpleInterest = (rateOfInterest/100) * principalAmount * timeperiod;

    setTotalSimpleInterest(simpleInterest);
    
  }

  return (
    <>
      <div className='container w-fit flex flex-col gap-[2rem] p-[2rem]'>
        <div className='flex gap-2 flex-col'>
          <h1 className='text-4xl font-bold'>Simple Interest Calculator</h1>
          <p>Calculate your simple interest Easy</p>
        </div>

        <form  className='flex flex-col gap-8'>
          <div className='flex flex-col items-center bg-yellow-200 h-28 gap-3 justify-center'>
            <h1 className='text-3xl font-bold'>Rs. {totalSimpleInterest}</h1>
            <h3>Total Simple Interest</h3>
          </div>

          <div className="input-div">
            <label htmlFor={inputDivId1}>Principal Amount</label>
            <input type="text" name="" id={inputDivId1} value={principalAmount} onChange={(e)=>setPrincipalAmount(e.target.value)}/>
          </div>
          <div className="input-div">
            <label htmlFor={inputDivId1}>Rate of Interest(p.a) %</label>
            <input type="text" name="" id={inputDivId1} value={rateOfInterest} onChange={(e)=>setRateOfInterest(e.target.value)}/>
          </div>
          <div className="input-div">
            <label htmlFor={inputDivId1}>Time Period(Yr)</label>
            <input type="text" name="" id={inputDivId1} value={timeperiod} onChange={(e)=>setTimerPeriod(e.target.value)}/>
          </div>

          <div className='flex justify-center gap-6'>
            <button type='submit' className='p-3 bg-black w-[48%] text-white hover:bg-white hover:text-black hover:border-black hover:border-2 duration-300' onClick={calcInterest}>Submit</button>
            <button type='submit' className='p-3 border-black border-2 w-[48%] hover:bg-black hover:border-2 hover:border-white hover:text-white duration-500' onClick={()=>window.location.reload()}>Reset</button>
          </div>

        </form>

      </div>
    </>
  )
}

export default App
