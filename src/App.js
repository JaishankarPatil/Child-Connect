import React, { Component } from "react";
import "./App.css";
import "../src/assets/js/core";
import { Switch, Route } from "react-router-dom";

import Home from "./components/home/home.component";
import Signin from "./components/pages/signin/signin.component";
import Staff from "./pages/staff/staff.component";
import StaffListView from "./components/staff/staff-list-view.component";
import CreateStaff from "./components/staff/staff-create.component";
import StaffUpdate from "./components/staff/staff-update.component";

import Student from "./components/pages/student/student.component";
import Department from "./components/pages/department/department.component";

import Designation from "./components/pages/designation/designation.component";
import Group from "./components/pages/group/group.component";
import AddGroupMember from "./components/add-group-member/add-group-member.component";
import GroupMember from "./components/group-member/group-member.component";
import Standard from "./components/pages/standard/standard.component";
import SubjectUpdate from "./components/subject/subject-update.component";
import DepartmentUpdate from "./components/department/department-update.component";
import DesignationUpdate from "./components/designation/deignation-update.component";
import GroupUpdate from "./components/group/group-update.component";
import CreateHomeWork from "./components/pages/home-work/create-home-work/create-home-work.component";
import ViewHomeWork from "./components/pages/home-work/view-home-work/view-home-work.component";
import StandardUpdate from "./components/standard/standard-update.component";
import StudentUpdate from "./components/student/student-update.component";
import HomeworkContainer from "./components/homework/homework-container.component";
import HomeworkByGroupContainer from "./components/homework-by-group/homework-by-group.component";
import Subject from "./components/pages/subject/subject.component";
import ReplayHomeWork from "./components/pages/home-work/replay-home-work/replay-home-work.component";
import AdminHomeworkListView from "./components/homework/admin-homework-list-view.component";
import HomeworkUpdate from "./components/homework/homework-update.component";
import "./assets/js/core.js";
import "bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/staff" component={Staff} />
          <Route exact path="/staffListView" component={StaffListView} />
          <Route exact path="/createStaff" component={CreateStaff} />
          <Route exact path="/updateStaff/:staffId" component={StaffUpdate} />
          <Route exact path="/department" component={Department} />
          <Route exact path="/student" component={Student} />
          <Route exact path="/student/:studentId" component={StudentUpdate} />
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
          <Route exact path="/replayhomework" component={ReplayHomeWork} />
          <Route
            exact
            path="/updateHomework/:homeworkId"
            component={HomeworkUpdate}
          />
          <Route
            exact
            path="/adminhomeworklistview"
            component={AdminHomeworkListView}
          />
          {/* 
          <Route
            exact
            path="/homework/:subject"
            component={HomeworkContainer}
          />
         */}
          <Route
            exact
            path="/viewhomework/:groupName/:groupId"
            component={HomeworkByGroupContainer}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
