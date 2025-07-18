import { Route, Routes } from "react-router-dom"
import { Toaster } from "sonner"
import ProductPage from "./pages/ProductPage"
import PaymentSuccess from "./pages/PaymentSuccess"
import PaymentFailure from "./pages/PaymentFailure"

function App() {

  return (
    <><Toaster richColors /><Routes>
      <Route path="/" element={<ProductPage />} />
      <Route path="/success" element={<PaymentSuccess />} />
      <Route path="/failure" element={<PaymentFailure />} />
    </Routes></>
  )

}

export default App
