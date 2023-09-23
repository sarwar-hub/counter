
const Input = () => {
    return (
        <div className="bg-slate-300 text-slate-700 py-5">
            <div className="text-center">
                <button className="bg-slate-400 text-white font-bold px-6 py-3 text-3xl hover:transform hover:scale-125 transition">1</button>
                <button className="bg-slate-500 text-white font-bold px-6 py-3 text-3xl hover:transform hover:scale-125 transition">2</button>
                <button className="bg-slate-600 text-white font-bold px-6 py-3 text-3xl hover:transform hover:scale-125 transition">3</button>
                <button className="bg-slate-700 text-white font-bold px-6 py-3 text-3xl hover:transform hover:scale-125 transition">4</button>
                <button className="bg-slate-800 text-white font-bold px-6 py-3 text-3xl hover:transform hover:scale-125 transition">5</button>
                <button className="bg-slate-900 text-white font-bold px-6 py-3 text-3xl hover:transform hover:scale-125 transition">6</button>
            </div>
            <div className="mt-10 text-center space-x-10">
                <button className="bg-white font-bold p-1 text-3xl border-4 text-blue-500 border-blue-500 hover:transform transition hover:scale-125">Ball+</button>
                <button className="bg-white font-bold p-1 text-3xl border-4 text-red-500 border-red-500 hover:transform transition hover:scale-125">Wicket+</button>
            </div>
        </div>
    );
};

export default Input;