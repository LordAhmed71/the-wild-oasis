import React from "react";
import Filter from "../../ui/Filter";
import TableOperations from "./../../ui/TableOperations";
import SortBy from "../../ui/SortBy";

const CabinTableOperations = () => {
  return (
    <TableOperations>
      <Filter
        filterField={"discount"}
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by price (low first)" },
          { value: "regularPrice-desc", label: "Sort price (high first)" },
          { value: "maxCapacity-asc", label: "Sort capacity (low first)" },
          { value: "maxCapacity-desc", label: "Sort capacity (high first)" },
        ]}
      />
    </TableOperations>
  );
};

export default CabinTableOperations;
