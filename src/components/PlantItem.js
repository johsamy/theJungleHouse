import CareScale from './CareScale';
import '../styles/PlantItem.css'
import monstera from '../assets/monstera.jpg'

function handleClick(e) {
	console.log('Ceci est mon event ✨', e)
}

function PlantItem({ id, name, water, light }) {
	return (
		<li key={id} className='tjh-plant-item' onClick={() => handleClick(name)}>
			<img className='tjh-plant-item-cover' src={monstera} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem

// import CareScale from './CareScale'
// import '../styles/PlantItem.css'

// function handleClick(plantName) {
// 	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
// }

// function PlantItem({ cover, name, water, light }) {
// 	return (
// 		<li className='lmj-plant-item' onClick={() => handleClick(name)}>
// 			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
// 			{name}
// 			<div>
// 				<CareScale careType='water' scaleValue={water} />
// 				<CareScale careType='light' scaleValue={light} />
// 			</div>
// 		</li>
// 	)
// }

// export default PlantItem