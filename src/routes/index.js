const express = require('express');
const router = express.Router();
const authRoutes = require("./auth.routes");

const routes = [
    {
        path: "/auth",
        route: authRoutes
    },
]

routes.forEach((obj) => {
    router.use(obj.path, obj.route);
});

module.exports = router;