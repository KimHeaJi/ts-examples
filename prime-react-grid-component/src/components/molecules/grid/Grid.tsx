import { useMemo } from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export interface IColumn {
  field: string; // field name
  header: string; // column name
  sortable: boolean; // 정렬 여부
}

interface Props {
  contents: Array<any>;
  setContents: Function;
  columns: Array<IColumn>;
}

export const Grid = ({ columns, contents, setContents }: Props) => {
  const onRowReorder = ({ value }: any) => {
    setContents(value);
  };

  const dynamicColumns = useMemo(() => {
    return columns.map((col) => {
      return (
        <Column
          key={col.field}
          columnKey={col.field}
          field={col.field}
          header={col.header}
          sortable={col.sortable}
        />
      );
    });
  }, [columns]);

  return (
    <DataTable
      value={contents}
      reorderableColumns
      onRowReorder={onRowReorder}
      responsiveLayout="scroll"
      sortMode="multiple"
    >
      {dynamicColumns}
    </DataTable>
  );
};

Grid.defaultProps = {
  conetns: [],
  columns: [],
};
