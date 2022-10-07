// Copyright © 2022 Ory Corp

const express = require("express")
const cors = require("cors")
const { V0alpha2Api, Configuration } = require("@ory/client")

const app = express()

// highlight-start
const ory = new V0alpha2Api(
  new Configuration({
    // Points to the local Ory API server (Ory TunneL).
    basePath: process.env.ORY_URL || "http://localhost:4000",
    baseOptions: { withCredentials: true },
  }),
)
// highlight-end

app.use(
  // highlight-start
  cors({
    origin: process.env.UI_URL || "http://localhost:8080",
    credentials: true, // <- Required for CORS to accept cookies and tokens.
  }),
  // highlight-end
)

app.use((req, res, next) => {
  // A simple middleware to authenticate the request.
  // highlight-start
  ory
    .toSession(
      undefined,
      // This is important - you need to forward the cookies (think of it as a token)
      // to Ory:
      req.headers.cookie,
    )
    .then(({ data }) => {
      req.session = data
      next()
    })
    .catch(() => {
      res.status(401)
      res.json({ error: "Unauthorized" })
    })
  // highlight-end
})

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from our API!",
    // highlight-start
    session_id: req.session.id,
    identity_traits: req.session.identity.traits,
    // highlight-end
  })
})

const port = process.env.PORT || 8081
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
