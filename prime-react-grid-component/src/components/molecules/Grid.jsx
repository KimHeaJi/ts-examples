import { FC } from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface IColumn {
  no: Number;
  sj: String;
  regDt: String;
  regUserId: String;
  regUserNm: string;
}

interface Props {
  contents: Array<IColumn>;
  setContents: Function;
}

const columns: Array<Any> = [
  { field: "no", header: "no" },
  { field: "sj", header: "제목" },
  { field: "regDt", header: "등록일" },
  { field: "regUserNm", header: "등록자" },
];

const Grid: FC<Props> = ({ contents, setContents }) => {
  const onRowReorder = (e) => {
    setContents(e.value);
  };

  const dynamicColumns = columns.map((col, i) => {
    return (
      <Column
        key={col.field}
        columnKey={col.field}
        field={col.field}
        header={col.header}
      />
    );
  });
  return (
    <DataTable
      value={contents}
      reorderableColumns
      onRowReorder={onRowReorder}
      responsiveLayout="scroll"
    >
      <Column rowReorder style={{ width: "3em" }} />
      {dynamicColumns}
    </DataTable>
  );
};

Grid.defaultProps = {
  conetns: [],
};

export default Grid;
