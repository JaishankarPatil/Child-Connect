import React from "react";
import { Link } from "react-router-dom";
const CustomeListView = ({ dataList, group }) => {
  console.log("group", group);

  return (
    <div className="tab-pane active" id="Staff-all">
      <div className="card">
        <div className="table-responsive">
          <table className="table table-hover table-vcenter text-nowrap table-striped mb-0">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Created On</th>
                <th>Created By</th>
                <th>Description</th>
                <th>Actons</th>
              </tr>
            </thead>
            <tbody>
              {dataList.length
                ? dataList.map((data) => (
                    <tr key={data.id}>
                      <td className="w60">
                        <div
                          className="avatar avatar-pink"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Avatar Name"
                        >
                          <span>{data.id}</span>
                        </div>
                      </td>
                      <td>
                        {!group ? (
                          <span>{data.name}</span>
                        ) : (
                          <Link to="/groupmember">
                            {" "}
                            <span>{data.name}</span>
                          </Link>
                        )}
                      </td>
                      <td>
                        <span>{data.createdOn}</span>
                      </td>
                      <td>
                        <span>{data.createdBy}</span>
                      </td>
                      <td>
                        <span>{data.description}</span>
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
    </div>
  );
};

export default CustomeListView;
