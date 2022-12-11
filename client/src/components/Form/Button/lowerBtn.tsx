import React, { useState, useEffect } from "react";
import "./index.css";

const LowerButton = ({ title, active }: { title: string; active: boolean }) => (
  <button
    className={
      active
        ? "active_lowerBtn" + " lower-btn-container"
        : " lower-btn-container"
    }
    type="submit"
  >
    {title}
  </button>
);

export default LowerButton;
