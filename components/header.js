var text = "MEEK!";
var authorised = false;

module.exports = {
  authorise: function(auth){
    authorised = auth;

    if(authorised){
      text = "Moop";
    } else {
      text = "Meep";
    }
  },

  render: function () {
    return text;
  }
};
