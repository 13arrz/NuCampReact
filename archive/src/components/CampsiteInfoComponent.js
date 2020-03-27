import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

//import Component because it is generic model that is built upon it
class CampSiteInfo extends Component {
    super(props);

  renderCampsite(campsite) {
    return (
      <div className="col-md-5 m-l">
        <Card>
          <CardImg top src={campsite.name} alt={campsite.name} />
          <CardBody>
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  renderComments(comments) {
    if (comments) {
      return (
        <div className="col-md-5 m-1">
          <h4>Comments</h4>
          {comments.map(comments => {
            return (
              <div key={comments.id}>
                <p>{comments.text}</p>
                <p>
                  {comments.author},
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit"
                  }).format(new Date(Date.parse(comments.date)))}
                </p>
              </div>
            );
          })}
        </div>
      );
    }
    return <div />;
  }

  // renderComments(comments) {
  //   if (comments) {
  //     const finalComments = comments.map(comment => {
  //       return (
  //         <div key={"comment.id"}>
  //           <p>{comment.text}</p>
  //           <p>
  //             {comment.author}
  //             {new Intl.DateTimeFormat("en-US", {
  //               year: "numeric",
  //               month: "short",
  //               day: "2-digit"
  //             }).format(new Date(Dateparsel(comment.date)))}
  //           </p>
  //         </div>
  //       );
  //     });
  //     return (
  //       <div className="col-md-5 m-1">
  //         <h4>Comments</h4>
  //         {finalComments}
  //       </div>
  //     );
  //   }
  //   return <div />;
  // }

  render() {
    const campsite = this.props.campsite;
    //const campsite = this.props.whateverthefck
    if (campsite) {
      return (
        <div className="row">
          {this.renderCampsite(campsite)}
          {this.renderComments(campsite.comments)}
        </div>
      );
    }
    return <div />;
  }
}

//Need export default or named for React
export default CampSiteInfo;
