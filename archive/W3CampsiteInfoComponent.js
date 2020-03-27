import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
// import Directory from "./DirectoryComponent";

//import Component because it is generic model that is built upon it
class CampSiteInfo extends Component {
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
              <CardText>{comments.map(comments => ({ comments }))}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    }
    return;
  }

  render() {
    // const campsite = this.props.selectedCamspite;
    if (this.props.campsite) {
      return (
        <div className="container">
          <div className="row">
            {this.renderCampsite(this.props.campsite)}
            {this.renderComments(this.props.campsite.comments)}
          </div>
        </div>
      );
    }
    return <div />;
  }
}

//Need export default or named for React
export default CampSiteInfo;
