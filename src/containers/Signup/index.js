import { Container, Button, Form, Row, Col, Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import Input from "../../components/UI/input";

const Signup = () => {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "5%" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Body>
                <h3 className="text-center" style={{ marginBottom: 20 }}>
                  Sign Up
                </h3>
                <Form>
                  <Row>
                    <Col md={6}>
                      <Input
                        type="text"
                        placeholder="First name"
                        value=""
                        onChange={() => {}}
                      />
                    </Col>
                    <Col md={6}>
                      <Input
                        type="text"
                        placeholder="Last name"
                        value=""
                        onChange={() => {}}
                      />
                    </Col>
                  </Row>

                  <Input
                    type="email"
                    placeholder="Email"
                    value=""
                    onChange={() => {}}
                  />

                  <Input
                    type="password"
                    placeholder="Password"
                    value=""
                    onChange={() => {}}
                  />
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signup;
