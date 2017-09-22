




function btnLogin(){
  var lf = new LoginForm;
  var el_Head = document.getElementById("header");
  el_Head.innerHTML = lf.render() + el_Head.innerHTML;
}

class LoginForm{
  render(){
    return `
      <div id="loginform">
        <form>
          <button>Register</button>
          <input type="text" placeholder="Email">
          <input type="password" placeholder="Password">
          <button>Login</button>
        </form>
      </div>
    `
  }
}
