import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import {useState} from 'react';
import { useDispatch } from 'react-redux';

function UserSupport() {
  const dispatch = useDispatch();
  const [support, setSupport ] = useState('');
  const history = useHistory();
  const navigateNext = () => {
    if(support <= 0 || support > 5) {
      alert('Input must be 1-5')
    }else{
      dispatch({
        type: 'NEW_SUPPORT',
        payload: support
      })
      history.push('/UserComment');
    }  
  };

    return (
      <div>
        <Header />
        <div>How well are you being supported?</div>
        <input type="number" min ="1" max="5"
        onChange={(event) => setSupport(event.target.value)}>
        </input>
        <button onClick={navigateNext}>Next</button>
      </div>
    )
}

export default UserSupport;