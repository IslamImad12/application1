import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Components/Home';
import Navbar from './Components/Nav/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Table from './Components/Table/Table';
import About from './Components/About/About';
import Table2 from './Components/Table2/Table2';
import Ser1 from './Components/Services/Ser';
import Ser2 from './Components/Services/Ser2';
import Ser3 from './Components/Services/Ser3';
import Ser4 from './Components/Services/Ser4';
import Ser5 from './Components/Services/Ser5';
import Ser6 from './Components/Services/Ser6';
import Ser7 from './Components/Services/Ser7';
import Ser8 from './Components/Services/Ser8';
import Ser9 from './Components/Services/Ser9';
import Ser10 from './Components/Services/Ser10';
import Contact from './Components/Contact/Contact';

function App() {
  const routes = createBrowserRouter([
    {path:'' , element:<Layout/> , children: [
      {path:'' , element:<Table/>},
      {path:'/home' , element:<Table/>},
      {path:'/table2' , element:<Table2/>},
      {path:'/about' , element:<About/>},
      {path:'/services' , element:<Home/>},
      {path:'/ser1' , element:<Ser1/>},
      {path:'/ser2' , element:<Ser2/>},
      {path:'/ser3' , element:<Ser3/>},
      {path:'/ser4' , element:<Ser4/>},
      {path:'/ser5' , element:<Ser5/>},
      {path:'/ser6' , element:<Ser6/>},
      {path:'/ser7' , element:<Ser7/>},
      {path:'/ser8' , element:<Ser8/>},
      {path:'/ser9' , element:<Ser9/>},
      {path:'/ser10' , element:<Ser10/>},
      {path:'/contact' , element:<Contact/>},
    ]}
  ])
  return <>
   <RouterProvider router={routes}/>
    {/* <Navbar/>
    <Home/> */}
    {/* <Table/> */}
  </>
}

export default App;
