import withStyles from '@material-ui/core/styles/withStyles';
import { compose } from 'recompose';

import withAuth from '../../../util/withAuth';

import { Food } from '../../PageAccess';

import page from './dataSrc';
import styles from './dataSrc.styles';

export default compose(
  withAuth(Food.roles),
  withStyles(styles),
)(page);
