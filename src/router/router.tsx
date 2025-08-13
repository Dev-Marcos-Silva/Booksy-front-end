import { Login } from "../pages/account/login"
import { Register } from "../pages/account/register"
import { NotFound } from "../pages/layout/notFound"

import { RouterLibrary } from "./library"
import { RouterUser } from "./user"

import { Routes, Route} from "react-router"

import { authContex } from "../hook/authContext"

export function Routers(){

  const { account } = authContex()

  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />

      {
        account?(
          account.type === "USER"? (
            <Route path="/*" element={<RouterUser/>} />
          ):
          account.type === "LIBRARY"?(
            <Route path="/*" element={<RouterLibrary/>} />
          ):
           <Route path="/*" element={<NotFound/>} />  
        ):

        <Route path="/*" element={<NotFound />} />
      }
      
    </Routes>
  )
}

