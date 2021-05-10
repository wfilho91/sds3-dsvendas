import BarChart from "assets/components/BarChart";
import DataTable from "assets/components/DataTable";
import DonutChart from "assets/components/DonutChart";
import Footer from "assets/components/Footer";
import Navbar from "assets/components/Navbar";

export default function Dashboard() {
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary">Dashboard de Vendas</h1>
        <div className="row px-3">
        <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
            <BarChart/>
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
            <DonutChart/>
          </div>
          <div className="py-5">
            <h2 className="text-primary">Todas vendas</h2>
          </div>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
}