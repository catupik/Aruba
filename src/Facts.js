import { dataFacts } from "./dataFacts";
import { useState } from "react";

function Facts (){
    
    const [facts, setFacts] = useState(0);
    const {id, fact, image} = dataFacts[facts]

    const previousFact = () => {
        setFacts(fact => {
            fact --;
            if (fact < 0){
                return dataFacts.length - 1;
            }
            return fact;
        }) 
    }
    const nextFact = () => {
        setFacts(fact=>{
            fact ++;
            if (fact > dataFacts.length - 1){
                fact = 0;
            }
            return fact;
        }) 
    }




    return(
        <div className="whole">
            <div className="container">
                <h1>{dataFacts.length} interesting facts about Aruba</h1>
            </div>

            <div className="container">
                <img src={image} width='500' height='300'/>
            </div>
            <div className="container">
                <h2>Fact №{id}</h2>
            </div>
            <div className="container fact">
                <h3>{fact}</h3>
            </div>

            <div className="container btn">
                <button onClick={previousFact}>Previous Fact</button>
                <button onClick={nextFact}>Next Fact</button>
            </div>
            
        </div>
    )
}

export default Facts;