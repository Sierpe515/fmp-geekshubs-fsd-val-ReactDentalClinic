
import { NavBar } from '../components/Navbar/NavBar';
import './MainApp.css'
import { Footer } from '../components/Footer/Footer';
import { Body } from './Body/Body';
import { NavBarSpace } from '../components/NavBarSpace/NavBarSpace';

export const MainApp = () => {
  return (
    <>
    <NavBar/>
    <NavBarSpace/>
    <Body/>
    <Footer/>
    </>
  )
}
