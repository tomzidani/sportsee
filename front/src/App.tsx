import { Routes, Route } from "react-router-dom"
import { Home, Profile, NotFound } from "@views"

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profil/:id" element={<Profile />} />

    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default App
