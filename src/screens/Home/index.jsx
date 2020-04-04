import React from 'react';
import { Link } from 'react-router-dom';
import { routeName } from 'router/const';
import './Home.scss';

export const HomeScreen = () => {
  return (
    <main>
      <h2>Home Screen</h2>
      <ul>
        <li>
          <Link to={routeName.STRATEGIES}>Cleaning Strategies</Link>
        </li>
      </ul>
    </main>
  );
};

export default HomeScreen;
