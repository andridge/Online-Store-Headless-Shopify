import Hero from "../components/hero";
import Footer from "../components/footer";
import Header from "../components/header";
import Productlist from "../components/product list"
export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
           <Header/>
           <Hero /> 
           <Productlist/>
           <Footer/>
    </div>
  );
}
