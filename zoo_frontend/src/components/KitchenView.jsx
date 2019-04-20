import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

let id = 0;
function createData(unit, food) {
  id += 1;
  return {
    unit, food,
  };
}

const rows = [
  createData('500 g', 'MIXED GREANS'),
  createData('330 g', 'SEASONAL FRUIT'),
];

const styles = theme => ({
  pageText: {
    textAlign: 'right',
    marginBottom: theme.spacing.unit,
  },
  topMargin: {
    marginTop: theme.spacing.unit * 7,
    marginBottom: theme.spacing.unit,
  },
  bottomMargin: {
    marginBottom: theme.spacing.unit,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 1,
    paddingRight: theme.spacing.unit * 3,
  },
  table: {
    marginTop: theme.spacing.unit * 9,
  },
});

const KitchenView = ({
  classes, currentPage, pageLength, noteId, species, prepNotes, dc,
}) => (
  <div>
    <div className={classes.pageText}>
      <Typography> Page {currentPage}/{pageLength}</Typography>
    </div>
    <div className={classes.container}>
      <div className={classes.leftContainer}>
        <Typography variant="h1" style={{ fontSize: 30 }} className={classes.bottomMargin}>{species}</Typography>
        <Typography variant="h2" style={{ fontSize: 22 }}>{noteId}
        </Typography>
        <Typography className={classes.topMargin} variant="h3" style={{ fontSize: 22, color: 'grey' }}>Prep Notes</Typography>
        <div>
          {prepNotes.map(txt => <Typography style={{ fontSize: 18 }}>{txt.prepNote}</Typography>)}
        </div>
        <div>
          <Typography variant="h3" style={{ fontSize: 22, marginTop: 30, color: 'grey' }}>History</Typography>
          <div>
            <Typography style={{ fontSize: 18 }}>
                  date: changes
            </Typography>
          </div>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ textAlign: 'right' }}>
          <Typography variant="h2" style={{ fontSize: 22 }}>{dc}</Typography>
        </div>
        <Table className={classes.table}>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell align="left">{row.unit}</TableCell>
                <TableCell align="left">{row.food}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

    </div>
  </div>
);

KitchenView.propTypes = {
  classes: PropTypes.object.isRequired,
  currentPage: PropTypes.number,
  pageLength: PropTypes.number,
  noteId: PropTypes.string,
  species: PropTypes.string,
  prepNotes: PropTypes.array,
  dc: PropTypes.string,
};

KitchenView.defaultProps = {
  currentPage: 0,
  pageLength: 0,
  noteId: '',
  species: '',
  prepNotes: [],
  dc: '',
};


export default withStyles(styles)(KitchenView);
