$(document).ready(function () {

    let header = $("h1");
    let priceGreaterThan20Button = $("#priceGreaterThan20");
    let discountedProductsButton = $("#discountedProducts");
    let averageDiscountedProductButton = $("#averageDiscountedProduct");
    let vowelNameButton = $("#vowelName");
    let sortProductsButton = $("#sortProducts");

    let table = $("#table");
    let paragraph = $("p");


    function Product(name, category, hasDiscount, price) {
        this.name = name;
        this.category = category;
        this.hasDiscount = hasDiscount;
        this.price = price;
    }

    let products = [new Product("eggs", "food", false, 5), new Product("Coca Cola", "drinks", true, 20), new Product("avocado", "food", false, 7), new Product("honey", "food", true, 35), new Product("peanut butter", "food", true, 25), new Product("avocado", "food", true, 30), new Product("toothpaste", "hygiene", true, 25), new Product("face mask", "cosmetics", false, 15), new Product("hand cream", "cosmetics", true, 23), new Product("milk", "drinks", false, 13), new Product("pizza", "food", true, 10), new Product("soap", "hygiene", false, 12), new Product("tequila", "drinks", true, 45), new Product("salmon", "food", true, 40), new Product("donuts", "food", false, 10)];


    function checkProductsName(name) {
        let vowelsArray = ["a", "e", "i", "o", "u"];
        let flag = false;
        for (let vowel of vowelsArray) {
            if (name[0].toLowerCase() == vowel) {
                flag = true;
            }
        }
        if (flag) {
            return true;
        }
    }

    function makeAnArrayCopy(array) {
        let copiedArray = [];
        array.forEach(item => copiedArray.push(item));
        return copiedArray;
    }

    function fillTable(result) {
        header.text("");
        table.append(' <thead class="thead-dark"> <tr><th scope="col">Name</th><th scope="col">Category</th><th scope="col">Discount</th><th scope="col">Price in $</th></tr></thead></table>');
        paragraph.text("");
        result.forEach(product => {
            table.append(`<tbody><div class="row">
    <td><div class="col-md-3">${product.name}</div></td>
    <td><div class="col-md-3">${product.category}</div></td>
    <td><div class="col-md-3">${product.hasDiscount}</div></td>
    <td><div class="col-md-3">${product.price}</div></td>
</div></tbody>`);
        }
        )
    }

    function fillTableWithNames(result) {
        header.text("");
        table.append(' <thead class="thead-dark"> <tr><th scope="col">Name</th></thead></table>');
        paragraph.text("");
        result.forEach(product => {
            table.append(`<tbody><div class="row">
            <td><div class="col-md-10">${product.name}</div></td>
        </div></tbody>`);
        }
        )
    }

    priceGreaterThan20Button.click(function () {
        table.html("");
        let priceGreaterThan20 = products.filter(product => product.price > 20);
        fillTable(priceGreaterThan20);
        header.text("All the products that have a price greater than 20$ are shown below");
    })

    discountedProductsButton.click(function () {
        table.html("");
        let discountedFoodProducts = products.filter(product => product.hasDiscount === true)
            .filter(product => product.category === "food");
        fillTableWithNames(discountedFoodProducts);
        header.text("All the products from category 'food' that are on discount");
    })

    averageDiscountedProductButton.click(function () {
        table.html("");
        let discountPriceProduct = products.filter(product => product.hasDiscount === true).map(product => product.price);
        let sumDiscountedProductPrices = discountPriceProduct.reduce((sum, price) => sum += price, 0);
        let averageProductPrice = sumDiscountedProductPrices / discountPriceProduct.length;
        paragraph.text(`The average price of all the discounted products is:${averageProductPrice}`);
    })

    vowelNameButton.click(function () {
        table.html("");
        let notOnDiscountProducts = products
            .filter(product => product.hasDiscount === false)
            .filter(product => checkProductsName(product.name) == true)
        notOnDiscountProducts.forEach(product => product.name)
        fillTableWithNames(notOnDiscountProducts);
        header.text("All the products starting with a vowel that are not on discount");
    })

    sortProductsButton.click(function () {
        table.html("");
        let sortByPriceArray = makeAnArrayCopy(products);
        sortByPriceArray.sort((firstProduct, secondProduct) => firstProduct.price - secondProduct.price);
        fillTable(sortByPriceArray);
        header.text("All the products sorted by price are shown below");
    })
})


