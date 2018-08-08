/**
 * Use LocalStorage
 */
export default class DataStorage {
  constructor() {
    this._key = 'EmailList';
  }

  getItem() {
    return JSON.parse(localStorage.getItem(this._key));
  }

  setItem(data) {
    localStorage.setItem(this._key, JSON.stringify(data));
  }

  updateItem(id, key, data) {
    const _item = this.getItem();
    const _updateItem = _item.map(_data => {
      if (_data.uuid === id) _data[key] = data;
      return _data;
    });
    this.setItem(_updateItem);
  }

  removeItem(id) {
    const _item = this.getItem();

    this.setItem(_item.filter(({ uuid }) => uuid !== id));
  }

  get size() {
    return this.getItem() ? this.getItem().length : 0;
  }
}
