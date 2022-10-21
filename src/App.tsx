import { Routes, Route } from "react-router-dom"

import { Profile, NotFound } from "@views"

const App = () => (
  <Routes>
    <Route path="/" element={<Profile />} />

    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default App
