import React, { useEffect, useState } from "react"

function App(){
    const [dog, setDogs] = useState(false)

    useEffect(() => {

        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(r => r.json())
        .then((data) => setDogs(data.message))
        .catch(error => console.log(error));
    }, [])

    return (
        <div> 
            {dog ? (<img src={dog} alt="A Random Dog"></img>) : (<p>"Loading..."</p>)}
        </div>
       
    )
}

export default App;



