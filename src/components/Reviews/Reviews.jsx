import React, { Component } from 'react';
import { getReviews } from 'components/api/fetchFunctions';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const reviewsArr = await getReviews(this.props.match.params.movieId);

    this.setState({ reviews: reviewsArr });
  }

  render() {
    return (
      <div className="reviewBlock">
        <h2>Reviews</h2>
        {this.state.reviews.length > 0 ? (
          <ul className="reviewList">
            {this.state.reviews.map((item, index) => (
              <li key={index} className='reviewItem'>
                <div className='reviewInfo'>
                  <h4>Author: {item.author}</h4>
                  <p className="reviewText">Review: {item.content}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>There is no reviews yet.</p>
        )}
      </div>
    );
  }
}

export default Reviews;
