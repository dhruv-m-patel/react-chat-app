import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component'

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={loadable(() => import('./ChatRoom'))} />
      <Route component={loadable(() => import('./NotFound'))} />
    </Switch>
  );
}
