import Home from './components/Home/Home';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import Competition from './components/Home/Competition/Competition';

function App() {
  return (
    <div className='z-0 flex flex-col '>
      <div className='w-full relative top-0 left-0 flex items-center flex-col justify-center'>
        <img
          src='https://sportify-git-master.itope84.vercel.app/img/bg-football.2d1b7b03.jpg'
          alt='bg_img'
          className='w-full max-h-80 object-cover'
        />
        <img
          src='https://sportify-git-master.itope84.vercel.app/img/logo.efdde25b.png'
          alt='sportify'
          className='absolute top-24'
        />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='competition'>
          <Route path=':id' element={<Competition />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
