import React from 'react';
import ReactDOM from 'react-dom';
import './css/global_style_sheet.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import DownloadedIcon from './assets/icons.js';
import Discpleship_content from './Discpleship_content';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default class Discple_specific_content extends React.Component {
  
  constructor(props) {
     super(props);
     this.state = {
       verseContent: 'Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!',
       verse: '2 Corinthians 5:17',
       Message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus egestas lectus, in consectetur justo ullamcorper ut. Fusce mattis mattis porta. Mauris scelerisque dignissim lorem, sed facilisis augue finibus ut. Aliquam erat volutpat. Ut nibh ante, viverra id accumsan molestie, semper vitae turpis. Nullam placerat, urna at placerat commodo, odio diam tincidunt nulla, et hendrerit enim turpis et massa. Aliquam porta lorem quam, eget scelerisque magna placerat a. Donec urna enim, interdum nec dolor in, dignissim sodales ante. Integer vitae convallis nunc, nec molestie lorem. Aliquam dignissim leo et risus tincidunt mollis.'
       };
    };
    Go_to_discpleship_content(){
      ReactDOM.render(<Discpleship_content />, document.getElementById('root'));
    }
  render() {
      const title = {
        padding: '0',
        margin: '0'
      };
     return (
        <Container fluid>
        <Row>
          <Col id='banner-home' onClick={this.Go_to_discpleship_content}>
          <br />
          <p setStyle={title}>{new DownloadedIcon().BackIcon()} $SPECIFIC_CONTENT_TITLE</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
              <p id='specific-content-verse'>"{this.state.verseContent}"</p>
              <br />
              <p id='specific-verse'>{this.state.verse}</p>
              <br />
              <p id='specific-content-message'>{this.state.Message}</p>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
          </Col>
        </Row>
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