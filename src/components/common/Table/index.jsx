import React from "react";
import { TABLE_HEADINGS } from "@config/constants";

function Table() {
  return (
    <table className="w-full ">
      <thead className="bg-[#FFFFFF]">
        <tr>
          {TABLE_HEADINGS.map((tableHeading) => (
            <th className="col-span-3">{tableHeading}</th>
          ))}
        </tr>
      </thead>
    </table>
  );
}

export default Table;
