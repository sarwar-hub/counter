import { useSelector } from "react-redux";

const Display = () => {
    const {run, wicket, ball} = useSelector(state => state.counter)
    
    return (
        <div className="bg-slate-700 text-slate-200">
            <div className="text-center text-3xl font-bold py-5">
                <span>{run}</span>/<span>{wicket}</span> - <span>{ball}</span>
            </div>
        </div>
    );
};

export default Display;