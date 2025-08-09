import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Projectss from './Pages/Project';
import PopUp from './Pages/PopUp';
import NotFound from './Pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import Guestbook from './Pages/GuestBook';
import CookingPage from './components/3d';


const App = () =>{

  return(
  <>
   <ScrollToTop />
    <Routes>
      <Route path = '/' element={<Home/>}/>
      <Route path = '/about' element={<About/>}/>
      <Route path = '/project' element={<Projectss/>} />
      <Route path = '/guestbook' element={<Guestbook/>} />
      <Route path = '/*' element={<NotFound/>} />
      <Route path = '/3d' element={<CookingPage/>} />
    </Routes>  

  
  </>  
    
  )
}

export default App;