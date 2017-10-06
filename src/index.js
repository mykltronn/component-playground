import React from 'react';
import ReactDOM from 'react-dom';
// import react-router bidnass
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/index.css'; // universal stylesheet
// import children
import Layout from './app/components/layout/Layout'
import Splash from './app/components/splash/Splash';
import Navigation from './app/components/navigation/Navigation';
import Organization from './app/components/organization/Organization';

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/navigation" component={Navigation}/>
        <Route path="/organization" component={Organization}/>
        <Route path="/" component={Splash}/>
      </Switch>
    </Layout>
  </BrowserRouter>,
  document.getElementById('root'));
