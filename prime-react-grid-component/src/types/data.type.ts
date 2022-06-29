export type IPagination = {
  totalElements: number | undefined;
  pageSize: number | undefined;
  pageNumber: number | undefined;
};

export type IData = {
  contents: Array<any>;
  pagination: IPagination;
};
