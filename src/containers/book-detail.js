import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if(!this.props.book) {
      return <div>Please select a book</div>
    }
    return(
      <div className='details'>
        <img src={this.props.book.img} height={100}/>
        <div>{this.props.book.title}</div>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    book: state.selectedBook
  }
}

export default connect(mapStateToProps)(BookDetail);
