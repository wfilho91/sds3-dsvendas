import DataTable from "assets/components/DataTable";
import Footer from "assets/components/Footer";
import Navbar from "assets/components/Navbar";

export default function App() {
  return (
    < >
      <Navbar/>
      <div className="container">
          <h1 className="text-primary">Olá mundo !</h1>
          <DataTable/>
      </div>
      <Footer/>
    </>
  );
}

 