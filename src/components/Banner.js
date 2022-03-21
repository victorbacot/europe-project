import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
    const title = "Pays d'Europe"
    return (
        <div className="banner">
            <img src={logo} alt="Europe" className="logo" />
            <h1 className="title">{title}</h1>
        </div>
    )
}

export default Banner