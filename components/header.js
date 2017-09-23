var authorised = false;

var visitorHeader = `
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
