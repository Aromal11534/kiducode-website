import express from "express";
import helmet from "helmet";
import compression from "compression";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, isAbsolute, join, relative, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const defaultDistDir = join(__dirname, "dist");

export function createApp(distDir = defaultDistDir) {
  const app = express();
  
  app.use(helmet());
  app.use(compression());

  const resolvedDistDir = resolve(distDir);

  // Files and generated HTML routes are handled separately so canonical URLs
  // never acquire a trailing slash.
  app.use(express.static(resolvedDistDir, { index: false, redirect: false }));

  app.use((req, res, next) => {
    if (req.method !== "GET" && req.method !== "HEAD") return next();

    if (req.path !== "/" && req.path.endsWith("/")) {
      const queryIndex = req.originalUrl.indexOf("?");
      const query = queryIndex === -1 ? "" : req.originalUrl.slice(queryIndex);
      return res.redirect(308, `${req.path.replace(/\/+$/, "")}${query}`);
    }

    const routeParts = req.path === "/"
      ? []
      : req.path.slice(1).split("/").filter(Boolean);
    const routeFile = resolve(resolvedDistDir, ...routeParts, "index.html");
    const relativeRouteFile = relative(resolvedDistDir, routeFile);

    if (relativeRouteFile.startsWith("..") || isAbsolute(relativeRouteFile)) {
      return next();
    }

    return res.sendFile(routeFile, (error) => {
      if (!error) return;
      if (error.status !== 404) return next(error);

      res.status(404).sendFile(join(resolvedDistDir, "404.html"), (notFoundError) => {
        if (notFoundError) next(notFoundError);
      });
    });
  });

  return app;
}

const isEntryPoint = process.argv[1]
  && import.meta.url === pathToFileURL(resolve(process.argv[1])).href;

if (isEntryPoint) {
  const port = process.env.PORT || 3000;
  createApp().listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}
