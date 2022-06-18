import React, { Component } from "react";
import styles from "./Rotate360.scss";

import PropTypes from "prop-types";

const pixelsPerDegree = 3; // adjust the sensitivity, higher values make mouse less sensitive

class Rotate360 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dragging: false,
      imageIndex: 1,
      dragStartIndex: 1,
      imgArr: [],
      lastImgArr: [],
      numImages: this.props.amountImg,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (state.imgArr.length !== state.lastImgArr.length) {
      return {
        lastImgArr: state.imgArr,
      };
    }

    return null;
  }

  componentDidMount = () => {
    document.addEventListener("mousemove", this.handleMouseMove, false);
    document.addEventListener("touchmove", this.handleMouseMove, false);
    document.addEventListener("mouseup", this.handleMouseUp, false);
    console.log("IMAGE:", this.props.amountImg);
    this.preloadImages();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.activeExhibition !== this.props.activeExhibition) {
      this.setState((state) => {
        return {
          numImages: this.props.amountImg,
          imgArr: [],
          imageIndex: 1,
        };
      });
      this.preloadImages();
    }
  };

  componentWillUnmount = () => {
    document.removeEventListener("mousemove", this.handleMouseMove, false);
    document.removeEventListener("touchmove", this.handleMouseMove, false);
    document.removeEventListener("mouseup", this.handleMouseUp, false);
  };

  preloadImages = () => {
    const { currentRegion, activeExhibition, amountImg } = this.props;
    const arr = [];
    const links = [];

    for (let i = 1; i <= amountImg; i++) {
      let image = new Image();

      image.src = `https://polyreactsa.blob.core.windows.net/images/${currentRegion.toLowerCase()}/${currentRegion.toLowerCase()}-${activeExhibition}-${i}.jpg#{sas.exhibition}#`;
      image.alt = i;
      image.className = "rotate-360-img";

      arr.push(image);
    }

    console.log("ARR:", arr);

    this.setState({
      imgArr: arr,
    });
  };

  handleMouseDown = (e) => {
    e.persist();
    this.setState((state) => ({
      dragging: true,
      dragStart: e.screenX,
      dragStartIndex: state.imageIndex,
    }));
  };

  handleTouchStart = (e) => {
    e.persist();
    this.setState((state) => ({
      dragging: true,
      dragStart: e.targetTouches[0].screenX,
      dragStartIndex: state.imageIndex,
    }));
  };

  handleMouseUp = () => {
    this.setState({ dragging: false });
  };

  handleTouchEnd = () => {
    this.setState({ dragging: false });
  };

  updateImageIndex = (currentPosition) => {
    const { dragStart, imageIndex, dragStartIndex } = this.state;
    const { amountImg } = this.props;

    const pixelsPerImage = pixelsPerDegree * (360 / amountImg);
    // pixels moved
    let dx = (currentPosition - dragStart) / pixelsPerImage;
    let index = Math.floor(dx) % amountImg;

    if (index < 0) {
      index = amountImg + index - 1;
    }
    index = (index + dragStartIndex) % amountImg;
    if (index === 0) index = 1;
    if (index !== imageIndex) {
      this.setState({ imageIndex: index });
    }
  };

  handleMouseMove = (e) => {
    if (this.state.dragging) {
      !e.targetTouches
        ? this.updateImageIndex(e.screenX)
        : this.updateImageIndex(e.targetTouches[0].screenX);
    }
  };

  preventDragHandler = (e) => {
    e.preventDefault();
  };

  renderImage = () => {
    const { imageIndex, imgArr } = this.state;
    const { currentRegion, activeExhibition } = this.props;

    let src =
      imgArr.length > 0
        ? imgArr[imageIndex - 1].src
        : `https://polyreactsa.blob.core.windows.net/images/${currentRegion.toLowerCase()}/${currentRegion.toLowerCase()}-${activeExhibition}-1.jpg#{sas.exhibition}#`;

    return (
      <div className={styles.rotate360}>
        <img className="rotate-360-img" alt="" src={src} />
      </div>
    );
  };

  render = () => {
    return (
      <div
        className="rotate-360-img"
        onTouchStart={this.handleTouchStart}
        onMouseDown={this.handleMouseDown}
        onDragStart={this.preventDragHandler}
      >
        {this.renderImage()}
      </div>
    );
  };
}

Rotate360.propTypes = {
  currentRegion: PropTypes.string.isRequired,
  activeExhibition: PropTypes.number.isRequired,
  amountImg: PropTypes.number.isRequired,
};

export default Rotate360;
