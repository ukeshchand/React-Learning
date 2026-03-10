import { useState, useMemo, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import UserModal from "./UserModal";

const DataTable = () => {
  const gridRef = useRef();
  const [selectedUser, setSelectedUser] = useState(null);

  const [rowData] = useState([
    { id: 1, name: "Ukesh", role: "Admin", salary: 50000 },
    { id: 2, name: "Ram", role: "Manager", salary: 40000 },
    { id: 3, name: "Sita", role: "Accountant", salary: 35000 },
    { id: 4, name: "Hari", role: "Developer", salary: 60000 },
    { id: 5, name: "Gita", role: "HR", salary: 30000 },
  ]);

  const columnDefs = useMemo(
    () => [
      { field: "id", sortable: true },
      { field: "name", sortable: true, filter: true },
      { field: "role", sortable: true, filter: true },
      { field: "salary", sortable: true, filter: "agNumberColumnFilter" },
    ],
    []
  );

  const handleRowClick = (event) => {
    setSelectedUser(event.data);
  };

  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <button
          onClick={() => gridRef.current.api.exportDataAsCsv()}
          className="export-btn"
        >
          Export CSV
        </button>
      </div>

      <div className="ag-theme-alpine" style={{ height: 400 }}>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={5}
          onRowClicked={handleRowClick}
        />
      </div>

      {selectedUser && (
        <UserModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </>
  );
};

export default DataTable;