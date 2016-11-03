import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';
const uuid = require('uuid');
const R = React;

const Root = React.createClass({
  getInitialState(){
    try{
      var data=JSON.parse(localStorage.requests);
    }catch(e){
      data = [];
    }
    return{
      requests : data,
      totalrequest : '',
      totalBudget : ''
    }
  },
  componentDidUpdate(){
    localStorage.requests = JSON.stringify(this.state.requests);
    location.reload();
  },
  addrequest(request) {
    this.setState({requests : this.state.requests.concat(request)});
  },
  deleterequest(id){
    this.setState({requests : this.state.requests.filter(request => request.id !== id)});
  },
  modifyrequest(id){
    let index = this.state.requests.findIndex(x => x.id ===id);
    let mRequest = this.state.requests;
    let companyname = prompt("Change Company Name", mRequest[index].companyname );
    let lastname = prompt("Change Last Name",mRequest[index].lastname);
    let firstname = prompt("Change First Name", mRequest[index].firstname);
    let email = prompt("Change Email",mRequest[index].email);
    let phone  = prompt("Change Phone Number",mRequest[index].phone);
    let budget = prompt("Change Total Budget",mRequest[index].budget);
    let imgurl = prompt("Change ImageURL",mRequest[index].imgurl);
    mRequest[index] = {id:uuid(),name,budget,email,imgurl};
    this.setState({requests : mRequest});
  },
 render: function render() {
    return R.createElement(
      'div',null,
      R.createElement('h1',null,'Advertisement Request Form'
      ),
      R.createElement(RequestForm, { addrequest: this.addrequest }),
      R.createElement(RequestStatus, { requests: this.state.requests }),
      R.createElement(DisplayRequests, {
        requests: this.state.requests,
        deleterequest: this.deleterequest,
        modifyrequest: this.modifyrequest
      })
    );
  }
});

const RequestStatus = React.createClass({
  render(){
    let tValue=0;
    this.props.requests.forEach(props =>	{
          tValue += parseInt(props.budget);
    });
     return React.createElement(
      "div",
      null,
      React.createElement("br", null),
      React.createElement("span",null,"Total requests : ",this.props.requests.length," "),
      React.createElement("span",null,"Total Budget : ",tValue),
      React.createElement("br", null)
    );
  }
});

const RequestForm = React.createClass({
  getInitialState(){
    return {
    	companyname : '',
    	companyaddress : '',
    	companycity : '',
    	companystate : '',
    	companypostalcode : '',
      	lastname : '',
      	firstname: '',
      	email : '',
      	phone : '',
      	budget : '',
      	imgurl : ''
    }
  },
  resetForm(e){
    e.preventDefault();
    this.setState({
    	companyname : '',
    	companyaddress : '',
    	companycity : '',
    	companystate : '',
    	companypostalcode : '',
      	lastname : '',
      	firstname: '',
      	email : '',
      	phone : '',
      	budget : '',
      	imgurl : ''
    });
  },
  addrequest(){
    let request = {
    	id : uuid(),
    	companyname : this.state.companyname,
    	companyaddress : this.state.companyaddress,
    	companycity : this.state.companycity,
    	companystate : this.state.companystate,
    	companypostalcode : this.state.companypostalcode,
      	lastname : this.state.lastname,
      	firstname : this.state.firstname,
      	email : this.state.email,
      	phone : this.state.phone,
      	budget : this.state.budget,
      	imgurl : this.state.imgurl
    };
    this.props.addrequest(request);
    this.setState({
    	 companyname : '',
    	 companyaddress : '',
    	 companycity : '',
    	 companystate : '',
    	 companypostalcode : '',
    	 lastname : '',
	     firstname : '',
	     email : '',
	     phone : '',
	     budget : '',
	     imgurl : ''
    });
  },
   render: function render() {
    let _this = this;

    return R.createElement('form',{ onSubmit: this.addrequest },
      R.createElement('input', { type: 'text', value: this.state.companyname, onChange: function onChange(e) {
          return _this.setState({ companyname: e.target.value });
        }, placeholder: 'Company Name' }),
      R.createElement('br', null),
      R.createElement('input', { type: 'text', value: this.state.companyaddress, onChange: function onChange(e) {
          return _this.setState({ companyaddress: e.target.value });
        }, placeholder: 'Company Address' }),
      R.createElement('br', null),
      R.createElement('input', { type: 'text', value: this.state.companycity, onChange: function onChange(e) {
          return _this.setState({ companycity: e.target.value });
        }, placeholder: 'Company City' }),
      R.createElement('br', null),
      R.createElement('input', { type: 'text', value: this.state.companystate, onChange: function onChange(e) {
          return _this.setState({ companystate: e.target.value });
        }, placeholder: 'Company State' }),
      R.createElement('br', null),
      R.createElement('input', { type: 'text', value: this.state.companypostalcode, onChange: function onChange(e) {
          return _this.setState({ companypostalcode: e.target.value });
        }, placeholder: 'Company Postal Code' }),
      R.createElement('br', null),
      R.createElement('input', { type: 'text', value: this.state.lastname, onChange: function onChange(e) {
          return _this.setState({ lastname: e.target.value });
        }, placeholder: 'Last Name' }),
      R.createElement('br', null),
      R.createElement('input', { type: 'text', value: this.state.firstname, onChange: function onChange(e) {
          return _this.setState({ firstname: e.target.value });
        }, placeholder: 'First Name' }),
      R.createElement('br', null),
      R.createElement('input', { type: 'text', value: this.state.email, onChange: function onChange(e) {
          return _this.setState({ email: e.target.value });
        }, placeholder: 'Email' }),
      R.createElement('br', null),
      R.createElement('input', { type: 'text', value: this.state.phone, onChange: function onChange(e) {
          return _this.setState({ phone: e.target.value });
        }, placeholder: 'Phone Number' }),
      R.createElement('br', null),
      R.createElement('input', { type: 'text', value: this.state.budget, onChange: function onChange(e) {
          return _this.setState({ budget: e.target.value });
        }, placeholder: 'Total Budget' }),
      R.createElement('br', null),
      R.createElement('input', { type: 'text', value: this.state.imgurl, onChange: function onChange(e) {
          return _this.setState({ imgurl: e.target.value });
        }, placeholder: 'img link' }),
      R.createElement('br', null),
      R.createElement('button',{ className: 'btn btn-success', type: 'submit' },'Add'
      ),
      R.createElement('button', { className: 'btn btn-warning', onClick: this.resetForm },'Reset'
      )
    );
  }
});
  
