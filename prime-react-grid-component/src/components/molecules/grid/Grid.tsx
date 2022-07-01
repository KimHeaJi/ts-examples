import { useMemo } from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getPaginatorTemplate } from "@atoms/grid";

import { IColumn, IPagination } from "@types";

type Props = {
  contents: Array<any>;
  setContents: Function;
  columns: Array<IColumn>;
  pagination: IPagination;
  setPageNumber: Function;
};

export const Grid = ({
  columns,
  contents,
  setContents,
  pagination,
  setPageNumber,
}: Props) => {
  const paginatorTemplate = getPaginatorTemplate(setPageNumber);

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
      size="small"
      value={contents}
      responsiveLayout="scroll"
      reorderableColumns
      onRowReorder={onRowReorder}
      sortMode="multiple"
      emptyMessage="not found"
      onRowToggle={(e) => {}}
      // 페이징
      paginator
      paginatorTemplate={paginatorTemplate}
      totalRecords={pagination.totalElements}
      // 목록수/보이는 목록 수
      pageLinkSize={3}
      rows={10}
    >
      {dynamicColumns}
    </DataTable>
  );
};

Grid.defaultProps = {
  conetns: [],
  columns: [],
};
