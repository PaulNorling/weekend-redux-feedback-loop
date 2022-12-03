import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'
import axios from 'axios';

function UserReview() {
  const feelings = useSelector(store => store.FeelingsReducer)
  const understanding = useSelector(store => store.UnderstandingReducer)
  const support = useSelector(store => store.SupportReducer)
  const comment = useSelector(store => store.CommentReducer)
  const history = useHistory();
    
  console.log("comment:", comment)  

const reviewObject = {
  feeling: feelings,
  understanding: understanding,
  support: support,
  comments: comment
}

    const navigateNext = () => {
      history.push('/SubmitSucces');
      axios.post('/review', reviewObject)   
    .then(response => {
      console.log("axios.post", response)
      
    }).catch(err => {
      console.log("axios.post-err", err);
    })              
  };


    return (
      <div>
        <div>Review Your Feedback</div>
        <div>Feelings: {feelings}</div>
        <div>Understanding: {understanding}</div>
        <div>Support: {support}</div>
        <div>Comments: {comment}</div>
        <button onClick={navigateNext}>Next</button>
      </div>
    )
}

export default UserReview;

