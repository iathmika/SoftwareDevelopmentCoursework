import React, {useEffect, useState} from "react";
import styles from "./style.css"

// reviews is a list containing all rules should be displayed.
const ReviewComponent = ({title, review}) => {

  // rules is a string
  return (
    <div className="rules-container">
      <div className="title">{title}</div>
      <div className="rule-container">
        {review}
      </div>
    </div>
  );
};

const ReviewsBoard = ({newData, userReview}) => {
  const [myUserReviews, setMyUserReviews] = useState([]);

  useEffect(() => {
    if (newData.length > 0) {
      setMyUserReviews([newData, ...myUserReviews]);
    }
  }, [newData])

  useEffect(() => {
    setMyUserReviews(userReview);
  }, [userReview]);

  return(
    <div className="rules-board-container">
      <div className="rule-component-container">
        <ul className="user-rules-list">
          {myUserReviews.map((review, index) => (
            <li key={index} className="rule-component-list">
              <ReviewComponent title={`Review ${myUserReviews.length-index}`} review={review}/>
            </li>
          )) }
        </ul>
      </div>
    </div>
  )
}

export default ReviewsBoard;