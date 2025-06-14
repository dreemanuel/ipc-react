import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="nav">

        <div className="nav__container">

          <a href="#" className="nav__logo">Indonesia <span>Premium</span> Cacao</a>
          <ul className="nav__menu">
            <li className="nav__item active"><a href="#home">Home</a></li>
            <li className="nav__item"><a href="#features">Features</a></li>
            <li className="nav__item"><a href="#about">About</a></li>
            <li className="nav__item"><a href="#products">Products</a></li>
            <li className="nav__item"><a href="#contact">Contact</a></li>
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