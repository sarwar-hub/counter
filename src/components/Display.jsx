import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Display = () => {
    const {run, wicket, ball} = useSelector(state => state.counter)
    
    const[over, setOver] = useState(0);
    const[restBall, setRestBall] = useState(0);

    useEffect(()=>{
        if(ball){
            const floatOver = ball/6;
            const over = parseInt(floatOver)
            const restBall = ball%6;
            setOver(over)
            setRestBall(restBall)
        }
    },[ball])
    

    return (
        <div className="bg-slate-700 text-slate-200">
            <div className="text-center text-3xl font-bold py-5">
                <span>{run}</span>/<span>{wicket}</span> - <span>{over}<span className={`${restBall==0?'hidden':''}`}>.{restBall}</span></span>
            </div>
        </div>
    );
};

export default Display;