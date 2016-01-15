var Avatar = React.createClass({displayName: "Avatar",
  render: function() {
    return (
      React.createElement("header", null, 
            React.createElement("div", {class: "header-top"}, 
                React.createElement("div", {class: "site-header"}, 
                    React.createElement("ul", {class: "nav-top"}, 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "Sign In")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "Sign Up")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "Help")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "Cart (0)"))
                    )
                )
            ), 
            React.createElement("div", {class: "site-header"}, 
                React.createElement("div", {class: "clearfix"}, 
                    React.createElement("div", {class: "grid-9"}, 
                        React.createElement("a", {class: "logo", href: "index.html"}), 
                React.createElement("div", {class: "menu-toggle"}, React.createElement("span", null)), 
                React.createElement("nav", {class: "site-nav m-hide"}, 
                    React.createElement("ul", null, 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "Photo book")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "Cards & Stationary")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "Canvas")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "Calendar"))
                    )
                )
                    ), 
                    React.createElement("div", {class: "grid-3"}, 
                    React.createElement("div", {class: "search-form"}, 
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