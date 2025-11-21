import type { News } from "@/utils/types";
import React, { type ReactNode } from "react";
import NewsPageCards from "./NewsPageCards";

const CardsGrid = ({
  objects,
  mode,
}: {
  objects: News[];
  mode: string;
}): ReactNode => {
  return (
    <div className="grid grid-cols-1 gap-y-4 auto-rows-[600px] lg:auto-rows-[300px]">
      {objects.map((item, index) => {
        return <NewsPageCards news={item} key={index} />;
      })}
    </div>
  );
};

export default CardsGrid;
