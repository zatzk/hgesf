import { Routes, Route} from "react-router-dom"
import React from "react"

import { Home } from "../pages/Home"
import { Other } from "../pages/Other"
import { NotFound } from "../pages/NotFound"

export const Router = () => {

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/other" element={<Other />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}