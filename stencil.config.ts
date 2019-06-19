import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";
// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: "src/global/app.scss",
  globalScript: "src/global/app.ts",
  outputTargets: [
    {
      type: "www",
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: "https://web-gradients.netlify.com/"
    }
  ],
  plugins: [sass()]
};