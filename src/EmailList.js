import { dateToStr, uuid } from './helpers';

/**
 * Email List
 */
export default class EmailList {
  constructor(list, storage) {
    this._storage = storage;

    if (this._storage.size) {
      this._list = this._storage.getItem();
    } else {
      this._initialize(list);
    }
  }

  get list() {
    return this._list;
  }

  // setter
  set list(list) {
    this._list = list;
  }

  _initialize(list) {
    this._list = list
      .sort((a, b) => dateToStr(b.date).getTime() - dateToStr(a.date).getTime())
      .map((item) => ({
        uuid: uuid(),
        select: false,
        ...item
      }), []);
    this._storage.setItem(this._list);
  }

  _findIdxById(uuid) {
    return this._list.findIndex(_item => _item.uuid === uuid);
  }

  getItemById(uuid) {
    return this._list.find(_item => _item.uuid === uuid);
  }

  removeItemById(uuid) {
    const findIdx = this._findIdxById(uuid);
    this._storage.removeItem(uuid);
    this._list.splice(findIdx, 1);
  }

  selectedById(uuid) {
    const item = this.getItemById(uuid);
    item.select = true;
    this._storage.updateItem(uuid, 'select', item.select);
  }
}
