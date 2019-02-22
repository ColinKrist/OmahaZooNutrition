import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button } from '@material-ui/core';

class Home extends Component {
  static propTypes = {
    token: PropTypes.string,
    classes: PropTypes.object.isRequired,
  };

  static defaultProps = {
    token: '',
  }

  constructor(props) {
    super(props);
    this.state = {
      asdf: props.token, // eslint-disable-line react/no-unused-state
    };
    console.log(props.classes);
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div style={{
          justifyContent: 'space-around', alignItems: 'center', display: 'flex',
        }}
        >
          <Link href="/admin/user/">
            <Button className={this.props.classes.button} color="secondary" variant="contained">
              View user
            </Button>
          </Link>
          <Link href="admin/user/new">
            <Button className={this.props.classes.button} color="secondary" variant="contained">
              NEW user
            </Button>
          </Link>
          <Link href="reports/user">
            <Button className={this.props.classes.button} color="secondary" variant="contained">
              user Reports
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
