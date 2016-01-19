var Avatar = React.createClass({displayName: "Avatar",
  getInitialState: function() {
    return {
      titles: 'Default Title',
    };
  },
  postAjax : function (event) {
  	// Put Your POST HTTP Request Here.
    this.setState({
        titles: 'tesx'
    })
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

// ReactDOM.render(
// <Avatar />,
// document.getElementById('example')
// );