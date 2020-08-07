import React, { Component } from "react"
import classNames from "classnames"
import TextFieldGroup from "./common/TextFieldGroup";
import SelectListGroup from "./common/SelectListGroup";
import { regUser } from "../redux/actions/authAction"
import { connect } from 'react-redux'
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
            userType: options[0].value,
            userName: "",
            password: "",
            mobile: "",
            addressLine1: "",
            addressLine2: "",
            city: "",
            state: "",
            landArea: Number,
            landAreaType: options1[0].value,
            commodity: ['commodity-0'],

            bank_name: "",
            accNumber: "",
            ifscCode: "",
            accHolderName: "",

            aadharNumber: "",
            pan: "",
            bookno: "",
            documentsUploaded: [],
            errors: ""
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
            this.setState({ errors: nextProps.errors.error });
        }
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        this.setState({errors:""});
    }
    nextForm = () => {
        let applyForm = document.getElementById("register");
        console.log({applyForm});
        if (this.state.current == 1) {
            // Validation.validate(document.getElementsByName('userType'));
           
           
            if (!this.state.userName) {
                this.setState({ errors: `${applyForm[1].validationMessage} ${applyForm[1].name}` })
            } else if (!this.state.password) {
                this.setState({ errors: `${applyForm[2].validationMessage} ${applyForm[2].name}` })
            } else if (!this.state.mobile) {
                this.setState({ errors: `${applyForm[3].validationMessage} ${applyForm[3].name}` })
            }else {
                this.setState({ current: this.state.current + 1 })
                this.setState({errors:""})
            }
        }
        if(this.state.current==2){
            this.setState({ current: this.state.current + 1 })
                this.setState({errors:""})
        }
        if(this.state.current==3){
            if (!this.state.accNumber) {
                this.setState({ errors: `${applyForm[15].validationMessage} ${applyForm[15].name}` })
            } else if (!this.state.ifscCode) {
                this.setState({ errors: `${applyForm[16].validationMessage} ${applyForm[16].name}` })
            } else if (!this.state.accHolderName) {
                this.setState({ errors: `${applyForm[17].validationMessage} ${applyForm[17].name}` })
            }else {
                this.setState({ current: this.state.current + 1 })
                this.setState({errors:""})
            }
        }
        if(this.state.current==4){
            if (!this.state.aadharNumber) {
                this.setState({ errors: `${applyForm[21].validationMessage} ${applyForm[21].name}` })
            } else if (!this.state.pan) {
                this.setState({ errors: `${applyForm[22].validationMessage} ${applyForm[22].name}` })
            } else {
                this.setState({ current: this.state.current + 1 })
                this.setState({errors:""})
            }
        }
        // this.setState({ current: this.state.current + 1 })

    }
    prevForm = () => { this.setState({ current: this.state.current - 1 }) }

    onSubmit = (e) => {
        e.preventDefault();
        const { userType,
            userName,
            password,
            mobile,
            addressLine1,
            addressLine2,
            city,
            state,
            landArea,
            landAreaType,
            bank_name,
            accNumber,
            ifscCode,
            accHolderName,
            aadharNumber,
            pan,
            bookno,
            documentsUploaded, } = this.state;
            const com = this.state.commodity.map(i=> {return this.state[i]});
            let commodity =JSON.stringify(com);

        const newUser = {
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
            bankDetails: {
                bank_name,
                accNumber,
                ifscCode,
                accHolderName,
            },
            aadharNumber,
            pan,
            bookno,
            documentsUploaded
        };
        this.props.regUser(newUser);

    }
    appendInput() {
        var newInput = `commodity-${this.state.commodity.length}`;
        this.setState(prevState => ({ commodity: prevState.commodity.concat([newInput]) }));
    }

    render() {
        console.log(this.state);
        const { errors, current } = this.state;
        const commodity = this.state.commodity.map(i=> {return this.state[i]});
          let com = JSON.stringify(commodity);
          console.log(com);
        return (
            <div className="register-show">
                <div className="wizard">{errors && <div className="alert alert-danger text-center" style={{ display: "block", fontSize: "15px",marginTop: "-75px" }}>{errors}</div>}

                    <div className="wizard-inner">

                        <div className="connecting-line"></div>
                        <ul className="nav nav-tabs" role="tablist">

                            <li role="presentation" className={classNames({ active: current == 1 }, { disabled: current != 1 })} >
                                <a role="tab" title="Step 1">
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
                                <a role="tab" title="Step 3">
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

                    <form role="form" id="register" onSubmit={this.onSubmit}>
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
                                        required={true}
                                    />
                                    <TextFieldGroup
                                        placeholder="UserName"
                                        name="userName"
                                        value={this.state.userName}
                                        onChange={this.onChange}
                                        //error={errors.userName}
                                        required={true}
                                    /><TextFieldGroup
                                        placeholder="Password"
                                        name="password"
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                        // error={errors.password}
                                        required={true}
                                    />
                                    <TextFieldGroup
                                        placeholder="Mobile Number"
                                        name="mobile"
                                        value={this.state.mobile}
                                        onChange={this.onChange}
                                        // error={errors.mobile}
                                        required={true}
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
                                <ul className="list-inline text-center" style={{marginTop:"30px"}}>
                                    <li><button type="button" className="button next-step" onClick={(e) => this.nextForm()}>Next</button></li>
                                </ul>
                            </div>
                            <div className={classNames("tab-pane", { active: current == 2 })} role="tabpanel" id="step2" >
                                <div style={{ height: "300px", overflowY: "auto" }}>
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
                                <button type="button" className="button btn-default" onClick={(e) => this.appendInput() }>Add Commodity</button>
                                

                                {this.state.commodity.map(input => 
                                <TextFieldGroup
                                placeholder="Commodity"
                                name={input}
                                key={input}
                                value={this.state.commodity[input]}
                                onChange={this.onChange}
                            //error={errors.commodity}
                            />)}
                            </div>
                                <ul className="row">
                                    <div className="col-md"><button type="button" className="button btn-default prev-step" onClick={(e) => this.prevForm()}>Previous</button></div>
                                    <div className="col-md"><button type="button" className="button next-step" onClick={(e) => this.nextForm()}>Next</button></div>
                                </ul>
                            </div>
                            <div className={classNames("tab-pane", { active: current == 3 })} role="tabpanel" id="step3" >
                                <TextFieldGroup
                                    placeholder="Name of Bank"
                                    name="bank_name"
                                    value={this.state.bank_name}
                                    onChange={this.onChange}
                                    //error={errors.bank_name}
                                    required={true}
                                /><TextFieldGroup
                                    placeholder="Account Number"
                                    name="accNumber"
                                    value={this.state.accNumber}
                                    onChange={this.onChange}
                                    // error={errors.accNumber}
                                    required={true}
                                /><TextFieldGroup
                                    placeholder="ifsc Code"
                                    name="ifscCode"
                                    value={this.state.ifscCode}
                                    onChange={this.onChange}
                                    //error={errors.ifscCode}
                                    required={true}
                                /><TextFieldGroup
                                    placeholder="Account Holder Name"
                                    name="accHolderName"
                                    value={this.state.accHolderName}
                                    onChange={this.onChange}
                                    // error={errors.accHolderName}
                                    required={true}
                                />
                                <ul className="row">
                                    <div className="col-md"><button type="button" className="button btn-default prev-step" onClick={(e) => this.prevForm()}>Previous</button></div>
                        
                                    <div className="col-md"><button type="button" className="button btn-primary btn-info-full next-step" onClick={(e) => this.nextForm()}>Next</button></div>
                                </ul>
                            </div>
                            <div className={classNames("tab-pane", { active: current == 4 })} role="tabpanel" id="complete" >
                                <TextFieldGroup
                                    placeholder="AadharNumber Number"
                                    name="aadharNumber"
                                    value={this.state.aadharNumber}
                                    onChange={this.onChange}
                                    //error={errors.aadharNumber}
                                    required={true}
                                /><TextFieldGroup
                                    placeholder="PAN Number"
                                    name="pan"
                                    value={this.state.pan}
                                    onChange={this.onChange}
                                // error={errors.pan}
                                /><TextFieldGroup
                                    placeholder="Book no"
                                    name="bookno"
                                    value={this.state.bookno}
                                    onChange={this.onChange}
                                    //error={errors.bookno}
                                    required={true}
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
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { regUser })(SignUp);