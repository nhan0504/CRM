# CRM
# Introduction
This project is a backend service for a Customer Relationship Management (CRM) system. It handles various functionalities to manage and analyze customer interactions and data throughout the customer lifecycle. The service allows for a variety of interactions with the CRM data via a set of 31 APIs.    

Currently, there is no frontend for this project. However, a user interface is under consideration for future development.

# API Access
You can access the live API base URL at: [http://crmapi.nhanproj.com](http://crmapi.nhanproj.com)

Or you can test out the API directly in Postman

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/21134493-45c2f268-d323-4161-92c5-93fe349dae50?action=collection%2Ffork&collection-url=entityId%3D21134493-45c2f268-d323-4161-92c5-93fe349dae50%26entityType%3Dcollection%26workspaceId%3Ddd3391fe-dcaf-46b2-92e4-92279ed2cc5b)

# Feature
## Customer API
`GET /api/customers`: Retrieves a list of all customers.    
`GET /api/customers/{id}`: Retrieves details of a specific customer.     
`GET /api/customers/{id}/totaltrans`: Retrieves the total number of transactions of a specific customer    
`GET /api/customers/{id}/transactions`: Retrieves the details of all transactions by a specific customer     
`POST /api/customers`: Creates a new customer.     
`PUT /api/customers/{id}`: Updates a specific customer.     
`DELETE /api/customers/{id}`: Deletes a specific customer.
## Product API
`GET /api/products`: Retrieves the details of all products     
`GET /api/products/{id}`: Retrieves the details of a specific product      
`GET /api/products/{id}/inTransactions`: Retrieves the details of all transactions that contain this product      
`GET /api/products/{id}/numTransactions` Retrieves the number of transactions that contain this product      
`GET /api/products/{id}/numSold`: Retrieves the number of items sold for this product      
`GET /api/products/{id}/revenue`: Retrieves revenue from selling a specific product     
`GET /api/products/sold`: Retrieves total number of products sold     
`GET /api/products/mostSold`: Retrieves the details of the product that is sold the most     
`POST /api/products`:  Creates a new product     
`PUT /api/products/{id}`: Updates a specific product     
`DELETE /api/products/{id}`:  Deletes a specific product
## Transaction API
`GET /api/transactions`: Retrieves all transaction    
`GET /api/transactions/{id}`: Retrieves a specific transaction    
`GET /api/transactions/{id}/products`: Retrieves the details of all the products in a specific transaction    
`GET /api/transactions/{id}/totalcost`: Retrieves the total cost of a transaction    
`GET /api/transactions/revenue`: Retrieves the total revenue from all transaction
`POST /api/transactions`: Creates a new transaction     
`PUT /api/transactions/{id}`: Updates a specific transaction
`DELETE /api/transactions/{id}`: Deletes a specific product
## Transaction Details API
`GET /api/transactiondetails`: Retrieves the details of all transaction     
`POST /api/transactiondetails`: Creates a new transaction detail

# Technology
## Backend Technologies
C# 8.0    
ASP.NET Core 3.1.10     
Entity Framework Core 3.1.28

## Database Technologies
SQL Server    
SQL Server Management Studio
