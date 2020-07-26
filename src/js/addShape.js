import Store from '../Store'


export default function (shapeType) {
    window.lastShapeId++
    Store.shapeList.push({
        sid: window.lastShapeId,
        shapeType,
        borderColor: null,
        fillColor: null
    })
}