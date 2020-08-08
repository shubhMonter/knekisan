import React, { Component } from "react"
import classNames from "classnames"
import TextFieldGroup from "./common/TextFieldGroup";
import SelectListGroup from "./common/SelectListGroup";
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux'
import PropTypes from "prop-types"
import {updateUser} from "../redux/actions/authAction"
import {updateImage} from "../services/auth"
import {imageUrl} from "../constant"
const options = [
    { label: "farmer", value: 'farmer' },
    { label: "adatiya", value: 'adatiya' },
    { label: "broker", value: 'broker' }
]
const options1 = [
    { label: "square", value: 'square' },
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
        const {t}= this.props;
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
        <h6 class="">{t("choosepicture")}</h6>
                    </div>
                    <div className="upload-button">
        <button type="button" className="btn btn-primary" onClick={(e)=>this._handleSubmit(e)}>{t("uploadimage")}</button>
                        </div>
                    
                </div>
            <form onSubmit={(e)=>this.onSubmit} className="login-show" style={{display:"block",opacity:"1"}}>
              
               
               
        <h3>{t("dashboard:profile")} {t("dashboard:details")}</h3>
                <SelectListGroup
                    placeholder={t("typeofuser")}
                    name="userType"
                    value={this.state.userType}
                    onChange={this.onChange}
                    options={options}
                    //error={errors.userType}
                    info={t("typeofuser")}
                    required={true}
                    lang="auth"
                />
                <TextFieldGroup
                    placeholder={t("username")}
                    name="userName"
                    value={this.state.userName}
                    onChange={this.onChange}
                    //error={errors.userName}
                    required={true}
                    info={t("username")}
                />
                <TextFieldGroup
                    placeholder={t("mobno")}
                    name="mobile"
                    value={this.state.mobile}
                    onChange={this.onChange}
                    // error={errors.mobile}
                    required={true}
                    info={t("mobno")}
                />
                <TextFieldGroup
                    placeholder={`${t("address")}1`}
                    name="address1"
                    value={this.state.address1}
                    onChange={this.onChange}
                //error={errors.address1}
                    info={`${t("address")}1`}
                />
                <TextFieldGroup
                    placeholder={`${t("address")}2`}
                    name="address2"
                    value={this.state.address2}
                    onChange={this.onChange}
                // error={errors.address2}
                    info={`${t("address")}2`}
                /><TextFieldGroup
                    placeholder={t("city")}
                    name="city"
                    value={this.state.city}
                    onChange={this.onChange}
                    info={t("city")}
                //error={errors.city}
                /><TextFieldGroup
                    placeholder={t("state")}
                    name="state"
                    value={this.state.state}
                    onChange={this.onChange}
                    info={t("state")}
                //error={errors.state}
                />
                <h3>{t("dashboard:land")} {t("dashboard:details")}</h3>
                <TextFieldGroup
                    placeholder={t("landarea")}
                    name="landArea"
                    value={this.state.landArea}
                    onChange={this.onChange}
                    info={t("landarea")}
                // error={errors.landArea}
                />
                <SelectListGroup

                    name="landAreaType"
                    value={this.state.landAreaType}
                    onChange={this.onChange}
                    options={options1}
                    info={t("landareatype")}
                // error={errors.landAreaType}
                lang="auth"
                />
                <button type="button" className="btn btn-primary" onClick={(e) => this.appendInput()}>{t("addcommodity")}</button>


                {this.state.commodity.map((input,i) =>
                    <TextFieldGroup
                        placeholder={t("commodity")}
                        name={input}
                        key={input}
                        value={this.state[input]}
                        onChange={this.onChange}
                        info={`${t("commodity")}-${i}`}
                    //error={errors.commodity}
                    />)}
                <h3>{t("dashboard:bank")} {t("dashboard:details")}</h3>
                <TextFieldGroup
                    placeholder={t("bankname")}
                    name="bank_name"
                    value={this.state.bank_name}
                    onChange={this.onChange}
                    info={t("bankname")}
                    //error={errors.bankName}
                    required={true}
                /><TextFieldGroup
                    placeholder={t("accno")}
                    name="accNumber"
                    value={this.state.accNumber}
                    onChange={this.onChange}
                    info={t("accno")}
                    // error={errors.accNumber}
                    required={true}
                /><TextFieldGroup
                    placeholder={t("ifsccode")}
                    name="ifscCode"
                    value={this.state.ifscCode}
                    onChange={this.onChange}
                    info={t("ifsccode")}
                    //error={errors.ifscCode}
                    required={true}
                /><TextFieldGroup
                    placeholder={t("accholdername")}
                    name="accHolderName"
                    value={this.state.accHolderName}
                    onChange={this.onChange}
                    // error={errors.accHolderName}
                    info={t("accholdername")}
                    required={true}
                />
                <h3> {t("dashboard:identity")} {t("dashboard:card")} {t("dashboard:details")}</h3>
                <TextFieldGroup
                    placeholder={t("aadharno")}
                    name="aadharNumber"
                    value={this.state.aadharNumber}
                    onChange={this.onChange}
                    //error={errors.aadharNumber}
                    required={true}
                    info={t("aadharno")}
                /><TextFieldGroup
                    placeholder={t("pan")}
                    name="pan"
                    value={this.state.pan}
                    onChange={this.onChange}
                    info={t("pan")}
                // error={errors.pan}
                /><TextFieldGroup
                    placeholder={t("papaavati")}
                    name="bookno"
                    value={this.state.bookno}
                    onChange={this.onChange}
                    //error={errors.bookno}
                    required={true}
                    info={t("papaavati")}
                />
                <ul className="row product-info ">
                    <div className="col-md"><button type="submit" className="button btn-primary btn-info-full next-step" onClick={(e) => this.onSubmit(e)} >{t("update")}</button></div>
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

export default connect(mapStateToProps, { updateUser })(withTranslation(["auth","dashboard"])(Editprofile));