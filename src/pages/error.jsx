/* Default 404 error page for the Ghosty Website
By: Mushfiqur Rahamn Abir
Date: 15/8/22
 */

import React from "react";
import "../styles/scss/error.scss";

export default function Error() {
  return (
    <>
      <div className="row error-container">
        <div className="col text-center ">
          <h1>404 Not Found</h1>
          <p>
            Ooops ! It looks like the page you are looking for has not been
            created yet
          </p>
        </div>
      </div>
    </>
  );
}
