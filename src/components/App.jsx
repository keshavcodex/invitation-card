import React from "react";
import namelist from "../namelist";
import Entry from "./Entry";

function createCard(list){
    return (
            <Entry 
                key = {list.id}
                name = {list.name}
                venue = {list.venue}
                address = {list.address}
            />
    );
}

function App(){
    return (
        <div>
            <dl className="dictionary">
                {namelist.map(createCard)}
            </dl>
        </div>
    );
}

export default App;