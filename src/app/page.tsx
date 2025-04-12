import Hero from './HomePage/Hero'
import Feature from './HomePage/Feature';
import Footer from './Public/Footer';
import Navbar from './Public/Navbar';
import { auth } from "../Firebase";



export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Feature/>
      <Footer/>
      </>
  );
}
