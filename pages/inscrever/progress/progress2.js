import React from "react";
import { ProgressBar } from "react-bootstrap";

export default function Progress2() {
  return (
    <div>
      <ProgressBar now={100} className="mb-4" />
    </div>
  );
}
