import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import EnrollmentPage from '../pages/enrollmentPage';
import QuestionPage   from '../pages/questionPage'
export default function App() {
  const [name,setName] = React.useState()  
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
            <EnrollmentPage setName={setName}/>
          </Route>
         
         
        </Switch>

    </Router>
  );
}