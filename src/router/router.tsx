import { Login } from "../pages/account/login"
import { Register } from "../pages/account/register"
import { NotFound } from "../pages/layout/notFound"

import { RouterLibrary } from "./library"
import { RouterUser } from "./user"

import { Routes, Route, Navigate} from "react-router-dom"
import { authContex } from "../hook/authContext"

export function Routers(){

  const { account } = authContex()
  
  return (
    <Routes>

      {/* Rotas públicas */}
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />


      {/* Rota raiz "/" */}
      <Route path="/" element={
        account?(
          account.type === "USER"? (
            <Navigate to="/user" />
          ):
          account.type === "LIBRARY"? (
            <Navigate to="/library" />
          ):
           <NotFound/>
        ):
          <Navigate to="/login"/>
      } />

      {/* Rotas privadas */}
      {account?.type === "USER" && (
        <Route path="/user/*" element={<RouterUser/>} />
      )}

      {account?.type === "LIBRARY" && (
        <Route path="/library/*" element={<RouterLibrary/>} />
      )}

      {/* Rota not found */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  )
}

