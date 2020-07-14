import React, { Component } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import Home from "./components/home/home.component";
import Signin from "./components/pages/signin/signin.component";
import Staff from "./components/pages/staff/staff.component";
import Student from "./components/pages/student/student.component";
import Department from "./components/pages/department/department.component";

import Designation from "./components/pages/designation/designation.component";
import Group from "./components/pages/group/group.component";
import AddGroupMember from "./components/add-group-member/add-group-member.component";
import GroupMember from "./components/group-member/group-member.component";
import Standard from "./components/pages/standard/standard.component";
import EditStaff from "./components/edit-staff/edit-staff.component";
import SubjectUpdate from "./components/subject/subject-update.component";
import DepartmentUpdate from "./components/department/department-update.component";
import DesignationUpdate from "./components/designation/deignation-update.component";
import GroupUpdate from "./components/group/group-update.component";
import CreateHomeWork from "./components/pages/home-work/create-home-work/create-home-work.component";
import ViewHomeWork from "./components/pages/home-work/view-home-work/view-home-work.component";
import StandardUpdate from "./components/standard/standard-update.component";
import StudentUpdate from "./components/student/student-update.component";

import Subject from "./components/pages/subject/subject.component";
import "./assets/js/core.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/staff" component={Staff} />
          <Route path="/staff/:id" component={EditStaff} />
          <Route exact path="/student" component={Student} />
          <Route exact path="/student/:studentId" component={StudentUpdate} />
          <Route exact path="/department" component={Department} />
          <Route
            exact
            path="/department/:departmentId"
            component={DepartmentUpdate}
          />
          <Route exact path="/designation" component={Designation} />
          <Route
            exact
            path="/designation/:designationId"
            component={DesignationUpdate}
          />
          <Route exact path="/subject" component={Subject} />
          <Route exact path="/subject/:subjectId" component={SubjectUpdate} />
          <Route exact path="/group" component={Group} />
          <Route exact path="/group/:groupId" component={GroupUpdate} />
          <Route exact path="/addgroupmember" component={AddGroupMember} />
          <Route exact path="/groupmember" component={GroupMember} />
          <Route exact path="/standard" component={Standard} />
          <Route
            exact
            path="/standard/:standardId"
            component={StandardUpdate}
          />
          <Route exact path="/createhomework" component={CreateHomeWork} />
          <Route exact path="/viewhomework" component={ViewHomeWork} />
        </Switch>
      </div>
    );
  }
}

export default App;
