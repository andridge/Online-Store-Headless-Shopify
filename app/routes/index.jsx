import Hero from "../components/hero";
import Footer from "../components/footer";
import Header from "../components/header";
export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
           <Header/>

           <Hero />      

           <Footer/>
    </div>
  );
}
