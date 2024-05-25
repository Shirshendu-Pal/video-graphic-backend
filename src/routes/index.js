const express = require('express');
const router = express.Router();
const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");
const categoryRoutes = require("./category.routes");
const questionRoutes = require("./question.routes");

const routes = [
    {
        path: "/auth",
        route: authRoutes
    },
    {
        path : "/user",
        route : userRoutes
    },
    {
        path : "/category",
        route : categoryRoutes
    },
    {
        path : "/question",
        route : questionRoutes
    },
]



routes.forEach((obj) => {
    router.use(obj.path, obj.route);
});

module.exports = router;