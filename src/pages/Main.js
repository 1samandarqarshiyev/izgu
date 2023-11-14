import Form from 'react-bootstrap/Form';
import './Style.css';


function SelectBasicExample() {
  return (
    <Form.Select className='dropdown_language' aria-label="Default select example">
        <option value="russian">🇷🇺 Рус</option>
        <option value="uzbek">🇺🇿 Uzb</option>
        <option value="english">🇺🇸 Eng</option>
    </Form.Select>
  );
}

export default SelectBasicExample;