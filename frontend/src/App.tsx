import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Siginup } from "./pages/Signup"
import { Siginin } from "./pages/Signin"
import { Blog } from "./pages/Blog"
import { Blogs } from "./pages/Blogs"
import { Publish } from "./pages/Publish"


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Siginup></Siginup>}></Route>
        <Route path="/signin" element={<Siginin></Siginin>}></Route>
        <Route path="/blog/:id" element={<Blog></Blog>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/publish" element={<Publish></Publish>}></Route>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
