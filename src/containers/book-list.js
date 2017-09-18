import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from'../actions/index'

class BookList extends Component {
  listOfBooks() {
    return this.props.books.map((book) => {
      return (
        <li
        key={book.title}
        onClick={() => {this.props.selectBook(book)}}
        className='list-group-item'>
          <img src={book.img} height={30} className='image'/>
          <span>{book.title}</span>
        </li>
      )
    });
  }
  render() {
    return(
      <ul className='list-group col-sm-4'>
        {this.listOfBooks()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned here will show up as props inside of BookList
  return {
    books: state.books
  }
}

  // Whenever selectBook is called, the results should be passed to all of the reducers
function mapDispatchToProps(dispatch) {
  //Whatever is returned here will show up as props inside of BookList
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
