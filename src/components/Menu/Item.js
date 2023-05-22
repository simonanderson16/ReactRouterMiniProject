export default function Item({item}) {
    const itemString = item.food + " ($" + item.price + ")" 
    return (
        <p>{itemString}</p>
    );
}