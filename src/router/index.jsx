import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routeName } from './const';
import HomeScreen from 'screens/Home';
import StrategiesScreen from 'screens/Strategies';
import StrategyScreen from 'screens/Strategy';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routeName.HOME} exact component={HomeScreen} />
        <Route path={routeName.STRATEGIES} exact component={StrategiesScreen} />
        <Route path={routeName.STRATEGY} component={StrategyScreen} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
