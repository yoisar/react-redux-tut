import React from "react";

export default function EditOrder() {
  return (
    <div className="kt-portlet kt-portlet--mobile">
      <div className="kt-portlet__head">
        <div className="kt-portlet__head-label">
          <h3 className="kt-portlet__head-title" id="OrderTitle">
            Service order
          </h3>
        </div>
        <div className="kt-portlet__head-toolbar">
          <div className="kt-portlet__head-actions">
            <button
              id="btnAbrirInventario"
              type="button"
              className="btn btn-primary"
              data-target="#modalInventario"
            >
              Vehicle inventory
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#modalCliente"
            >
              Add Client
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
