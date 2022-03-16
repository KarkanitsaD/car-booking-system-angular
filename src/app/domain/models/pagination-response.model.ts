export interface PaginationResponseModel<TModel> {
  items: Array<TModel>;
  itemsTotalCount: number;
}
