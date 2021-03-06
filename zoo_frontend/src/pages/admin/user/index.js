import withStyles from '@material-ui/core/styles/withStyles';
import { compose } from 'recompose';

import withAuth from '../../../util/withAuth';

import { Admin } from '../../PageAccess';

import page from './user';
import styles from './user.styles';

export default compose(
  withAuth(Admin.user.roles),
  withStyles(styles),
)(page);
