import Carousel from 'react-bootstrap/Carousel';
import photo1 from './images/slider1.png';
import photo2 from './images/slider2.png';
import photo3 from './images/slider3.png';
import './Main.css';


function IndividualIntervalsExample() {
    return (
        <>
        <div>
        <h1>Почему мы?</h1>
        <Carousel slide={false}>
  
            <Carousel.Item>
                <img src={photo1} className='img-fluid photo_image'/>
            </Carousel.Item>
  
            <Carousel.Item>
                <img src={photo2} className='img-fluid photo_image'/>
            </Carousel.Item>
  
            <Carousel.Item>
                <img src={photo3} className='img-fluid photo_image'/>   
            </Carousel.Item>
  
        </Carousel>
        </div>
      </>
    );
  }
  
  export default IndividualIntervalsExample;