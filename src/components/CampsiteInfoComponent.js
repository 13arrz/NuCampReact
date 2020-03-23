import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import Directory from " ./DirectoryComponent.js";

//import Component because it is generic model that is built upon it
class CampSiteInfo extends Component {
  constructor(props) {
    super(props);
  }

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
          <Card>
            <CardBody>
              <CardTitle>
                <h4>Comments</h4>
              </CardTitle>
              <CardText>
                {campsite.comments.map(comments => (
                  <div>{campsite.comments.text}</div>
                  <div>{campsite.comments.author}</div>
                ))}
              </CardText>
            </CardBody>
          </Card>
        </div>
      );
    }
    return;
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
    const campsite = this.props.selectedCamspite;
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
