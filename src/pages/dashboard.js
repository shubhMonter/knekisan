import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from "prop-types"
import { enquiryList } from "../redux/actions/enquiryActions"
import SelectListGroup from "../component/common/SelectListGroup";
import { imageUrl } from "../constant"
import classNames from "classnames"
import Editprofile from "../component/editprofile"
import { withTranslation } from 'react-i18next';
const options=[
    {label:"status"},
    {label:"pending",value:"Pending"},
    {label:"approved",value:"Approved"},
    {label:"declined",value:"Declined"}
]
const options1=[
    {label:"quantity"},
    {label:"received",value:true},
    {label:"notreceived",value:false},  
]
const options2=[
    {label:"payment"},
    {label:"received",value:true},
    {label:"notreceived",value:false},  
]

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter:{
                status:"",
                quantityRecievedFlag:Boolean,
                paymentRecievedFlag:Boolean
            },
            key:"",
            tab:0,

        }
    }
    componentDidMount() {
        this.props.enquiryList(this.props.auth.user.id);
    }

    render() {
        const { user } = this.props.auth;
        const {t} =this.props;
        console.log(user.documentsUploaded);
        const { enquiry } = this.props
        return (
            <div className="container">
                <div className="row profile">
                    <div className="col-md-3">
                        <div className="profile-sidebar">

                            <div className="profile-userpic">
                            {user.documentsUploaded != undefined   &&  user.documentsUploaded.length>0 &&  <img src={`${imageUrl}/${user.documentsUploaded[0].replace("public","")}`} className="img-responsive" alt="" />}
                            </div>

                            <div className="profile-usertitle">
                                <div className="profile-usertitle-name">
                                    {user.userName}
                                </div>
                                <div className="profile-usertitle-job">
                                    {user.userType}
                                </div>
                                <div className="profile-usertitle-job inline">
                                    <div style={{ padding: "10px" }}>
                                        <i className="fa fa-map-marker" ></i>
                                    </div>

                                    {user.city},{user.state}
                                </div>
                            </div>

                            {/* <div className="profile-userbuttons">
                                <button type="button" className="btn btn-success btn-sm">Follow</button>
                                <button type="button" className="btn btn-danger btn-sm">Message</button>
                            </div> */}

                            <div className="profile-usermenu">
                                <ul className="nav">
                                    <li className={classNames({'active':this.state.tab==0})}>
                                        <a onClick={(e)=>this.setState({tab:0})}>
                                            <i className="glyphicon glyphicon-home"></i>
                        {t("dashboard:enquiry")}</a>
                                    </li>
                                    <li className={classNames({'active':this.state.tab==1})}>
                                        <a onClick={(e)=>this.setState({tab:1})}>
                                            <i className="glyphicon glyphicon-user"></i>
                                            {t("dashboard:accsetting")} </a>
                                    </li>
                                    {/* <li>
                                        <a href="#" target="_blank">
                                            <i className="glyphicon glyphicon-ok"></i>
                                    Tasks </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="glyphicon glyphicon-flag"></i>
                                    Help </a>
                                    </li> */}
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className={classNames("profile-content",{'none':this.state.tab!=0})}>
                            <div className="row ">
                                <div className="form-inline" >
                                <button type="button" className="btn btn-info filter col-md-2" onClick={(e)=>this.setState({key:""})}>{t("dashboard:all")}</button>   
                                <SelectListGroup
                                        placeholder="Status"
                                        name="status"
                                        value={this.state.filter.status}
                                        onChange={(e)=> this.setState({filter:{status:e.target.value},key:"status"})}
                                        options={options}
                                        //error={errors.userType}
                                        lang="dashboard"
                                        className="filter"
                                    />
                                    <SelectListGroup
                                        placeholder="Qunatity"
                                        name="quantity"
                                        value={this.state.filter.quantityRecievedFlag}
                                        onChange={(e)=>{ let value;
                                            if(e.target.value=="true"){
                                                value=true;
                                            }else{
                                                value=false
                                            }
                                            this.setState({filter:{quantityRecievedFlag:value},key:"quantityRecievedFlag"})
                                        }
                                        }
                                        lang="dashboard"
                                        options={options1}
                                        //error={errors.userType}
                                        lang="dashboard"
                                        className="filter"
                                    />
                                    <SelectListGroup
                                        placeholder="Payment"
                                        name="payment"
                                        value={this.state.filter.paymentRecievedFlag}
                                        onChange={(e)=>{ 
                                            let value;
                                            if(e.target.value=="true"){
                                                value=true;
                                            }else{
                                                value=false
                                            }
                                            this.setState({filter:{paymentRecievedFlag:value},key:"paymentRecievedFlag"})
                                        }}
                                        options={options2}
                                        //error={errors.userType}
                                        lang="dashboard"
                                        className="filter"
                                    />

                                </div>
                            </div>
                             
                            {enquiry && enquiry.filter(f =>{ 
                                if( this.state.key && typeof(this.state.filter[this.state.key])=='string'){ 
                                   
                                  return  f[`${this.state.key}`]
                                    .includes(`${this.state.filter[`${this.state.key}`]}`)
                                }else if(this.state.key && typeof(this.state.filter[this.state.key])=='boolean'){
                                  
                                   if(f[`${this.state.key}`]==this.state.filter[this.state.key]){
                                    return f
                                }
                                }else
                                {
                                   return f
                                }
                            }).map(i => {
                               // console.log("test", i);
                                let img 
                                if(i.product){
                                    img = i.product.images[0].replace('public', '');
                                }
                                
                                return (
                                    <div className="card ">
                                        <div className="row">
                                            <div className="col-sm-4">
                                            { i.product   &&    <img className="d-block w-100" src={`${imageUrl}/${img}`} alt="" />}
                                            </div>
                                            <div className="col-sm-8" style={{ padding: "20px" }}>
                                                <div className="card-block">
                                                   {i.product  && <>  <h4 className="card-title">{i.product.name}</h4>
                                                    <div className="price">₹{i.product.price}
                                                        {/* <span>$20.00</span> */}
                                                    </div> </>}
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6">
                                                            {t("status")}:{i.status}
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 p-sm">
                                                            {t("sack")}:{i.bori}
                                                        </div>
                                                        <div className="col-md-6 col-sm-6">
                                                            {t("quality")}:{i.quality}
                                                        </div><div className="col-md-6 col-sm-6">
                                                            {t("weight")}:{i.weight}
                                                        </div>
                                                        <div className="col-md-6 col-sm-6">
                                                            {t("drivername")}:{i.driver}
                                                        </div><div className="col-md-6 col-sm-6">
                                                            {t("vehno")}:{i.vehicleNo}
                                                        </div>
                                                    </div>

                                                    <a href="#" className="btn btn-primary btn-sm float-right">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })}




                        </div>

                        <div className={classNames("profile-content",{'none':this.state.tab!=1})}>
                            <Editprofile />
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}
Dashboard.propTypes = {
    enquiryList: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    enquiry: state.enquiry.enquiries
})

export default connect(mapStateToProps, { enquiryList })(withTranslation(["enquiry","dashboard"])(Dashboard))