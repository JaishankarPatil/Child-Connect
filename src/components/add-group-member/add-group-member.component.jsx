import React, { Component } from "react";
import axios from "axios";
import pick from "../../assets/images/themes/rtl.png";
import Footer from "../footer/footer.component";
import SideBar from "../side-bar/side-bar.component";
import DatePicker from "react-datepicker";

class AddGroupMember extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userArray: [],

      userDetails: {
        firstName: "",
        middleName: "",
        lastName: "",
        dateOfBirth: new Date(),
        gender: "",
        aadharNumber: "",
        panNo: "",
        education: "",
        totalExperience: "",
        mobile: "",
        email: "",
        pfUAN: "",
        fullName: "",
        houseNo: "",
        street: "",
        city: "",
        district: "",
        state: "",
        postalCode: "",
        joiningDate: new Date(),
        jobType: "",
        jobHours: "",
        department: "",
        designation: "",
        relievedDate: new Date(),
        employeeId: "",
        photo: "",
        description: "",
      },
    };
  }

  handelSubmit = (event) => {
    event.preventDefault();
    const { userDetails } = this.state;
    console.log("dataVal", userDetails);
    console.log("dataVal", userDetails.firstName);
  };

  relievedDateUpadte = (date) => {
    let item = { ...this.state.userDetails };
    item["relievedDate"] = date;

    this.setState({ userDetails: item });
  };

  dateOfBirthUpadte = (date) => {
    let item = { ...this.state.userDetails };
    item["dateOfBirth"] = date;

    this.setState({ userDetails: item });
  };

  joiningDateUpadte = (date) => {
    let item = { ...this.state.userDetails };
    item["joiningDate"] = date;

    this.setState({ userDetails: item });
  };

  changeHandler = (event) => {
    const { value, name } = event.target;

    console.log("name", name);
    console.log("value", value);

    let item = { ...this.state.userDetails };
    item[name] = value;

    console.log("item", item);

    this.setState({ userDetails: item });
  };

  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        this.setState({ userArray: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { userArray } = this.state;
    const { userDetails } = this.state;
    return (
      <div className="font-muli theme-cyan gradient">
        <div id="main_content">
          <SideBar />
          <div className="page">
            <div className="section-body">
              <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center ">
                  <div className="header-action">
                    <h1 className="page-title">ADD GROUP MEMBERS</h1>
                    <ol className="breadcrumb page-breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">Child-Connect</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        ADD GROUP MEMBERS
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-body mt-4">
              <div className="container-fluid">
                <div className="tab-content">
                  <div className="tab-pane active" id="Staff-all">
                    <div className="card">
                      <div className="table-responsive">
                        <table className="table table-hover table-vcenter text-nowrap table-striped mb-0">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Name</th>
                              <th>Number</th>
                              <th>Designation</th>
                              <th>Email</th>
                              <th>Joining Date</th>
                              <th></th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {userArray.length
                              ? userArray.map((user) => (
                                  <tr key={user.id}>
                                    <td className="w60">
                                      <input type="checkBox"></input>
                                    </td>
                                    <td>
                                      <div className="font-15">{user.name}</div>
                                    </td>
                                    <td>
                                      <span>{user.address.zipcode}</span>
                                    </td>
                                    <td>
                                      <span className="text-muted">
                                        {user.username}
                                      </span>
                                    </td>
                                    <td>{user.email}</td>
                                    <td>
                                      <strong>{user.address.city}</strong>
                                    </td>
                                    <td>
                                      <span className="tag tag-success">
                                        Full-time
                                      </span>
                                    </td>
                                    <td>
                                      <button
                                        type="button"
                                        className="btn btn-icon btn-sm"
                                        title="View"
                                      >
                                        <i className="fa fa-eye"></i>
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-icon btn-sm"
                                        title="Edit"
                                      >
                                        <i className="fa fa-edit"></i>
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-icon btn-sm js-sweetalert"
                                        title="Delete"
                                        data-type="confirm"
                                      >
                                        <i className="fa fa-trash-o text-danger"></i>
                                      </button>
                                    </td>
                                  </tr>
                                ))
                              : null}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <button type="submit" className="btn btn-primary">
                        Add To Group
                      </button>
                      <button
                        type="submit"
                        className="btn btn-outline-secondary"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default AddGroupMember;
