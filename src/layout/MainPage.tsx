//src/layouts/MainPage.tsx
import ProductList from "../components/ProductList";
import Hero from "../components/hero";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import FirstPage from "../components/firstPage/FirstPage";
import "./MainPage.css";
import { BiStore } from "react-icons/bi";

function MainPage(): JSX.Element {
  return (
    <>
      <Header/>
      <FirstPage/>
      <Hero/>
      <ProductList />
      <Footer/>
    </>
  );
}

export default MainPage;