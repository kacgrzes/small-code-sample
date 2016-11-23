import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {autobind} from 'core-decorators';
import {FormattedMessage} from 'react-intl';
import {Table, Column, Cell} from 'fixed-data-table';

import {fetchData} from 'modules/tables/actions/fetchData/fetchData';
import {createPost} from 'modules/tables/actions/createPost';
import Spinner from 'modules/tables/components/Spinner';
import DateCell from 'modules/tables/components/DateCell';
import TextCell from 'modules/tables/components/TextCell';
import PostForm from 'modules/tables/components/PostForm';
import SortHeaderCell from 'modules/tables/components/SortHeaderCell';
import style from './TableContainer.scss';

const SortTypes = {
  ASC: 'ASC',
  DESC: 'DESC',
};

class TableContainer extends Component {

  constructor() {
    super();
    this.state = {
      filteredPosts: [],
      rowsAtOnce: 5,
      colSortDirs: {},
    };
  }

  componentDidMount() {
    this.props.fetchData();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filteredPosts: nextProps.posts.data,
    });
  }

  @autobind
  onSortChange(columnKey, sortDir) {
    const sortedPosts = this.state.filteredPosts
      .slice()
      .sort((indexA, indexB) => {
        const valueA = indexA[columnKey];
        const valueB = indexB[columnKey];
        let sortVal = 0;
        if (valueA > valueB) {
          sortVal = 1;
        }
        if (valueA < valueB) {
          sortVal = -1;
        }
        if (sortVal !== 0 && sortDir === SortTypes.ASC) {
          sortVal *= -1;
        }

        return sortVal;
      });

    this.setState({
      filteredPosts: sortedPosts,
      colSortDirs: {
        [columnKey]: sortDir,
      },
    });
  }

  @autobind
  onFilterChange(e) {
    if (!e.target.value) {
      this.setState({
        filteredPosts: this.props.posts.data,
      });
    }

    const filterBy = e.target.value.toLowerCase();
    const filteredPosts = this.props.posts.data
      .filter(post =>
        post.user_name
          .toLowerCase()
          .indexOf(filterBy) !== -1
      );

    this.setState({
      filteredPosts,
    });
  }

  @autobind
  onRowsAtOnceChange(e) {
    if (!e.target.value) {
      this.setState({
        rowsAtOnce: 5,
      });
    }

    const rowsAtOnce = e.target.value;

    this.setState({
      rowsAtOnce,
    });
  }

  @autobind
  onFormSubmit({postTitle}) {
    // Do something with the form values
    this.props.createPost(postTitle);
  }

  render() {
    const {posts} = this.props;
    const {colSortDirs} = this.state;
    const {filteredPosts} = this.state;
    const headerHeight = 50;

    return (
      <div className={style.TableContainer}>
        <h1>
          <FormattedMessage
            id={'table.title'}
            description={'Table container title'}
            defaultMessage={'Table container'}
          />
        </h1>
        {posts.isLoading ?
          <Spinner /> :
          <div>
            <input
              type="text"
              className="pt-input"
              onChange={this.onFilterChange}
              placeholder="Filter by First Name"
            />
            <input
              type="number"
              className="pt-input"
              onChange={this.onRowsAtOnceChange}
              placeholder="Rows at once"
            />
            <Table
              rowHeight={50}
              rowsCount={filteredPosts.length}
              width={950}
              height={this.state.rowsAtOnce * 50 + headerHeight}
              headerHeight={headerHeight}
              {...this.props}
            >
              <Column
                columnKey="id"
                header={<SortHeaderCell
                  onSortChange={this.onSortChange}
                  sortDir={colSortDirs.id}
                >
                  <FormattedMessage
                    id={'table.id'}
                    description={'Table id'}
                    defaultMessage={'Id'}
                  />
                </SortHeaderCell>}
                cell={<TextCell data={filteredPosts} col="id"/>}
                width={50}
              />
              <Column
                columnKey="user_name"
                header={<SortHeaderCell
                  onSortChange={this.onSortChange}
                  sortDir={colSortDirs.user_name}
                >
                  <FormattedMessage
                    id={'table.userName'}
                    description={'User name'}
                    defaultMessage={'User name'}
                  />
                </SortHeaderCell>}
                cell={<TextCell data={filteredPosts} col="user_name"/>}
                width={100}
              />
              <Column
                columnKey="post_title"
                header={<SortHeaderCell
                  onSortChange={this.onSortChange}
                  sortDir={colSortDirs.post_title}
                >
                  <FormattedMessage
                    id={'table.postTitle'}
                    description={'Post title'}
                    defaultMessage={'Post title'}
                  />
                </SortHeaderCell>}
                cell={<TextCell data={filteredPosts} col="post_title"/>}
                width={200}
              />
              <Column
                columnKey="views"
                header={<SortHeaderCell
                  onSortChange={this.onSortChange}
                  sortDir={colSortDirs.views}
                >
                  <FormattedMessage
                    id={'table.views'}
                    description={'Views amount'}
                    defaultMessage={'Views'}
                  />
                </SortHeaderCell>}
                cell={<TextCell data={filteredPosts} col="views"/>}
                width={200}
              />
              <Column
                columnKey="likes"
                header={<SortHeaderCell
                  onSortChange={this.onSortChange}
                  sortDir={colSortDirs.likes}
                >
                  <FormattedMessage
                    id={'table.likes'}
                    description={'Likes amount'}
                    defaultMessage={'Likes'}
                  />
                </SortHeaderCell>}
                cell={<TextCell data={filteredPosts} col="likes"/>}
                width={200}
              />
              <Column
                columnKey="created_at"
                header={<SortHeaderCell
                  onSortChange={this.onSortChange}
                  sortDir={colSortDirs.created_at}
                >
                  <FormattedMessage
                    id={'table.createdAt'}
                    description={'Created at'}
                    defaultMessage={'Created at'}
                  />
                </SortHeaderCell>}
                cell={<DateCell data={filteredPosts} col="created_at"/>}
                width={200}
              />
            </Table>
          </div>
        }
        <PostForm onSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

TableContainer.propTypes = {
  posts: PropTypes.object,
  fetchData: PropTypes.func,
  createPost: PropTypes.func,
};

const mapStateToProps = state => ({
  posts: state.tables.posts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchData('http://localhost:8080/src/assets/data.json')),
  createPost: (title) => dispatch(createPost(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
