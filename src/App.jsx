import { Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import AddPostPage from './pages/AddPostPage'
import HomePage from './pages/HomePages'
import PostsPage from './pages/PostsPage'

function App() {
  return (
    <div className="App container">
      <Header />
      <h1>React</h1>

      <Route path={'/posts'}>
        <PostsPage />
      </Route>

      <Route path={'/add-post'}>
        <AddPostPage />
      </Route>

      <Route path={'/'} exact>
        <HomePage />

      </Route>
    </div>

  )
}

export default App
