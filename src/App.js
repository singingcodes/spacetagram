import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import NavComponent from "./components/NavComponent"
import ImageComponent from "./components/ImageComponent"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="App">
      <NavComponent />
      <ImageComponent />
      <Footer />
    </div>
  )
}

export default App