const DisplayRequests = React.createClass({
  getInitialState(){
    return {
      requests : this.props.requests,
      thLastName : this.sortByLastName,
      thBudget : this.sortByBudget

    }
  },
  delete(e){
    let id = e.target.value;
    this.props.deleterequest(id);
  },
  modify(e){
    this.props.modifyrequest(e.target.value);
  },
  render(){
    let requests = this.state.requests.map(request =>{
      return R.createElement(
      	'tr',{ key: request.id },
        R.createElement('td',null,request.companyname),
        R.createElement('td',null,request.companyaddress),
        R.createElement('td',null,request.companycity),
        R.createElement('td',null,request.companystate),
        R.createElement('td',null,request.companypostalcode),
        R.createElement('td',null,request.lastname),
        R.createElement('td',null,request.firstname),
        R.createElement('td',null,request.email),
        R.createElement('td',null,request.phone),
        R.createElement('td',null,request.budget),
        R.createElement('td',null,
          R.createElement('a',{ href: request.imgurl, target: '_blank' },request.imgurl)
      ),
        R.createElement('td',null,
        	R.createElement('button',{ className: 'glyphicon glyphicon-remove', onClick: this.delete, value: request.id }),
          	R.createElement('button',{ className: 'glyphicon glyphicon-pencil', onClick: this.modify, value: request.id })
        )
      );
    });
    return R.createElement('table',null,
      R.createElement('thead', null,
        R.createElement('tr', null,
          R.createElement('th',{ onClick: this.state.thCompanyName },'Company'),
          R.createElement('th',{ onClick: this.state.thCompanyAddress },'Address'),
          R.createElement('th',{ onClick: this.state.thCompanyCity },'City'),
          R.createElement('th',{ onClick: this.state.thCompanyState },'State'),
          R.createElement('th',{ onClick: this.state.thCompanyPostalCode },'Postal Code'),
          R.createElement('th',{ onClick: this.state.thLastName },'Last Name'),
          R.createElement('th',{ onClick: this.state.thFirstName },'First Name'),
          R.createElement('th',{ onClick: this.state.thEmail },'Email'),
          R.createElement('th',{ onClick: this.state.thPhone },'Phone'),
          R.createElement('th',{ onClick: this.state.thBudget },'Total Budget'),
          R.createElement('th',null,'Img'),
          R.createElement('th',null,'Delete'),
        )
      ),
      R.createElement(
        'tbody',null,requests
      )
    );
  }
});

render(
  R.createElement("div", null,
		R.createElement(Root, null)),
  document.getElementById('root')
);