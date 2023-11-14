import Button from 'react-bootstrap/Button';
import './End.css';
import photo from './images/Instagram.png';

function TypesExample() {
  return (
    <>
      <Button variant="link" className='button_tel' href='https://www.instagram.com/azamatovich01__/following/'>
        <img src={photo} className='img-fluid'/>
      </Button>
    </>
  );
}

export default TypesExample;