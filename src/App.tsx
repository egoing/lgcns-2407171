import { useState } from "react";
import "./App.css";

function Counter({ title, initValue }: { title: string; initValue: number }) {
    // const countState = useState(initValue);
    // const count = countState[0];
    // const setCount = countState[1];
    const [count, setCount] = useState(initValue);
    function handleClick() {
        // 이 코드가 실행될 때 initValue의 값을 1씩 증가시키고 싶다.
        // initValue가 변경될 때마다 컴포넌트함수가 다시 실행되어서 변경된 값이 반영된 코드가 다시 랜더링 되게 하고 싶다.
        setCount(count + 1);
    }
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
