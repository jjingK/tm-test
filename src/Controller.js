export default class Controller {
  constructor(view, data) {
    this._view = view;
    this._data = data;

    view.onSelectItem = this.selectItem.bind(this);
    view.onDeleteItem = this.deleteItem.bind(this);
  }

  setView() {
    this._view.render(this._data.list);
  }

  selectItem(uuid) {
    const item = this._data.getItemById(uuid);
    this._data.selectedById(uuid);
    this._view.renderItem(item);
  }

  deleteItem(uuid) {
    this._data.removeItemById(uuid);
    this._view.resetItem();
  }
}
