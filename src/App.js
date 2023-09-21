
import Home from './component/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DataProvider from './component/context/DataContext';
import { CartConter } from './component/CartContent/CartConter';

function App() {
  return (
    <DataProvider>
     <BrowserRouter>
     <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/cart' element={<CartConter/>}></Route>
     </Routes>
     </BrowserRouter>
     </DataProvider>
  );
}

export default App;
