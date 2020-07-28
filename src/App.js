import React from 'react'
import { observer } from 'mobx-react'

import ShapeItem from './component/ShapeItem/view'
import ShapeAdd from './component/ShapeAdd/view'
import ColorLens from './component/ColorLens/view'
import Menu from './component/Menu/view'

import Store from './Store'

import mobile_check from './js/mobile-check'


@observer
class App extends React.Component {
  componentDidMount(){
    mobile_check(() => {
      alert('目前暂不支持移动端！无法保证移动端上体验效果')
      alert('为保证体验效果，请在PC端浏览器上访问！')
    })
  }
  render() {
    const { shapeList } = Store
    return (
      <>
        <ShapeAdd />
        <>{shapeList.map(param => <ShapeItem key={param.sid}{...param} />)}</>
        <ColorLens />
        <Menu />
      </>
    )
  }
}

export default App