import { Component } from "react";
import {
  Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle
} from 'reactstrap';

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderComment(comments) {
    if (comments != null) {
      return comments.comments.map((comment) => {
        return (
          <div>
            <ul className="list-unstyled">
              <li key={comment.id}>
                <ul>{comment.comment}</ul>
                <ul>
                  -- {comment.author}, {new Date(comment.date).toDateString()}
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
    if (this.props.selectedDish != null)
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.selectedDish)}
          </div>
          <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
            {this.renderComment(this.props.selectedDish)}
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