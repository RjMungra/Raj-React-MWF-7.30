import React from 'react';
import {Calc,operaton,Clear,evalu} from './component/Cal';
import "./App.css"
const App = () => {
  return (
    <>
      <div className="conatiner w-50">
        <table className='table table-responsive w-100'>
          <tr>
          <td><input type="text" id='result' placeholder='0'  className='form-control bg-white' /></td>
          </tr>
          <tr>
            <td>
              <button type="button" className='form-control bg-white w-25' value="%" onClick={(e)=>{operaton(e)}}>%</button>
              <button type="button" className='form-control bg-white w-25' value="CE" onClick={()=>{Clear()}}>CE</button>
              <button type="button" className='form-control bg-white w-25' value="C" onClick={()=>{Clear()}}>C</button>
              <button type="button" className='form-control bg-white w-25' value="X" onClick={()=>{Clear()}}>X</button>
            </td>
          </tr>
          <tr>
            <td>
              <button type="button" className='form-control bg-white w-25' value="1/x">1/x</button>
              <button type="button" className='form-control bg-white w-25' value="x*x">x*x</button>
              <button type="button" className='form-control bg-white w-25' value="X">x</button>
              <button type="button" className='form-control bg-white w-25' value="/" onClick={(e)=>{operaton(e)}}>/</button>
            </td>
          </tr>
          <tr>
            <td>
              <button type="button" className='form-control bg-white w-25' value="7" onClick={(e)=>{Calc(e)}} >7</button>
              <button type="button" className='form-control bg-white w-25' value="8" onClick={(e)=>{Calc(e)}}>8</button>
              <button type="button" className='form-control bg-white w-25' value="9" onClick={(e)=>{Calc(e)}}>9</button>
              <button type="button" className='form-control bg-white w-25' value="*" onClick={(e)=>{operaton(e)}}>*</button>
            </td>
          </tr>
          <tr>
            <td>
              <button type="button" className='form-control bg-white w-25' value="4" onClick={(e)=>{Calc(e)}}>4</button>
              <button type="button" className='form-control bg-white w-25' value="5" onClick={(e)=>{Calc(e)}}>5</button>
              <button type="button" className='form-control bg-white w-25' value="6" onClick={(e)=>{Calc(e)}}>6</button>
              <button type="button" className='form-control bg-white w-25' value="-" onClick={(e)=>{operaton(e)}}>-</button>
            </td>
          </tr>
          <tr>
            <td>
              <button type="button" className='form-control bg-white w-25' value="1" onClick={(e)=>{Calc(e)}}>1</button>
              <button type="button" className='form-control bg-white w-25' value="2" onClick={(e)=>{Calc(e)}}>2</button>
              <button type="button" className='form-control bg-white w-25' value="3" onClick={(e)=>{Calc(e)}}>3</button>
              <button type="button" className='form-control bg-white w-25' value="+" onClick={(e)=>{operaton(e)}}>+</button>
            </td>
          </tr>
          <tr>
            <td>
              <button type="button" className='form-control bg-white w-25' value="+/-" onClick={(e)=>{operaton(e)}}>+/-</button>
              <button type="button" className='form-control bg-white w-25' value="0" onClick={(e)=>{Calc(e)}}>0</button>
              <button type="button" className='form-control bg-white w-25' value="00" onClick={(e)=>{Calc(e)}}>00</button>
              <button type="button" className='form-control bg-white w-25' value="=" onClick={(e)=>{evalu(e)}}>=</button>
            </td>
          </tr>
        </table>
      </div>      
    </>
  )
}

export default App
