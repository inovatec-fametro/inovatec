import { filtersState } from "context/Filters/filtersState";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsFilter } from "react-icons/bs";
import Filtro from "../Filtro";

export default function FiltrosMobile(props) {
  const [show, setShow] = useState(false);
  const ClearFilters = filtersState((state) => state.ClearFilters);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const offCanvasStyle = {
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
    height: "90%",
  };

  return (
    <div {...props}>
      <Button
        variant="primary"
        onClick={handleShow}
        className="align-items-center w-100 py-2"
      >
        <BsFilter className="me-2" />
        Filtro
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement={"bottom"}
        style={offCanvasStyle}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fw-bold"></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="sticky-bottom d-grid gap-2">
            <Button onClick={handleClose} variant="primary">
              Aplicar Filtro
            </Button>
            <Button
            className="mb-3"
              onClick={() => {
                ClearFilters();
                handleClose();
              }}
            >
              Limpar
            </Button>
          </div>
          <Filtro />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
