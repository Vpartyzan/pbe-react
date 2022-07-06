import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import Search from "../../Search/SearchContainer";

import styles from "./SearchResult.module.scss";

const SearchResult = (props) => {
  const searchResult = props.searchResult;
  const currentLanguage = props.currentLanguage;

  console.log("res:", searchResult);

  const isContent = function () {
    if (searchResult.length > 0) {
      return searchResult.map((item) => (
        <NavLink
          to="/exhibitions"
          key={item.id + "_" + item.amountImg}
          className={styles.result}
          onClick={() => {
            props.changeExhibition(item.id);
            props.changeAmountImage(item.amountImg);
            props.changeRegion(item.currentRegion);
          }}
        >
          <div className={styles.resImg}>
            <img src={item.image} title={item.id} />
          </div>
          <div>
            <h2 className={styles.title}>
              {item.content
                .filter((content) => content.language === currentLanguage)
                .map((el) => el.title)}
            </h2>
            <p>
              {item.content
                .filter((content) => content.language === currentLanguage)
                .map((el) => el.subtitle)}
            </p>
          </div>
        </NavLink>
      ));
    } else if (searchResult.length < 1) {
      switch (currentLanguage) {
        case "eng":
          return (
            <div className={styles.result}>
              <h1>Sorry, your search returned no results</h1>
            </div>
          );
          break;
        case "blr":
          return (
            <div className={styles.result}>
              <h1>На жаль, ваш пошук не даў вынікаў</h1>
            </div>
          );
          break;
        case "ru":
          return (
            <div className={styles.result}>
              <h1>Извините, ваш поиск не дал результатов</h1>
            </div>
          );
          break;
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>{props.searchString} - search on site</h1>
      </div>
      <div className={styles.searcher}>
        <Search />
      </div>
      <div className={styles.resultContainer}>{isContent()}</div>
    </div>
  );
};

SearchResult.propTypes = {
  searchString: PropTypes.string,
  currentLanguage: PropTypes.string.isRequired,
  searchResult: PropTypes.array,
  changeSearchString: PropTypes.func,
  changeExhibition: PropTypes.func.isRequired,
  changeAmountImage: PropTypes.func.isRequired,
  changeRegion: PropTypes.func.isRequired,
};

export default SearchResult;
