
class Store {
  constructor() {
    this._items = []
  }

  get items() {
    return this._items;
  }

  add(item) {
    this._items.push(item);
  }
  
  remove(item) {
    const index = this._items.indexOf(item);
    this._items.splice(index, 1);
  }
}


export const store = new Store();
