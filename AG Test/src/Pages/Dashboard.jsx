import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import StatsCards from "../Components/StatsCards";
import DataTable from "../Components/DataTable";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <StatsCards />
        <DataTable />
      </div>
    </div>
  );
};

export default Dashboard;