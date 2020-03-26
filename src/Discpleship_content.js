import React from 'react';
import ReactDOM from 'react-dom';
import './css/global_style_sheet.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import DownloadedIcon from './assets/icons.js';
import Discipleship from './Discipleship';
import Discple_specific_content from './Discple_specific_content';

export default class Discpleship_content extends React.Component {
  
  constructor(props) {
     super(props);
    };
    Go_to_discpleship(){
      ReactDOM.render(<Discipleship />, document.getElementById('root'));
    }
    Go_to_discpleship_specific(){
      ReactDOM.render(<Discple_specific_content />, document.getElementById('root'));
    }
    new_content(
      content_title,content){
        return    <Row id='discipleship-new-content' onClick={this.Go_to_discpleship_specific}>
                      <Col>
                        <ul>
                            <li id='discipleship-header'> {content_title}</li>
                            <li id='discipleship-content'> {content}</li>
                        </ul>
                      </Col>
                  </Row>
}  
render() {
      const title = {
        padding: '0',
        margin: '0'
      };
     return (
        <Container fluid>
        <Row>
          <Col id='banner-home' onClick={this.Go_to_discpleship}>
          <br />
          <p setStyle={title}>{new DownloadedIcon().BackIcon()} $CONTENT_TITLE</p>
          </Col>
        </Row>
        {this.new_content('Spend time with God - 1','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.')}
        {this.new_content('Spend time with God - 2','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.')}
        {this.new_content('Spend time with God - 3','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.')}
        {this.new_content('Spend time with God - 4','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.')}
      </Container>
    );
  }
}