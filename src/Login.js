import './Login.css';

function Login(){
   return (
    <div className='container'>
        <div className='leftContainer'>
            <h2>WELCOME BACK!</h2>
            <h6>To keep contaccted with us, 
                please login with your personal information.
            </h6>
        </div>

        <div className='rightContainer'>
            <form className='formLeft'>
              <label>Email or Phone Number</label>
              <input type='text'></input>
              <label>Password</label>
              <input type='Password'></input>
              <div className='button-container'>
              <button type='button'>Sign in</button> 
              <button type='button'>Sign up</button>
              </div>
              <button className='button3'>Use Search Id</button>

            </form>
        </div>
    </div>
   );
}
export default Login;
