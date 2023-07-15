import { useRoutes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from '../Home'
import NotFound from '../NotFound'
import Login from '../Login'
import NavBar from '../../components/NavBar'
import Signup from '../Signup'
import { GetUserProvider } from '../../Context'
import Followers from '../Followers'

const AppRoutes = () => {
  let routes = useRoutes([
    { path:'/', element: <Home/> },
    { path: '/login', element: <Login/> },
    { path: '/*', element: <NotFound/> },
    { path: '/signup', element: <Signup/> },
    { path: '/myfollowers', element: <Followers/> }
  ])

  return routes
}

function App() {
  return (
    <GetUserProvider>
      <BrowserRouter>
        <AppRoutes/>
        <NavBar/>
      </BrowserRouter>
    </GetUserProvider>
  )
}

export default App
