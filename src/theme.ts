import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as colors from 'material-ui/styles/colors';

export const theme = getMuiTheme({
  palette: {
    primary1Color: colors.deepPurple500,
    primary2Color: colors.deepPurple700,
    primary3Color: colors.grey400,
    accent1Color: colors.purpleA200,
    accent2Color: colors.grey100,
    accent3Color: colors.grey500
  },
  appBar: {
    height: 56
  }
});
