import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from "prop-types"
import { enquiryList } from "../redux/actions/enquiryActions"
import { imageUrl } from "../constant"
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        this.props.enquiryList(this.props.auth.user.id);
    }

    render() {
        console.log(this.props);
        const { user } = this.props.auth;
        const { enquiry } = this.props
        console.log(user);


        return (
            <div class="container">
                <div class="row profile">
                    <div class="col-md-3">
                        <div class="profile-sidebar">

                            <div class="profile-userpic">
                                <img src="http://keenthemes.com/preview/metronic/theme/assets/admin/pages/media/profile/profile_user.jpg" class="img-responsive" alt="" />
                            </div>

                            <div class="profile-usertitle">
                                <div class="profile-usertitle-name">
                                    {user.userName}
                                </div>
                                <div class="profile-usertitle-job">
                                    {user.userType}
                                </div>
                                <div class="profile-usertitle-job inline">
                                    <div style={{ padding: "10px" }}>
                                        <i className="fa fa-map-marker" ></i>
                                    </div>

                                    {user.city},{user.state}
                                </div>
                            </div>

                            {/* <div class="profile-userbuttons">
                                <button type="button" class="btn btn-success btn-sm">Follow</button>
                                <button type="button" class="btn btn-danger btn-sm">Message</button>
                            </div> */}

                            <div class="profile-usermenu">
                                <ul class="nav">
                                    <li class="active">
                                        <a href="#">
                                            <i class="glyphicon glyphicon-home"></i>
                                   Enquiry </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="glyphicon glyphicon-user"></i>
                                    Account Settings </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i class="glyphicon glyphicon-ok"></i>
                                    Tasks </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="glyphicon glyphicon-flag"></i>
                                    Help </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="profile-content">
                            {enquiry && enquiry.map(i => {
                                console.log("test", i);
                                let img 
                                if(i.product){
                                    img = i.product.images[0].replace('public', '');
                                }
                                
                                return (
                                    <div class="card ">
                                        <div class="row">
                                            <div class="col-sm-4">
                                            { i.product   &&    <img class="d-block w-100" src={`${imageUrl}/${img}`} alt="" />}
                                            </div>
                                            <div class="col-sm-8" style={{ padding: "20px" }}>
                                                <div class="card-block">
                                                   {i.product  && <>  <h4 class="card-title">{i.product.name}</h4>
                                                    <div className="price">₹{i.product.price}
                                                        {/* <span>$20.00</span> */}
                                                    </div> </>}
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6">
                                                            status:{i.status}
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 p-sm">
                                                            bori:{i.bori}
                                                        </div>
                                                        <div className="col-md-6 col-sm-6">
                                                            quality:{i.quality}
                                                        </div><div className="col-md-6 col-sm-6">
                                                            weight:{i.weight}
                                                        </div>
                                                        <div className="col-md-6 col-sm-6">
                                                            driver:{i.driver}
                                                        </div><div className="col-md-6 col-sm-6">
                                                            vehicle Number:{i.vehicleNo}
                                                        </div>
                                                    </div>

                                                    <a href="#" class="btn btn-primary btn-sm float-right">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })}




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

export default connect(mapStateToProps, { enquiryList })(Dashboard)