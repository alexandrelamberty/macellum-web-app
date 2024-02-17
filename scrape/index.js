const cheerio = require("cheerio");
const { time } = require("console");
const fs = require("fs");
const { defineDriver } = require("localforage");

const filePath = "index.html"; // Replace with the path to your local HTML file

const html = fs.readFileSync(filePath, "utf-8");
const $ = cheerio.load(html);

const columnIndices = [1, 2, 5];
const resultArray = [];

const save = true;

// Iterate over the rows in the table
$("table tr").each((index, element) => {
    const product = {};

    // Iterate over the specified columns
    columnIndices.forEach((columnIndex) => {
        const td = $(element).find("td").eq(columnIndex);
        const cellData = td.html();
        // const cellDataText = td.text().trim();
        // console.log(cellData);
        // Assign data to the corresponding property in rowData
        if (columnIndex === 1) {
            // cell data contain code and provider separated by <br> element
            if (cellData) {
                const [code, provider] = cellData.split("<br>");
                product.code = code;
                if (provider) {
                    product.providers = [provider];
                } else {
                    product.providers = [];
                }
            }
        } else if (columnIndex === 2) {
            if (cellData) {
                // console.log(cellData);
                // Extract content from the <span> elements
                const spans = td.find("spam");
                // console.log(spans.length);
                // Assuming the structure is consistent, the first span is for name and the second for category
                if (spans.length >= 2) {
                    const [name, brand] = spans.eq(0).text().trim().split("(");
                    const category = spans.eq(1).text().trim();
                    // Assign data to the corresponding properties in rowData
                    product.name = name.trim();
                    if (brand) {
                        product.brand = brand.slice(0, -1);
                    } else {
                        product.brand = "";
                    }
                    product.category = category;
                }
            }
        } else if (columnIndex === 5) {
            if (cellData) {
                product.price = {
                    ivat: Number(
                        cellData.split("<br>")[1].split("€")[0].trim(),
                    ),
                    evat: 0,
                    currency: "euro",
                };
            }
        }
        if (cellData) {
            product.store = {
                shelf: 0,
                quantity: 0,
                in_store: false,
            };

            product.stock = {
                shelf: 0,
                quantity: 0,
                in_stock: false,
            };

            product.product_type = "";

            product.weight = {
                quantity: 200,
                unit: "g",
            };
            product.id = new Date();
        }
    });

    // Add rowData to the resultArray
    resultArray.push(product);
});

// Output the result array
console.log(resultArray);

if (save) {
    const jsonData = JSON.stringify(resultArray.slice(1), null, 2);

    const outputFilePath = "../src/data/products.json";
    fs.writeFileSync(outputFilePath, jsonData);
}
