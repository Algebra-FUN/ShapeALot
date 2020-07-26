import React from 'react'
import { PositionableContainer } from 're-position'
import './styles.css'

const defaultBorderColor = 'rgba(30,30,233,0.8)'
const defaultFillColor = 'rgba(80,80,233,0.3)'

export default class ShapeItem extends React.Component {
	constructor(props) {
		super (props)
		const { shapeType, borderColor, fillColor } = props
		this.state = {
			position: {
				left: "37.5%",
				top: "37.5%",
				width: "72px",
				height: "72px",
				rotation: "0deg"
			},
			shapeType, borderColor, fillColor
		}
	}
	handleReposition = position => this.setState({ position });
	render() {
		const { position,shapeType, borderColor, fillColor } = this.state
		const style = {
			borderColor: borderColor || defaultBorderColor,
			backgroundColor: fillColor || defaultFillColor
		}
		if (shapeType === 'line')
			style.backgroundColor = borderColor || defaultBorderColor
		return (
			<div className='max-sized'>
				<PositionableContainer
					className={`free-shape shape-${shapeType || 'rect'}`}
					movable
					resizable
					rotatable
					position={position}
					onUpdate={this.handleReposition}
					style={style}
				/>
			</div>
		)
	}
}