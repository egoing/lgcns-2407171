import "./App.css";
import { Container } from "@mui/material";
import Counter from "./Counter";

function App() {
    return (
        <Container maxWidth="sm">
            <Counter title="Counter 1" initValue={10} />
        </Container>
    );
}

export default App;
