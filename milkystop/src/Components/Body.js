import ShopCard from "./ShopCard";
import Header from "./Header";
import { useState } from "react";




 export const milkshakes = [
    {
      id:1,
     name:"Chocolate",
     desc:"Crispy choco",
     rate:"Rs.170",
     imageUrl:"https://www.tastesoflizzyt.com/wp-content/uploads/2023/04/how-to-make-a-milkshake-with-ice-cream-15.jpg",
    },
    {
      id:2,
      name:"Vanila",
      desc:"Creamy",
      rate:"Rs.170",
      imageUrl:"https://hips.hearstapps.com/hmg-prod/images/190523-vanilla-milkshake-022-horizontal-1559169406.png?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*",
    },
    {
      id:3,
      name:"Butterscotch",
      desc:"Extra crispy",
      rate:"Rs.170",
      imageUrl:"https://easydessertrecipes.com/wp-content/uploads/2022/11/Dulce-De-Leche-Milkshake-5.jpg",
    },
    {
      id:4,
      name:"Strawberry",
      desc:"Sweet berries",
      rate:"Rs.190",
      imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Strawberry_milk_shake_%28cropped%29.jpg/1200px-Strawberry_milk_shake_%28cropped%29.jpg",
    },
    {
      id:5,
      name:"Blackcurrent",
      desc:"Berries on top",
      rate:"Rs.200",
      imageUrl:"https://selfiefamily.com/wp-content/uploads/2022/06/Black-Currant-Milkshake.jpg",
    },
    {
      id:6,
      name:"Avacado",
      desc:"More green",
      rate:"Rs.250",
      imageUrl:"https://californiaavocado.com/wp-content/uploads/2020/08/Avocado-Milkshake-3-1.jpg",
    },
  ];

const Body = () =>{
    const [searchTxt,setSearchText] = useState("");
    const [filteredShakes,setFilteredShakes]= useState(milkshakes);

    function handleOnChangeEvent(e) {
        setSearchText(e.target.value);

    }
    function filterShakes() {
       const filterdata = milkshakes.filter((milkshake) => {
           return milkshake.name.toLowerCase().includes(searchTxt.toLowerCase());
        });
        setFilteredShakes(filterdata);
        console.log("filtered shakes",filteredShakes);
    }

    return (
      <div className="bodypart">
      <div className='Title'><p><h1>Milky Spot !!</h1></p>
      </div>
      <div className='SearchBar'>
      <input type='text' placeholder='Search here' onChange={handleOnChangeEvent}></input>
      <button onClick={filterShakes}>Search</button>
    </div>
       
      <div className='ShopContainer'>
        {filteredShakes.map((milkshake) =>{
          return(
              <ShopCard 
              key={milkshake.id}
              shopDetails={milkshake}
              />
          );
        
        })}
        
        
        
      </div>
      </div>
    
    );
  };
  
  export default Body;