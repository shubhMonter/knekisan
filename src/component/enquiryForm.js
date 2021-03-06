import React, { Component } from "react"
import TextFieldGroup from "./common/TextFieldGroup";
import SelectListGroup from "./common/SelectListGroup";
import { CreateEnquiry } from "../services/enquiry";
import { connect } from 'react-redux'
import PropTypes from "prop-types"
import { withTranslation } from 'react-i18next';
class EnquiryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bori: "",
      weight: "",
      veihcleNo: "",
      driver: "",
      notes: "",
      quality: "",
      center:"",
      price:"",
      options:[],
      errors: "",
      success: "",
    }
  }

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      window.location.href = '/auth';
    }
    const options =this.props.priceBycenters.map(x=>x.center)
    this.setState({options,center:options[0]});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onSubmit(e) {
    e.preventDefault();
    let formData = {
      bori: this.state.bori,
      weight: this.state.weight,
      vehicleNo: this.state.vehicleNo,
      driver: this.state.driver,
      notes: this.state.notes,
      quality: this.state.quality,
      product: this.props.product,
      price: this.props.price,
      center: this.props.center,
      customer: this.props.auth.user.id
    }
    console.log(formData);
    CreateEnquiry(formData).then(res => {
      if (res.data.status && res.data.data) {
        this.setState({ success: "Your Request has been send" });
      }
    }).catch(err => {
      console.log({ err });
      this.setState({ errors: "Something went Wrong" });
    });
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { t } = this.props;
    const { errors, success } = this.state;
    console.log(this.state.center);
    console.log()
   
    return (
      <div className="product-info text-center">
        {errors && <div className="alert alert-danger" style={{ display: "block", fontSize: "15px" }}>{errors}</div>}
        {success && <div className="alert alert-success" style={{ display: "block", fontSize: "15px" }}>{success}</div>}
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="row">
            <div className="col" style={{padding:"30px"}}> <label>{t("center")}:</label></div>
            <div className="col"> 
   
            <SelectListGroup
            placeholder="center"
            name="center"
            value={this.state.center}
            onChange={(e) => 
              this.setState({ center: e.target.value})
            
            }
            options={this.state.options.map(x=>{return {label:x,value:x}})}
            //error={errors.userType}
            lang="dashboard"
            className="filter"
          /></div>
            <div className="col " style={{padding:"30px"}}>₹{this.props.priceBycenters.filter(f=> {if(f.center == this.state.center){ return f}}).map(x=>x.price)}</div>
          </div>
          
          <TextFieldGroup
            placeholder={t("sack")}
            className="bori"
            name="bori"
            type="text"
            value={this.state.bori}
            onChange={this.onChange}
            // error={errors.bori}
            required={true}
          />

          <TextFieldGroup
            placeholder={t("weight")}
            className="weight"
            name="weight"
            type="weight"
            value={this.state.weight}
            onChange={this.onChange}
            // error={errors.weight}
            required={true}
          /> <TextFieldGroup
            placeholder={t("vehno")}
            className="veh"
            name="vehicleNo"
            type="vehicleNo"
            value={this.state.vehicleNo}
            onChange={this.onChange}
            //  error={errors.vehicleNo}
            required={true}
          /> <TextFieldGroup
            placeholder={t("drivername")}
            className="driver"
            name="driver"
            type="driver"
            value={this.state.driver}
            onChange={this.onChange}
          // error={errors.driver}
          /> <TextFieldGroup
            placeholder={t("note")}
            className="notes"
            name="notes"
            type="notes"
            value={this.state.notes}
            onChange={this.onChange}
            // error={errors.notes}
            required={true}
          /><TextFieldGroup
            placeholder={t("quality")}
            className="quality"
            name="quality"
            type="quality"
            value={this.state.quality}
            onChange={this.onChange}
          // error={errors.quality}

          />
          <button type="submit" className="button">{t("sendenquiry")}</button>
        </form>
      </div>)
  }
}
EnquiryForm.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps)(withTranslation("enquiry")(EnquiryForm));
