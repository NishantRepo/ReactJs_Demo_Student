import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListStudentComponent from "./component/student/ListStudentComponent";
import AddStudentComponent from "./component/student/AddStudentComponent";
import EditStudentComponent from "./component/student/EditStudentComponent";

function App() {
  return (
      <div className="container">
          <Router>
              <div className="col-md-6">
                  <h1 className="text-center" style={style}>Student Application</h1>
                  <Switch>
                      <Route path="/" exact component={ListStudentComponent} />
                      <Route path="/student" exact component={ListStudentComponent} />
                      <Route path="/add-student" component={AddStudentComponent} />
                      <Route path="/update-student" component={EditStudentComponent} />
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default App;
