import { useState } from "react";
import "./App.css";

function Counter({ title, initValue }: { title: string; initValue: number }) {
    const [count, setCount] = useState(initValue);
    const handleClick = () => setCount(count + 1);
    const css = {
        border: "5px solid black",
        backgroundColor: "gray",
        padding: "10px",
    };
    return (
        <div style={css}>
            <h1>{title}</h1>
            <button onClick={handleClick}>+</button> {count}
        </div>
    );
}

function App() {
    return (
        <>
            <Counter title="Counter 1" initValue={10} />
        </>
    );
}

export default App;
