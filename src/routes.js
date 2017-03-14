"use strict";

const requireAuth = require("./middlewares/auth");
const authController = require("./controllers/auth-controller");
const quizController = require("./controllers/quiz-controller");
const resumeController = require("./controllers/resume-controller");
const downloadsController = require('./controllers/contentful/downloads-controller');
const slidesController = require('./controllers/contentful/slides-controller');
const languagesController = require('./controllers/contentful/languages-controller');
const sendgridController = require('./controllers/sendgrid-controller');
const subscriptionController = require('./controllers/subscribe-controller');
const contactsController = require('./controllers/contentful/contacts-controller');
const userinfo = require('./controllers/userinfo-controller');

module.exports = function (app, express) {

    // Create API group routes
    const apiRoutes = express.Router();

    apiRoutes.post("/register", authController.register);
    apiRoutes.post("/auth", authController.auth);
    apiRoutes.post("/login", authController.login);
    apiRoutes.post("/forgot-password", authController.forgotPassword);
    apiRoutes.post("/reset-password", authController.resetPassword);
    apiRoutes.post("/verify-email", authController.verifyEmail);

    apiRoutes.put("/update-user", authController.updateUser);

    apiRoutes.post("/subscribe/newsletter", subscriptionController.subscribe);

    apiRoutes.get("/sendgrid/create-contact-list", sendgridController.createContactList);
    apiRoutes.post("/sendgrid/add-contact-to-list", requireAuth, sendgridController.addContactToList);
    apiRoutes.post("/sendgrid/contact-sales-representative", requireAuth, sendgridController.contactSalesRepresentative);

    apiRoutes.post("/quiz-answer", requireAuth, quizController.store);
    apiRoutes.get("/quiz-answer", requireAuth, quizController.show);

    apiRoutes.post('/resume', requireAuth, resumeController.store);
    apiRoutes.get('/resume/:uuid', requireAuth, resumeController.show);

    apiRoutes.get('/languages', languagesController);
    apiRoutes.get('/slides/:version', requireAuth, slidesController);
    apiRoutes.get('/downloads', downloadsController);
    apiRoutes.get('/contacts', contactsController);
    apiRoutes.get('/getuserinfo', userinfo.userinfo);

    app.use("/api", apiRoutes);
};