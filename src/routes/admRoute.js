const express = require("express");
const router = express.Router();
const AdmController = require("../controllers/AdmController");
const AuthController = require("../controllers/AuthController");
const productValidator = require("../validators/ProductValidator");
const isAuth = require("../middlewares/auth");
const isGuest = require("../middlewares/guest");

// Rotas para visualizar views adm e login
router.get("/home-adm", AdmController.homeAdm);
router.get("/product-adm", AdmController.adm);
router.get("/login-adm", isGuest, AuthController.login);
router.get("/registration-adm", isGuest, AuthController.register);

// Rotas para autenticação usuário adm
router.post("/login-adm", isGuest, AuthController.auth);
router.post("/registration-adm", isGuest, AuthController.create);
router.post("/logout", isAuth, AuthController.logout);

// Inicio CRUD dos produtos adm
// Rota para criar um produto
router.get("/product-adm/product-create", AdmController.createProduct);
// Rota para armazenar criação de um produto
router.post("/product-adm/product-create", productValidator.storeValidator, AdmController.store);

// Rota para visualizar um produto
router.get("/product-adm/:id", AdmController.viewProduct);

// Rota para visualizar formulario edição
router.get("/product-adm/product-edit/:id", AdmController.edit);
// Rota para a edição do produto
router.put("/product-adm/product-edit/:id", AdmController.update);

// Rota para visualizar produto para excluir
router.get("/product-adm/product-delete/:id", AdmController.delete);
// Rota para excluir um produto
router.delete("/product-adm/product-delete/:id", AdmController.destroy);
// Fim do CRUD dos produtos adm


module.exports = router;