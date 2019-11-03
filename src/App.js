import React from "react";
import "./App.css";
import Gmaps from "./component/common/Gmaps";

function App() {
    return (
        <div className="App">
            <Gmaps lat={25.60666942} lng={85.13610465} name={"patna"} />
        </div>
    );
}

export default App;
