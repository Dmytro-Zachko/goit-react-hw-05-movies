import { NavLink, Outlet } from "react-router-dom"
import { Suspense } from "react"
import { Container,StyledLink } from "./Layout.styled"


export const Layout = () => {
    return (
    <Container>
    <header>
    <nav>
      <StyledLink to={"/"}>Домашня</StyledLink>
      <StyledLink to={"/movies"}>Movies</StyledLink>
        </nav>
        </header>
            <main><Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense></main>
            </Container>
    )
}