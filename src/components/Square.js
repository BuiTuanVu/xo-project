import React from 'react';


// class Square extends Component {
//   render() {
//     const { value } = this.props;
//     const { onClick } = this.props;
//     const { winner } = this.props;
//     const squareClass = `square ${winner}`
//     return (

//       <button className={squareClass} data-pro={value} onClick={onClick}>{value}</button>

//     );
//   }
// }

const Square = function (props) {
  const { value } = props;
  const { onClick } = props;
  const { winner } = props;
  const squareClass = `square ${winner}`
  return (

    <button type="button" className={squareClass} data-pro={value} onClick={onClick}>{value}</button>

  );

}
export default Square;