import { useRoutes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from '../Home'
import NotFound from '../NotFound'
import Login from '../Login'
import NavBar from '../../components/NavBar'
import Signup from '../Signup'
import Update from '../Update'
import { GetUserProvider } from '../../Context'
import Followers from '../Followers'
import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";




const AppRoutes = () => {
  let routes = useRoutes([
    { path:'/', element: <Home/> },
    { path: '/login', element: <Login/> },
    { path: '/*', element: <NotFound/> },
    { path: '/signup', element: <Signup/> },
    { path: '/myfollowers', element: <Followers/> },
    { path: '/update', element: <Update/> }
  ])

  return routes
}

function App() {
  return (
    <GetUserProvider>
      <BrowserRouter>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="dark">
            <AppRoutes/>
            <NavBar/>
          </NextThemesProvider>
        </NextUIProvider>
      </BrowserRouter>
    </GetUserProvider>
  )
}

export default App
