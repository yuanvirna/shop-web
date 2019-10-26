import { withStyles } from '@material-ui/core/styles';
import Component from './component';
import Style from './style';

const Styled = withStyles(Style)(Component);
export default Styled;
