import React, { useState } from "react";



function strconv(){
    globalexp=eval(globalstr)
}

const Button = (props) => {
    
    return (
        <input className="text-8xl p-10 m-4 rounded-xl bg-slate-50" type="button" value={props.label} style={{cursor:"pointer"}} onClick={(eventc)=>{props.onClickevent(eventc)}}/>
    );
};

const Calculator = () => {
    const proparray=['1','2','3','4','5','6','7','8','9','0','C','D','+','-','*','/','=','.'];
    let globalstr='';
    function charRead(chartemp){
        globalstr = globalstr.concat(chartemp);
        console.log(globalstr);
    }
    function strDel(){
        globalstr='';
    }
    function strconv(){
        globalstr=eval(globalstr);
        console.log(globalstr);
    }
    return (<>
        <div className="grid">
            <input className="border-4 container bg-white rounded-xl  w-1/3 h-16 m-2 justify-self-center" type="text" id="in" disabled ></input>
        </div>
        <div className="flex justify-evenly">
            <div className="grid grid-rows-4 grid-cols-5 grid-flow-row gap-px rounded-xl bg-rose-500 opacity-40 h-13 w-1/3 m-1 ">
                <Button label={proparray[0]} onClickevent={(eventc)=>charRead(proparray[0])}/>
                <Button label={proparray[1]} onClickevent={(eventc)=>charRead(proparray[1])}/>
                <Button label={proparray[2]} onClickevent={(eventc)=>charRead(proparray[2])}/>
                <Button label={proparray[3]} onClickevent={(eventc)=>charRead(proparray[3])}/>
                <Button label={proparray[4]} onClickevent={(eventc)=>charRead(proparray[4])}/>
                <Button label={proparray[5]} onClickevent={(eventc)=>charRead(proparray[5])}/>
                <Button label={proparray[6]} onClickevent={(eventc)=>charRead(proparray[6])}/>
                <Button label={proparray[7]} onClickevent={(eventc)=>charRead(proparray[7])}/>
                <Button label={proparray[8]} onClickevent={(eventc)=>charRead(proparray[8])}/>
                <Button label={proparray[9]} onClickevent={(eventc)=>charRead(proparray[9])}/>
                <Button label={proparray[10]} onClickevent={()=>strDel()}/>
                <Button label={proparray[11]} onClickevent={()=>strDel()}/>
                <Button label={proparray[12]} onClickevent={(eventc)=>charRead(proparray[12])}/>
                <Button label={proparray[13]} onClickevent={(eventc)=>charRead(proparray[13])}/>
                <Button label={proparray[14]} onClickevent={(eventc)=>charRead(proparray[14])}/>
                <Button label={proparray[15]} onClickevent={(eventc)=>charRead(proparray[15])}/>
                <Button label={proparray[16]} onClickevent={(eventc)=>strconv()}/>
                <Button label={proparray[17]} onClickevent={(eventc)=>charRead(proparray[17])}/>
            </div>
        </div>
    </>
    );
}

export default Calculator;

