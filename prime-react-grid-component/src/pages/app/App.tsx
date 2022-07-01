import { FC, useEffect, useState } from "react";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import api from "./dummy.json";

import { IColumn } from "@types";
import { Grid } from "@molecules/grid";

const columns: Array<IColumn> = [
  { field: "no", header: "no", sortable: true },
  { field: "sj", header: "제목", sortable: false },
  { field: "regDt", header: "등록일", sortable: true },
  { field: "regUserNm", header: "등록자", sortable: false },
];

export const App: FC = () => {
  const { pagination } = api.response[0];

  const [contents, setContents] = useState(api.response[0].contents);
  const [pageNumber, setPageNumber] = useState(pagination.pageNumber);

  useEffect(() => {
    setContents(api.response[pagination.pageNumber].contents);
  }, [pagination.pageNumber]);

  return (
    <div>
      <h2>PrimeReact DataTable</h2>
      <Grid
        columns={columns}
        contents={contents}
        setContents={setContents}
        pagination={{ ...pagination, pageNumber }}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};
