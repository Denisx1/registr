import React from "react";
import './index.css'

const Paragraphs = ({
  title
}: {
  title: string
}) => (
  <a
    className={title}
  >
    {title}
  </a>
);

export default Paragraphs;