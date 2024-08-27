import Header from "./components/Header/Header"
import Banner from './components/Banner';
import Plan from "./components/Plan";
import Button from "./components/Button/Button";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <section style={{ padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ marginBottom: "20px" }}>Our Best Plans</h2>
          <Button 
            props={{
              title: "More",
              color: "transparent",
              padding: "0px 10px",
              textColor: "#FCE207",
              style: {
                fontWeight: "bold",
                textDecoration: "underline",
                cursor: "pointer"
              }
            }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Plan 
            speed="3" 
            price="790" 
            details={
              <>
                <strong>25% Discount on router</strong><br />
                Free Setup<br />
                Fiber Based Internet<br />
                24/7 Support<br />
                Ultra Fast Speeds<br />
                Highly Reliable
              </>
            } 
            
          />
          <Plan 
            speed="16" 
            price="2390" 
            details={
              <>
                <strong>Free WiFi Router</strong><br />
                Free Setup<br />
                Fiber Based Internet<br />
                24/7 Support<br />
                Ultra Fast Speeds<br />
                Highly Reliable
              </>
            } 
          />
          <Plan 
            speed="5" 
            price="990" 
            details={
              <>
                <strong>50% Discount on router</strong><br />
                Free Setup<br />
                Fiber Based Internet<br />
                24/7 Support<br />
                Ultra Fast Speeds<br />
                Highly Reliable
              </>
            } 
          />
        </div>
      </section>
    </>
  );
}

export default App;