import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardText,
  CardImg,
  CardImgOverlay,
  CardTitle
} from "reactstrap";
import CampsiteInfo from "./CampsiteInfoComponent";
//import Directory from ' ./DirectoryComponent.js';

class Directory extends Component {
  onCampsiteSelect(campsite) {
    this.setState({ selectedCampsite: campsite });
  }

  renderSelectedCampsite(campsite) {
    if (campsite) {
      return (
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardBody>
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      );
    }
  }

  render() {
    const directory = this.props.campsites.map(campsite => {
      return (
        <div key={campsite.id} className="col-md-5 m-1">
          <Card onClick={() => this.props.onClick(campsite.id)}>
            <CardImg width="100" top src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
              <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{directory}</div>
        <CampsiteInfo campsite={this.state.selectedCampsite} />
      </div>
    );
  }
}

export default Directory;
