var authorised = false;

var visitorHeader = `
  <div id="header">
    <h1>SoloHQ</h1>
    <button onclick="btnLogin()">Login</button>

    <script>
      function btnLogin(){
        document.getElementById("header").innerHTML =\`
          <form id="loginform" action="/login" method="get">
            <button>Register</button>
            <input type="text" placeholder="Email" name="un" required>
            <input type="password" placeholder="Password" name="pw" required>
            <button type="submit">Login</button>
          </form>
        \`;
      }
    </script>
  </div>
`;

var userHeader = `
<div id="header">
  <h1>SoloHQ</h1>
  <button onclick="btnLogout()">Logout</button>
</div>
`;

module.exports = {
  authorise: function(auth){
    authorised = auth;
  },

  render: function () {
    if(authorised){
      return userHeader;
    } else {
      return visitorHeader;
    }
  }
};
