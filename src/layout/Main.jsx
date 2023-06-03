import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
// import Footer from '../components/Footer/Footer';

const Main = () => {
  return (
    <>
      <NavBar />

      <hr />

      <div className='max-w-6xl mx-auto'>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Main;
