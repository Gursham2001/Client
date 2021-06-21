import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/common/NavBar.js'
import Feed from './components/common/Feed.js'
import AuthPage from './components/auth/AuthPage.js'
import UserFeed from './components/users/UserFeed.js'
import ProjectNew from './components/projects/ProjectNew.js'
import ProjectEdit from './components/projects/projectEdit.js'
import UserEdit from './components/users/UserEdit.js'


function App() {

  const [isLoginForm, setIsLoginForm] = React.useState(true)

  const [searchTerm, setSearchTerm] = React.useState('')

  return (
    <Router>
      <Switch>
        <Route path="/auth" component={AuthPage}>
          <AuthPage isLoginForm={isLoginForm} setIsLoginForm={setIsLoginForm} />
        </Route>

        <>
          <NavBar setIsLoginForm={setIsLoginForm} setSearchTerm={setSearchTerm} />
          <Route exact path="/" component={Feed}>
            <Feed searchTerm={searchTerm} />
          </Route>
          <Route path="/profile/:id" component={UserFeed}>
            <UserFeed searchTerm={searchTerm}/>
          </Route>
          <Route path="/profile/:id/edit" component={UserEdit}/>
          <Route path="/projects/new" component={ProjectNew} />
          <Route path="/projects/:projectId/edit" component={ProjectEdit} />
        </>
      </Switch>
    </Router>
  )
}

export default App
