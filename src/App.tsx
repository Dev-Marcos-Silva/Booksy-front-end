import { Login } from "./pages/login"
import { Register } from "./pages/register"

import { Layout } from "./pages/layout"
import { NotFound } from "./pages/notFound"

import { Home } from "./pages/home"
import { Details } from "./pages/details"
import { Comments } from "./pages/comments"
import { Assessments } from "./pages/assessments"
import { Books } from "./pages/books"
import { History } from "./pages/history"
import { Suggestions } from "./pages/suggestions"
import { Favorites } from "./pages/favorites"
import { RegisterLibrary } from "./pages/registerLibrary"
import { UserProfile } from "./pages/userProfile"

import { AllBooks } from "./pages/allBooks"
import { UpdateBook } from "./pages/updateBook"
import { RegisterBook } from "./pages/registerBook"
import { OrdersReceived } from "./pages/ordersReceived"
import { BookDelivered } from "./pages/bookDelivered"
import { BorrowedBook } from "./pages/borrowedBook"
import { FinishedBook } from "./pages/finishedBook"
import { UnfinishedBook } from "./pages/unfinishedBook"

import { BrowserRouter, Routes, Route} from "react-router"
import { LibraryProfile } from "./pages/libraryProfile"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />

        <Route path="/user" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/user/details" element={<Details/>}>
            <Route index element={<Comments/>} />
            <Route path="/user/details/assessments" element={<Assessments/>} />
          </Route>
          <Route path="/user/book" element={<Books/>} />
          <Route path="/user/history" element={<History/>} />
          <Route path="/user/suggestions" element={<Suggestions/>} />
          <Route path="/user/favorites" element={<Favorites/>} />
          <Route path="/user/register" element={<RegisterLibrary/>} />
          <Route path="/user/profile" element={<UserProfile/>} />
        </Route>

        <Route path="/library" element={<Layout/>} >
          <Route index element={<AllBooks/>}  />
          <Route path="/library/register" element={<RegisterBook/>}  />
          <Route path="/library/orders" element={<OrdersReceived/>}  />
          <Route path="/library/delivered" element={<BookDelivered/>}  />
          <Route path="/library/borrowed" element={<BorrowedBook/>}  />
          <Route path="/library/finished" element={<FinishedBook/>}  />
          <Route path="/library/unfinished" element={<UnfinishedBook/>}  />
          <Route path="/library/profile" element={<LibraryProfile/>}  />
          <Route path="/library/update" element={<UpdateBook/>}  />
        </Route>

        <Route path="/*" element={<NotFound/>}/>

      </Routes>
    </BrowserRouter>
  )
}

