import './App.css'
import CreateTable from "./Components/CreateTable.tsx";
import {useState} from "react";

const App = () => {

    const [items, setItems] = useState(CreateTable());

};

export default App
