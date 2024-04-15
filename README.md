# E-commerce Express API

## **Welcome!**

This API is built using Node.js and Express. It manages an e-commerce store, encompassing users, products, carts, and
categories.
Note that this is only for test-purposes

## **Project Structure**

This section provides an overview of the project's folder structure, helping you navigate the codebase effectively.

* **models:** This directory houses files defining the data models for users, products, categories, carts, and other
  entities within your e-commerce store.
* **routes:** This section contains route handlers that define how the API responds to different HTTP requests. Each
  route typically corresponds to a specific API endpoint.
* **controllers:** This directory stores the application logic for handling API requests. Controllers interact with
  models and other services to process data and generate responses.
* **middlewares:** Middleware functions reside in this folder. They are reusable functions that execute before a request
  reaches a route handler. They can be used for tasks like authentication, authorization, logging, and error handling.
* **config:** This directory stores configuration files, such as environment variables and database connection details.
* **utils:** Utility functions and helper code can be found in this directory.
* **tests:** Unit and integration tests for the API reside in this folder, ensuring code quality and functionality.

## **What can you do with this API?**

The E-commerce Express API empowers you to manage various aspects of your online store, including:

* **User Management:** Create, retrieve, update, and delete users.
* **Product Management:** Craft, manage, update, and remove products.
* **Category Management:** Facilitate category creation and retrieval.
* **Cart Management:** Manage carts and retrieving cart items.

## **Understanding the API Structure**

The API is organized around resources, each representing a core entity within the e-commerce domain. Every resource has
a set of endpoints accessible through standard HTTP methods (GET, POST, PUT, DELETE).

## **Leveraging the Postman Collection**

The provided Postman collection offers comprehensive API documentation, including:

* Detailed explanations for each endpoint
* Examples showcasing requests and responses
* JSON data schemas for clear data structure understanding
* Notes and instructions to guide your interaction

You can see it [here](./api_doc.md) or on postman
website [here](https://documenter.getpostman.com/view/22207689/2sA3Bj7thh)

## **Accessing the API**

You can interact with the E-commerce Express API using any HTTP client, such as Postman, a web browser, or your mobile
application. To make requests, you'll need the API's base URL and potentially an authorization key if authentication is
enabled.

## **Security**

JWT authentication

## **Role-Based Management**

The E-commerce Express API implements role-based access control (RBAC) to manage user permissions and secure API
endpoints. This mechanism ensures that users can only perform actions within the scope of their assigned roles.

### **Roles and Permissions**

The API defines a set of roles, each associated with a specific level of access. These roles map to different
permissions, determining the actions a user can perform.

### **Assigning Roles to Users**

During user registration or profile management, roles are assigned to users. This association determines their access
privileges within the application.

### **Protecting API Endpoints**

Each API endpoint is mapped to a required role. When a user attempts to access an endpoint, their assigned roles are
evaluated against the endpoint's requirements. If the user possesses the necessary permissions, the request is
processed; otherwise, an appropriate error response is returned.

### **Benefits of Role-Based Management**

RBAC offers several advantages for managing user access in the E-commerce Express API:

* **Enhanced Security:** It restricts unauthorized access to sensitive data and functionalities.
* **Granular Control:** Permissions can be tailored to specific roles, enabling precise control over user actions.
* **Administrative Flexibility:** Roles can be easily assigned or modified, adapting to changing user needs and
  responsibilities.

### **Example Usage**

Consider a scenario where an admin user attempts to create a product. Since admins have the "create product" permission,
the request is successful. However, if a regular user tries the same action, they would receive an error indicating
insufficient permissions.

## Getting Started

Clone repo first, then open a terminal at the root of the project and then run the command

```bash
docker compose -f ./docker-compose.yaml up -d
```

and then try open [http://localhost:9000](http://localhost:9000)
