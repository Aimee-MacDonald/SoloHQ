var authorised = false;

var visitorHeader = `
  <h1>Meep</h1>
`;

var userHeader = `
  <h1>Meep</h1>
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
