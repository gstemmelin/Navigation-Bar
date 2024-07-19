const pathName = window.location.pathname;
const pageName = pathName.split("/").pop();

 if (pageName === "Index.html") {
    document.querySelector(".Home").classList.add("activeLink");
 }

if (pageName === "Products.html") {
    document.querySelector(".Products").classList.add("activeLink")
}

if (pageName === "About.html") {
    document.querySelector(".About").classList.add("activeLink")
}