import { Login } from "./pages/account/login"
import { Register } from "./pages/account/register"

import { Layout } from "./pages/layout/layout"
import { NotFound } from "./pages/layout/notFound"

import { Home } from "./pages/user/home"
import { Books } from "./pages/user/books"
import { History } from "./pages/user/history"
import { Suggestions } from "./pages/user/suggestions"
import { Favorites } from "./pages/user/favorites"
import { RegisterLibrary } from "./pages/user/registerLibrary"
import { UserProfile } from "./pages/user/userProfile"

import { Details } from "./pages/book/details"
import { Comments } from "./pages/book/comments"
import { Assessments } from "./pages/book/assessments"

import { AllBooks } from "./pages/library/allBooks"
import { UpdateBook } from "./pages/library/updateBook"
import { RegisterBook } from "./pages/library/registerBook"
import { OrdersReceived } from "./pages/library/ordersReceived"
import { BookDelivered } from "./pages/library/bookDelivered"
import { BorrowedBooks } from "./pages/library/borrowedBooks"
import { FinishedBooks } from "./pages/library/finishedBooks"
import { UnfinishedBook } from "./pages/library/unfinishedBooks"
import { LibraryProfile } from "./pages/library/libraryProfile"

import { BrowserRouter, Routes, Route} from "react-router"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />

        <Route path="/user" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/user/orders" element={<Books/>} />
          <Route path="/user/history" element={<History/>} />
          <Route path="/user/suggestions" element={<Suggestions/>} />
          <Route path="/user/favorites" element={<Favorites/>} />
          <Route path="/user/register" element={<RegisterLibrary/>} />
          <Route path="/user/profile" element={<UserProfile/>} />
        </Route>

        <Route path="/book" element={<Layout/>} >
         <Route path="/book" element={<Details/>}>
            <Route index element={<Comments/>} />
            <Route path="/book/assessments" element={<Assessments/>} />
          </Route>
        </Route>

        <Route path="/library" element={<Layout/>} >
          <Route index element={<AllBooks/>}  />
          <Route path="/library/register" element={<RegisterBook/>}  />
          <Route path="/library/orders" element={<OrdersReceived/>}  />
          <Route path="/library/delivered" element={<BookDelivered/>}  />
          <Route path="/library/borrowed" element={<BorrowedBooks/>}  />
          <Route path="/library/finished" element={<FinishedBooks/>}  />
          <Route path="/library/unfinished" element={<UnfinishedBook/>}  />
          <Route path="/library/profile" element={<LibraryProfile/>}  />
          <Route path="/library/update" element={<UpdateBook/>}  />
        </Route>

        <Route path="/*" element={<NotFound/>}/>

      </Routes>
    </BrowserRouter>
  )
}

