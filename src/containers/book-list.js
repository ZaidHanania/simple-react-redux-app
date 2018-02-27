import React, { Component } from 'react';
import { connect } from 'react-redux'; // To connect React to Redux
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component { // Smart component or container
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title} 
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will be a prop inside BookList
  return {
    books: state.books
  };
}

// Anything returned from function will end up as props in BookList container
function mapDispatchToProps(dispatch) {
  // Whenever select book is called, result is passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Makes BookList container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
