import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute} from 'react-router'
import { browserHistory } from 'react-router'

const Layout = ({children}) => <div>Layout{children}</div>
const HelloWorld = () => <div>Hello World!</div>
const Next = () => <div>Next</div>

ReactDOM.render(
	<Router history={browserHistory}>
    	<Route path="/" component={Layout}>
    		<IndexRoute component={HelloWorld} />
      		<Route path='next' component={Next} />
    	</Route>
  	</Router>
	, document.getElementById('root'))
