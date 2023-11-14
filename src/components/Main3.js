import Button from 'react-bootstrap/Button';
import './End.css';
import photo from './images/Youtube.png';

function TypesExample() {
  return (
    <>
      <Button variant="link" className='button_tel' href='https://www.youtube.com/@xuddi.shunday'>
        <img src={photo} className='img-fluid'/>
      </Button>
    </>
  );
}

export default TypesExample;