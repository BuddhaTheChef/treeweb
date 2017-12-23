import React from 'react';
import { Route, Switch } from 'react-router-dom';
import  Homeview  from './components/homeview/Homeview';
import  Secondview  from './components/secondview/Secondview';
import  Thirdview  from './components/thirdview/Thirdview';
import  Fourthview  from './components/fourthview/Fourthview';


export default (

    <Switch>
      <Route exact path='/' component={Homeview}/>
      <Route path='/secondview' component={Secondview}/>
      <Route path='/thirdview' component={Thirdview}/>
      <Route path='/fourthview' component={Fourthview}/>
    </Switch>

  )
