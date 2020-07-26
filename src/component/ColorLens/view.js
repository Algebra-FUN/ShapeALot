import React from 'react'
import { observer } from 'mobx-react'

import Store from '../../Store'
import './styles.css'

import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import BorderColorIcon from '@material-ui/icons/BorderColor'
import FillColorIcon from '@material-ui/icons/FormatColorFill'
import ColorLensIcon from '@material-ui/icons/ColorLens'
import TextField from '@material-ui/core/TextField'

@observer
class view extends React.Component {
	state = {
		borderColor: '',
		fillColor: ''
	}
	close = () => {
		Store.ColorLensStatus.open = false
		this.setState(
			{
				borderColor: '',
				fillColor: ''
			}
		)
	}
	updateColor = targetColor =>
		e => {
			const sid = Store.ColorLensStatus.current_sid
			const context = e.target.value
			const target = Store.shapeList.find(it => it.sid === sid)
			target[targetColor] = context
			let state = {}
			state[targetColor] = e.target.value
			this.setState(state)
		}
	render() {
		let { open } = Store.ColorLensStatus
		return (
			<Drawer anchor='right' open={open} onClose={this.close}>
				<List className='colorlens-list'>
					<ListItem>
						<ListItemIcon><BorderColorIcon /></ListItemIcon>
						<ListItemText primary='边缘笔画颜色' />
					</ListItem>
					<ListItem>
						<div className='colorlens-colorbox' style={{ backgroundColor: this.state.borderColor }} />
						<TextField label="storke color" variant="filled" onInput={this.updateColor('borderColor')} />
					</ListItem>
				</List>
				<Divider />
				<List className='colorlens-list'>
					<ListItem>
						<ListItemIcon><FillColorIcon /></ListItemIcon>
						<ListItemText primary='内部填充颜色' />
					</ListItem>
					<ListItem>
						<div className='colorlens-colorbox' style={{ backgroundColor: this.state.fillColor }} />
						<TextField label="filled color" variant="filled" onInput={this.updateColor('fillColor')} />
					</ListItem>
				</List>
			</Drawer>
		)
	}
}

export default view
