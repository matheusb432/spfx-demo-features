import { Web } from "@pnp/sp";
import { PnpQueryOptions } from "../types";
import { Person } from "../util";
import Repository from "./repository";

export default class PeopleRepo {
  private static _instance: PeopleRepo;

  private _repo: Repository<Person>;

  static get instance(): PeopleRepo {
    if (!PeopleRepo._instance) PeopleRepo._instance = new PeopleRepo();

    return PeopleRepo._instance;
  }

  private constructor() {
    this._repo = new Repository<Person>("People");
  }

  public async getPeople(opt?: PnpQueryOptions): Promise<Person[]> {
    opt ??= {
      select: ["Id", "Name", "Age"],
      top: 10,
      skip: 0,
    };

    const people = await this._repo.getItems(opt);

    return people;
  }
}
