import React from 'react'
import './styles.css'

import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import Tooltip from '@material-ui/core/Tooltip'
import Fab from '@material-ui/core/Fab'

import MenuIcon from '@material-ui/icons/Menu'
import CameraIcon from '@material-ui/icons/Camera'
import InfoIcon from '@material-ui/icons/Info'
import HelpIcon from '@material-ui/icons/Help'
import GitHubIcon from '@material-ui/icons/GitHub'
import BlogIcon from '@material-ui/icons/MenuBook'
import FavoriteIcon from '@material-ui/icons/Favorite'

import goto from '../../js/go2link'

export default class extends React.Component {
	state = {
		open: false
	}
	toggleDrawer = open =>
		() => this.setState({ open })

	render() {
		return (
			<>
				<Drawer anchor='left' open={this.state.open} onClose={this.toggleDrawer(false)}>
					<List className='menu-list'>
						<ListItem button disabled>
							<ListItemIcon><CameraIcon /></ListItemIcon>
							<ListItemText primary='截屏保存' />
						</ListItem>
					</List>
					<Divider />
					<List className='menu-list'>
						<ListItem button onClick={goto('https://github.com/Algebra-FUN/ShapeALot#about')}>
							<ListItemIcon ><InfoIcon /></ListItemIcon>
							<ListItemText primary='关于' />
						</ListItem>
						<ListItem button onClick={goto('https://gitee.com/Algebra-FUN/ShapeALot#%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E')}>
							<ListItemIcon><HelpIcon /></ListItemIcon>
							<ListItemText primary='帮助' />
						</ListItem>
						<ListItem button disabled>
							<ListItemIcon><FavoriteIcon /></ListItemIcon>
							<ListItemText primary='Like' />
						</ListItem>
					</List>
					<Divider />
					<List className='menu-list'>
						<ListItem button onClick={goto('https://github.com/Algebra-FUN/ShapeALot')}>
								<ListItemIcon><GitHubIcon /></ListItemIcon>
								<ListItemText primary='项目地址' />
						</ListItem>
						<ListItem button onClick={goto('https://algebra-fun.github.io/')}>
							<ListItemIcon><BlogIcon /></ListItemIcon>
							<ListItemText primary='作者博客' />
						</ListItem>
					</List>
				</Drawer>
				<Tooltip title="More" aria-label="More" placement="bottom">
					<Fab className='menu-toggle' color="secondary" aria-label="More" onClick={this.toggleDrawer(true)}>
						<MenuIcon />
					</Fab>
				</Tooltip>

			</>
		)
	}
}