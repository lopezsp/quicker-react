import { useRoutes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from '../Home'
import Account from '../Account'
import NotFound from '../NotFound'
import Signup from '../Signup'
import NavBar from '../../components/NavBar'

const AppRoutes = () => {
  let routes = useRoutes([
    { path:'/', element: <Home/> },
    { path: '/users/*', element: <Account/> },
    { path: '/signup', element: <Signup/> },
    { path: '/*', element: <NotFound/> }
  ])

  return routes
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes/>
      <NavBar/>
    </BrowserRouter>
  )
}

export default App
