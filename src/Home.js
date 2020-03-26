import React from 'react';
import './css/global_style_sheet.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import logo from './assets/Images/logo.png';
import sample from './assets/Images/sample-content.jpg';
import Avatar from '@material-ui/core/Avatar';

export default class Home extends React.Component {
  
  constructor(props) {
     super(props);
    };
    new_no_image_content(
        content_title,content){
          return    <Row id='home-new-content'>
                        <Col>
                        <ul>
                            <li id='home-header'> {content_title}</li>
                            <li id='home-content'> {content}</li>
                        </ul>
                        </Col>
                    </Row>
    }  
    newest_upload_content(content_title,content,image_path){
        return    <Row id='home-new-content'>
                        <Col id='image-content'>
                          <Avatar aria-label="recipe">
                            <img src={sample} />
                          </Avatar>
                        </Col>
                        <Col class="col-10">
                        <ul>
                            <li id='home-header'> {content_title}</li>
                            <li id='home-content'> {content}</li>
                        </ul>
                        </Col>
                  </Row>
    }
    render() {
     return (
        <Container fluid>
        <Row>
          <Col id='banner-home'>
          <img src={logo} />
          <br />
          <p className='title'>Cornerstone Believers Church</p>
          </Col>
        </Row>
        {this.new_no_image_content('Daily Devotional','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.')}
        {this.new_no_image_content('Anouncements','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.')}
        <Row>
          <Col>
          <p id='home-header'>Newest Uploads</p>
          </Col>
        </Row>
        {this.newest_upload_content('Knowing your authority','by John Doe','')}
        {this.newest_upload_content('Why Jesus?','by Juan Dela Cruz','')}
        {this.newest_upload_content('Knowing your authority','by John Doe','')}
        {this.newest_upload_content('Why Jesus?','by Juan Dela Cruz','')}
        <br />
        <br />
        <br />
        <br />
      </Container>
    );
  }
}