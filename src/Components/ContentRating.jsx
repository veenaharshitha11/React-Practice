
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0, 
        dislikes: 0,
        totalRatings: 0,
        handleLike: () => {
            this.setState((prevState) => ({
                likes: prevState.likes + 1,
                totalRatings: prevState.totalRatings + 1
            }));
        },
        handleDislike: () => {
            this.setState((prevState) => ({
                dislikes: prevState.dislikes + 1,                
                totalRatings: prevState.totalRatings + 1
            }));
        }
    };
  }
  render() {
    return (
     <>
     <h1>Text Content Rating</h1>
     <div className='content-rating'>
        <p>In this lab, you will create a React component called 'ContentRating' where the component will let users rate material by clicking 'like' or 'dislike' buttons. When the component is rendered for the first time, both the like and dislike counts are set to zero. You will create a method that changes the state to add one to the number of likes when a user selects the 'like' button. In the same way, clicking the 'dislike' button, the method will add one to the number of dislikes. This action lets users rate the content in an interactive way and provides useful input to content creators. </p>
        <div className='rating-buttons'>
            <button className='like-button' onClick={this.state.handleLike}>
                Like ({this.state.likes})
            </button>
            <button className='dislike-button' onClick={this.state.handleDislike}>
                Dislike ({this.state.dislikes})
            </button>
            <p>Total Ratings: {this.state.totalRatings}</p>
        </div>
     </div>
     </>
    );
  }
}

export default ContentRating;
