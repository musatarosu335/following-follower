import React from 'react';
import PropTypes from 'prop-types';

export default class Followers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: [],
    };
  }

  componentDidMount() {
    this.props.fetchFollowers();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.followers !== nextProps.followers) {
      this.setState({
        followers: nextProps.followers,
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Followers</h1>
        <ul>
          {this.state.followers.map(follower => (
            <li>{follower.uid}</li>
          ))}
        </ul>
      </div>
    );
  }
}
