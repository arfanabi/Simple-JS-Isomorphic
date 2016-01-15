var Avatar = React.createClass({displayName: "Avatar",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("img", {src: "https://www.google.co.id/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"}), 
        React.createElement("img", {src: "https://www.google.co.id/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"})
      )
    );
  }
});

ReactDOM.render(
React.createElement(Avatar, null),
document.getElementById('example')
);