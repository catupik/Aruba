import { useState } from "react";
import { dataBeaches } from "./dataBeaches";
import './App.css';


function Beaches(){
    const [beaches, setBeaches] = useState(dataBeaches);

    const removeBeach = (id)=>{
        let newArray = beaches.filter(beach=> beach.id !== id);
        setBeaches(newArray);
    }

    const removeAll = () =>{
        setBeaches([]);
    }
    return(
        
            <div className="beaches"  >
                <h1 className="container top">Top {dataBeaches.length} Aruba's beaches</h1>
                {beaches.map((item =>{
                    const {id, beach, picture, description} = item;
                    return(
                        <div className="beaches" key={id}>
                            <h2 className="container">{id} - {beach}</h2>
                            <div className="container">
                                <p >{description}</p>
                            </div>
                            <div className="container">
                                <img src={picture} width='500' alt='beach'/>
                            </div>

                            <div className="container">
                                <button onClick={()=> removeBeach(id)}>Delete</button>
                            </div>
                        </div>
                    )
                }))}

                <div className="container">
                    <button onClick={()=>removeAll()}>Remove alll</button>
                </div>
            </div>
        
    )
}

export default Beaches;