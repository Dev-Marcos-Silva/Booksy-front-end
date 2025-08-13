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

            <Route path="/book" element={<Layout/>} >
            <Route path="/book" element={<Details/>}>
                <Route index element={<Comments/>} />
                <Route path="/book/assessments" element={<Assessments/>} />
            </Route>
            </Route>

            <Route path="/*" element={<NotFound />} />
        </Routes>
    )
}
