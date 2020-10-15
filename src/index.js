
import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/homepage'
import InternetDrone from './components/internetdrone'
import Soundcleaner from './components/soundcleaner'
import Error from './components/error'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Pages extends React.Component {
  render() {
    return (      
      <BrowserRouter>
       <div>
           <Switch>
            <Route path="/" exact component={Homepage}/>
            <Route path="/soundcleaner" component={Soundcleaner}/>
            <Route path="/internetdrone" component={InternetDrone}/>
           <Route component={Error}/>
          </Switch>
       </div> 
     </BrowserRouter>
   );
  }
}

ReactDOM.render(<Pages/>, document.querySelector('#root'));
    