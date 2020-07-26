import {observable} from 'mobx'

class Store{
    @observable
    shapeList = []
    @observable
    ColorLensStatus = {
        current_sid:0,
        open:false
    }
}

const store = new Store()

export default store

window.store = store