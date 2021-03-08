class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    delete this.data[this.length];
    this.length--
  }
  

  delete(i) {
    const deletedItem = this.data[i];
    this.modifyItem(i);
    return deletedItem;
  }
  modifyItem(j) {
    for(let i=j; i<=this.length; i++) {
      if(this.data[i+1]) {
        this.data[i] = this.data[i+1]
      } else {
        delete this.data[i]
      }
    }
    this.length--
  }
  getAll() {
    return this.data;
  }
}

const newArray = new Array();
newArray.push('Hruday');
newArray.push('Sravan');
newArray.push('Vijaya');
newArray.pop();
newArray.push('Balaiah');
newArray.push('Vijaya');
newArray.delete(2);
newArray.getAll();