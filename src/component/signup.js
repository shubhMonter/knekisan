import React, { Component } from "react"
import classNames from "classnames"
import TextFieldGroup from "./common/TextFieldGroup";
import SelectListGroup from "./common/SelectListGroup";
import {regUser} from "../redux/actions/authAction"
import {connect} from 'react-redux'
import PropTypes from "prop-types"
const options = [
    { label: "Farmer", value: 'Farmer' },
    { label: "Adatiya", value: 'Adatiya' },
    { label: "Broker", value: 'Broker' }
]
const options1 = [
    { label: "class", value: 'class' },
    { label: "acre", value: 'acre' }
]
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1,
            userType:options[0].value,
            userName: "",
            password: "",
            mobile: "",
            addressLine1: "",
            addressLine2: "",
            city: "",
            state: "",
            landArea: 0,
            landAreaType: options1[0].value,
            commodity: "",

            bankName: "",
            accountNo: "",
            IFSCCode: "",
            accountHolderName: "",

            adharCard: "",
            panCard: "",
            bookno: "",
            documentsUploaded: [],
            errors:""
        }
        this.nextForm = this.nextForm.bind(this);
    }
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
          this.props.history.push('/dashboard');
        }
      }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            console.log(nextProps.errors);
            this.setState({ errors: nextProps.errors.error});
        }
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    nextForm = () => { this.setState({ current: this.state.current + 1 }) }
    prevForm = () => { this.setState({ current: this.state.current - 1 }) }

    onSubmit=(e)=>{
        e.preventDefault();
        const {userType,
        userName,
        password,
        mobile,
        addressLine1,
        addressLine2,
        city,
        state,
        landArea,
        landAreaType,
        commodity,
        bankName,
        accountNo,
        IFSCCode,
        accountHolderName,
        adharCard,
        panCard,
        bookno,
        documentsUploaded,}=this.state;
        const newUser={
            userType,
        userName,
        password,
        mobile,
        addressLine1,
        addressLine2,
        city,
        state,
        landArea,
        landAreaType,
        commodity,
        bankDetails:{
            bankName,
            accountNo,
            IFSCCode,
            accountHolderName,
        },
        adharCard,
        panCard,
        bookno,
        documentsUploaded
        };
        this.props.regUser(newUser);
      
    }


    render() {
            console.log(this.props);
        const { errors, current } = this.state;
        return (
            <div className="register-show">
                <div className="wizard">{errors && <div className="alert alert-danger text-center" style={{display:"block",fontSize:"15px"}}>{errors}</div>}
                
                    <div className="wizard-inner">
                    
                        <div className="connecting-line"></div>
                        <ul className="nav nav-tabs" role="tablist">

                            <li role="presentation" className={classNames({ active: current == 1 }, { disabled: current != 1 })} >
                                <a  role="tab" title="Step 1">
                                    <span className="round-tab">
                                        <i className="fa fa-user main"></i>
                                    </span>
                                </a>
                            </li>

                            <li role="presentation" className={classNames({ active: current == 2 }, { disabled: current != 2 })} >
                                <a role="tab" title="Step 2">
                                    <span className="round-tab">
                                    <i className="fa fa-globe"></i>
                                    </span>
                                </a>
                            </li>
                            <li role="presentation" className={classNames({ active: current == 3 }, { disabled: current != 3 })} >
                                <a  role="tab" title="Step 3">
                                    <span className="round-tab">
                                        <i className="fa fa-university main"></i>
                                    </span>
                                </a>
                            </li>

                            <li role="presentation" className={classNames({ active: current == 4 }, { disabled: current != 4 })}>
                                <a role="tab" title="Complete">
                                    <span className="round-tab">
                                        <i className="fa fa-id-card"></i>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <form role="form" onSubmit={this.onSubmit}>
                        <div className="tab-content">
                            <div className={classNames("tab-pane", { active: current == 1 })} role="tabpanel" id="step1" >
                                <div style={{ height: "300px", overflowY: "auto" }}>
                                    <SelectListGroup
                                        placeholder="Type of User"
                                        name="userType"
                                        value={this.state.userType}
                                        onChange={this.onChange}
                                        options={options}
                                        //error={errors.userType}
                                        info="Type of User"
                                    />
                                    <TextFieldGroup
                                        placeholder="UserName"
                                        name="userName"
                                        value={this.state.userName}
                                        onChange={this.onChange}
                                        //error={errors.userName}
                                    /><TextFieldGroup
                                        placeholder="Password"
                                        name="password"
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                       // error={errors.password}
                                    />
                                    <TextFieldGroup
                                        placeholder="Mobile Number"
                                        name="mobile"
                                        value={this.state.mobile}
                                        onChange={this.onChange}
                                       // error={errors.mobile}
                                    />
                                    <TextFieldGroup
                                        placeholder="Address 1"
                                        name="address1"
                                        value={this.state.address1}
                                        onChange={this.onChange}
                                        //error={errors.address1}
                                    />
                                    <TextFieldGroup
                                        placeholder="Address 2"
                                        name="address2"
                                        value={this.state.address2}
                                        onChange={this.onChange}
                                       // error={errors.address2}
                                    /><TextFieldGroup
                                        placeholder="City"
                                        name="city"
                                        value={this.state.city}
                                        onChange={this.onChange}
                                        //error={errors.city}
                                    /><TextFieldGroup
                                        placeholder="State"
                                        name="state"
                                        value={this.state.state}
                                        onChange={this.onChange}
                                        //error={errors.state}
                                    />
                                </div>
                                <ul className="list-inline text-center">
                                    <li><button type="button" className="button next-step" onClick={(e) => this.nextForm()}>Next</button></li>
                                </ul>
                            </div>
                            <div className={classNames("tab-pane", { active: current == 2 })} role="tabpanel" id="step2" >

                                <TextFieldGroup
                                    placeholder="Land Area"
                                    name="landArea"
                                    value={this.state.landArea}
                                    onChange={this.onChange}
                                   // error={errors.landArea}
                                />
                                <SelectListGroup

                                    name="landAreaType"
                                    value={this.state.landAreaType}
                                    onChange={this.onChange}
                                    options={options1}
                                   // error={errors.landAreaType}

                                />
                                <TextFieldGroup
                                    placeholder="Commodity"
                                    name="commodity"
                                    value={this.state.commodity}
                                    onChange={this.onChange}
                                    //error={errors.commodity}
                                />
                                <ul className="row">
                                    <div className="col-md"><button type="button" className="button btn-default prev-step" onClick={(e) => this.prevForm()}>Previous</button></div>
                                    <div className="col-md"><button type="button" className="button next-step" onClick={(e) => this.nextForm()}>Next</button></div>
                                </ul>
                            </div>
                            <div className={classNames("tab-pane", { active: current == 3 })} role="tabpanel" id="step3" >
                                <TextFieldGroup
                                    placeholder="Name of Bank"
                                    name="bankName"
                                    value={this.state.bankName}
                                    onChange={this.onChange}
                                    //error={errors.bankName}
                                /><TextFieldGroup
                                    placeholder="Account Number"
                                    name="accountNo"
                                    value={this.state.accountNo}
                                    onChange={this.onChange}
                                   // error={errors.accountNo}
                                /><TextFieldGroup
                                    placeholder="IFSC Code"
                                    name="IFSCCode"
                                    value={this.state.IFSCCode}
                                    onChange={this.onChange}
                                    //error={errors.IFSCCode}
                                /><TextFieldGroup
                                    placeholder="Account Holder Name"
                                    name="accountHolderName"
                                    value={this.state.accountHolderName}
                                    onChange={this.onChange}
                                   // error={errors.accountHolderName}
                                />
                                <ul className="row">
                                    <div className="col-md"><button type="button" className="button btn-default prev-step" onClick={(e) => this.prevForm()}>Previous</button></div>
                                    <div className="col-md"><button type="button" className="button btn-default next-step" onClick={(e) => this.nextForm()} >Skip</button></div>
                                    <div className="col-md"><button type="button" className="button btn-primary btn-info-full next-step" onClick={(e) => this.nextForm()}>Next</button></div>
                                </ul>
                            </div>
                            <div className={classNames("tab-pane", { active: current == 4 })} role="tabpanel" id="complete" >
                                <TextFieldGroup
                                    placeholder="AdharCard Number"
                                    name="adharCard"
                                    value={this.state.adharCard}
                                    onChange={this.onChange}
                                    //error={errors.adharCard}
                                /><TextFieldGroup
                                    placeholder="PANCard Number"
                                    name="panCard"
                                    value={this.state.panCard}
                                    onChange={this.onChange}
                                   // error={errors.panCard}
                                /><TextFieldGroup
                                    placeholder="Book no"
                                    name="bookno"
                                    value={this.state.bookno}
                                    onChange={this.onChange}
                                    //error={errors.bookno}
                                />
                                <ul className="row">
                                    <div className="col-md"><button type="button" className="button btn-default prev-step" onClick={(e) => this.prevForm()}>Previous</button></div>
            
                                    <div className="col-md"><button type="submit" className="button btn-primary btn-info-full next-step" onClick={(e) => this.onSubmit(e)} >Submit</button></div>
                                </ul>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </form>
                </div>
            </div>
            )
    }
}
SignUp.propTypes = {
    regUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
const mapStateToProps =(state) => ({
    auth: state.auth,
    errors: state.errors
  });

export default connect(mapStateToProps, {regUser})(SignUp);