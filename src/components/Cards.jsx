import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Cards = ({card}) => {
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState("");
    const [reviews, setReviews] = useState([]);
  
    const handleReviewSubmit = (e) => {
        e.preventDefault();
      if (!reviewText || rating < 1 || rating > 5) {
        alert("Please enter a valid review and a rating between 1 and 5.");
        return;
      }
  
      const newReview = {
        id: Date.now(),
        text: reviewText,
        rating: Number(rating),
      };
  
      setReviews([newReview, ...reviews]);
      setReviewText("");
      setRating("");
    };
    const {
        name,
        banner,
        frequency,
        price,
        description,
        tech_category,
        features,
        subscription_benefits,
        ratings,
        number_of_reviews,
      } = card
    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-xl space-y-6">
        {/* Banner */}
        <img src={banner} alt={name} className="w-full rounded-lg h-64 object-cover" />
  
        {/* Title & Info */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
          <p className="text-gray-500">{tech_category}</p>
          <p className="text-lg text-blue-600 font-semibold">
            ${price} / {frequency}
          </p>
          <div className="flex items-center gap-2 text-yellow-500 mt-1">
            <FaStar />
            <span className="text-gray-700">{ratings} ({number_of_reviews} reviews)</span>
          </div>
        </div>
  
        {/* Description */}
        <div>
          <h2 className="text-lg font-semibold">Description</h2>
          <p className="text-gray-700">{description}</p>
        </div>
  
        {/* Features */}
        <div>
          <h2 className="text-lg font-semibold">Features</h2>
          <ul className="list-disc list-inside text-gray-700">
            {features?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
  
        {/* Benefits */}
        <div>
          <h2 className="text-lg font-semibold">Subscription Benefits</h2>
          <ul className="list-disc list-inside text-gray-700">
            {subscription_benefits?.map((subscription_benefits) => (
              <li>{subscription_benefits}</li>
            ))}
          </ul>
        </div>
  
        {/* Review Form */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Leave a Review</h2>
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Write your review..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          ></textarea>
          <input
            type="number"
            placeholder="Rating (1-5)"
            min={1}
            max={5}
            className="input input-bordered w-full"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <button onClick={handleReviewSubmit} className="btn btn-primary">
            Submit Review
          </button>
        </div>
  
        {/* Show Reviews */}
        <div>
          <h2 className="text-lg font-semibold mt-6">User Reviews</h2>
          {reviews.length === 0 ? (
            <p className="text-gray-500">No reviews yet.</p>
          ) : (
            <ul className="space-y-3 mt-3">
              {reviews.map((r) => (
                <li key={r.id} className="p-4 border rounded-md bg-gray-50">
                  <div className="flex items-center gap-2 text-yellow-500">
                    <FaStar />
                    <span className="text-gray-800 font-semibold">{r.rating}/5</span>
                  </div>
                  <p className="text-gray-700 mt-1">{r.text}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
};

export default Cards;