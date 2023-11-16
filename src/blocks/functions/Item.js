import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Main.css';


function GridColSizesExample() {
  return (
    <Form className='modal_input_block'>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <Form.Control className='modal_input' placeholder="Ф.И.О"/>
        </Col>
      </Row>
    </Form>
  );
}

export default GridColSizesExample;