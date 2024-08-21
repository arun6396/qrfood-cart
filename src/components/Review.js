// ReviewPage.js

import React, { useState } from "react";
import { Card, Carousel } from "react-bootstrap";
import '../components/Review.css'

const ReviewPage = () => {
  // State to manage reviews
  const [reviews, setReviews] = useState([
    // {
    //   id: 1,
    //   username: 'Arunsiva',
    //   rating: 5,
    //   timestamp: '2 hours ago',
    //   content: "QR restaurant is nice ",
    // },
    // {
    //   id: 2,
    //   username: 'Karthi',
    //   rating: 5,
    //   timestamp: '1 hour ago',
    //   content: 'I love it! Highly recommended.',
    // },
    // Add more reviews as needed
  ]);

  // State to manage new review input
  const [newReview, setNewReview] = useState({
    username: "",
    rating: 5,
    content: "",
  });

  // Function to add a new review
  const addReview = () => {
    if (newReview.username.trim() !== "" && newReview.content.trim() !== "") {
      const newReviewObj = {
        id: reviews.length + 1,
        username: newReview.username,
        rating: newReview.rating,
        timestamp: "a few seconds ago", // Use a timestamp library for accurate timestamps
        content: newReview.content,
      };

      setReviews([...reviews, newReviewObj]);
      // Reset the newReview state
      setNewReview({
        username: "",
        rating: 5,
        content: "",
      });
    }
  };

  return (
    <div className="w-100">
      <h1 className="d-flex justify-content-center align-items-center">
        Food Reviews
      </h1>

      {/* Display existing reviews */}
{reviews.length === 0 ? <p>No reviews</p> 
: 

      
      <Carousel interval={2000} className=" caro"   >
      {
reviews.map((review)=>(

  <Carousel.Item>
  
  <Card className="cards">
   
    <Card.Body>
      <Card.Title className="d-flex justify-content-center">Name : {review.username}</Card.Title>
      <Card.Text>
      Feedback :{review.content}
      </Card.Text>
      <h5>Rating :  {review.rating}/5</h5>
    </Card.Body>
  </Card>
  
  </Carousel.Item>

))


      }
      </Carousel>
    }
      
      {/* Input for new reviews */}
      <center>
        <div className="reviewtype justify-content-center align-items-center">
         
        <table className="mt-2">
        <tr>
        <td>
        <label>
            Name
            </label><td></td>
            <input
              type="text"
              value={newReview.username}
              onChange={(e) =>
                setNewReview({ ...newReview, username: e.target.value })
              }
              
            />
            
            </td>
          </tr>
          <br />
          <tr>
          <td>
          <label>
            Rating
            <td></td>
            <input
              type="number"
              value={newReview.rating}
              onChange={(e) =>
                setNewReview({
                  ...newReview,
                  rating: parseInt(e.target.value, 6),
                })
              }
            />
          </label>
          </td>
          </tr>
          
          <br />
          <tr>
          <td>
          <label>
            Review
            <td></td>
            <textarea
            
              placeholder="Write your review..."
              value={newReview.content}
              onChange={(e) =>
                setNewReview({ ...newReview, content: e.target.value })
              }
            />
          </label>
          <td></td>
          <button className="btn btn-success " onClick={addReview}>Add Review</button>
          </td>
          </tr>
          </table>
        </div>
      </center>
    </div>
  );
};

export default ReviewPage;
