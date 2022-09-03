
const fs = require("fs");
const path = require("path");
const productsJson = fs.readFileSync(path.join(__dirname, "..", "data", "products.json"), "utf-8")
const products = JSON.parse(productsJson);

const ProdutoController = {
    cart: (req, res) => {
        return res.render("cart-shopping", {title: "Carrinho de compras"});
    },
    index: (req, res) => {
        const {marca} = req.query
        console.log(marca)
        var produtos = products.filter((value)=> {
            if(value.marca === marca) { 
            return True}
        }) 
        return res.render("product-listing", {title: "Lista de produtos"});
    },
    detail: (req, res) => {
       const { id } = req.params
        let produtoEncontrado = null
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === parseInt(id)) {
                produtoEncontrado = products[i]

            }

        }
        if (produtoEncontrado) {
            return res.render("product-detail", { title: "amd",produto:produtoEncontrado })
        }
        else {
           return res.status(404).render("not-found")

        }
    }
        ,
    detailAmd: (req,res) => {
        return res.render("brand-detail-amd", {title: "AMD | MyBrand's"})
    },
    detailAsus: (req,res) => {
        return res.render("brand-detail-asus", {title: "ASUS | MyBrand's"})
    },
    detailGeil: (req,res) => {
        return res.render("brand-detail-geil", {title: "GEIL | MyBrand's"})
    },
    detailIntel: (req,res) => {
        return res.render("brand-detail-intel", {title: "Intel | MyBrand's"})
    }
};

module.exports = ProdutoController;