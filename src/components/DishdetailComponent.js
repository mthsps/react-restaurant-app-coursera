import { Component } from "react";
import {
  Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
 
  renderComment(comments) {
    if (comments != null) {
      return comments.comments.map((comment) => {
        return (
          <div>
            <ul className="list-unstyled">
              <li key={comment.id}>
                <ul>{comment.comment}</ul>
                <ul>
                  -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                </ul>
              </li>
            </ul>
          </div>
        );
      });

    } else {
      <div></div>
    }

  };

  renderDish(dish) {
    return (
      <Card width="18rem">
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  render() {
    if (this.props.dish != null)
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              {this.renderDish(this.props.dish)}
            </div>
            <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
              {this.renderComment(this.props.dish)}
            </div>
          </div>
        </div>
      );
    else
      return (
        <div></div>
      );
  }


}


export default DishDetail