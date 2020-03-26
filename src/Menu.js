import React from 'react';
import ReactDOM from 'react-dom';
import DownloadedIcon from './assets/icons.js';
import Discipleship from './Discipleship';
import Sermons from './Sermons';

export default class Menu extends React.Component {

    constructor(props) {
        super(props);
    };
    Go_to_discpleship(){
        ReactDOM.render(<Discipleship />, document.getElementById('root'));
    }
    Go_to_sermons(){
        ReactDOM.render(<Sermons />, document.getElementById('root'));
    }
    render() {
        return (
            <div id='menu-container'>
                <table>
                    <tbody>
                    <tr id="row0">
                        <td id="cell" onClick={this.Go_to_discpleship}>
                            <div id='centerStuff'>
                                {new DownloadedIcon().DiscipleshipIcon()}    
                                <br/>
                                DISCPLESHIP
                            </div>                 
                        </td>
                        <td id="cell">
                            <div id='centerStuff'>
                                {new DownloadedIcon().ToolIcon()}    
                                <br/>
                                EVANGELISM TOOLS
                            </div>                 
                        </td>
                    </tr>
                    <tr id="row0">
                        <td id="cell" onClick={this.Go_to_sermons}>
                            <div id='centerStuff'>
                                {new DownloadedIcon().SermonIcon()}    
                                <br/>
                                SERMONS
                            </div>                 
                        </td>
                        <td id="cell">
                            <div id='centerStuff'>
                                {new DownloadedIcon().PodcastsIcon()}    
                                <br/>
                                PODCASTS
                            </div>                 
                        </td>
                    </tr>
                    <tr id="row0">
                        <td id="cell">
                            <div id='centerStuff'>
                                {new DownloadedIcon().CalenderIcon()}    
                                <br/>
                                EVENTS/CALENDER
                            </div>                 
                        </td>
                        <td id="cell">
                            <div id='centerStuff'>
                                {new DownloadedIcon().DevotionalIcon()}    
                                <br/>
                                DEVOTIONAL
                            </div>                 
                        </td>
                    </tr>
                    <tr id="row0">
                        <td id="cell">
                            <div id='centerStuff'>
                                {new DownloadedIcon().ContactUsIcon()}    
                                <br/>
                                CONTACT US
                            </div>                 
                        </td>
                        <td id="cell">
                            <div id='centerStuff'>
                                {new DownloadedIcon().GiveIcon()}    
                                <br/>
                                GIVE
                            </div>                 
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
