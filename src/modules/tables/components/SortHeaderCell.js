import React, {PropTypes, Component} from 'react';
import {autobind} from 'core-decorators';
import {Cell} from 'fixed-data-table';

const SortTypes = {
  ASC: 'ASC',
  DESC: 'DESC',
};

function reverseSortDirection(sortDir) {
  return sortDir === SortTypes.DESC ? SortTypes.ASC : SortTypes.DESC;
}

class SortHeaderCell extends Component {
  @autobind
  onSortChange(e) {
    e.preventDefault();
    console.log('ej kurwa ziomek');
    if (this.props.onSortChange) {
      this.props.onSortChange(
        this.props.columnKey,
        this.props.sortDir ?
          reverseSortDirection(this.props.sortDir) :
          SortTypes.DESC
      );
    }
  }

  render() {
    const {sortDir, children, ...props} = this.props;
    const sign = sortDir === SortTypes.DESC ? '↓' : '↑';
    return (
      <Cell {...props}>
        <a onClick={this.onSortChange}>
          {children} {sortDir ? sign : ''}
        </a>
      </Cell>
    );
  }
}

SortHeaderCell.propTypes = {
  onSortChange: PropTypes.func,
  sortDir: PropTypes.string,
  children: PropTypes.element,
  columnKey: PropTypes.any,
};

export default SortHeaderCell;
