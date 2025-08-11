interface Column<T> {
    key: keyof T;
    label: string;
    render: (value: T[keyof T], row:T) => React.ReactNode;
}

interface TableProps<T> {
    columns: Column<T>[],
    data: T[]
}

export default function TableComponent<T>({columns,data}:TableProps<T>){
    return (
         <table  style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={String(col.key)}
              style={{ border: "1px solid #ccc", padding: "8px", textAlign: "left" }}
            >
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col) => (
              <td
                key={String(col.key)}
                style={{ border: "1px solid #ccc", padding: "8px" }}
              >
                {col.render(row[col.key],row)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    )
}