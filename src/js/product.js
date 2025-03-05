import { doc } from "prettier";
import { fetchData } from "./fetchData.js";
import { showProduct } from "./updateUI.js";
import "./dark-mode.js"

const queryString = window.location.search;
const id = new URLSearchParams(queryString).get("id");
const product__name = document.querySelector(".product__name");
const product__image = document.querySelector(".images__img");
const product__id = document.querySelector(".product__id");
const product__price = document.querySelector(".prod__price")
const prod__salePersent = document.querySelector(".prod__salePersent");
const prod__tags = document.querySelector(".prod__tags");
const prod__description = document.querySelector(".prod__description");
const reviewer__name = document.querySelector(".reviewer__name");
const prod__rating = document.querySelector(".prod__rating");
const prod__rating__number = document.querySelector(".prod__rating__number");
const reviewers__comment = document.querySelector(".reviewers__comment");
const comment__date = document.querySelector(".comment__date");

fetchData("https://dummyjson.com/product/" + id)
    .then((product)=> {
        showProduct(product);
        product__name.textContent = product.title;
        product__price.textContent = `$${product.price}`;
        prod__salePersent.textContent = `$${(product.price - (product.price/100) * product.discountPercentage).toFixed(2)}`;
        product__image.src = product.thumbnail;
        product__id.textContent = `ID #${product.id}`;
        prod__tags.textContent = `category: ${product.tags[0]}`;
        prod__description.textContent = product.description;
        reviewers__comment.textContent = product.reviews[0].comment;
        prod__rating__number.textContent = product.reviews[0].rating;
        reviewer__name.textContent = product.reviews[0].reviewerName;
        comment__date.textContent = product.reviews[0].date
    })
    .catch ((error)=> {
        console.log(error);
    })
