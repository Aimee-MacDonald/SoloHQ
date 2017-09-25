var visitorHeaderCode = `
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

module.exports = {
  visitorHeader: function(){
    return visitorHeaderCode;
  },

  userHeader: function(uid){
    return `
      <style>
        * {
          margin: 0;
          padding: 0;
        }

        #header {
          background-color: #3b0d3b;
        }

        #header #username {
          color: #b247b2;
          padding: 10px;
          text-align: center;
        }

        #header #username h1 {
          cursor: pointer;
        }

        #header #username h1:hover {
          color: #6fc72e;
        }

        #header #username ul {
          display: none;
          align-items: center;
          flex-flow: nowrap column;
          list-style-type: none;
          margin-top: 10px;
        }

        #header #username ul li {
          background-color: #b247b2;
          color: #3b0d3b;
          padding: 10px;
          font-size: 20px;
          font-weight: bold;
          max-width: 200px;
          border: 2px solid #6fc72e;
          border-radius: 5px;
          margin: 5px;
          min-width: 200px;
          cursor: pointer;
        }

        #header #username ul li:hover {
          background-color: #6fc72e;
        }

        #header #weekview {
          display: flex;
          flex-flow: nowrap row;
          justify-content: space-around;
        }

        #header #weekview .day {
          background-color: #6fc72e;
        }

        #header:hover #weekview {
          background-color: #b247b2;
        }

        #header:hover #weekview .day {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin: 10px;
        }
      </style>

      <div id="header">
        <div id="username" onclick="toggleMenu()">
          <h1 id="untext">` + uid + `</h1>
          <ul id="usermenu">
            <li id="profilebtn">Profile</li>
            <li id="logoutbtn">Logout</li>
          </ul>
        </div>

        <div id="weekview">
          <div id="day1" class="day"></div>
          <div id="day2" class="day"></div>
          <div id="day3" class="day"></div>
          <div id="day4" class="day"></div>
          <div id="day5" class="day"></div>
          <div id="day6" class="day"></div>
          <div id="day7" class="day"></div>
        </div>
      </div>

      <script>
        var menuOpen = false;

        function toggleMenu(){
          menuOpen = !menuOpen;

          if(menuOpen){
            document.getElementById("usermenu").style.display = "flex";
            document.getElementById("weekview").style.display = "none";
          } else {
            document.getElementById("usermenu").style.display = "none";
            document.getElementById("weekview").style.display = "flex";
          }
        }

        document.getElementById("header").addEventListener("mouseout", function(e){
          var eid = e.toElement.id;
          if(eid !== "header"
                && eid !== "username"
                && eid !== "untext"
                && eid !== "usermenu"
                && eid !== "profilebtn"
                && eid !== "logoutbtn"){
            menuOpen = false;
            document.getElementById("usermenu").style.display = "none";
            document.getElementById("weekview").style.display = "flex";
          }
        });
      </script>
    `;
  }
};
