import { Fragment, Component } from 'react';

import CustomClassContextCmpUsers from './CustomClassContextCmpUsers';
import classes from './CustomClassContextCmpUserFinder.module.css';
import CustomClassContextCmpUsersContext from '../store/CustomClassContextCmp-users-context';

class CustomClassContextCmpUserFinder extends Component {
  static contextType = CustomClassContextCmpUsersContext;

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
        <CustomClassContextCmpUsers users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}


export default CustomClassContextCmpUserFinder;
