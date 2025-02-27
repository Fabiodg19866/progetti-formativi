import { Fragment, Component } from 'react';

import CustomClassContextFinishedUsers from './CustomClassContextFinishedUsers';
import classes from './CustomClassContextFinishedUserFinder.module.css';
import CustomClassContextFinishedUsersContext from '../store/CustomClassContextFinished-users-context';
import CustomClassContextFinishedErrorBoundary from './CustomClassContextFinishedErrorBoundary';

class CustomClassContextFinishedUserFinder extends Component {
  static contextType = CustomClassContextFinishedUsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: '',
    };
  }

  componentDidMount() {
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type='search' onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <CustomClassContextFinishedErrorBoundary>
          <CustomClassContextFinishedUsers users={this.state.filteredUsers} />
        </CustomClassContextFinishedErrorBoundary>
      </Fragment>
    );
  }
}


export default CustomClassContextFinishedUserFinder;
