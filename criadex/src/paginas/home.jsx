import {Routes,Route,Link} from 'react-router-dom';

import {Pagina1} from './pagina1';
import {Pagina2} from './pagina2';

export const Home = () => {
    return(
    <>
      <Routes>
          <Route path='/' element = {<Pagina1/>}></Route>
          <Route path='/pagina2/:id' element = {<Pagina2/>}></Route>
      </Routes>
      
    </> 
    ) ; 

}