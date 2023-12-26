const root = ReactDOM.createRoot(document.getElementById('root'));

function Counter() {
    return (
        <div className="counter">
            <button>+</button>
            <h2>{0}</h2>
            <button>-</button>
            <button>C</button>
        </div>
    );
}

function App() {
    return (
        <div>
            <Counter />
        </div>
    );
}

root.render(<App />);
