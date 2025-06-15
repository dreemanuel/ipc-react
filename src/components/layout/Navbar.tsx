import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  
  // Get current pathname
  const currentPath = location.pathname
  

  return (
    <>
      <nav className="nav">

        <div className="nav__container">

          <Link to="/" className="nav__logo">Indonesia <span>Premium</span> Cacao</Link>
          <ul className="nav__menu">
            <li className={currentPath === '/' ? 'nav__item active' : 'nav__item'}>
              <Link to="/">Home</Link>
            </li>
            <li className={currentPath === '/shop' ? 'nav__item active' : 'nav__item'}>
              <Link to="/shop">Shop</Link>
            </li>
            <li className="nav__item">
              <Link to="/#about">About</Link>
            </li>
            <li className={currentPath === '/contact' ? 'nav__item active' : 'nav__item'}>
              <Link to="/contact">Contact</Link>
            </li>
            <li className={currentPath === '/cart' ? 'nav__item active' : 'nav__item'}>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
          <button className="nav__toggle">
            <i className="fas fa-bars"></i>
          </button>

        </div>

      </nav>
    </>
  )
}

export default Navbar