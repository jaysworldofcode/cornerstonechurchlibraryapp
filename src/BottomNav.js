import React from 'react';
import ReactDOM from 'react-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Menu from './Menu';
import Home from './Home';
import Profile from './Profile';
import DownloadedIcon from './assets/icons.js';

class BottomNav extends React.Component {

    constructor(props) {
        super(props);
    };
    Go_to_menu(){
        ReactDOM.render(<Menu />, document.getElementById('root'));
    }
    Go_to_home(){
        ReactDOM.render(<Home />, document.getElementById('root'));
    }
    Go_to_profile(){
        ReactDOM.render(<Profile />, document.getElementById('root'));
    }
    render() {
    const container_style = {
            position:'fixed',
            left:'0',
            bottom:'0',
            right:'0',
            padding: '0'
    }
    return (
        <BottomNavigation style={container_style}>
            <BottomNavigationAction label="menu" value="menu" onClick={this.Go_to_menu}  icon={new DownloadedIcon().MenuIcon()} />
            <BottomNavigationAction label="home" value="home" onClick={this.Go_to_home} icon={new DownloadedIcon().HomeIcon()} />
            <BottomNavigationAction label="profile" value="profile" onClick={this.Go_to_profile} icon={new DownloadedIcon().ProfileIcon()} />
        </BottomNavigation>
        );
    }
}

export default BottomNav;