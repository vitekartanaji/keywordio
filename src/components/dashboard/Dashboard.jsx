import React, { useMemo, useState } from "react";
import { useTable, useSortBy } from "react-table";
import tableData from "./data.json";
import { COLUMNS } from "./columns";
import Click1 from "../clicks/Click1";
import Click2 from "../clicks/Click2";
import Click3 from "../clicks/Click3";
import Select from "react-select";

const options = [
  { value: "click1", label: "Click 1" },
  { value: "click2", label: "Click 2" },
  { value: "click3", label: "Click 3" },
];

const Dashboard = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => tableData, []);
  const [selectedOption, setSelectedOption] = useState("click1");

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  const { getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  const handleDropdownChange = (option) => {
    setSelectedOption(option.value);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <table className="min-w-[90%] rounded-lg shadow-md m-5 bg-white">
          <thead className="border-b-2 border-gray-200">
            <tr className="h-10 px-3 font-bold text-center border-b-2 border-gray-200">
              Ad Insights
            </tr>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="">
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="px-3 py-2 text-center"
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? "V" : "^") : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className="border-b-2 border-gray-200 hover:bg-gray-50"
                >
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="px-3 py-2 text-center"
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>

          <tfoot></tfoot>
        </table>
      </div>

      <div>
        <div className="min-w-[90%] rounded-t-lg shadow-md mx-5 mt-5 bg-white">
          <div className="flex items-center justify-between border-b-2 border-gray-200">
            <div className="flex h-10 px-3 pt-2 font-bold text-center">
              Ad Insights
            </div>
            <div className="flex pr-3">
              <Select
                options={options}
                onChange={handleDropdownChange}
                placeholder="Select"
                className=""
                value={options.find(
                  (option) => option.value === selectedOption
                )}
              />
            </div>
          </div>
          
        </div>
        {selectedOption === "click1" && <Click1 />}
        {selectedOption === "click2" && <Click2 />}
        {selectedOption === "click3" && <Click3 />}
        
        
      </div>
      
    </div>
  );
};

export default Dashboard;
