import { t } from "i18next";
import React from "react";
import Mouse from "./Mouse";

function About() {
  return (
    <div>
      <h2>{t("About")}</h2>
      <Mouse
        render={({ x, y }) => (
          <p>
            Mouse Position: {x}, {y}
          </p>
        )}
      />
    </div>
  );
}

export default About;
