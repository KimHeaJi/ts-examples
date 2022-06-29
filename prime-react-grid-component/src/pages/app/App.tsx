import { FC, useState } from "react";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import data from "./data.json";

import { IColumn } from "@types";
import { Grid } from "@molecules/grid";

const columns: Array<IColumn> = [
  { field: "no", header: "no", sortable: true },
  { field: "sj", header: "제목", sortable: false },
  { field: "regDt", header: "등록일", sortable: true },
  { field: "regUserNm", header: "등록자", sortable: false },
];

export const App: FC = () => {
  const [contents, setContents] = useState(data.contents);

  return (
    <div>
      <h2>PrimeReact DataTable</h2>
      <Grid
        columns={columns}
        contents={contents}
        pagination={data.pagination}
        setContents={setContents}
      />
    </div>
  );
};
