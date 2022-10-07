export interface PnpQueryOptions {
  select?: string[];
  filter?: string;
  orderby?: OrderBy;
  expand?: string[];
  top?: number;
  skip?: number;
}

interface OrderBy {
  field: string;
  asc?: boolean;
}
