import { useMemo } from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { IColumn, IPagination } from "@types";
// import {
//   PaginatorTemplate,
//   PaginatorCurrentPageReportOptions,
// } from "primereact/paginator";

type Props = {
  contents: Array<any>;
  setContents: Function;
  columns: Array<IColumn>;
  pagination: IPagination;
};

export const Grid = ({ columns, contents, setContents, pagination }: Props) => {
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

  // const template: PaginatorTemplate = {
  //   layout: "RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink",
  //   CurrentPageReport: (options): PaginatorCurrentPageReportOptions => {
  //     return (
  //       <span
  //         style={{
  //           color: "var(--text-color)",
  //           userSelect: "none",
  //           width: "120px",
  //           textAlign: "center",
  //         }}
  //       >
  //         {options.first} - {options.last} of {options.totalRecords}
  //       </span>
  //     );
  //   },
  //   FirstPageLink: () => {},
  //   PrevPageLink: () => {},
  //   PageLinks: () => {},
  //   NextPageLink: () => {},
  // };

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
      paginator
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
      // paginatorTemplate={template}
      totalRecords={pagination.totalElements}
      pageLinkSize={1}
      rows={10} // 목록수
      first={1}
    >
      {dynamicColumns}
    </DataTable>
  );
};

Grid.defaultProps = {
  conetns: [],
  columns: [],
};
