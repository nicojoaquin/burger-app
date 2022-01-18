import logo from '../../../assets/img/logoFav.png'

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="d-flex align-items-center ms-3">
                    <a href='/' className="navbar-brand">Burger-land</a>
                    <img width={30} src={logo} alt="logo" />
                </div>
            </nav>
        </header>
    )
}

export default Header
