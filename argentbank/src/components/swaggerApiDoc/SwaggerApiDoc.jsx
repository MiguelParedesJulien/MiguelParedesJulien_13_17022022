import React from "react";
import "components/swaggerApiDoc/swaggerApiDoc.css";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const SwaggerApiDoc = () => {
  return (
    <main className="apiDoc">
      <SwaggerUI url="apiDoc/swagger.json" />
    </main>
  );
};

export default SwaggerApiDoc;
