// import React from 'react';

// function MainCarousel () {
//     return (

//     )
// }
import { Carousel, Radio } from 'antd';
import React from 'react';
import './MainCarousel.css';
import 'antd/dist/antd.css';

class MainCarousel extends React.Component {
  state = {
    dotPosition: 'right',
  };

  handlePositionChange = ({ target: { value: dotPosition } }) =>
    this.setState({ dotPosition });

  render() {
    const { dotPosition } = this.state;
    return (
      <div>
        <Carousel dotPosition={dotPosition}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default MainCarousel;
// ReactDOM.render(<PositionCarouselDemo />, mountNode);
