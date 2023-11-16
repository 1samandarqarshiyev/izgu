import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './Style.css';

function FormFloatingTextareaExample() {
  return (
    <>

        <FloatingLabel className='modalcoment_block' controlId="floatingTextarea2" label="Комментария нап: свяжите после 8:00 утра">
            <Form.Control className='modalcoment' as="textarea"/>
        </FloatingLabel>

    </>
  );
}

export default FormFloatingTextareaExample;