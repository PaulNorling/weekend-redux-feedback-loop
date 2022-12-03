import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'

function UserReview() {
  const feelings = useSelector(store => store.FeelingsReducer)
  const understanding = useSelector(store => store.UnderstandingReducer)
  const support = useSelector(store => store.SupportReducer)
  const comment = useSelector(store => store.CommentReducer)
    const history = useHistory();
    const navigateNext = () => {
        history.push('/SubmitSucces');
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