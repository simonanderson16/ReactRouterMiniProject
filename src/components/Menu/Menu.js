import React from "react";
import Meal from "./Meal";

export default function Menu() {
    const menu = {
        "breakfast": [
          {"food": "pancakes", "price": 5.00, "vegetarian": true},
          {"food": "waffles", "price": 5.00, "vegetarian": true},
          {"food": "orange juice", "price": 2.00, "vegetarian": true}
        ],
        "lunch": [
          {"food": "turkey sandwich", "price": 8.00, "vegetarian": false},
          {"food": "grilled cheese", "price": 6.00, "vegetarian": true},
          {"food": "hamburger", "price": 8.00, "vegetarian": false}
        ],
        "dinner": [
          {"food": "chicken alfredo", "price": 10.00, "vegetarian": false},
          {"food": "tofu stir-fry", "price": 9.00, "vegetarian": true},
          {"food": "chili", "price": 8.00, "vegetarian": false}
        ]
      };
      
      let isFiltered = false;

      const filterVegetarian = () => {
        isFiltered = true;
        // menu.breakfast = menu.breakfast.filter((item) => item.vegetarian === true);
        // menu.lunch = menu.lunch.filter((item) => item.vegetarian === true);
        // menu.dinner = menu.dinner.filter((item) => item.vegetarian === true);
        console.log("filtered");
        console.log(menu);
      }

      const getMenu = () => menu;

    return (
        <>
            <h1>Menu</h1>
            <button onClick={() => filterVegetarian()}>Show Only Vegetarian</button>
            <Meal name = "Breakfast" meal={menu.breakfast} filtered={isFiltered}/>
            <Meal name="Lunch" meal={menu.lunch} filtered={isFiltered}/>
            <Meal name="Dinner" meal={menu.dinner} filtered={isFiltered}/>
        </>
    );
}