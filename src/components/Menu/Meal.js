import Item from "./Item";

export default function Meal({name, meal, filtered}) {
    return(
        <>
            <h2>{name}</h2>
            <Item item={meal[0]}/>
            <Item item={meal[1]}/>
            <Item item={meal[2]}/>
        </>
    );
}