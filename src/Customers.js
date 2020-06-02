import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import axios from 'axios'
import Pdf from './Resume_16BCE1178.pdf'


export default class Customers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedCustomer: 1
    }
  }
  btnClick() {
    window.open("https://www.linkedin.com/in/mahajan-pranav/");
}

btnClick1() {
  window.open("https://github.com/pranav3798");
}
onResumeClick() {
  window.open(Pdf);
}
state = {
  showMessage: false
}
display = () => {
 this.setState({showMessage: true});
};

  //function which is called the first time the component loads
  componentDidMount() {
    this.getCustomerData();
  }

  //Function to get the Customer Data from json
  getCustomerData() {
    axios.get('assets/samplejson/customerlist.json').then(response => {
      this.setState({customerList: response})
    })
  };

  render() {
    if (!this.state.customerList)
      return (<p>Loading data</p>)
    return (<div className="addmargin">
      <div className="col-md-3">
        {
          this.state.customerList.data.map(customer => <Panel bsStyle="info" key={customer.name} className="centeralign">
            <Panel.Heading>
              <Panel.Title componentClass="h6">Profile</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              {this.state.showMessage && 
              <p>Name: Pranav Mahajan<br/>
                Email: pranavmahajan36@gmail.com<br/>
                Phone: 7550172429<br/>
                College: Vellore Institute of Technology<br/>
                Current Organization: Wipro Ltd.<br/>
                JobProfile: Software Developer</p>}
              <Button bsStyle="info" onClick={this.display}>

                Click to View Details

              </Button>

            </Panel.Body>
          </Panel>)
        }
      </div>
      <div className="col-md-3">
        {
          this.state.customerList.data.map(customer => <Panel bsStyle="info" key={customer.name} className="centeralign">
            <Panel.Heading>
              <Panel.Title componentClass="h6">Linkedin Link</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <Button bsStyle="info" onClick={this.btnClick.bind(this)}>

                Click Here!

              </Button>

            </Panel.Body>
          </Panel>)
        }
      </div>
      <div className="col-md-3">
        {
          this.state.customerList.data.map(customer => <Panel bsStyle="info" key={customer.name} className="centeralign">
            <Panel.Heading>
              <Panel.Title componentClass="h6">View CV</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <Button bsStyle="info" onClick={this.onResumeClick}>

                Click Here!

              </Button>

            </Panel.Body>
          </Panel>)
        }
      </div>
      <div className="col-md-3">
        {
          this.state.customerList.data.map(customer => <Panel bsStyle="info" key={customer.name} className="centeralign">
            <Panel.Heading>
              <Panel.Title componentClass="h6">Github Profile Link</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <Button bsStyle="info" onClick={this.btnClick1.bind(this)}>

                Click Here!

              </Button>

            </Panel.Body>
          </Panel>)
        }
      </div>
    </div>
    )
      }
}
