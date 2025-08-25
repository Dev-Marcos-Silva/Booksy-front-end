import { Layout } from "../pages/layout/layout"

import { Details } from "../pages/book/details"
import { Comments } from "../pages/book/comments"
import { Assessments } from "../pages/book/assessments"

import { AllBooks } from "../pages/library/allBooks"
import { UpdateBook } from "../pages/library/updateBook"
import { RegisterBook } from "../pages/library/registerBook"
import { OrdersReceived } from "../pages/library/ordersReceived"
import { BookDelivered } from "../pages/library/bookDelivered"
import { BorrowedBooks } from "../pages/library/borrowedBooks"
import { FinishedBooks } from "../pages/library/finishedBooks"
import { UnfinishedBook } from "../pages/library/unfinishedBooks"
import { LibraryProfile } from "../pages/library/libraryProfile"

import {Routes, Route} from "react-router"
import { NotFound } from "../pages/layout/notFound"

export function RouterLibrary () {
    return (
        <Routes>
            <Route path="/" element={<Layout/>} >
            <Route index element={<AllBooks/>}  />
            <Route path="/register" element={<RegisterBook/>}  />
            <Route path="/orders" element={<OrdersReceived/>}  />
            <Route path="/delivered" element={<BookDelivered/>}  />
            <Route path="/borrowed" element={<BorrowedBooks/>}  />
            <Route path="/finished" element={<FinishedBooks/>}  />
            <Route path="/unfinished" element={<UnfinishedBook/>}  />
            <Route path="/profile" element={<LibraryProfile/>}  />
            <Route path="/update" element={<UpdateBook/>}  />
            </Route>

            <Route path="/book" element={<Layout/>} >
            <Route path="/book/:id" element={<Details/>}>
                <Route index element={<Comments/>} />
                <Route path="/book/:id/assessments" element={<Assessments/>} />
            </Route>
            </Route>

            <Route path="/*" element={<NotFound />} />
        </Routes>
    )
}
