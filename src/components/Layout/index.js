import { makeStyles } from '@material-ui/core';
import Head from 'next/Head';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
    width: '100vw',
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256,
    },
   },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  content: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
}));

function Layout({ children, title }) {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={classes.root}>
        <div>Topbar</div>
        <div>navbar</div>
        <div className={classes.wrapper}></div>
        <div className={classes.contentContainer}></div>
        <div className={classes.content}>{children}</div>
      </div>
    </>
  );
}

export default Layout;
