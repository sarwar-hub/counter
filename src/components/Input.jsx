import { useDispatch } from "react-redux";
import { run, wicket, ball } from "../redux/features/counter/counterSlice";

const Input = () => {
    const dispatch = useDispatch();
    return (
        <div className="bg-slate-300 text-slate-700 py-5">
            <div className="text-center">
                <button onClick={()=>dispatch(run(1))} className="bg-slate-400 text-white font-bold px-6 py-3 text-3xl hover:transform hover:scale-125 transition">1</button>
                <button onClick={()=>dispatch(run(2))} className="bg-slate-500 text-white font-bold px-6 py-3 text-3xl hover:transform hover:scale-125 transition">2</button>
                <button onClick={()=>dispatch(run(3))} className="bg-slate-600 text-white font-bold px-6 py-3 text-3xl hover:transform hover:scale-125 transition">3</button>
                <button onClick={()=>dispatch(run(4))} className="bg-slate-700 text-white font-bold px-6 py-3 text-3xl hover:transform hover:scale-125 transition">4</button>
                <button onClick={()=>dispatch(run(5))} className="bg-slate-800 text-white font-bold px-6 py-3 text-3xl hover:transform hover:scale-125 transition">5</button>
                <button onClick={()=>dispatch(run(6))} className="bg-slate-900 text-white font-bold px-6 py-3 text-3xl hover:transform hover:scale-125 transition">6</button>
            </div>
            <div className="mt-10 text-center space-x-10">
                <button onClick={()=>dispatch(ball())} className="bg-white font-bold p-1 text-3xl border-4 text-blue-500 border-blue-500 hover:transform transition hover:scale-125">Ball+</button>
                <button onClick={()=>dispatch(wicket())} className="bg-white font-bold p-1 text-3xl border-4 text-red-500 border-red-500 hover:transform transition hover:scale-125">Wicket+</button>
            </div>
        </div>
    );
};

export default Input;