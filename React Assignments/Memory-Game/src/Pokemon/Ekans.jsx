import { useState } from "react";

function Ekans(){
    const [url, seturl] = useState("");
    const [name, setname] = useState("");
    const [weight, setweight] = useState("");
    const [baseStat, setbaseStat] = useState("");
    const [height, setheight] = useState("");
    const [baseExperience, setbaseExperience] = useState("");

    async function getEkans(){
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/ekans/");
        const data = await response.json();
        seturl(data.sprites.front_default);
        setname(data.name);
        setweight(data.weight);
        setheight(data.height);
        setbaseStat(data.stats[0].base_stat);
        setbaseExperience(data.base_experience);

    }
    getEkans();
    return(
    <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={url} alt="Avatar" />
                  </div>
                  <div className="flip-card-back">
                    <h1>{name}</h1>
                    <p>Weight : {weight}</p>
                    <p>Height : {height}</p>
                    <p>Base Stat : {baseStat}</p>
                    <p>Base Experience : {baseExperience}</p>
                  </div>
                </div>
    </div>
    )
}

export default Ekans;