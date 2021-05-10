import React from 'react';
import axios from 'axios';
import Feeling from '../Feeling/Feeling';
import Content from '../Content/Content';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Submission from '../Submission/Submission';
import { HashRouter as Router, Route} from "react-router-dom";
import './App.css';



function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route path="/" exact>
          <Feeling />
        </Route>
        <Route path="/content" exact>
          <Content />
        </Route>
        <Route path="/supported" exact>
          <Supported />
        </Route>
        <Route path="/comments" exact>
          <Comments />
        </Route>
         <Route path="/review" exact>
          <Review />
        </Route>
        <Route path="/submission">
          <Submission />
        </Route>
      </Router> 
    </div>
  );
}

export default App;
