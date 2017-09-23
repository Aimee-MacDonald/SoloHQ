var authorised = false;

var visitorHeader = `
  <style>
    #header{
      background-color: #6fc72e;
    }

    #loginform {
      background-color: #6fc72e;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      padding: 10px;
    }

    #loginform input {
      padding: 5px;
      text-align: center;
      background-color: #d28dd2;
      color: #3b0d3b;
      border-color: #3b0d3b;
      border-radius: 10px;
      font-size: 20px;
      font-weight: bold;
      flex-grow: 1;
      margin: 0px 5px;
    }

    #loginform button {
      padding: 5px 20px;
      text-align: center;
      background-color: #a6e07b;
      color: #3b0d3b;
      border-color: #3b0d3b;
      border-radius: 10px;
      font-size: 20px;
      font-weight: bold;
      margin: 0px 5px;
    }
  </style>

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

  <div id="header">
    <h1>SoloHQ</h1>
    <button onclick="btnLogin()">Login</button>
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
