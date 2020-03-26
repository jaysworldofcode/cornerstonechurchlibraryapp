import React from 'react';
import './css/global_style_sheet.css';
import ReactDOM from 'react-dom';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import Avatar from '@material-ui/core/Avatar';
import profile from './assets/Images/profile-image.jpeg';
import SermonsContent from './Sermons-content';
import Chip from '@material-ui/core/Chip';
import DownloadedIcon from './assets/icons.js';

export default class Sermons extends React.Component {
  
  constructor(props) {
     super(props);
    };
  Go_to_sermons_content(){
    ReactDOM.render(<SermonsContent />, document.getElementById('root'));
  }
new_content(title, description){
    return (
      <Row onClick={this.Go_to_sermons_content} >
      <Col>
        <Card id='sermons-content'>
        <center>
            <div>
            <br />
            <Avatar alt="Remy Sharp" src={profile}>
            </Avatar>
            <CardContent>
              <Typography id='sermons-content-title'>
                {title}
              </Typography>
              <Typography id='sermons-content-description' variant="subtitle1" color="textSecondary">
                {description}
              </Typography>
            </CardContent>
            <div id='sermons-content-icon-button'>
              <IconButton aria-label="previous">
                <SkipPreviousIcon />
              </IconButton>
              <IconButton aria-label="play/pause">
                <PlayArrowIcon />
              </IconButton>
              <IconButton aria-label="next">
                <SkipNextIcon />
              </IconButton>
            </div>
          </div>
        </center>
        </Card>
      </Col>
      </Row>
    );
    }
  chip(icon, chip_type){
    return(
          <Chip style={{padding: '10px'}}
          icon={icon}
          label={chip_type}
          clickable
        />
    );
  }
  render() {
      const title = {
        textAlign: 'center'
      };
     return (
        <Container fluid>
        <Row>
          <Col id='banner'>
          <p className='title'>Sermonds</p>
          <p id='message-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.</p>
          </Col>
        </Row>
          <br />
          {this.chip(new DownloadedIcon().LoveIcon(),'Love')}
          {this.chip(new DownloadedIcon().EcoIcon(),'Health')}
          <br />
          <br />
          {this.new_content('God Is In Control','Topics:Encouragement Faith Coronavirus')}
          <br />
          {this.new_content('I Am Persuaded!','Topics: Faith Coronavirus')}
          <br />
          {this.new_content('The Birthplace of Revival','Topic: Spiritual Growth')}
          <br />
          {this.new_content('The Birth of Praise','Topic: General')}
          <br />
          {this.new_content('The Beginning Great Things','Topic: Spiritual Growth')}
          <br />
          {this.new_content('The Awful Consequences of Backsliding!','Topic: Sin')}
          <br />
          <br />
          <br />
          <br />
      </Container>
    );
  }
}