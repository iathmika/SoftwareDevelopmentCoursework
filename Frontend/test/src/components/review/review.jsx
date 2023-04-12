import React, {useEffect, useState} from "react";
import ReviewSender from "../reviewSender/reviewSender";
import ReviewBoard from "../reviewBoard/reviewBoard";
import style from "./style.css";
import Rating from '@mui/material/Rating';

const unofficialRules_1 = "1. No cheating, hacking, or using exploits in any form.\n2. Respect other players and refrain from any kind of harassment, hate speech, or discriminatory behavior.\n3. No intentionally causing lag or disruption to the game."
const unofficialRules_2 = "1. No cheating, hacking, or using exploits in any form.\n2. Respect other players and refrain from any kind of harassment, hate speech, or discriminatory behavior.\n3. No intentionally causing lag or disruption to the game."
const unofficialRules_3 = "1. No cheating, hacking, or using exploits in any form.\n2. Respect other players and refrain from any kind of harassment, hate speech, or discriminatory behavior.\n3. No intentionally causing lag or disruption to the game."
const myReview = [unofficialRules_1, unofficialRules_2, unofficialRules_3];
const myGameName = "Among Us";
const myGameRating = "4.5";

const GameInfo = ({ game }) => {
  return (
    <div className="game-info">
      <div className="game-name">{game.name}</div>
      <Rating
        sx={{
          "& .MuiRating-iconEmpty": {
            color: "white"
          }
        }}
        name="read-only"
        value={game.rating}
        readOnly
        precision={0.1}
      />
    </div>
  )
}

const Review = ({ game }) => {
  const [reviews, setReviews] = useState(myReview);
  const [userReview, setUserReview] = useState([]);
  const [userRating, setUserRating] = useState("");

  // useEffect(() => {
  //   // Actually, we should fetch data from backend.
  //   console.log("fetch data from backend");
  //   setUserReview(myReview);
  //   setGameRating(myGameRating);
  // },[gameName])
  const handleNewReview = (review, rating) => {
    setUserReview(review);
    setUserRating(rating)
    // Actually, we should send data to backend.
    console.log("send data to backend");
  }

  return(
    <div className="container-1">
      <GameInfo game={game}/>
      <div className="container-2">
        <div style={{color: "white", fontSize: "32px"}}>
          Game Reviews
        </div>
        <div style={{width: "100%", display: "flex", flexDirection: "column"}}>
          <ReviewSender onSend={handleNewReview}/>
          <ReviewBoard newData={userReview} userReview={reviews}/>
        </div>
      </div>
    </div>
  )
}

export default Review;