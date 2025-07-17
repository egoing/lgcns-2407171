import { useState } from "react";
import { Button } from "@mui/material";
export default function Counter({
    title,
    initValue,
}: {
    title: string;
    initValue: number;
}) {
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
