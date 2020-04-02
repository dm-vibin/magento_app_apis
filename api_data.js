define({ "api": [
  {
    "type": "POST",
    "url": "/account/authenticate",
    "title": "Authenticate",
    "description": "<p>Returns a token and other user information by validating the username and password</p>",
    "name": "Authenticate",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params:",
          "content": "{\n  \"username\": \"user@example.com\",\n  \"password\": \"F6$879paSS!\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Unique ID of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authorisation token that authorise the user for rest of the communication.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"userId\": \"9389\",\n   \"authToken\": \"2345678-rt56789-KYHD839-K98399\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidUser",
            "description": "<p>Invalid username or password.</p>"
          }
        ],
        "6xx": [
          {
            "group": "6xx",
            "type": "String",
            "optional": false,
            "field": "GeneralError",
            "description": "<p>Any general / undefined error types will come under this category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "InvalidUser:",
          "content": "HTTP/1.1 401 InvalidUser\n{\n   \"error\": \"Invalid username or password\"\n}",
          "type": "json"
        },
        {
          "title": "GeneralError",
          "content": "HTTP/1.1 600 GeneralError\n{\n    error: \"An error occured. Please try again.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apis/account.js",
    "groupTitle": "Account",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Build-Number",
            "description": "<p>The Build number of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Type of the device. iOS/Android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-OS-Version",
            "description": "<p>Device OS version. Used during the time of removing app support for an OS Version.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Currency",
            "description": "<p>Currency based on device locale.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CommonHeader",
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Currency\": \"$\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/account/resetpassword",
    "title": "ResetPassword",
    "description": "<p>Helps the user to reset the password in the system.</p>",
    "name": "ResetPassword",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Registered email of the user in system.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   message: \"Success\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apis/account.js",
    "groupTitle": "Account",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Build-Number",
            "description": "<p>The Build number of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Type of the device. iOS/Android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-OS-Version",
            "description": "<p>Device OS version. Used during the time of removing app support for an OS Version.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Currency",
            "description": "<p>Currency based on device locale.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CommonHeader",
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Currency\": \"$\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "6xx": [
          {
            "group": "6xx",
            "type": "String",
            "optional": false,
            "field": "GeneralError",
            "description": "<p>Any general / undefined error types will come under this category.</p>"
          }
        ],
        "4xx": [
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "InactiveAccount",
            "description": "<p>The account is inactive. Please contact admin.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GeneralError",
          "content": "HTTP/1.1 600 GeneralError\n{\n    error: \"An error occured. Please try again.\"\n}",
          "type": "json"
        },
        {
          "title": "InactiveAccount",
          "content": "HTTP/1.1 403 InactiveAccount\n{\n   \"error\": \"The account is inactive. Please contact admin.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/account/unauthenticate",
    "title": "Unauthenticate",
    "description": "<p>Destroys the auth token</p>",
    "name": "Unauthenticate",
    "group": "Account",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apis/account.js",
    "groupTitle": "Account",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Build-Number",
            "description": "<p>The Build number of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Type of the device. iOS/Android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-OS-Version",
            "description": "<p>Device OS version. Used during the time of removing app support for an OS Version.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Currency",
            "description": "<p>Currency based on device locale.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>AuthToken received during login.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CommonHeader",
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Currency\": \"$\"\n}",
          "type": "json"
        },
        {
          "title": "AuthHeader",
          "content": "{\n    \"Authorization\": \"Bearer YWxhZGRpbjpvcGVuc2VzYW1l\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/cart/abandoned",
    "title": "Get Abandoned Cart",
    "description": "<p>Returns the abandoned cart items</p>",
    "group": "Cart",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "carts",
            "description": "<p>List of abandoned cart items.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "carts.id",
            "description": "<p>Unique ID of the item.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "carts.date",
            "description": "<p>Date on which the order is received.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "carts.customer",
            "description": "<p>Details of the customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "carts.customer.name",
            "description": "<p>Name of the customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "carts.customer.contact",
            "description": "<p>Contact number of the customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "carts.price",
            "description": "<p>The total price of the order, eg: 100.00, formated to two decimal places.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "carts.items",
            "description": "<p>Number of items in the order.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"carts\": [{\n         \"id\": \"8743689\",\n         \"date\": \"2019/12/30\",\n         \"customer\": {\n             \"name\": \"Darvin Fleming\",\n             \"contact\": \"838877798797\"\n         },\n         \"price\": 983.00,\n         \"items\": 10\n      }]\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apis/cart.js",
    "groupTitle": "Cart",
    "name": "GetCartAbandoned",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Build-Number",
            "description": "<p>The Build number of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Type of the device. iOS/Android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-OS-Version",
            "description": "<p>Device OS version. Used during the time of removing app support for an OS Version.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Currency",
            "description": "<p>Currency based on device locale.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>AuthToken received during login.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CommonHeader",
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Currency\": \"$\"\n}",
          "type": "json"
        },
        {
          "title": "AuthHeader",
          "content": "{\n    \"Authorization\": \"Bearer YWxhZGRpbjpvcGVuc2VzYW1l\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "SessionExpired",
            "description": "<p>User session has expired.</p>"
          },
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "InactiveAccount",
            "description": "<p>The account is inactive. Please contact admin.</p>"
          }
        ],
        "6xx": [
          {
            "group": "6xx",
            "type": "String",
            "optional": false,
            "field": "GeneralError",
            "description": "<p>Any general / undefined error types will come under this category.</p>"
          },
          {
            "group": "6xx",
            "type": "String",
            "optional": false,
            "field": "MagentoNoPermission",
            "description": "<p>The app doesnot have sufficient permissions to access the information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SessionExpired",
          "content": "HTTP/1.1 401 SessionExpired\n{\n    error: \"Your session has expired. Please sign-in again.\"\n}",
          "type": "json"
        },
        {
          "title": "GeneralError",
          "content": "HTTP/1.1 600 GeneralError\n{\n    error: \"An error occured. Please try again.\"\n}",
          "type": "json"
        },
        {
          "title": "MagentoNoPermission",
          "content": "HTTP/1.1 602 MagentoNoPermission\n{\n    error: \"The app doesnot have sufficient permissions to access the information.\"\n}",
          "type": "json"
        },
        {
          "title": "InactiveAccount",
          "content": "HTTP/1.1 403 InactiveAccount\n{\n   \"error\": \"The account is inactive. Please contact admin.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/cart/abandoned/:id",
    "title": "Get Abandoned Cart Details",
    "description": "<p>Returns the details of a particular abandoned cart item</p>",
    "group": "Cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique ID of the abandoned cart item</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique ID of the abandoned cart item.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Date on which the order is received.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "customer",
            "description": "<p>Details of the customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.name",
            "description": "<p>Name of the customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.contact",
            "description": "<p>Contact number of the customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "products",
            "description": "<p>List of products ordered.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.id",
            "description": "<p>Unique ID of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.name",
            "description": "<p>Name of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.quantity",
            "description": "<p>Quantity of the product ordered.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.price",
            "description": "<p>Total price of the product based on the quantilty ordered.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.image",
            "description": "<p>Thumbnail image of the product</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"8743689\",\n    \"date\": \"2019/12/30\",\n    \"customer\": {\n        \"name\": \"Darvin Fleming\",\n        \"contact\": \"838877798797\"\n    },\n    \"products\": [{\n        \"id\": \"832764\",\n        \"name\": \"REDMI NOTE 7 PRO, 64 GB\",\n        \"quantity\": \"9 pieces\",\n        \"price\": 900.00,\n        \"image\": \"https://resources.example.com/products/2187312.jpg\"\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apis/cart.js",
    "groupTitle": "Cart",
    "name": "GetCartAbandonedId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Build-Number",
            "description": "<p>The Build number of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Type of the device. iOS/Android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-OS-Version",
            "description": "<p>Device OS version. Used during the time of removing app support for an OS Version.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Currency",
            "description": "<p>Currency based on device locale.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>AuthToken received during login.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CommonHeader",
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Currency\": \"$\"\n}",
          "type": "json"
        },
        {
          "title": "AuthHeader",
          "content": "{\n    \"Authorization\": \"Bearer YWxhZGRpbjpvcGVuc2VzYW1l\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "SessionExpired",
            "description": "<p>User session has expired.</p>"
          },
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "InactiveAccount",
            "description": "<p>The account is inactive. Please contact admin.</p>"
          }
        ],
        "6xx": [
          {
            "group": "6xx",
            "type": "String",
            "optional": false,
            "field": "GeneralError",
            "description": "<p>Any general / undefined error types will come under this category.</p>"
          },
          {
            "group": "6xx",
            "type": "String",
            "optional": false,
            "field": "MagentoNoPermission",
            "description": "<p>The app doesnot have sufficient permissions to access the information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SessionExpired",
          "content": "HTTP/1.1 401 SessionExpired\n{\n    error: \"Your session has expired. Please sign-in again.\"\n}",
          "type": "json"
        },
        {
          "title": "GeneralError",
          "content": "HTTP/1.1 600 GeneralError\n{\n    error: \"An error occured. Please try again.\"\n}",
          "type": "json"
        },
        {
          "title": "MagentoNoPermission",
          "content": "HTTP/1.1 602 MagentoNoPermission\n{\n    error: \"The app doesnot have sufficient permissions to access the information.\"\n}",
          "type": "json"
        },
        {
          "title": "InactiveAccount",
          "content": "HTTP/1.1 403 InactiveAccount\n{\n   \"error\": \"The account is inactive. Please contact admin.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/order/:orderId",
    "title": "Get Order",
    "description": "<p>Returns the details of a particular order</p>",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>Unique ID of the order</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique ID of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Date on which the order is received.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"RECEIVED\"",
              "\"CONFIRMED\"",
              "\"PROCESSING\"",
              "\"SHIPPED\"",
              "\"DELIVERED\"",
              "\"CANCELLED\""
            ],
            "optional": false,
            "field": "orders.status",
            "description": "<p>Status of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedOn",
            "description": "<p>The date on which the order status was updated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "statusHistory",
            "description": "<p>List of the status updates.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "statusHistory.status",
            "description": "<p>Changed to status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "statusHistory.date",
            "description": "<p>Date on which the mentioned status was updated to.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "customer",
            "description": "<p>Details of the customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.name",
            "description": "<p>Name of the customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.contact",
            "description": "<p>Contact number of the customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.billingAddress",
            "description": "<p>The details of billing address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.deliveryAddress",
            "description": "<p>The details of delivery address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "products",
            "description": "<p>List of products ordered.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.id",
            "description": "<p>Unique ID of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.name",
            "description": "<p>Name of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.quantity",
            "description": "<p>Quantity of the product ordered.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.price",
            "description": "<p>Total price of the product based on the quantilty ordered.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.image",
            "description": "<p>Thumbnail image of the product</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"8743689\",\n    \"date\": \"2019/12/30\",\n    \"status\": \"PROCESSING\",\n    \"updatedOn\": \"2019/12/31\",\n    \"statusHistory\": [{\n        \"status\": \"RECEIVED\",\n        \"date\": \"2019/12/30\"\n    },{\n        \"status\": \"CONFIRMED\",\n        \"date\": \"2019/12/30\"\n    },{\n        \"status\": \"PROCESSING\",\n        \"date\": \"2019/12/31\"\n    }],\n    \"customer\": {\n        \"name\": \"Darvin Fleming\",\n        \"contact\": \"838877798797\",\n        \"billingAddress\": \"700 Arnold Street Pasadena, MD 21122\",\n        \"deliveryAddress\": \"585 Pawnee Circle Lanham, MD 20706\"\n    },\n    \"products\": [{\n        \"id\": \"832764\",\n        \"name\": \"REDMI NOTE 7 PRO, 64 GB\",\n        \"quantity\": \"9 pieces\",\n        \"price\": 900.00,\n        \"image\": \"https://resources.example.com/products/2187312.jpg\"\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apis/orders.js",
    "groupTitle": "Order",
    "name": "GetOrderOrderid",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Build-Number",
            "description": "<p>The Build number of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Type of the device. iOS/Android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-OS-Version",
            "description": "<p>Device OS version. Used during the time of removing app support for an OS Version.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Currency",
            "description": "<p>Currency based on device locale.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>AuthToken received during login.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CommonHeader",
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Currency\": \"$\"\n}",
          "type": "json"
        },
        {
          "title": "AuthHeader",
          "content": "{\n    \"Authorization\": \"Bearer YWxhZGRpbjpvcGVuc2VzYW1l\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "SessionExpired",
            "description": "<p>User session has expired.</p>"
          },
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "InactiveAccount",
            "description": "<p>The account is inactive. Please contact admin.</p>"
          }
        ],
        "6xx": [
          {
            "group": "6xx",
            "type": "String",
            "optional": false,
            "field": "GeneralError",
            "description": "<p>Any general / undefined error types will come under this category.</p>"
          },
          {
            "group": "6xx",
            "type": "String",
            "optional": false,
            "field": "MagentoNoPermission",
            "description": "<p>The app doesnot have sufficient permissions to access the information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SessionExpired",
          "content": "HTTP/1.1 401 SessionExpired\n{\n    error: \"Your session has expired. Please sign-in again.\"\n}",
          "type": "json"
        },
        {
          "title": "GeneralError",
          "content": "HTTP/1.1 600 GeneralError\n{\n    error: \"An error occured. Please try again.\"\n}",
          "type": "json"
        },
        {
          "title": "MagentoNoPermission",
          "content": "HTTP/1.1 602 MagentoNoPermission\n{\n    error: \"The app doesnot have sufficient permissions to access the information.\"\n}",
          "type": "json"
        },
        {
          "title": "InactiveAccount",
          "content": "HTTP/1.1 403 InactiveAccount\n{\n   \"error\": \"The account is inactive. Please contact admin.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/order/orders",
    "title": "Get Orders",
    "description": "<p>Returns the orders</p>",
    "group": "Order",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "orders",
            "description": "<p>List of orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.id",
            "description": "<p>Unique ID of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.date",
            "description": "<p>Date on which the order is received.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"RECEIVED\"",
              "\"CONFIRMED\"",
              "\"PROCESSING\"",
              "\"SHIPPED\"",
              "\"DELIVERED\"",
              "\"CANCELLED\""
            ],
            "optional": false,
            "field": "orders.status",
            "description": "<p>Status of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.updatedOn",
            "description": "<p>The date on which the order status was updated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "orders.customer",
            "description": "<p>Details of the customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.customer.name",
            "description": "<p>Name of the customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.customer.contact",
            "description": "<p>Contact number of the customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "orders.price",
            "description": "<p>The total price of the order, eg: 100.00, formated to two decimal places.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "orders.items",
            "description": "<p>Number of items in the order.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"orders\": [{\n         \"id\": \"8743689\",\n         \"date\": \"2019/12/30\",\n         \"status\": \"PROCESSING\",\n         \"updatedOn\": \"2019/12/31\",\n         \"customer\": {\n             \"name\": \"Darvin Fleming\",\n             \"contact\": \"838877798797\"\n         },\n         \"price\": 983.00,\n         \"items\": 10\n     }]\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apis/orders.js",
    "groupTitle": "Order",
    "name": "GetOrderOrders",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Build-Number",
            "description": "<p>The Build number of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Type of the device. iOS/Android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-OS-Version",
            "description": "<p>Device OS version. Used during the time of removing app support for an OS Version.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Currency",
            "description": "<p>Currency based on device locale.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>AuthToken received during login.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CommonHeader",
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Currency\": \"$\"\n}",
          "type": "json"
        },
        {
          "title": "AuthHeader",
          "content": "{\n    \"Authorization\": \"Bearer YWxhZGRpbjpvcGVuc2VzYW1l\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "SessionExpired",
            "description": "<p>User session has expired.</p>"
          },
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "InactiveAccount",
            "description": "<p>The account is inactive. Please contact admin.</p>"
          }
        ],
        "6xx": [
          {
            "group": "6xx",
            "type": "String",
            "optional": false,
            "field": "GeneralError",
            "description": "<p>Any general / undefined error types will come under this category.</p>"
          },
          {
            "group": "6xx",
            "type": "String",
            "optional": false,
            "field": "MagentoNoPermission",
            "description": "<p>The app doesnot have sufficient permissions to access the information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SessionExpired",
          "content": "HTTP/1.1 401 SessionExpired\n{\n    error: \"Your session has expired. Please sign-in again.\"\n}",
          "type": "json"
        },
        {
          "title": "GeneralError",
          "content": "HTTP/1.1 600 GeneralError\n{\n    error: \"An error occured. Please try again.\"\n}",
          "type": "json"
        },
        {
          "title": "MagentoNoPermission",
          "content": "HTTP/1.1 602 MagentoNoPermission\n{\n    error: \"The app doesnot have sufficient permissions to access the information.\"\n}",
          "type": "json"
        },
        {
          "title": "InactiveAccount",
          "content": "HTTP/1.1 403 InactiveAccount\n{\n   \"error\": \"The account is inactive. Please contact admin.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PATCH",
    "url": "/order/:orderId",
    "title": "Save Order",
    "description": "<p>Updates the order with the details provided</p>",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>Unique ID of the order</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"RECEIVED\"",
              "\"CONFIRMED\"",
              "\"PROCESSING\"",
              "\"SHIPPED\"",
              "\"DELIVERED\"",
              "\"CANCELLED\""
            ],
            "optional": false,
            "field": "status",
            "description": "<p>Which status the order is moving to.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params:",
          "content": "{\n    \"status\": \"SHIPPED\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique ID of the order.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"id\": \"8743689\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apis/orders.js",
    "groupTitle": "Order",
    "name": "PatchOrderOrderid",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Build-Number",
            "description": "<p>The Build number of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Type of the device. iOS/Android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-OS-Version",
            "description": "<p>Device OS version. Used during the time of removing app support for an OS Version.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Currency",
            "description": "<p>Currency based on device locale.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>AuthToken received during login.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CommonHeader",
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Currency\": \"$\"\n}",
          "type": "json"
        },
        {
          "title": "AuthHeader",
          "content": "{\n    \"Authorization\": \"Bearer YWxhZGRpbjpvcGVuc2VzYW1l\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "SessionExpired",
            "description": "<p>User session has expired.</p>"
          },
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "InactiveAccount",
            "description": "<p>The account is inactive. Please contact admin.</p>"
          }
        ],
        "6xx": [
          {
            "group": "6xx",
            "type": "String",
            "optional": false,
            "field": "GeneralError",
            "description": "<p>Any general / undefined error types will come under this category.</p>"
          },
          {
            "group": "6xx",
            "type": "String",
            "optional": false,
            "field": "MagentoNoPermission",
            "description": "<p>The app doesnot have sufficient permissions to access the information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SessionExpired",
          "content": "HTTP/1.1 401 SessionExpired\n{\n    error: \"Your session has expired. Please sign-in again.\"\n}",
          "type": "json"
        },
        {
          "title": "GeneralError",
          "content": "HTTP/1.1 600 GeneralError\n{\n    error: \"An error occured. Please try again.\"\n}",
          "type": "json"
        },
        {
          "title": "MagentoNoPermission",
          "content": "HTTP/1.1 602 MagentoNoPermission\n{\n    error: \"The app doesnot have sufficient permissions to access the information.\"\n}",
          "type": "json"
        },
        {
          "title": "InactiveAccount",
          "content": "HTTP/1.1 403 InactiveAccount\n{\n   \"error\": \"The account is inactive. Please contact admin.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/report/analytics",
    "title": "Analytics",
    "description": "<p>Returns the Google Analytics report</p>",
    "group": "Report",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dateFrom",
            "description": "<p>From date, the date from infomation has to be fetched from Google Analytics server. The date format will be in yyyy/MM/dd</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dateTo",
            "description": "<p>The date upto the infomation to be collecetd from Google Analytics server. The date format will be in yyyy/MM/dd</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "siteId",
            "description": "<p>Unique ID of the site, for fetching report of a site.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params:",
          "content": "{\n  \"dateFrom\": \"2020/03/21\",\n  \"dateTo\": \"2020/03/21\"\n  \"siteId\": \"4359989\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "hits",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "users",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sessionsPerUser",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sessions",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sessionDuration",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "timeOnPage",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "bounces",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "bounceRate",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "avgSessionDuration",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "countryWise",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "countryWise.code",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "countryWise.sessoins",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pageWise",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pageWise.hostname",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pageWise.pagePath",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pageWise.sessions",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pageWise.pageValue",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "sourceWise",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sourceWise.sourceMedium",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sourceWise.sessions",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sourceWise.users",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sourceWise.organicSearches",
            "description": "<p>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n         \"hits\": 53,\n         \"users\": 16,\n         \"sessionsPerUser\":1.25,\n         \"sessions\": 20,\n         \"sessionDuration\":1036.0,\n         \"timeOnPage\":1037.0,\n         \"bounces\": 11,\n         \"bounceRate\":55.00000000000001,\n         \"avgSessionDuration\":51.8\n\n         \"countryWise\": [\n             {\n                 \"code\":\"GB\",\n                 \"sessions\":2\n             },\n             {\n                 \"code\":\"IN\",\n                 \"sessions\":13\n             }\n         ],\n\n         \"pageWise\": [ {\n                 \"hostname\":\"localhost\",\n                 \"pagePath\":\"/taarikaLocal/\",\n                 \"sessions\":2,\n                 \"pageValue\":0.0\n             }, {\n                 \"hostname\":\"taarikajohnshop.com\",\n                 \"pagePath\":\"/\",\n                 \"sessions\":12,\n                 \"pageValue\":0.0\n             } ],\n \n\t        \"sourceWise\": [ {\n             \"sourceMedium\":\"(direct) / (none)\",\n             \"sessions\":5,\n             \"users\":4,\n             \"organicSearches\":0\n          }, {\n             \"sourceMedium\":\"ameliahome.xyz / referral\",\n             \"sessions\":1,\n             \"users\":1,\n             \"organicSearches\":0\n         }]\n     }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "6xx": [
          {
            "group": "6xx",
            "type": "Object",
            "optional": false,
            "field": "GoogleSessionExpired",
            "description": "<p>Contains the url, provided by Google, for Google Analytics login.</p>"
          },
          {
            "group": "6xx",
            "type": "String",
            "optional": false,
            "field": "GeneralError",
            "description": "<p>Any general / undefined error types will come under this category.</p>"
          }
        ],
        "4xx": [
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "SessionExpired",
            "description": "<p>User session has expired.</p>"
          },
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "InactiveAccount",
            "description": "<p>The account is inactive. Please contact admin.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GoogleSessionExpired",
          "content": "HTTP/1.1 601 Google Session Expired\n{\n     url: \"https://login.googleanalytics.com\"\n}",
          "type": "json"
        },
        {
          "title": "SessionExpired",
          "content": "HTTP/1.1 401 SessionExpired\n{\n    error: \"Your session has expired. Please sign-in again.\"\n}",
          "type": "json"
        },
        {
          "title": "GeneralError",
          "content": "HTTP/1.1 600 GeneralError\n{\n    error: \"An error occured. Please try again.\"\n}",
          "type": "json"
        },
        {
          "title": "InactiveAccount",
          "content": "HTTP/1.1 403 InactiveAccount\n{\n   \"error\": \"The account is inactive. Please contact admin.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apis/analytics.js",
    "groupTitle": "Report",
    "name": "GetReportAnalytics",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Build-Number",
            "description": "<p>The Build number of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Type of the device. iOS/Android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-OS-Version",
            "description": "<p>Device OS version. Used during the time of removing app support for an OS Version.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Currency",
            "description": "<p>Currency based on device locale.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>AuthToken received during login.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CommonHeader",
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Currency\": \"$\"\n}",
          "type": "json"
        },
        {
          "title": "AuthHeader",
          "content": "{\n    \"Authorization\": \"Bearer YWxhZGRpbjpvcGVuc2VzYW1l\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/user/:userId",
    "title": "Get User",
    "description": "<p>Returns user information associated with the userid</p>",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Unique ID of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Unique ID of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>Company name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email address of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "zip",
            "description": "<p>Zipcode of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Country of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "telephone",
            "description": "<p>Telephone of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"TRIAL\"",
              "\"PAID\"",
              "\"EXPIRED\"",
              "\"NOTACTIVATED\""
            ],
            "optional": false,
            "field": "licenseStatus",
            "defaultValue": "NOTACTIVATED",
            "description": "<p>Indicates the users account status, whether it is in trail peroid, purchased, other not activated (payment failure) state.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activationCode",
            "description": "<p>Activation code of the user. This will be a valid GUID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "sites",
            "description": "<p>List of sites available for the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sites.token",
            "description": "<p>Unique token of the site.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sites.name",
            "description": "<p>An identifiable name of the site.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"userId\": \"9389\",\n   \"firstname\": \"John\",\n   \"lastname\": \"Doe\",\n   \"company\": \"Digital Mesh\",\n   \"email\": \"user@digitalmesh.com\",\n   \"address\": \"Address Line 1, Address Line 2\",\n   \"city\": \"Kochi\",\n   \"state\": \"Kerala\",\n   \"zip\": \"123456\",\n   \"country\" : \"India\",\n   \"telephone\": \"1234567900\",\n   \"licenseStatus\": \"PAID\",\n   \"activationCode\": \"3215Y-HSDHY7-328DH-GD72KJ\",\n   \"sites\": [{ \n      \"token\": \"9287-99JI-9843J-PUU398\",\n      \"name\": \"TextLocal\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apis/user.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Build-Number",
            "description": "<p>The Build number of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Type of the device. iOS/Android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-OS-Version",
            "description": "<p>Device OS version. Used during the time of removing app support for an OS Version.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Currency",
            "description": "<p>Currency based on device locale.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>AuthToken received during login.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CommonHeader",
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Currency\": \"$\"\n}",
          "type": "json"
        },
        {
          "title": "AuthHeader",
          "content": "{\n    \"Authorization\": \"Bearer YWxhZGRpbjpvcGVuc2VzYW1l\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "InactiveAccount",
            "description": "<p>The account is inactive. Please contact admin.</p>"
          },
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "SessionExpired",
            "description": "<p>User session has expired.</p>"
          }
        ],
        "6xx": [
          {
            "group": "6xx",
            "type": "String",
            "optional": false,
            "field": "GeneralError",
            "description": "<p>Any general / undefined error types will come under this category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "InactiveAccount",
          "content": "HTTP/1.1 403 InactiveAccount\n{\n   \"error\": \"The account is inactive. Please contact admin.\"\n}",
          "type": "json"
        },
        {
          "title": "SessionExpired",
          "content": "HTTP/1.1 401 SessionExpired\n{\n    error: \"Your session has expired. Please sign-in again.\"\n}",
          "type": "json"
        },
        {
          "title": "GeneralError",
          "content": "HTTP/1.1 600 GeneralError\n{\n    error: \"An error occured. Please try again.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/user/register",
    "title": "Register User",
    "description": "<p>Register a new user in the system</p>",
    "name": "Register",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Unique ID of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>Company name of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email address of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zip",
            "description": "<p>Zipcode of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Country of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "telephone",
            "description": "<p>Telephone of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user, will be a base64 string.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"firstname\": \"John\",\n   \"lastname\": \"Doe\",\n   \"company\": \"Digital Mesh\",\n   \"email\": \"user@digitalmesh.com\",\n   \"address\": \"Address Line 1, Address Line 2\",\n   \"city\": \"Kochi\",\n   \"state\": \"Kerala\",\n   \"zip\": \"123456\",\n   \"country\" : \"India\",\n   \"telephone\": \"1234567900\",\n   \"password\": \"UGFzc3dvcmQxMjMj\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Unique ID of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"userId\": \"9389\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apis/user.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Build-Number",
            "description": "<p>The Build number of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Type of the device. iOS/Android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-OS-Version",
            "description": "<p>Device OS version. Used during the time of removing app support for an OS Version.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Currency",
            "description": "<p>Currency based on device locale.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CommonHeader",
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Currency\": \"$\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "6xx": [
          {
            "group": "6xx",
            "type": "String",
            "optional": false,
            "field": "GeneralError",
            "description": "<p>Any general / undefined error types will come under this category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GeneralError",
          "content": "HTTP/1.1 600 GeneralError\n{\n    error: \"An error occured. Please try again.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PATCH",
    "url": "/user/:userId",
    "title": "Update User",
    "description": "<p>Updates the user profile information</p>",
    "name": "Update_User",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Unique ID of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>Company name of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email address of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zip",
            "description": "<p>Zipcode of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Country of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "telephone",
            "description": "<p>Telephone of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"firstname\": \"John\",\n   \"lastname\": \"Doe\",\n   \"company\": \"Digital Mesh\",\n   \"email\": \"user@digitalmesh.com\",\n   \"address\": \"Address Line 1, Address Line 2\",\n   \"city\": \"Kochi\",\n   \"state\": \"Kerala\",\n   \"zip\": \"123456\",\n   \"country\" : \"India\",\n   \"telephone\": \"1234567900\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Unique ID of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"userId\": \"9389\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apis/user.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Build-Number",
            "description": "<p>The Build number of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Type of the device. iOS/Android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-OS-Version",
            "description": "<p>Device OS version. Used during the time of removing app support for an OS Version.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Currency",
            "description": "<p>Currency based on device locale.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>AuthToken received during login.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CommonHeader",
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Currency\": \"$\"\n}",
          "type": "json"
        },
        {
          "title": "AuthHeader",
          "content": "{\n    \"Authorization\": \"Bearer YWxhZGRpbjpvcGVuc2VzYW1l\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "InactiveAccount",
            "description": "<p>The account is inactive. Please contact admin.</p>"
          },
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "SessionExpired",
            "description": "<p>User session has expired.</p>"
          }
        ],
        "6xx": [
          {
            "group": "6xx",
            "type": "String",
            "optional": false,
            "field": "GeneralError",
            "description": "<p>Any general / undefined error types will come under this category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "InactiveAccount",
          "content": "HTTP/1.1 403 InactiveAccount\n{\n   \"error\": \"The account is inactive. Please contact admin.\"\n}",
          "type": "json"
        },
        {
          "title": "SessionExpired",
          "content": "HTTP/1.1 401 SessionExpired\n{\n    error: \"Your session has expired. Please sign-in again.\"\n}",
          "type": "json"
        },
        {
          "title": "GeneralError",
          "content": "HTTP/1.1 600 GeneralError\n{\n    error: \"An error occured. Please try again.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/user/verifyemail",
    "title": "VerifyEmail",
    "description": "<p>Generate and send verification link for verifying email address of the user.</p>",
    "name": "VerifyEmail",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email address provided by the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Please verify email by clicking the link send to the address <code>email</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   message: \"We have sent a verification email to your email address. Please follow the instructions in the email to verify your account.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apis/user.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "App-Version",
            "description": "<p>Version of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Build-Number",
            "description": "<p>The Build number of the application.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-Type",
            "description": "<p>Type of the device. iOS/Android.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Device-OS-Version",
            "description": "<p>Device OS version. Used during the time of removing app support for an OS Version.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Currency",
            "description": "<p>Currency based on device locale.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CommonHeader",
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Currency\": \"$\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "6xx": [
          {
            "group": "6xx",
            "type": "String",
            "optional": false,
            "field": "GeneralError",
            "description": "<p>Any general / undefined error types will come under this category.</p>"
          }
        ],
        "4xx": [
          {
            "group": "4xx",
            "type": "String",
            "optional": false,
            "field": "InactiveAccount",
            "description": "<p>The account is inactive. Please contact admin.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GeneralError",
          "content": "HTTP/1.1 600 GeneralError\n{\n    error: \"An error occured. Please try again.\"\n}",
          "type": "json"
        },
        {
          "title": "InactiveAccount",
          "content": "HTTP/1.1 403 InactiveAccount\n{\n   \"error\": \"The account is inactive. Please contact admin.\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
