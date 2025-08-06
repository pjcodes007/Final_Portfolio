import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Projectss from './Pages/Project';
import GuestBook from './Pages/GuestBook';
import NotFound from './Pages/NotFound';
import ScrollToTop from './components/ScrollToTop';

const App = () =>{

  return(
  <>
    <ScrollToTop />
    <Routes>
      <Route path = '/' element={<Home/>}/>
      <Route path = '/about' element={<About/>}/>
      <Route path = '/project' element={<Projectss/>}/>
      <Route path = '/guestbook' element={<GuestBook/>} />
      <Route path = '/*' element={<NotFound/>} />
    </Routes>
  </>  
    
  )
}

export default App;