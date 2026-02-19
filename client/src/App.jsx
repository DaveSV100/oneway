import { useRoutes, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Index'
import Body from './Components/Body/Index'
import Email from './Components/Form/Index'
import Footer from './Components/Footer/Index'
import Link from './Pages/Link/index.jsx'
import './App.css'

function App() {
  const AppRoutes = () => {
    let routes = useRoutes([

   
      { path: '/link/278', element: <Link /> },

    ]);
    return routes;
  };
  return (
    <>
    <BrowserRouter>
    <Navbar />
          <Body />
          <AppRoutes />
          <Email />
          <Footer />
    </BrowserRouter>
          
    </>
  )
}

export default App
