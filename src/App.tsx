import { useState } from "react";
import "./App.css";

function Counter({ title, initValue }: { title: string; initValue: number }) {
    const [count, setCount] = useState(initValue);
    // function handleClick() {
    //     setCount(count + 1);
    // }

    // const handleClick = () => {
    //     setCount(count + 1);
    // };

    const handleClick = () => setCount(count + 1);

    return (
        <div>
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
