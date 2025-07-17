import "./App.css";

// function Counter(props) {
//     return (
//         <div>
//             <h1>{props.title}</h1>
//             <button>+</button> {props.initValue}
//         </div>
//     );
// }

// function Counter({ title, initValue }) {
//     return (
//         <div>
//             <h1>{title}</h1>
//             <button>+</button> {initValue}
//         </div>
//     );
// }

// type CounterProps = {
//     title: string;
//     initValue: number;
// };

// function Counter({ title, initValue }: CounterProps) {
//     return (
//         <div>
//             <h1>{title}</h1>
//             <button>+</button> {initValue}
//         </div>
//     );
// }

function Counter({ title, initValue }: { title: string; initValue: number }) {
    return (
        <div>
            <h1>{title}</h1>
            <button>+</button> {initValue}
        </div>
    );
}

function App() {
    return (
        <>
            <Counter title="Counter 1" initValue={0} />
            <Counter title="Counter 2" initValue={0} />
            <Counter title="Counter 3" initValue={0} />
        </>
    );
}

export default App;
