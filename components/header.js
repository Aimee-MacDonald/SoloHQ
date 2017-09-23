var authorised = false;

var visitorHeader = `
  <style>
  * {
  margin: 0;
  padding: 0;
}

#header {
  background-color: #3b0d3b;
  color: #b247b2;
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

button {
  padding: 5px 20px;
  background-color: #6fc72e;
  font-weight: bold;
  border-radius: 10px;
  border-color: #b247b2;
}

input {
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
}

#uninput {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

#loginform {
  padding: 30px;
  display: flex;
  flex-flow: nowrap column;
}

#loginbtn2 {
  padding: 10px 20px;
  font-size: 20px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-color: #6fc72e;
}
  </style>

  <div id="header">
    <h1 id="logo">SoloHQ</h1>
    <button onclick="btnLogin()" id="loginbtn">Login</button>
  </div>

  <script>
    var el_header = document.getElementById("header");

    function btnLogin(){
      el_header.innerHTML = \`
        <h1 id="logo">SoloHQ</h1>
        <form id="loginform" action="/login" method="get">
          <input type="text" placeholder="Email" id="uninput" name="un" required>
          <input type="password" placeholder="Password" id="pwinput" name="pw" required>
          <button type="submit" id="loginbtn2">Login</button>
        </form>
      \`;
    }

    function reset(){
      el_header.innerHTML = \`
        <h1 id="logo">SoloHQ</h1>
        <button onclick="btnLogin()" id="loginbtn">Login</button>
      \`;
    }

    el_header.addEventListener("mouseout", function(e){
      var eid = e.toElement.id
      if(eid !== "uninput"
            && eid !== "pwinput"
            && eid !== "header"
            && eid !== "loginform"
            && eid !== "loginbtn2"
            && document.getElementById("uninput").value === ""
            && document.getElementById("pwinput").value === ""){
        reset();
      }
    });
  </script>
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
