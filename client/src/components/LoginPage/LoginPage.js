// import axios from 'axios';
import React, { useState , useEffect,useRef} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import RegisterPage from '../registerPage/registerPage';
import MainNavBar from '../NavBar/MainNavBar';
import axios from 'axios';
import {Link,Redirect,useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { LOGIN_SUCCESS, LOGIN_FAIL,} from '../../redux/actions/authAction';
import { clearErrors } from '../../redux/actions/errorAction';
import {login} from '../../redux/actions/authAction';
import {Alert}from 'react-bootstrap';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {/* <Link color="inherit" href="https://material-ui.com/">
        nnnvuuu.github.io
      </Link>{' '} */}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  signIn: {
    margin: theme.spacing(3, 0, 2),
  },
 
}));



function LoginPage(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg,setMsg] = useState(null);



  //follow is how you use componentDidUpdate(prevProps) in functional component
  const prevProps = usePrevious(props.error);

  function usePrevious(value) {
    const ref = useRef();
  useEffect(() => {

    ref.current = value;
    const { error,isAuthenticated} = props;
    if(error !== prevProps){
      //check for register error
      if(error.id === 'LOGIN_FAIL'){
        setMsg(error.msg.msg);
      }
      else{
        setMsg(null);
      }
    }
      //redirect when login successfully.
    if(isAuthenticated){
      props.clearErrors();
      // window.location.href ="/home";
      // return <Redirect to="/home"/>
      history.push("/home", { from: "Login" });
      // document.location.href = '/home',true;
        
    }


   
});
    return ref.current;
  }


  //second useEffect to redirect when login successfully.

//   useEffect(() => {
//     const {isAuthenticated} = props;
//     if(isAuthenticated){
//       props.clearErrors();
//     }

// })

  

 const emailHandler = (e) =>{
  setEmail(e.target.value);
 }

 const passwordHandler = (e) =>{
    setPassword(e.target.value);
}


 const onSubmitHandler = (e) =>{
    e.preventDefault();

    const user = {email,password}

    //attempt to login
    props.login(user);

    // if(props.isAuthenticated){
    //   props.clearErrors();
    // }
    
}


  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
    <MainNavBar />
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            onChange={ emailHandler}
            autoComplete="Username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={ passwordHandler}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.signIn}
            onClick={onSubmitHandler}
          >
            Sign In
          </Button>
          {props.isAuthenticated? <Alert className="text-center" variant="primary"> {'Login Successfully!'}</Alert>:null }
          
          {/* {console.log(msg)} */}
           {msg ?<Alert className="text-center" variant="danger">
          {"* "+msg} </Alert>:null}

          <Typography variant="body2" color="textSecondary" align="center">
          [ login system is created for admin login purpose only ]</Typography>
    
        </form>
      </div>
     
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </div>
  );
}

LoginPage.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  login:PropTypes.func.isRequired,
  clearErrors:PropTypes.func.isRequired,
}




const mapStateToProps = state  =>({
  isAuthenticated : state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps,{login,clearErrors})(LoginPage); //,login