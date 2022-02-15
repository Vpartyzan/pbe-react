import React, { Component } from "react";
import "./Rotate360.css";

const pixelsPerDegree = 5; // adjust the sensitivity, higher values make mouse less sensitive

class Rotate360 extends Component {
  static defaultProps = { dir: "awair-360", numImages: 55 };

  state = {
    dragging: false,
    imageIndex: 1,
    dragStartIndex: 1,
  };

  componentDidMount = () => {
    document.addEventListener("mousemove", this.handleMouseMove, false);
    document.addEventListener("mouseup", this.handleMouseUp, false);
  };

  componentWillUnmount = () => {
    document.removeEventListener("mousemove", this.handleMouseMove, false);
    document.removeEventListener("mouseup", this.handleMouseUp, false);
  };

  handleMouseDown = (e) => {
    e.persist();
    this.setState((state) => ({
      dragging: true,
      dragStart: e.screenX,
      dragStartIndex: state.imageIndex,
    }));
  };

  handleMouseUp = () => {
    this.setState({ dragging: false });
  };

  updateImageIndex = (currentPosition) => {
    let numImages = 21;
    const pixelsPerImage = pixelsPerDegree * (360 / numImages);
    const { dragStart, imageIndex, dragStartIndex } = this.state;
    // pixels moved
    let dx = (currentPosition - dragStart) / pixelsPerImage;
    let index = Math.floor(dx) % numImages;

    if (index < 0) {
      index = numImages + index - 1;
    }
    index = (index + dragStartIndex) % numImages;
    if (index === 0) index = 1;
    if (index !== imageIndex) {
      this.setState({ imageIndex: index });
    }
  };

  handleMouseMove = (e) => {
    if (this.state.dragging) {
      this.updateImageIndex(e.screenX);
    }
  };

  preventDragHandler = (e) => {
    e.preventDefault();
  };

  renderImage = () => {
    const { imageIndex } = this.state;

    console.log(imageIndex);

    return (
      <div className="rotate360">
        <img className="rotate-360-img" alt="" src={"../1.jpg"} />
      </div>
    );
  };

  render = () => {
    return (
      <div
        className="rotate-360-img"
        onMouseDown={this.handleMouseDown}
        onDragStart={this.preventDragHandler}
      >
        {this.renderImage()}
      </div>
    );
  };
}

export default Rotate360;
