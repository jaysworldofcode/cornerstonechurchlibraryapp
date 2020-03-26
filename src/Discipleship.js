import React from 'react';
import ReactDOM from 'react-dom';
import './css/global_style_sheet.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Discpleship_content from './Discpleship_content';

export default class Discpleship extends React.Component {
  
  constructor(props) {
     super(props);
    };
    Go_to_discpleship_content(){
      ReactDOM.render(<Discpleship_content />, document.getElementById('root'));
    }
    new_content(
        content_title,image_path,content,uploaded_date){
          return    <Row id='discipleship-new-content' onClick={this.Go_to_discpleship_content}>
                        <Col>
                          <ul>
                              <li id='discipleship-header'> {content_title}</li>
                              <li id='discipleship-date'> Updated( {uploaded_date} )</li>
                              <li id='discipleship-content'> {content}</li>
                          </ul>
                        </Col>
                    </Row>
  }  
    render() {
     return (
        <Container fluid>
        <Row>
          <Col id='banner'>
          <p className='title'>Cornerstone Believers Church</p>
          <p id='message-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.</p>
          </Col>
        </Row>
        {this.new_content('Spend time with God!','../assets/Images/banner.png','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.', 'January 24, 2020')}
        {this.new_content('Know your limits','../assets/Images/banner.png','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.', 'January 24, 2020')}
        {this.new_content('Why you?','../assets/Images/banner.png','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.', 'January 24, 2020')}
        {this.new_content('Share the good news','../assets/Images/banner.png','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.', 'January 24, 2020')}
        {this.new_content('God is good','../assets/Images/banner.png','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.', 'January 24, 2020')}
        {this.new_content('Word of God','../assets/Images/banner.png','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.', 'January 24, 2020')}
        <br />
        <br />
        <br />
        <br />
      </Container>
    );
  }
}