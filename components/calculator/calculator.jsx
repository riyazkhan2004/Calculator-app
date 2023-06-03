import React from "react";


const Button = (props) => {
    return (
        <input className="text-8xl p-10 m-4 rounded-xl bg-slate-50" type="button" value={props.label} />
    );
};



const Calculator = () => {
    return (<>
        <div className="grid">
            <input className="border-4 container bg-white rounded-xl  w-1/3 h-16 m-2 justify-self-center" type="text" id="in" readOnly ></input>
        </div>
        <div className="flex justify-evenly">
            <div className="grid grid-rows-4 grid-cols-5 grid-flow-col gap-px rounded-xl bg-rose-500 opacity-40 h-13 w-1/3 m-1 ">
                <Button label={"C"} />
                <Button label={"D"} />
                <Button label={"."} />
                <Button label={"/"} />
                <Button label={"1"} />
                <Button label={"4"} />
                <Button label={"7"} />
                <Button label={"*"} />
                <Button label={"2"} />
                <Button label={"5"} />
                <Button label={"8"} />
                <Button label={"-"} />
                <Button label={"3"} />
                <Button label={"6"} />
                <Button label={"9"} />
                <Button label={"+"} />
                <Button label={"0"} />
                <Button label={"="} />
            </div>
        </div>
    </>
    );
}

export default Calculator;

