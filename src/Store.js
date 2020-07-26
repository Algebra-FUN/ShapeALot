import {observable} from 'mobx'

class Store{
    @observable
    shapeList = []
}

const store = new Store()

export default store

window.store = store