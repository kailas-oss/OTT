import './Login.css';

function Login(){
   return (
    <div className='container'>
        <div className='leftContainer'>
            <h2>WELCOME BACK!</h2>
            <h6>To keep connected with us, please login with your personal information.</h6>
        </div>

        <div className='rightContainer'>
            <form className='formLeft'>
              <label>Email or Phone Number</label>
              <input type='text'></input>
              <label>Password</label>
              <input type='password'></input>
              <div className='button-container'>
                <button type='button'>Sign in</button> 
                <button type='button'>Sign up</button>
              </div>
              <button className='button3'>Use Search Id</button>
            </form>
        </div>
        <div className='logoutRight'>
            <div className='logoutContainer'>
              <h5>ARE YOU SURE?</h5>
              <p className='para'>You are in logout page, Do you wish to logout?<br />Are you sure you want to log out?<br />come back again.. </p>
              <button className='logout'>LOG OUT</button>
              <button className='cancel'>CANCEL</button>
            </div>
        </div>
    </div>
   );
}
export default Login;
