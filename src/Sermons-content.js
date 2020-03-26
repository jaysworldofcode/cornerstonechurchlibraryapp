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
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from '@material-ui/core/Avatar';
import profile from './assets/Images/profile-image.jpeg';
import Sermons from './Sermons';
import DownloadedIcon from './assets/icons.js';
import SampleImageContent from './assets/Images/sermons-sample.jpg';
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default class SermonsContent extends React.Component {
  
  constructor(props) {
     super(props);
    };
    Go_to_sermons(){
        ReactDOM.render(<Sermons />, document.getElementById('root'));
    }
    render() {
      const title = {
        textAlign: 'center'
      };
      const border_pastor_name = {
        borderBottomColor: 'black',
        borderBottomWidth: 1
        };
         return (
        <Container fluid >
        <Row>
          <Col id='banner-home' onClick={this.Go_to_sermons}>
          <br />
          <p setStyle={title}>{new DownloadedIcon().BackIcon()} $SPECIFIC_CONTENT_TITLE</p>
          </Col>
        </Row>
          <br />
          <br />
          <Row>
            <Col>
                <Card style = {{ height: '100%'}} id='sermons-view-content'>
                <center>
                    <div>
                    <br />
                    <Avatar alt="Remy Sharp" src={profile}>
                    </Avatar>
                    <Typography id='name-title'>
                        Pastor John Doe
                    </Typography>
                    <br />
                    <CardMedia image={SampleImageContent} style = {{ height: 0, paddingTop: '56%'}} />
                    <CardContent>
                    <br />
                    <Typography component="h5" variant="h5">
                        God Is In Control
                    </Typography>
                    <Typography id='sermons-content-description' variant="subtitle1" color="textSecondary">
                        Topics:Encouragement Faith Coronavirus
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
                <br />
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                <br />
                <br />
              <Row>
                  <Col>
                  <div>
                    <ExpansionPanel>
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>Comment</Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Typography>
                          No comment!
                        </Typography>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  </div>
                      <br />
                      <br />
                      <br />
                      <br />
                  </Col>
                </Row>
      </Container>
    );
  }
}