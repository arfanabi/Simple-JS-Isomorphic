var Avatar = React.createClass({
  getInitialState: function() {
    return {
      titles: 'Default Title',
    };
  },
  postAjax : function (event) {
  	// Put Your POST HTTP Request Here.
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
      <div onClick={this.postAjax}>
            {this.state.titles}.
      </div>
    );
  }
});

ReactDOM.render(
<Avatar />,
document.getElementById('example')
);