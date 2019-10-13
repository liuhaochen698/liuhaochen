import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,  
    Link,
    Switch,
    Redirect
   } from "react-router-dom";

const LinkButton = withRouter(({history})=>{
    return(
        <button onClick={()=>{history.push("/Test3/foo1")}}>foo1</button>
    )
})
const Foo1 =()=>{
    return(
        <div>
            <h1>Foo1</h1>
        </div>
    )
}
const Foo2 =()=>{
    return(
        <div>
            <h1>Foo2</h1>
        </div>
    )
}

export default class Test3 extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Link to="/Test3/foo1">foo1</Link>
                    <Link to="/Test3/foo2">foo2</Link>
                    <LinkButton/>
                    <prompt when={true} message={()=>{
                        return "确定离开?"
                    }}/>
                    <Switch>
                    <Route path="/Test3/foo1" component={Foo1}/>
                    <Route path="/Test3/foo2" component={Foo2}/>
                    </Switch>   
                </Router>
            </div>
        )
    }
}
