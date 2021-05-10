import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import EnrollmentPage from '../pages/enrollmentPage';
import QuestionPage   from '../pages/questionPage'
import { useSelector } from 'react-redux'
export default function App() {

  const name = useSelector(state=>state.name.name)
  const SafeQuestionRoute=(props)=>{
     return name?<QuestionPage/>:<Redirect to="/"/>;
  }  
  return (
    <Router>
    
        <Switch>
          <Route exact path="/questions">
            <SafeQuestionRoute name={name}/>
          </Route>
          <Route path="/">
            <EnrollmentPage />
          </Route>
         
         
        </Switch>

    </Router>
  );
}