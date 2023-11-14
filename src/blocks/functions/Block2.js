import Image from 'react-bootstrap/Image';
import './Main.css';
import photo from './images/menu_flowers.png';


function FluidExample() {
  return <Image src={photo} fluid />;
}

export default FluidExample;