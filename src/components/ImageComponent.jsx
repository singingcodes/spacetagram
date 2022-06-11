import { useEffect, useState } from "react"
import SingleImageComponent from "./SingleImageComponent"
import Loading from "./Loading"
import Error from "./Error"

const ImageComponent = () => {
  const [image, setImage] = useState([])
  const [loading, setLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=${process.env.REACT_APP_API_KEY}`
      )
      if (response.ok) {
        const responseData = await response.json()
        let dataArray = responseData.photos
        setImage(dataArray)
        setLoading(false)
        setIsError(false)
      } else {
        setLoading(true)
        setIsError(true)
      }
    } catch (error) {
      setLoading(true)
      setIsError(true)
    }
  }

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12 text-center ">
            <h3> Spacetagram</h3>
            <p className="text-muted">
              Welcome to Spacetagram, You can find beautiful Photos of Mars here{" "}
            </p>
            {loading && <Loading />}
            {isError && <Error />}
          </div>
          <div className="row">
            {image.map((data) => (
              <SingleImageComponent data={data} key={data.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default ImageComponent
