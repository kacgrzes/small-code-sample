import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {FormattedDate, FormattedMessage, defineMessages} from 'react-intl';
import {Table, Column, Cell} from 'fixed-data-table';

import {fetchData} from 'modules/tables/actions/fetchData/fetchData';
import Spinner from 'modules/tables/components/Spinner';
import style from './TableContainer.scss';

const DateCell = ({rowIndex, data, col, ...props}) => {
  const date = parseInt(data[rowIndex][col], 10);
  return (
    <Cell {...props}>
      <FormattedDate value={new Date(date)}/>
    </Cell>
  );
};

DateCell.propTypes = {
  rowIndex: PropTypes.number,
  data: PropTypes.any,
  col: PropTypes.any,
};

const TextCell = ({rowIndex, data, col, ...props}) => (
  <Cell {...props}>
    {data[rowIndex][col]}
  </Cell>
);

TextCell.propTypes = {
  rowIndex: PropTypes.number,
  data: PropTypes.any,
  col: PropTypes.any,
};

class TableContainer extends Component {

  constructor() {
    super();
    this.state = {
      filteredPosts: [],
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

  render() {
    const {posts} = this.props;
    const {filteredPosts} = this.state;

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
              onChange={e => this.onFilterChange(e)}
              placeholder="Filter by First Name"
            />
            <Table
              rowHeight={50}
              rowsCount={filteredPosts.length}
              width={850}
              height={500}
              headerHeight={50}
              {...this.props}
            >
              <Column
                header={<Cell>
                  <FormattedMessage
                    id={'table.id'}
                    description={'Table id'}
                    defaultMessage={'Id'}
                  />
                </Cell>}
                cell={<TextCell data={filteredPosts} col="id"/>}
                width={50}
              />
              <Column
                header={<Cell>
                  <FormattedMessage
                    id={'table.userName'}
                    description={'User name'}
                    defaultMessage={'User name'}
                  />
                </Cell>}
                cell={<TextCell data={filteredPosts} col="user_name"/>}
                width={100}
              />
              <Column
                header={<Cell>
                  <FormattedMessage
                    id={'table.postTitle'}
                    description={'Post title'}
                    defaultMessage={'Post title'}
                  />
                </Cell>}
                cell={<TextCell data={filteredPosts} col="post_title"/>}
                width={100}
              />
              <Column
                header={<Cell>
                  <FormattedMessage
                    id={'table.views'}
                    description={'Views amount'}
                    defaultMessage={'Views'}
                  />
                </Cell>}
                cell={<TextCell data={filteredPosts} col="views"/>}
                width={200}
              />
              <Column
                header={<Cell>
                  <FormattedMessage
                    id={'table.likes'}
                    description={'Likes amount'}
                    defaultMessage={'Likes'}
                  />
                </Cell>}
                cell={<TextCell data={filteredPosts} col="likes"/>}
                width={200}
              />
              <Column
                header={<Cell>
                  <FormattedMessage
                    id={'table.createdAt'}
                    description={'Created at'}
                    defaultMessage={'Created at'}
                  />
                </Cell>}
                cell={<DateCell data={filteredPosts} col="created_at"/>}
                width={200}
              />
            </Table>
          </div>
        }
      </div>
    );
  }
}

TableContainer.propTypes = {
  posts: PropTypes.object,
  fetchData: PropTypes.func,
};

const mapStateToProps = state => ({
  posts: state.tables.posts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchData('http://localhost:8080/src/assets/data.json')),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
