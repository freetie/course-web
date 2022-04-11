export interface PaginatedData<T> {
  count: number;
  page: number;
  size: number;
  items: Array<T>;
}