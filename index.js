class Storage {
  constructor(prefix = 'pj', storage = sessionStorage) {
    this.storage = storage
    this.prefix = prefix + '_'
  }

  setItem (key, value) {
    this.storage.setItem(this.prefix + key, JSON.stringify(value))
  }

  getItem (key) {
    let val = this.storage.getItem(this.prefix + key)
    try {
      val = JSON.parse(val)
    } catch (err) { /*  */ }
    return val
  }

  removeItem (key) {
    this.storage.removeItem(this.prefix + key)
  }

  getKeyList () {
    let arr = []
    for (let i = 0; i < this.storage.length; i++) {
      let key = this.storage.key(i)
      if (key.indexOf(this.prefix) == 0) {
        arr.push(key)
      }
    }
    return arr
  }

  clear () {
    let arr = this.getKeyList()
    for (var i = 0; i < arr.length; i++) {
      this.storage.removeItem(arr[i]);
    }
  }

  clearAll () {
    this.storage.clear()
  }

}

export default Storage