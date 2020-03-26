import React from 'react';
import './css/global_style_sheet.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

export default class App extends React.Component {
  
  constructor(props) {
     super(props);
    };
    render() {
     return (
        <Container fluid>
        <Row>
          <Col id='banner'>
          <p className='title'>Cornerstone Believers Church</p>
          <p id='message-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.</p>
          </Col>
        </Row>
        {this.new_content('Jay Lord','../assets/Images/banner.png','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.', 'January 24, 2020')}
        {this.new_content('Jay Lord','../assets/Images/banner.png','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.', 'January 24, 2020')}
        {this.new_content('Jay Lord','../assets/Images/banner.png','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.', 'January 24, 2020')}
        {this.new_content('Jay Lord','../assets/Images/banner.png','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.', 'January 24, 2020')}
        {this.new_content('Jay Lord','../assets/Images/banner.png','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.', 'January 24, 2020')}
        {this.new_content('Jay Lord','../assets/Images/banner.png','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.Mauris arcu nisl, volutpat sed posuere eu, ullamcorper at sem.', 'January 24, 2020')}
      </Container>
    );
  }
}