/*
  Author  : Arfan (Abi)
  Email   : arfan10110046@gmail.com
*/


var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var $ = jQuery = require('../libraries/jquery-1.11.3.min.js');
var xml2json = require('../libraries/xml2json.js');
var request = require('request');

module.exports = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function() {
      return { 
        titles: 'Default Title',
        email: null,
        password: null
      };
  },
  postAjax : function (evt) {
  	// Put Your POST HTTP Request Here.
    switch(evt) {
    case 'login':
        request.post({url:'Your Login Url API', form: {email: this.state.email, password:this.state.password}}, function(err,httpResponse,body){ 
        // Do Your Event Here
        })
        break;
    }
  },
  componentDidMount: function() {
  	// Put Your GET HTTP Request Before Render
  },
  render: function() {
    return (
      <div>
      <h1>Login</h1>
      <p><input type="text" valueLink={this.linkState('email')} name="email"/></p>
      <p><input type="password" valueLink={this.linkState('password')} name="password"/></p>
      <p><button onClick={this.postAjax.bind(this, 'login')}>Login</button></p>
      </div>
    );
  }
});