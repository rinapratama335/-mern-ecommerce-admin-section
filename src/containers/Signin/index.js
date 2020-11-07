import { Container, Button, Form, Row, Col, Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import Input from "../../components/UI/input";

const Signin = () => {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "5rem" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Body>
                <h3 className="text-center">Sign In</h3>
                <Form>
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

export default Signin;
