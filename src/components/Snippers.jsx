import Spinner from 'react-bootstrap/Spinner';
import "../css/Snippers.css"

function Spinners() {
  return (
    <>
      <Spinner className='snipper' animation="grow" size="sm"  />
      <Spinner className='snipper' animation="grow" size="sm"  />
      <Spinner  className='snipper' animation="grow" size="sm"  />
    </>
  );
}

export default Spinners;