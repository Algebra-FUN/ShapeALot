import React from 'react'
import Store from '../../Store'
import { observer } from 'mobx-react'
import { PositionableContainer } from 're-position'
import './styles.css'

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DeleteIcon from '@material-ui/icons/Delete'
import ColorIcon from '@material-ui/icons/ColorLens'
import CopyIcon from '@material-ui/icons/FileCopy'

const defaultBorderColor = 'dodgerblue'
const defaultFillColor = 'lightblue'

@observer
class ShapeItem extends React.Component {
  constructor(props) {
    super(props)
    const { shapeType, sid } = props
    this.state = {
      position: props['position'] || {
        left: "37.5%",
        top: "37.5%",
        width: "72px",
        height: "72px",
        rotation: "0deg"
      },
      shapeType, sid,
      anchorEl: null
    }
  }
  handleReposition = position => this.setState({ position })
  onClick = e => {
    if (e.button === 2) {
      this.setState({ anchorEl: e.target })
      return
    }
  }
  closeMenu = () => this.setState({ anchorEl: null })
  handleDelete = () => {
    this.closeMenu()
    Store.shapeList.splice(Store.shapeList.findIndex(it => it.sid === this.state.sid), 1)
  }
  handleColorize = () => {
    this.closeMenu()
    Store.ColorLensStatus.current_sid = this.state.sid
    Store.ColorLensStatus.open = true
  }
  copy = () => {
    this.closeMenu()
    window.lastShapeId++
    const self = Store.shapeList.find(it => it.sid === this.state.sid)
    const {position} = this.state
    position.rotation = '0deg'
    Store.shapeList.push({
      sid: window.lastShapeId,
      shapeType: self.shapeType,
      borderColor: self.borderColor,
      fillColor: self.fillColor,
      position
    })
  }
  render() {
    const { position, shapeType, anchorEl, sid } = this.state
    const { borderColor, fillColor } = Store.shapeList.find(it => it.sid == sid)
    const style = {
      borderColor: borderColor || defaultBorderColor,
      backgroundColor: fillColor || defaultFillColor
    }
    if (shapeType === 'line')
      style.backgroundColor = borderColor || defaultBorderColor
    return (
      <>
        <div className='max-sized'>
          <PositionableContainer
            className={`free-shape shape-${shapeType || 'rect'}`}
            movable
            resizable
            rotatable
            disableKeyboardMovement
            position={position}
            onUpdate={this.handleReposition}
            style={style}
            onClick={this.onClick}
          />
        </div>
        <Menu
          className='shape-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={this.closeMenu}
        >
          <MenuItem onClick={this.handleColorize}><ColorIcon />编辑颜色</MenuItem>
          <MenuItem onClick={this.copy}><CopyIcon />形状克隆</MenuItem>
          <MenuItem onClick={this.handleDelete}><DeleteIcon />删除</MenuItem>
        </Menu>
      </>
    )
  }
}

export default ShapeItem