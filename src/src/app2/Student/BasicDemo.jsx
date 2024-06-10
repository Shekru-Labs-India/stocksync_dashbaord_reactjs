import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { ProductService } from "./ProductService";

export default function BasicDemo() {
  const [products, setProducts] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");

  useEffect(() => {
    ProductService.getProductsMini().then((data) => setProducts(data));
  }, []);

  return (
    <div style={{ maxWidth: "50rem" }}>
      <div className="card">
        <h1>Product List</h1>
        <div className="p-inputgroup  ">
          <span className="p-inputgroup-addon">
            <i className="pi pi-search"></i>
          </span>
          <InputText
            type="search"
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Global Search"
          />
        </div>
        <DataTable
          style={{ border: "1px solid #ddd" }}
          value={products}
          paginator
          rows={10}
          tableStyle={{ maxWidth: "50rem" }}
          globalFilter={globalFilter}
        >
          <Column
            style={{ border: "1px solid #ddd" }}
            field="code"
            header="Code"
            sortable
          ></Column>
          <Column
            style={{ border: "1px solid #ddd" }}
            field="name"
            header="Name"
            sortable
          ></Column>
          <Column
            style={{ border: "1px solid #ddd" }}
            field="category"
            header="Category"
            sortable
          ></Column>
          <Column
            style={{ border: "1px solid #ddd" }}
            field="quantity"
            header="Quantity"
            sortable
          ></Column>
        </DataTable>
      </div>
    </div>
  );
}
