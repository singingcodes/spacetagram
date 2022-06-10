import { Component } from "react"
import { Container, Row } from "react-bootstrap"

class MyFooter extends Component {
  render() {
    return (
      <footer className="footer-class">
        <Container>
          <Row className="text-center">
            <small className="my-3">Copyright 2022 - SingingCodes</small>
          </Row>
        </Container>
      </footer>
    )
  }
}

export default MyFooter
