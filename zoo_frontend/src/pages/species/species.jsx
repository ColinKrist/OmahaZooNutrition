import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button } from '@material-ui/core';

import { hasAccess, Admin, Species } from '../PageAccess';

class Home extends Component {
  static propTypes = {
    account: PropTypes.object.isRequired,
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
  }

  render() {
    const { role } = this.props.account;
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
          {hasAccess(role, Admin.roles) &&
            <Link href={Admin.link}>
              <Button className={this.props.classes.button} color="secondary" variant="contained">
                Admin Home
              </Button>
            </Link>
          }
          {hasAccess(role, Species.edit.roles) &&
          <Link href={Species.edit.link}>
            <Button className={this.props.classes.button} color="secondary" variant="contained">
              EDIT species
            </Button>
          </Link>
          }
          {hasAccess(role, Species.new.roles) &&
          <Link href={Species.new.link}>
            <Button className={this.props.classes.button} color="secondary" variant="contained">
              NEW species
            </Button>
          </Link>
          }
          {/* TODO add logic for link here */}
          <Link href="/reports/species">
            <Button className={this.props.classes.button} color="secondary" variant="contained">
              Species Reports
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
