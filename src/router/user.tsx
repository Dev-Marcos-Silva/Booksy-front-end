import { Layout } from "../pages/layout/layout"

import { Home } from "../pages/user/home"
import { Books } from "../pages/user/books"
import { History } from "../pages/user/history"
import { Suggestions } from "../pages/user/suggestions"
import { Favorites } from "../pages/user/favorites"
import { RegisterLibrary } from "../pages/user/registerLibrary"
import { UserProfile } from "../pages/user/userProfile"

import { Details } from "../pages/book/details"
import { Comments } from "../pages/book/comments"
import { Assessments } from "../pages/book/assessments"

import { Routes, Route} from "react-router"
import { NotFound } from "../pages/layout/notFound"

export function RouterUser() {
  return (
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="/orders" element={<Books/>} />
            <Route path="/history" element={<History/>} />
            <Route path="/suggestions" element={<Suggestions/>} />
            <Route path="/favorites" element={<Favorites/>} />
            <Route path="/register" element={<RegisterLibrary/>} />
            <Route path="/profile" element={<UserProfile/>} />
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
