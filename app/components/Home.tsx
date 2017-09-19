import { Component } from 'react';
import React from 'react'
import { Link } from 'react-router-dom';
const styles = require("./Home.css")
// import * as styles from './Home.css';

export default class Home extends Component<Object, Object> {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home,hello</h2>
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
