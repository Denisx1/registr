import React, { useState, useEffect, Children, cloneElement } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./index.css";

const PAGE_WIDTH = 100;

const Carousel = ({ children }: { children: any }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState<any>([]);

  const handleLeftArrovClick = () => {
    setOffset((currentOffset: number) => {
      const newOffset = currentOffset + PAGE_WIDTH;
      return Math.min(newOffset, 0);
    });
  };

  const handleRightArrovClick = () => {
    setOffset((currentOffset: number) => {
      const newOffset = currentOffset - PAGE_WIDTH;
      const maxOffset = -(PAGE_WIDTH * (pages.length - 1));
      return Math.max(newOffset, maxOffset);
    });
  };

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `${PAGE_WIDTH}%`,
            maxWidth: `${PAGE_WIDTH}%`,
          },
        });
      })
    );
  }, []);
  return (
    <div className="main-container">
      <FaChevronLeft className="arrow" onClick={handleLeftArrovClick} />
      <div className="window">
        <div
          className="all-items-container"
          style={{
            transform: `translateX(${offset}%)`,
          }}
        >
          {pages}
        </div>
      </div>
      <FaChevronRight className="arrow" onClick={handleRightArrovClick} />
    </div>
  );
};

export default Carousel;
