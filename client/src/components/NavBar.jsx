import React from 'react'
import { Link } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu'
import { useSelector } from 'react-redux'

const NavBar = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  return (
    <nav
      className={
        userInfo?.isAdmin
          ? 'hidden'
          : 'navbar flex items-center justify-between px-10 bg-neutral h-20'
      }
    >
      <Link to="/" className="text-2xl">
      Fournisseurs de location de voitures
      </Link>
      <div className="hidden space-x-14 items-center  md:flex">
        <Link to="/">Accueil</Link>
        <Link to="/cars">Voitures</Link>
        <Link to="/about">À propos</Link>
        <Link to="/contact">Contact</Link>
        {userInfo && !userInfo.isAdmin ? (
          <Link
            to="/my-account"
            className="btn btn-sm  btn-outline btn-secondary"
          >
            Mon compte
          </Link>
        ) : (
          <Link to="/sign-in" className="btn btn-sm  btn-outline btn-secondary">
            Connexion
          </Link>
        )}
      </div>
      <HamburgerMenu />
    </nav>
  )
}

export default NavBar
