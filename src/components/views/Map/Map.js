import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./Map.module.scss";

const Map = (props) => {
  const currentRegion = props.currentRegion;
  const currentLanguage = props.currentLanguage;
  const [curExhImg, setCurExhImg] = useState(
    `https://polyreactsa.blob.core.windows.net/images/${currentRegion.toLowerCase()}/${currentRegion.toLowerCase()}-1-1.jpg?sv=2020-10-02&st=2022-04-06T17%3A18%3A52Z&se=2024-04-07T17%3A18%3A00Z&sr=c&sp=r&sig=EqtV3LRwqXyJnMg28TwWnGbKO4BKa0TCFgjf3d11loc%3D`
  );

  // console.log(currentRegion);

  const region = props.content[0];

  const handleClick = function (e) {
    props.changeRegion(e.target.id);

    if (e.target.id === "Viciebsk") {
      setCurExhImg(
        "https://i.postimg.cc/V62GczdF/94021247-517728538898925-8818940714446404587-n.jpg"
      );
    } else {
      setCurExhImg(
        `https://polyreactsa.blob.core.windows.net/images/${e.target.id.toLowerCase()}/${e.target.id.toLowerCase()}-1-1.jpg?sv=2020-10-02&st=2022-04-06T17%3A18%3A52Z&se=2024-04-07T17%3A18%3A00Z&sr=c&sp=r&sig=EqtV3LRwqXyJnMg28TwWnGbKO4BKa0TCFgjf3d11loc%3D`
      );
    }
  };

  const handleOver = function (e) {
    const curExh = region.exhibition.filter(
      (exhibition) => exhibition.id === +e.target.id
    )[0];

    if (curExh) {
      setCurExhImg(curExh.image);
    }
  };

  const handleOut = function (e) {
    setCurExhImg(
      `https://polyreactsa.blob.core.windows.net/images/${currentRegion.toLowerCase()}/${currentRegion.toLowerCase()}-1-1.jpg?sv=2020-10-02&st=2022-04-06T17%3A18%3A52Z&se=2024-04-07T17%3A18%3A00Z&sr=c&sp=r&sig=EqtV3LRwqXyJnMg28TwWnGbKO4BKa0TCFgjf3d11loc%3D`
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <p
          style={{
            fontFamily: `${
              currentLanguage === "eng" ? "Microsoft JhengHei" : "calibri"
            }`,
          }}
        >
          {
            props.content[0].description.filter(
              (cont) => cont.language === currentLanguage
            )[0].description
          }
        </p>
      </div>
      <div className={styles.map}>
        <svg
          version="1.1"
          id="Belarus"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 550 490"
          className={styles.viewMap}
        >
          <defs>
            <pattern
              id="image"
              patternContentUnits="objectBoundingBox"
              height="100%"
              width="100%"
            >
              <image
                x="0"
                y="0"
                height="1"
                width="1"
                preserveAspectRatio="none"
                xlinkHref={curExhImg}
              ></image>
            </pattern>
          </defs>

          <g className={styles.regions}>
            <polygon
              id="Grodno"
              className={currentRegion === "Grodno" ? styles.active : ""}
              onClick={handleClick}
              points="200,160 195,155 195,150 190,145 185,145 185,135 175,125 170,130 160,130 155,135 155,140 150,145 150,165 145,170 145,180 140,185 145,190 150,190 155,195 155,200 155,205 150,205 145,210 140,210 134.7,205 140,200 140,195 135,190 130,195 125,195 115,205 105,205 100,210 100,220 95,225 90,220 85,225 80,225 75,230 65,230 60,225 50,225 45,230 35,230 30,225 25,225 25,235 30,240 30,260 35,265 35,275 40,280 40,285 40,290 45,295 45,310 50,315 50,340 55,340 60,335 65,340 75,340 80,345 85,340 85,330 90,325 95,320 105,320 105,325 110,330 125,330 125,325 130,320 135,320 140,315 140,295 145,290 145,285 150,280 160,280 175,280 180,285 185,285 190,280 195,280 195,260 190,255 185,255 185,250 180,245 180,240 180,235 190,225 190,220 185,220 185,215 175,215 175,210 170,210 170,205 175,200 185,200 195,190 195,185 200,180 200,175 205,170 205,160"
            />

            <polygon
              id="Viciebsk"
              className={currentRegion === "Viciebsk" ? styles.active : ""}
              onClick={handleClick}
              points="460,165 460,155 450,155 445,150 440,150 435,145 435,140 440,135 440,130 445,130 445,125 450,120 450,110 445,105 440,100 440,90 445,85 445,65 440,65 435,70 430,65 430,60 420,50 415,50 410,45 385,45 380,50 370,50 365,55 360,55 355,50 355,45 360,40 360,35 355,30 345,30 340,25 335,25 325,35 320,35 320,30 315,25 315,20 305,20 300,20 295,25 290,20 290,15 280,15 270,25 270,30 265,35 260,35 255,40 255,50 250,50 240,50 235,45 225,45 210,60 200,60 200,70 195,75 195,85 190,90 195,95 210,95 215,100 210,100 205,105 205,110 185,110 180,115 180,120 175,125 185,135 190,130 225,130 230,125 235,125 235,130 240,135 245,135 250,140 250,145 255,145 260,150 260,155 265,160 290,160 300,170 305,165 305,160 315,160 315,165 320,170 325,170 330,165 360,165 360,185 355,190 355,200 360,200 370,190 385,190 390,195 395,195 395,190 405,190 410,195 420,195 425,190 425,185 430,180 435,185 440,185 445,180 455,180 460,175 455,175 455,170"
            />

            <polygon
              id="Mahiliou"
              className={currentRegion === "Mahiliou" ? styles.active : ""}
              onClick={handleClick}
              points="540,270 530,260 530,250 525,245 520,245 515,240 500,240 495,240 490,235 495,230 495,215 490,215 485,210 480,210 470,200 465,200 465,195 465,180 460,175 455,180 445,180 440,185 435,185 430,180 425,185 425,190 420,195 410,195 405,190 395,190 395,195 390,195 385,190 370,190 360,200 360,215 355,220 355,235 360,240 360,250 350,250 345,255 340,255 335,260 330,260 330,265 325,260 315,260 305,270 300,270 300,280 305,285 300,290 285,290 285,295 290,300 299.5,300 305,305 310,305 310,315 305,320 305,325 300,330 300,335 295,340 300,345 325,345 325,340 330,335 330,330 340,330 345,325 360,325 365,320 375,320 370,315 370,305 375,305 380,300 380,295 375,290 380,285 385,285 390,285 395,290 400,290 400,295 410,295 420,285 425,285 430,290 450,290 450,300 455,305 470,305 475,300 485,300 490,300 500,310 515,310 525,300 545,280 545,270"
            />

            <polygon
              id="Gomel"
              className={currentRegion === "Gomel" ? styles.active : ""}
              onClick={handleClick}
              points="490,395 490,390 480,380 480,365 485,360 480,355 480,350 480,340 475,335 475,330 465,320 465,315 470,310 470,305 455,305 450,300 450,290 430,290 425,285 420,285 410,295 400,295 400,290 395,290 390,285 380,285 375,290 380,295 380,300 375,305 370,305 370,315 375,320 365,320 360,325 355,325 345,325 340,330 330,330 330,335 325,340 325,345 305,345 305,350 300,355 300,365 295,370 285,370 280,365 275,365 275,370 260,370 255,365 255,360 250,360 240,370 240,375 235,380 240,385 245,385 250,390 250,405 255,410 255,415 250,420 250,430 250,450 260,450 260,460 265,460 270,455 280,455 290,445 295,445 295,450 300,455 305,455 315,455 315,465 320,470 325,470 325,460 330,455 335,455 340,450 340,445 345,445 345,455 350,460 350,470 360,470 370,460 375,460 380,465 390,465 395,460 400,460 410,470 410,475 420,485 425,480 425,460 420,455 420,450 425,445 425,440 430,435 430,425 445,410 445,405 455,405 460,410 465,410 465,405 470,400 480,400 485,405 495,405 495,400"
            />

            <polygon
              id="Minsk"
              className={currentRegion === "Minsk" ? styles.active : ""}
              onClick={handleClick}
              points="360,185 360,165 330,165 325,170 320,170 315,165 315,160 305,160 305,165 300,170 290,160 275,160 265,160 260,155 260,150 255,145 250,145 250,140 245,135 240,135 235,130 235,125 230,125 225,130 190,130 185,135 185,145 190,145 195,150 195,155 200,160 205,160 205,170 200,175 200,180 195,185 195,190 190,195 185,200 175,200 170,205 170,210 175,210 175,215 185,215 185,220 190,220 190,225 185,230 180,235 180,245 185,250 185,255 190,255 195,260 195,280 190,280 185,285 185,290 180,295 180,300 185.3,305 190,305 195,310 185,320 190,325 190,335 195,330 200,330 210,340 220,340 225,345 225,365 230,370 230,375 235,380 240,375 240,370 250,360 255,360 255,365 260,370 275,370 275,365 280,365 285,370 295,370 300,365 300,355 305,350 305,345 300,345 295,340 300,335 300,330 305,325 305,320 310,315 310,305 305,305 299.5,300 290,300 285,295 285,290 300,290 305,285 300,280 300,270 305,270 310,265 315,260 325,260 330,265 330,260 335,260 340,255 345,255 350,250 360,250 360,240 355,235 355,225 355,220 360,215 360,200 355,200 355,190"
            />

            <polygon
              id="Brest"
              className={currentRegion === "Brest" ? styles.active : ""}
              onClick={handleClick}
              points="250,405 250,400 250,390 245,385 240,385 235,380 230,375 230,370 225,365 225,345 220,340 210,340 200,330 195,330 190,335 190,325 185,320 195,310 190,305 185.3,305 180,300 180,295 185,290 185,285 180,285 175,280 160,280 150,280 145,285 145,290 140,295 140,315 135,320 130,320 125,325 125,330 115,330 110,330 105,325 105,320 95,320 90,325 85,330 85,340 80,345 75,340 65,340 60,335 55,340 50,340 50,350 40,350 35,355 25,355 15,365 15,370 10,375 10,380 5,385 10,390 15,390 20,395 25,400 30,400 30,405 35,410 35,415 30,420 30,435 25,440 25,455 30,460 30,450 35,445 40,445 45,445 50,450 50,455 55,455 60,450 75,435 75,420 95,420 110,420 115,415 125,415 130,420 145,420 150,415 155,420 170,420 175,425 190,425 195,430 205,430 210,435 230,435 235,440 235,445 240,450 250,450 250,430 250,420 255,415 255,410"
            />
          </g>
        </svg>
      </div>
      <div className={styles.links}>
        <ul className={styles.linkWrapper}>
          {region.exhibition.map((item) => (
            <NavLink
              to="/exhibitions"
              key={item.id}
              onMouseOver={handleOver}
              onMouseOut={handleOut}
              className={styles.activeLink}
              onClick={() => {
                props.changeExhibition(item.id);
                props.changeAmountImage(item.amountImg);
              }}
            >
              <li
                style={{
                  fontFamily: `${
                    currentLanguage === "eng"
                      ? "Titillium Web Italic"
                      : "calibrii"
                  }`,
                }}
                id={item.id}
                className={styles.activeLink}
              >
                {
                  item.content.filter(
                    (cont) => cont.language === currentLanguage
                  )[0].title
                }
                .{currentRegion} #{item.id}
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

Map.propTypes = {
  currentLanguage: PropTypes.string.isRequired,
  currentRegion: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
  changeRegion: PropTypes.func.isRequired,
  changeExhibition: PropTypes.func.isRequired,
  changeAmountImage: PropTypes.func.isRequired,
};

export default Map;
