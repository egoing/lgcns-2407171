import { useState } from "react";
import "./App.css";
import s from "./App.module.css";
import { Button, Container } from "@mui/material";
console.log("🚀 ~ s:", s.btn);

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
            <Button variant="contained" size="small" onClick={handleClick}>
                +
            </Button>{" "}
            {count}
        </div>
    );
}

function App() {
    return (
        <Container maxWidth="sm">
            <Counter title="Counter 1" initValue={10} />
        </Container>
    );
}

export default App;
