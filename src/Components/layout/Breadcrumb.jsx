import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title, links }) => {
  return (
    <div className="breadcrumb-area section-space--half">
      <div className="container wide">
        <div className="row">
          <div className="col-lg-12">
            {/*=======  breadcrumb wrapper  =======*/}
            <div className="breadcrumb-wrapper breadcrumb-bg">
              {/*=======  breadcrumb content  =======*/}
              <div className="breadcrumb-content">
                <h2 className="breadcrumb-content__title">{title}</h2>
                <ul className="breadcrumb-content__page-map">
                  {links.map((link, index) =>
                    link.active ? (
                      <li key={index} className="active">
                        {link.name}
                      </li>
                    ) : (
                      <li key={index}>
                        <Link className="text-decoration-none text-dark" to={link.path}>{link.name}</Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
              {/*=======  End of breadcrumb content  =======*/}
            </div>
            {/*=======  End of breadcrumb wrapper  =======*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
