# CRUD API with Express and TypeScript

## Overview

This project is a CRUD API developed using Express.js and TypeScript. It provides an interface for users to interact with product, including creating, reading, updating, and deleting.

## Features

1. **Create a Product**: Allows users to create a new product.
2. **List Product**: Lists all products with basic filters.
3. **Get Product Details**: Retrieves detailed information about a specific product.
4. **Update Product Details**: Allows users to update existing product details.
5. **Delete a Product**: Deletes a specified product.

## Requirements

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

- step 1: npm install
- step 2: change db connection in file src/config/db.ts 
- step 3: after installing
    + install: npm install typescript ts-node --save-dev
    + in file pakage.json add a " "start": "ts-node src/index.ts" " line in the "scripts"
- step 4: npm start