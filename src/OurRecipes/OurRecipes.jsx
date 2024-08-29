import { useEffect } from "react";
import { useState } from "react";

const OurRecipes = () => {
    const [recipes,setRecipes]=useState([])
    useEffect(()=>{
        fetch('Recipes.json')
        .then(res=>res.json())
        .then(data=> setRecipes(data.recipes))
    },[])
    return (
        <div id="OurRecipes" className="mt-20">
            <h1 className="text-4xl font-bold">Our Recipes</h1>
            <p className="w-[800px] m-auto mt-7">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            <p>total {recipes.length}</p>

        </div>
    );
};

export default OurRecipes;