var Avatar = React.createClass({displayName: "Avatar",
  render: function() {
    return (
      React.createElement("header", null, 
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