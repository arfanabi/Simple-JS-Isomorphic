var Avatar = React.createClass({displayName: "Avatar",
  getInitialState: function() {
    return {
      titles: 'tes',
    };
  },
  postAjax : function (event) {
  	var options = { 
  					key: "AKDCvfd4DPLOAC7A", 
  					secretKey: "VHNkighnTY56a1eA6h3MaQ2u606k93YA5iJZkr" ,
  					username: "arfan10110046@gmail.com",
  					password: "abiidev13",
  				}
	$.get('http://flipflap.elasticbeanstalk.com/webservice/adb.asmx/customerLogin', options, function(result) {
      $.get(result, function(xml){ 
      	var json = $.xml2json(xml); 
      	console.log(json);
      }); 
    }.bind(this));
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
      React.createElement("header", null, 
      		React.createElement("div", {onClick: this.postAjax}, 
		        this.state.titles, "."
		    ), 
            React.createElement("div", {className: "header-top"}, 
                React.createElement("div", {className: "site-header"}, 
                    React.createElement("ul", {className: "nav-top"}, 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "Sign In")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "Sign Up")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "Help")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "Cart (0)"))
                    )
                )
            ), 
            React.createElement("div", {className: "site-header"}, 
                React.createElement("div", {className: "clearfix"}, 
                    React.createElement("div", {className: "grid-9"}, 
                        React.createElement("a", {className: "logo", href: "index.html"}), 
                React.createElement("div", {className: "menu-toggle"}, React.createElement("span", null)), 
                React.createElement("nav", {className: "site-nav m-hide"}, 
                    React.createElement("ul", null, 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "Photo book")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "Cards & Stationary")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "Canvas")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "Calendar"))
                    )
                )
                    ), 
                    React.createElement("div", {className: "grid-3"}, 
                    React.createElement("div", {className: "search-form"}, 
                    React.createElement("input", {type: "text", placeholder: "Search"})
                )
                )
                )
                
            )
        )
    );
  }
});

ReactDOM.render(
React.createElement(Avatar, null),
document.getElementById('example')
);