import React, { Component } from "react"
import classNames from "classnames"
import TextFieldGroup from "./common/TextFieldGroup";
import SelectListGroup from "./common/SelectListGroup";

import { connect } from 'react-redux'
import PropTypes from "prop-types"
import {updateUser} from "../redux/actions/authAction"
import {updateImage} from "../services/auth"
import {imageUrl} from "../constant"
const options = [
    { label: "Farmer", value: 'Farmer' },
    { label: "Adatiya", value: 'Adatiya' },
    { label: "Broker", value: 'Broker' }
]
const options1 = [
    { label: "class", value: 'class' },
    { label: "acre", value: 'acre' }
]
class Editprofile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userType: options[0].value,
            userName: "",
            password: "",
            mobile: "",
            addressLine1: "",
            addressLine2: "",
            city: "",
            state: "",
            landArea: 0,
            landAreaType: options1[0].value,
            commodity: [],

            bank_name: "",
            accNumber: "",
            ifscCode: "",
            accHolderName: "",

            aadharNumber: "",
            pan: "",
            bookno: "",
            documentsUploaded: [],
            imagePreviewUrl:"",
            errors: ""
        }
       
    }
    

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            console.log(nextProps.errors);
            this.setState({ errors: nextProps.errors.error });
        }
        if(nextProps.auth){
            console.log(nextProps.auth.user);
            const { userType,
                userName,
                password,
                mobile,
                addressLine1,
                addressLine2,
                city,
                commodity,
                state,
                landArea,
                landAreaType,
                bankDetails,
                aadharNumber,
                pan,
                bookno,
                documentsUploaded, } = nextProps.auth.user;
                let split = commodity.split(",");
                let com =split.map((i,index)=>{
                    if(index==0){
                       return i.slice(2,-1);
                    }
                    if(index==split.length-1){
                        return i.slice(1,-2);
                    }
                    return i.slice(1,-1)
                });
                com.map((i,index)=>{
                    var newInput = `commodity-${index}`;
                    this.setState(prevState => ({ commodity: prevState.commodity.concat([newInput]) }));
                    this.setState({[newInput]:i});
                })
              console.log(com);
                this.setState({
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
                bank_name:bankDetails.bank_name,
                accNumber:bankDetails.accNumber,
                ifscCode:bankDetails.ifscCode,
                accHolderName:bankDetails.accHolderName,
                aadharNumber,
                pan,
                bookno,
                documentsUploaded
                });
                console.log(this.state);
        }
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        this.setState({ errors: "" });
    }



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
        const com = this.state.commodity.map(i => { return this.state[i] });
        let commodity = JSON.stringify(com);

        const updateUser = {
            id:this.props.auth.user._id,
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
        this.props.updateUser(updateUser)

    }
    appendInput() {
        var newInput = `commodity-${this.state.commodity.length}`;
        this.setState(prevState => ({ commodity: prevState.commodity.concat([newInput]) }));
    }
    _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
        console.log(file);
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }
      _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
      //  console.log('handle uploading-', this.state.file);
      let formData = new FormData();
      formData.set('file', this.state.file);
      updateImage(this.props.auth.user._id,formData).then(res=>{
          console.log(res);
      }).catch(err=>{
          console.log(err);
      })

      }
    render() {
        console.log(this.state);
        const { errors } = this.state;
        const commodity = this.state.commodity.map(i => { return this.state[i] });
        let com = JSON.stringify(commodity);
        return (<>
             <div class="container">
                    <div class="picture-container ">
                        <div class="picture">
                            <img src={this.state.imagePreviewUrl?this.state.imagePreviewUrl:this.state.documentsUploaded[0] ? `${imageUrl}/${this.state.documentsUploaded[0].replace("public","")}`:"https://lh3.googleusercontent.com/LfmMVU71g-HKXTCP_QWlDOemmWg4Dn1rJjxeEsZKMNaQprgunDTtEuzmcwUBgupKQVTuP0vczT9bH32ywaF7h68mF-osUSBAeM6MxyhvJhG6HKZMTYjgEv3WkWCfLB7czfODidNQPdja99HMb4qhCY1uFS8X0OQOVGeuhdHy8ln7eyr-6MnkCcy64wl6S_S6ep9j7aJIIopZ9wxk7Iqm-gFjmBtg6KJVkBD0IA6BnS-XlIVpbqL5LYi62elCrbDgiaD6Oe8uluucbYeL1i9kgr4c1b_NBSNe6zFwj7vrju4Zdbax-GPHmiuirf2h86eKdRl7A5h8PXGrCDNIYMID-J7_KuHKqaM-I7W5yI00QDpG9x5q5xOQMgCy1bbu3St1paqt9KHrvNS_SCx-QJgBTOIWW6T0DHVlvV_9YF5UZpN7aV5a79xvN1Gdrc7spvSs82v6gta8AJHCgzNSWQw5QUR8EN_-cTPF6S-vifLa2KtRdRAV7q-CQvhMrbBCaEYY73bQcPZFd9XE7HIbHXwXYA=s200-no"} class="picture-src" id="wizardPicturePreview" title="" />
                            <input type="file" id="wizard-picture" class="" onChange={(e)=>this._handleImageChange(e)} />
                        </div>
                        <h6 class="">Choose Picture</h6>
                    </div>
                    <div className="upload-button">
                        <button type="button" className="btn btn-primary" onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
                        </div>
                    
                </div>
            <form onSubmit={(e)=>this.onSubmit} className="login-show" style={{display:"block",opacity:"1"}}>
              
               
               
                <h3>Profile Details</h3>
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
                    info="Username"
                />
                <TextFieldGroup
                    placeholder="Mobile Number"
                    name="mobile"
                    value={this.state.mobile}
                    onChange={this.onChange}
                    // error={errors.mobile}
                    required={true}
                    info="Mobile Number"
                />
                <TextFieldGroup
                    placeholder="Address 1"
                    name="address1"
                    value={this.state.address1}
                    onChange={this.onChange}
                //error={errors.address1}
                    info="Address 1"
                />
                <TextFieldGroup
                    placeholder="Address 2"
                    name="address2"
                    value={this.state.address2}
                    onChange={this.onChange}
                // error={errors.address2}
                    info="Address 2"
                /><TextFieldGroup
                    placeholder="City"
                    name="city"
                    value={this.state.city}
                    onChange={this.onChange}
                    info="City"
                //error={errors.city}
                /><TextFieldGroup
                    placeholder="State"
                    name="state"
                    value={this.state.state}
                    onChange={this.onChange}
                    info="State"
                //error={errors.state}
                />
                <h3>Land Details</h3>
                <TextFieldGroup
                    placeholder="Land Area"
                    name="landArea"
                    value={this.state.landArea}
                    onChange={this.onChange}
                    info="Land Area"
                // error={errors.landArea}
                />
                <SelectListGroup

                    name="landAreaType"
                    value={this.state.landAreaType}
                    onChange={this.onChange}
                    options={options1}
                    info="Land Area Type"
                // error={errors.landAreaType}

                />
                <button type="button" className="btn btn-primary" onClick={(e) => this.appendInput()}>Add Commodity</button>


                {this.state.commodity.map(input =>
                    <TextFieldGroup
                        placeholder="Commodity"
                        name={input}
                        key={input}
                        value={this.state[input]}
                        onChange={this.onChange}
                        info={input}
                    //error={errors.commodity}
                    />)}
                <h3>Bank Details</h3>
                <TextFieldGroup
                    placeholder="Name of Bank"
                    name="bank_name"
                    value={this.state.bank_name}
                    onChange={this.onChange}
                    info="Name of Bank"
                    //error={errors.bankName}
                    required={true}
                /><TextFieldGroup
                    placeholder="Account Number"
                    name="accNumber"
                    value={this.state.accNumber}
                    onChange={this.onChange}
                    info="Account Number"
                    // error={errors.accNumber}
                    required={true}
                /><TextFieldGroup
                    placeholder="ifsc Code"
                    name="ifscCode"
                    value={this.state.ifscCode}
                    onChange={this.onChange}
                    info="IFSC Code"
                    //error={errors.ifscCode}
                    required={true}
                /><TextFieldGroup
                    placeholder="Account Holder Name"
                    name="accHolderName"
                    value={this.state.accHolderName}
                    onChange={this.onChange}
                    // error={errors.accHolderName}
                    info="Account Holder Name"
                    required={true}
                />
                <h3>Id Card Details</h3>
                <TextFieldGroup
                    placeholder="AadharNumber Number"
                    name="aadharNumber"
                    value={this.state.aadharNumber}
                    onChange={this.onChange}
                    //error={errors.aadharNumber}
                    required={true}
                    info="AadharNumber Number"
                /><TextFieldGroup
                    placeholder="PAN Number"
                    name="pan"
                    value={this.state.pan}
                    onChange={this.onChange}
                    info="PAN Number"
                // error={errors.pan}
                /><TextFieldGroup
                    placeholder="Book no"
                    name="bookno"
                    value={this.state.bookno}
                    onChange={this.onChange}
                    //error={errors.bookno}
                    required={true}
                    info="Book Number"
                />
                <ul className="row">


                    <div className="col-md"><button type="submit" className="button btn-primary btn-info-full next-step" onClick={(e) => this.onSubmit(e)} >Submit</button></div>
                </ul>

            </form>
            </>

        )
    }
}
Editprofile.propTypes = {
    updateUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { updateUser })(Editprofile);