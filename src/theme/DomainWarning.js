// Copyright © 2022 Ory Corp

import React from "react"

const DomainWarning = ({ severity = "info" }) => (
  <div className={`admonition admonition-warning alert alert--${severity}`}>
    <div className="admonition-heading">
      <h5>
        <span className="admonition-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="16"
            viewBox="0 0 12 16"
          >
            <path
              fillRule="evenodd"
              d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"
            ></path>
          </svg>
        </span>
        severity
      </h5>
    </div>
    <div className="admonition-content">
      <p>
        Ory Kratos and your UI must be on the hosted on same top level domain!
        You can not host Ory Kratos and your UI on separate top level domains:
      </p>
      <ul>
        <li>
          <code>kratos.bar.com</code> and <code>ui.bar.com</code> will work;
        </li>
        <li>
          <code>kratos.bar.com</code> and <code>bar.com</code> will work;
        </li>
        <li>
          <code>kratos.bar.com</code> and <code>not-ar.com</code> will not work.
        </li>
      </ul>
    </div>
  </div>
)

export default DomainWarning
