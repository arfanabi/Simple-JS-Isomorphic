var Avatar = React.createClass({displayName: "Avatar",
  getInitialState: function() {
    return {
      titles: 'Default Title',
    };
  },
  postAjax : function (event) {
  	// Put Your POST HTTP Request Here.
    console.log('tes')
  },
  componentDidMount: function() {
  	$.get('http://jsonplaceholder.typicode.com/posts/1', function(result) {
      if (this.isMounted()) {
        this.setState({
          titles: result.title
        });
      }
    }.bind(this));
  },
  render: function() {
    return (
      React.createElement("div", {onClick: this.postAjax}, 
            this.state.titles, "."
      )
    );
  }
});

ReactDOM.render(
React.createElement(Avatar, null),
document.getElementById('example')
);