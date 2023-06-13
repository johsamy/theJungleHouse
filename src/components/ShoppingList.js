import PlantItem from './PlantItem';
import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'

function ShoppingList() {
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )
    
    return (
        <div>
            <ul>
                {categories.map((category) => (
                    <li key={category}>{category}</li>
                ))}
            </ul>
            <ul className='tjh-plant-list'>
                {plantList.map(({id, name, water, light}) => (
                    <PlantItem
                        key={id}
                        name={name}
                        id={id}
                        water={water}
                        light={light}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList