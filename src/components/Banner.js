import logo from '../assets/logo.png'
import '../styles/Banner.css'
import './Recommendation'
import Recommendation from './Recommendation'

function Banner () {
    const tjh = "The Jungle House"
    
    return (
        <div className='tjh-banner'>
            <div className='tjh-banner-row'>
                <img src={logo} alt={tjh} className='tjh-logo'/>
                <h1 className='tjg-title'>
                    {tjh}
                </h1>
            </div>
            <Recommendation />
        </div>
    )
}

export default Banner