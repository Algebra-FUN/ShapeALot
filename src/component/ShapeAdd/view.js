import React from 'react'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedAction from '@material-ui/lab/SpeedDialAction'
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon'
import * as ShapeIcon from '../../assets/ShapeIcon'

import Store from '../../Store'

import './styles.css'

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

export default class extends React.Component {
	state = {
		open: false
	}
	handleOpen = () => {
		this.setState({ open: true })
	}
	handleClose = () => {
		this.setState({ open: false })
	}
	render() {
		const {shapeList} = Store 
		return (
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
							onClick={() => {
								const {shapeType} = action
								shapeList.push({shapeType})
								this.handleClose()
							}}
						/>
					)
				}
			</SpeedDial>
		)
	}
}