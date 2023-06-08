import { NavLink, Outlet } from "react-router-dom"
import { Suspense } from "react"

export const Layout = () => {
    return (
    <div>
    <header>
    <nav>
      <NavLink to={"/"}>Домашня</NavLink>
      <NavLink to={"/movies"}>Movies</NavLink>
        </nav>
        </header>
            <main><Outlet /></main>
            </div>
    )
}