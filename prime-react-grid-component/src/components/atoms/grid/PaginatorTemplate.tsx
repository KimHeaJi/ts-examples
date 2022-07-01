import { PaginatorCurrentPageReportOptions } from "primereact/paginator";

export const getPaginatorTemplate = (onChange: Function) => {
  return {
    layout: "RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink",
    CurrentPageReport: (options: PaginatorCurrentPageReportOptions) => {
      return (
        <span
          style={{
            color: "var(--text-color)",
            userSelect: "none",
            width: "120px",
            textAlign: "center",
          }}
        >
          {options.currentPage > options.first && (
            <button
              className="p-paginator-first p-paginator-element p-link"
              onClick={() => onChange(-1)}
            >
              {options.currentPage - 1}
            </button>
          )}
          <button
            className="p-paginator-current p-paginator-element p-link"
            onClick={() => {}}
          >
            {options.currentPage}
          </button>
          <button
            className="p-paginator-last p-paginator-element p-link"
            onClick={() => onChange(1)}
          >
            {options.currentPage === options.last
              ? options.last
              : options.currentPage + 1}
          </button>
        </span>
      );
    },
    FirstPageLink: (options: any) => {
      return <span></span>;
    },
    PrevPageLink: (options: any) => {
      return <span></span>;
    },
    PageLinks: (options: any) => {
      return <span></span>;
    },
    NextPageLink: (options: any) => {
      return <span></span>;
    },
    LastPageLink: (options: any) => {
      return <span></span>;
    },
    RowsPerPageDropdown: (options: any) => {
      return <span></span>;
    },
    JumpToPageInput: (options: any) => {
      return <span></span>;
    },
  };
};
