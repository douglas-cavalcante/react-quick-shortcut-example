import React, { useMemo } from "react";

function Table({ columns, data, handleOnMouseOver, handleOnMouseOut }) {
  const renderColumns = useMemo(
    () => columns.map((column) => <th key={column}>{column}</th>),
    [columns]
  );

  const renderRows = useMemo(
    () =>
      data.map((item) => {
        const values = Object.values(item);
        return (
          <tr
            key={item.id}
            onMouseOver={() => handleOnMouseOver(item.id)}
            onMouseOut={handleOnMouseOut}
          >
            {values.map((value) => (
              <th key={value} scope="row">
                {value}
              </th>
            ))}
          </tr>
        );
      }),
    [data, handleOnMouseOver, handleOnMouseOut]
  );

  return (
    <table className="table table-striped">
      <thead className="thead-dark">
        <tr>{renderColumns}</tr>
      </thead>
      <tbody>{renderRows}</tbody>
    </table>
  );
}

export default React.memo(Table);
