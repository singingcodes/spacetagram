import { Card } from "react-bootstrap"
import { BsFillHeartFill } from "react-icons/bs"
import { useState } from "react"
const SingleImageComponent = ({ data }) => {
  const [liked, setLiked] = useState(false)

  const handleLike = () => {
    setLiked(!liked)
  }

  return (
    <>
      <div className="col-sm-3 my-2">
        <Card>
          <Card.Img
            variant="top fluid"
            src={data.img_src}
            alt={data.camera.name}
            className="d-block w-100"
            height="200px"
          />
          <Card.Body>
            <Card.Text className="text-muted">{data.camera.name}</Card.Text>
            <Card.Text className="text-muted">{data.earth_date}</Card.Text>
            <div variant="light" onClick={() => handleLike()}>
              <BsFillHeartFill
                className="bs-icon"
                style={{
                  color: liked ? "red" : "black",
                }}
              />
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default SingleImageComponent
