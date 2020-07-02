import React from "react";

const Navigation = ({ pageTitle, navigationItems }) => {
  const { listView, gridView, profile, add } = navigationItems;

  return (
    <div className="section-body">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center ">
          <div className="header-action">
            <h1 className="page-title">{pageTitle}</h1>
            <ol className="breadcrumb page-breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Child-Connect</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {pageTitle}
              </li>
            </ol>
          </div>
          {Object.getOwnPropertyNames(navigationItems).length > 0 ? (
            <ul className="nav nav-tabs page-header-tab">
              {listView ? (
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#Staff-all"
                  >
                    {listView}
                  </a>
                </li>
              ) : null}

              {gridView ? (
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#Staff-grid">
                    {gridView}
                  </a>
                </li>
              ) : null}

              {profile ? (
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#Staff-profile"
                  >
                    {profile}
                  </a>
                </li>
              ) : null}

              {add ? (
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#Staff-add">
                    {add}
                  </a>
                </li>
              ) : null}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
