const variablesStyles = '@import "./src/css/common/_vars.scss"';
const breakpointsStyles = '@import "./src/css/common/_breakpoints.scss"';
const mixinsStyles = '@import "./src/css/common/_mixins.scss"';


const styles = [
  variablesStyles,
  breakpointsStyles,
  //   colorsStyles,
  mixinsStyles,
  //   baseStyles,
  // resetStyles,
];

export const globalStylesOptions = styles.reduce((acc, i) => acc + i + ';', '');
