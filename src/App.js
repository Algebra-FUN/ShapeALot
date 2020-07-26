import React from 'react'
import { observer } from 'mobx-react'

import ShapeItem from './component/ShapeItem/view'
import ShapeAdd from './component/ShapeAdd/view'

import Store from './Store'


@observer
class App extends React.Component {
  render() {
    const { shapeList } = Store
    return (
      <>
        <ShapeAdd />
        <>{shapeList.map(param => <ShapeItem {...param} />)}</>
      </>
    )
  }
}

export default App