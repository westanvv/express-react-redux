import React, { Component } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

class CustomList extends Component {

  constructor(props) {
      super(props);
      this.state = {date: new Date()};
  }

  renderListItem = (item) =>
    <div key={item.id}>
      <ListItem
        primaryText={item.title}
        secondaryText={
          <p>{item.msg}</p>
        }
      />
      <Divider inset={false} />
    </div>;

  render() {
    return (
      <List>
        {this.props.data && this.props.data.map(item => this.renderListItem(item))}
      </List>
    );
  }
}

export default CustomList;
