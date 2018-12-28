export default function(theme) {
  return {
    number: {
      marginBottom: theme.spacing.unit * 2.0,
      fontSize: 30,
    },
    [theme.mixins.atMedia('md')]: {
      number: {
        fontWeight: 350,
      },
    },
  };
}
