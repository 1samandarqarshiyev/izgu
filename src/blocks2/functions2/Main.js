import Image from 'react-bootstrap/Image';
import './Main2.css';
import photo from './images/karusel.png';


function FluidExample() {
  return <Image src={photo} fluid />;
}

export default FluidExample;