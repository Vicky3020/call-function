import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';

const Calc = () => {

    const[num1,setNum1]=useState(1);
    const[num2,setNum2]=useState(1);
    const[ans,setAns]=useState(0);


    function calculateAnswer() {
        setAns(num1 + num2);
    }

    useEffect(()=>{
        calculateAnswer();
    },[num1,num2]); 
      //  npm i react-toastify
    const handleClick = ()=> {
      toast.success('Button was clicked successfully')
    }


  return (
    <>
      <ToastContainer autoClose={1000} position='bottom-left' />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-indigo-950 flex items-center justify-center p-8">
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 max-w-md w-full space-y-6">
        <div className="flex items-center justify-center space-x-4 p-4 bg-white/5 rounded-2xl backdrop-blur-md shadow-inner">
          <button onClick={()=> setNum1(num1-1)} className="w-12 h-12 bg-gradient-to-r from-gray-500/20 to-gray-600/20 hover:from-gray-400/30 hover:to-gray-500/30 text-white rounded-xl shadow-lg shadow-black/20 hover:shadow-xl transition-all duration-200 flex items-center justify-center text-xl font-bold active:scale-95 active:shadow-md border border-white/10">
            -
          </button>
          <p className="text-2xl font-bold text-white min-w-[2rem] text-center tracking-wide">{num1}</p>
          <button onClick={()=> setNum1(num1+1)} className="w-12 h-12 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 hover:from-emerald-400/30 hover:to-emerald-500/30 text-white rounded-xl shadow-lg shadow-black/20 hover:shadow-xl transition-all duration-200 flex items-center justify-center text-xl font-bold active:scale-95 active:shadow-md border border-white/10">
            +
          </button>
        </div>
        <div className="flex items-center justify-center space-x-4 p-4 bg-white/5 rounded-2xl backdrop-blur-md shadow-inner">
          <button onClick={()=> setNum2(num2-1)} className="w-12 h-12 bg-gradient-to-r from-gray-500/20 to-gray-600/20 hover:from-gray-400/30 hover:to-gray-500/30 text-white rounded-xl shadow-lg shadow-black/20 hover:shadow-xl transition-all duration-200 flex items-center justify-center text-xl font-bold active:scale-95 active:shadow-md border border-white/10">
            -
          </button>
          <p className="text-2xl font-bold text-white min-w-[2rem] text-center tracking-wide">{num2}</p>
          <button onClick={()=> setNum2(num2+1)} className="w-12 h-12 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 hover:from-emerald-400/30 hover:to-emerald-500/30 text-white rounded-xl shadow-lg shadow-black/20 hover:shadow-xl transition-all duration-200 flex items-center justify-center text-xl font-bold active:scale-95 active:shadow-md border border-white/10">
            +
          </button>
        </div>
        <div className="text-center p-6 bg-gradient-to-r from-emerald-500/20 to-blue-600/20 rounded-2xl backdrop-blur-md shadow-xl border border-white/20">
          <p className="text-3xl font-black text-white tracking-wide">Ans: {ans}</p></div>
          <div onClick={handleClick}
            className='text-center text-white font-bold text-2xl'
          > 
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Calc



