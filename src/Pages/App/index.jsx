import { useRoutes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from '../Home'
import NotFound from '../NotFound'
import Signup from '../Signup'
import NavBar from '../../components/NavBar'
import { GetUserProvider } from '../../Context'

const AppRoutes = () => {
  let routes = useRoutes([
    { path:'/', element: <Home/> },
    { path: '/signup', element: <Signup/> },
    { path: '/*', element: <NotFound/> }
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
