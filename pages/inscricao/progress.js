import React from "react";
import { ProgressBar } from "react-bootstrap";

export default function Progress() {
  return (
    <>
      <ProgressBar now={33} className="mb-4" />
    </>
  );
}
