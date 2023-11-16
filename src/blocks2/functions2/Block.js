// import Button from 'react-bootstrap/Button';
// import './Main2.css';

// function TagTypesExample() {
//   return (
//     <>
//       <Button className='button_cup' as="input" type="submit" value="Подробнее"/>
//     </>
//   );
// }

// export default TagTypesExample;


import { useState } from 'react';
import { Container } from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Main2.css';
import Modals from './Modal';
import Modals2 from './Modal2';


function Example() {
  const [smShow, setSmShow] = useState(false);

  function secondmain(){
    setSmShow(true);
  }

  return (
    <>
      <Button onClick={secondmain} as="input" type="submit" className="me-2 button_cup" value="Подробнее"/>
      
      <Modal size="md" show={smShow} onHide={() => setSmShow(false)} aria-labelledby="example-modal-sizes-title-sm">
        
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            <p className='modaltext1'>Главная Горшки</p>
            <p className='modaltext2'>Обратный звонок</p>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Container>

            <Row>
              <Col className='modal_image_2' xl={6} lg={6} md={6} sm={6} xs={6} s={6}>
                <Modals/>
              </Col>
              <Col xl={6} lg={6} md={6} sm={6} xs={6} s={6}>
                <Modals2/>
              </Col>
            </Row>

          </Container>
        </Modal.Body>
      
      </Modal>

    </>
  );
}

export default Example;