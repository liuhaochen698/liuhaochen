import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,  
  Link,
  Switch,
  Redirect
 } from "react-router-dom";
import Test1 from "./component/Test1"
import Test2 from "./component/Test2"
import Test3 from "./component/Test3"
const Foo =({match})=>{
  console.log(match);
  return(
    <h1>hello{match.params.id}</h1>
  )
}
function App() {
  return (
    <div className="App">
        <Router>
          <Link to="/54321">Test1</Link> |
          <Link to="/Test2">Test2</Link> |
          <Link to="/Test3">Test3</Link> |
          <Link to="/foo/123456">foo</Link> |
          <Link to="/testrender">testrender</Link> |
          <Link to="/redirect">redirect</Link> 
          <Switch>
          <Route path="/foo/:id" component={Foo}></Route>
          <Route path="/redirect" render={()=>{
            return(
              <Redirect to ="1111"/>
            )
          }} />
          <Route path="/testrender" render={()=>{
            return(
              <h1>hello world</h1>
            )
          }}/>
          <Route path="/Text2" component={Test2}/>
          <Route path="/Text3" component={Test3}/>
          <Route path="/:id" component={Test1}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
