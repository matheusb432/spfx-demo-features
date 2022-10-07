import { sp, Web } from "@pnp/sp";
import { PnpQueryOptions } from "../types";
import { arrayToPnpQueryableArgs, safeDestructure } from "../util";

// export default class Repository<T> {
export default class Repository<T> {
  private _listName: string;
  private _web: Web;

  constructor(listName: string) {
    this._listName = listName;
    this._web = sp.web;
  }

  public async getItems(opt: PnpQueryOptions): Promise<T[]> {
    const { select, filter, orderby, expand, top, skip } = safeDestructure(opt);

    const items = this._web.lists.getByTitle(this._listName).items;

    if (select) items.select(arrayToPnpQueryableArgs(select));
    if (filter) items.filter(filter);
    if (orderby) items.orderBy(orderby.field, orderby.asc ?? true);
    if (expand) items.expand(...expand);
    if (top) items.top(top);
    if (skip) items.skip(skip);

    return await items.get();
  }

  public async addItem(item: any): Promise<T> {
    const newItem = await this._web.lists
      .getByTitle(this._listName)
      .items.add(item);

    return newItem as T;
  }
}
