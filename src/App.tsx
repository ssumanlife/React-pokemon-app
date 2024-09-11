import React from "react"
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom"
import MainPage from "./pages/MainPage/index"
import DetailPage from "./pages/DetailPage/index"
import LoginPage from "./pages/LoginPage"
import NavBar from "./components/NavBar"
import { v4 } from "uuid"

const Layout = () => {
  return (
    <>
      <NavBar />
      <br />
      <br />
      <br />
      <Outlet />
    </>
  )
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/pokemon/:id" element={<DetailPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
