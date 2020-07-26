import React from 'react'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedAction from '@material-ui/lab/SpeedDialAction'
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon'
import Tooltip from '@material-ui/core/Tooltip'
import * as ShapeIcon from '../../assets/ShapeIcon'

import { observer } from 'mobx-react'
import add_shape from '../../js/addShape'

import './styles.css'

window.lastShapeId = 0

const speed_actions = [
	{
		name: '圆形',
		icon: <ShapeIcon.CirclIcon />,
		shapeType: 'circle'
	},
	{
		name: '矩形',
		icon: <ShapeIcon.SquareIcon />,
		shapeType: 'rect'
	},
	{
		name: '直线',
		icon: <ShapeIcon.LineIcon />,
		shapeType: 'line'
	}
]


@observer
class view extends React.Component {
	state = {
		open: false
	}
	handleOpen = () => this.setState({ open: true })
	handleClose = () => this.setState({ open: false })
	addShape = shapeType =>
		() => {
			add_shape(shapeType)
			this.handleClose()
		}
	render() {
		return (
			<Tooltip title="添加形状" aria-label="add" placement="left-end">
				<SpeedDial
					ariaLabel='SpeedDial Component'
					className='shape-add-speed_dial'
					icon={<SpeedDialIcon />}
					onClose={this.handleClose}
					onOpen={this.handleOpen}
					open={this.state.open}
					direction='up'
				>
					{
						speed_actions.map(action =>
							<SpeedAction
								key={action.name}
								icon={action.icon}
								tooltipTitle={action.name}
								onClick={this.addShape(action.shapeType)}
							/>
						)
					}
				</SpeedDial>
			</Tooltip>
		)
	}
}

export default view