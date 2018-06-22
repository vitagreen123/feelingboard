class Service {
  id = 5
  datas = [
    {id : 2, name: 'John', memo: 'test', feeling: 'SOSO', checked: true},
    {id : 3, name: 'Jack', memo: 'hello', feeling: 'GOOD', checked: false},
    {id : 4, name: 'Jim', memo: 'world', feeling: 'GREAT', checked: true},
  ]

  getList = async () => {
    return this.datas
  }

  addItem = async (item) => {
    const newItem = {
      id: this.id++,
      name: item.name,
      memo: item.memo,
      feeling: item.feeling,
      checked: false
    }
    this.datas.push(newItem)
  }

  editItem = async (id, {name, memo, feeling}) => {
    const item = this.datas.find(item=>item.id===id)
    item.name = name
    item.memo = memo
    item.feeling = feeling
  }

  deleteItem = async (id) => {
    this.datas = this.datas.filter(item => item.id !== id)
  }
}

const service = new Service()

export default service