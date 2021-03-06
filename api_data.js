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
            "field": "Device-Identifier",
            "description": "<p>Device token to send push notifictions.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CommonHeader",
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Device-Identifier\": \"34889-3248687-324876-324987-324876\"\n}",
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
            "field": "Device-Identifier",
            "description": "<p>Device token to send push notifictions.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CommonHeader",
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Device-Identifier\": \"34889-3248687-324876-324987-324876\"\n}",
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
            "field": "Device-Identifier",
            "description": "<p>Device token to send push notifictions.</p>"
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
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Device-Identifier\": \"34889-3248687-324876-324987-324876\"\n}",
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
            "field": "Device-Identifier",
            "description": "<p>Device token to send push notifictions.</p>"
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
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Device-Identifier\": \"34889-3248687-324876-324987-324876\"\n}",
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
            "field": "Device-Identifier",
            "description": "<p>Device token to send push notifictions.</p>"
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
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Device-Identifier\": \"34889-3248687-324876-324987-324876\"\n}",
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
    "url": "/order/getorder/:orderId",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "siteToken",
            "description": "<p>Unique ID of the site</p>"
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
            "description": "<p>Date on which the order is received. . Format is &quot;yyyy-mm-dd HH:mm:ss&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"PROCESSING\"",
              "\"PENDING\"",
              "\"HOLDED\"",
              "\"COMPLETE\"",
              "\"CLOSED\"",
              "\"CANCELED\""
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
            "description": "<p>The date on which the order status was updated. . Format is &quot;yyyy-mm-dd HH:mm:ss&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currencyCode",
            "description": "<p>The currency on with the transaction was done eg. INR</p>"
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
            "field": "customer.email",
            "description": "<p>Email of the customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "customer.billingAddress",
            "description": "<p>The details of billing address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.billingAddress.addressLine1",
            "description": "<p>The address line one of address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.billingAddress.addressLine2",
            "description": "<p>The address line two of address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.billingAddress.state",
            "description": "<p>The name of the state</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.billingAddress.city",
            "description": "<p>The name of the city</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.billingAddress.zip",
            "description": "<p>The zip code of the address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.billingAddress.country",
            "description": "<p>The country the billing address is in.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.billingAddress.telephone",
            "description": "<p>The telephone number of the person in billing address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "customer.deliveryAddress",
            "description": "<p>The details of delivery address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.deliveryAddress.name",
            "description": "<p>The name of the person who receive the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.deliveryAddress.addressLine1",
            "description": "<p>The address line one of address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.deliveryAddress.addressLine2",
            "description": "<p>The address line two of address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.deliveryAddress.state",
            "description": "<p>The name of the state</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.deliveryAddress.city",
            "description": "<p>The name of the city</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.deliveryAddress.zip",
            "description": "<p>The zip code of the address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.deliveryAddress.country",
            "description": "<p>The country the delivery address is in.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer.deliveryAddress.telephone",
            "description": "<p>The telephone number of the person in delivery address.</p>"
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
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Grant total of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "discount",
            "description": "<p>Discount on order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "shippingAmount",
            "description": "<p>Shipping charges on the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "shippingTaxAmount",
            "description": "<p>Tax on Shipping charges.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "taxAmount",
            "description": "<p>Tax on order amount.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "subtotal",
            "description": "<p>Sub total of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shippingMethod",
            "description": "<p>Name of the service used to ship the package.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "paymentMode",
            "description": "<p>Payment mode used to fulfill the payment.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"8743689\",\n    \"date\": \"2019-12-30 07:10:10\",\n    \"status\": \"PROCESSING\",\n    \"updatedOn\": \"2019-12-30 07:10:10\",\n    \"currencyCode\": \"INR\",\n    \"customer\": {\n        \"name\": \"Darvin Fleming\",\n        \"contact\": \"838877798797\",\n        \"email\": \"david@example.com\",\n        \"billingAddress\": {\n            \"addressLine1\": \"Cochin Special Economic Zone\",\n            \"addressLine2\": \"Kakanad\",\n            \"state\": \"Kerala\",\n            \"city\": \"Kochi\",\n            \"zip\": \"5645645\",\n            \"country\": \"India\",\n            \"telephone\": \"+916545645666\"\n        },\n        \"deliveryAddress\": {\n            \"name\": \"David\",\n            \"addressLine1\": \"Cochin Special Economic Zone\",\n            \"addressLine2\": \"Kakanad\",\n            \"state\": \"Kerala\",\n            \"city\": \"Kochi\",\n            \"zip\": \"456456\",\n            \"country\": \"India\",\n            \"telephone\": \"+914768678678\"\n        }\n    },\n    \"products\": [{\n        \"id\": \"832764\",\n        \"sku\": \"Faces11\",\n        \"name\": \"Faces 11\",\n        \"quantityOrdered\": 1,\n        \"quantityShipped\": 0,\n        \"price\": 800,\n        \"rowTotal\": 800\n    }],\n    \"price\": 865,\n    \"discount\": 0,\n    \"shippingAmount\": 36,\n    \"shippingTaxAmount\": 0,\n    \"taxAmount\": 0,\n    \"subtotal\": 0,\n    \"shippingMethod\": \"Fedex\",\n    \"paymentMode\": \"VISA Credit Card\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apis/orders.js",
    "groupTitle": "Order",
    "name": "GetOrderGetorderOrderid",
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
            "field": "Device-Identifier",
            "description": "<p>Device token to send push notifictions.</p>"
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
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Device-Identifier\": \"34889-3248687-324876-324987-324876\"\n}",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Index of the current page requested. Starts from 1.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "siteToken",
            "description": "<p>Unique token of the site.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"PROCESSING\"",
              "\"PENDING\"",
              "\"HOLDED\"",
              "\"COMPLETE\"",
              "\"CLOSED\"",
              "\"CANCELED\""
            ],
            "optional": false,
            "field": "status",
            "description": "<p>Order of corresponding status to filter.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params:",
          "content": "{\n    \"siteToken\": \"43587-84735-34598-4387\",\n    \"status\": \"PROCESSING\",\n    \"page\": 1\n}",
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
            "field": "page",
            "description": "<p>Index of the current page.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "hasNext",
            "description": "<p>Indicates there is any dat left to fetch.</p>"
          },
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
            "description": "<p>Date and time on which the order is received. Format is &quot;yyyy-mm-dd HH:mm:ss&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"PROCESSING\"",
              "\"PENDING\"",
              "\"HOLDED\"",
              "\"COMPLETE\"",
              "\"CLOSED\"",
              "\"CANCELED\""
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
            "description": "<p>The date and time on which the order status was updated.  Format is &quot;yyyy-mm-dd HH:mm:ss&quot;.</p>"
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
          "content": "HTTP/1.1 200 OK\n {\n     \"page\": 1,\n     \"hasNext\": false,\n     \"orders\": [{\n         \"id\": \"8743689\",\n         \"date\": \"2019-12-30 07:10:10\",\n         \"status\": \"PROCESSING\",\n         \"updatedOn\": \"2019-12-30 07:10:10\",\n         \"customer\": {\n             \"name\": \"Darvin Fleming\",\n             \"contact\": \"838877798797\"\n         },\n         \"price\": 983.00,\n         \"items\": 10\n     }]\n }",
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
            "field": "Device-Identifier",
            "description": "<p>Device token to send push notifictions.</p>"
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
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Device-Identifier\": \"34889-3248687-324876-324987-324876\"\n}",
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
    "url": "/report/dashboard",
    "title": "Get Dashboard",
    "description": "<p>Returns the data from Google Analytics, Magento Admin etc</p>",
    "group": "Report",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dateFrom",
            "description": "<p>From date, the date from infomation has to be fetched from Google Analytics server. The date format will be in yyyy-MM-dd</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dateTo",
            "description": "<p>The date upto the infomation to be collecetd from Google Analytics server. The date format will be in yyyy-MM-dd</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "siteToken",
            "description": "<p>Unique ID of the site, for fetching report of a site.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params:",
          "content": "{\n  \"dateFrom\": \"2020-03-21\",\n  \"dateTo\": \"2020-03-21\"\n  \"siteToken\": \"4359989\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "analytics",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "analytics.url",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "analytics.hits",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "analytics.users",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "analytics.sessionsPerUser",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "analytics.sessions",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "analytics.sessionDuration",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "analytics.timeOnPage",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "analytics.bounces",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "analytics.bounceRate",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "analytics.avgSessionDuration",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "analytics.activeUsers",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "analytics.countryWise",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "analytics.countryWise.code",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "analytics.countryWise.name",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "analytics.countryWise.sessoins",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "analytics.pageWise",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "analytics.pageWise.hostname",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "analytics.pageWise.pagePath",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "analytics.pageWise.sessions",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "analytics.pageWise.pageValue",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "analytics.sourceWise",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "analytics.sourceWise.sourceMedium",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "analytics.sourceWise.sessions",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "analytics.sourceWise.users",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "analytics.sourceWise.organicSearches",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "analytics.dateWise",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "analytics.dateWise.date",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "analytics.dateWise.week",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "analytics.dateWise.hour",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "analytics.dateWise.month",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "analytics.dateWise.year",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "analytics.dateWise.hits",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "analytics.dateWise.sessionsPerUser",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "analytics.dateWise.users",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "analytics.dateWise.sessionDuration",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "analytics.dateWise.avgSessionDuration",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "analytics.dateWise.sessions",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "analytics.dateWise.timeOnPage",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "magento",
            "description": "<p>Details of megento sites, contains the details of recent orders, sales.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "magento.sales",
            "description": "<p>Details of sales.</p>"
          },
          {
            "group": "Success 200",
            "type": "Decimal",
            "optional": false,
            "field": "magento.sales.lifeTimeSales",
            "description": "<p>Total of sales, life time.</p>"
          },
          {
            "group": "Success 200",
            "type": "Decimal",
            "optional": false,
            "field": "magento.sales.today",
            "description": "<p>Total of sales, today.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "magento.orders",
            "description": "<p>List of orders.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "magento.orders.id",
            "description": "<p>Unique ID of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "magento.orders.date",
            "description": "<p>Date and time on which the order is received. Format is &quot;yyyy-mm-dd HH:mm:ss&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"PROCESSING\"",
              "\"PENDING\"",
              "\"HOLDED\"",
              "\"COMPLETE\"",
              "\"CLOSED\"",
              "\"CANCELED\""
            ],
            "optional": false,
            "field": "magento.orders.status",
            "description": "<p>Status of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "magento.orders.updatedOn",
            "description": "<p>The date and time on which the order status was updated.  Format is &quot;yyyy-mm-dd HH:mm:ss&quot;.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "magento.orders.customer",
            "description": "<p>Details of the customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "magento.orders.customer.name",
            "description": "<p>Name of the customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "magento.orders.customer.contact",
            "description": "<p>Contact number of the customer.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "magento.orders.price",
            "description": "<p>The total price of the order, eg: 100.00, formated to two decimal places.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "magento.orders.items",
            "description": "<p>Number of items in the order.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"analytics\": {\n        \"url\":\"https://login.googleanalytics.com\",\n        \"hits\": 53,\n        \"users\": 16,\n        \"sessionsPerUser\":1.25,\n        \"sessions\": 20,\n        \"sessionDuration\":1036.0,\n        \"timeOnPage\":1037.0,\n        \"bounces\": 11,\n        \"bounceRate\":55.00000000000001,\n        \"avgSessionDuration\":51.8,\n\n        \"activeUsers\": 3455,\n\n        \"countryWise\": [{\n            \"code\":\"GB\",\n            \"name\": \"Great Britain\"\n            \"sessions\":2\n        },{\n            \"code\":\"IN\",\n            \"name\": \"India\"\n            \"sessions\":13\n        }],\n\n        \"pageWise\": [ {\n            \"hostname\":\"localhost\",\n            \"pagePath\":\"/taarikaLocal/\",\n            \"sessions\":2,\n            \"pageValue\":0.0\n        }, {\n            \"hostname\":\"taarikajohnshop.com\",\n            \"pagePath\":\"/\",\n            \"sessions\":12,\n            \"pageValue\":0.0\n        } ],\n\n        \"sourceWise\": [ {\n            \"sourceMedium\":\"(direct) / (none)\",\n            \"sessions\":5,\n            \"users\":4,\n            \"organicSearches\":0\n        }, {\n            \"sourceMedium\":\"ameliahome.xyz / referral\",\n            \"sessions\":1,\n            \"users\":1,\n            \"organicSearches\":0\n        }],\n\n        dateWise:[{\n            \"year\": 2019,\n            \"week\": 06,\n            \"month\": 01,\n            \"hour\":\"01\",\n            \"date\": \"2012-01-19\",\n            \"hits\": 0,\n            \"users\": 0,\n            \"sessionsPerUser\": 0.0,\n            \"sessions\": 0,\n            \"sessionDuration\": 0.0,\n            \"timeOnPage\": 0.0,\n            \"avgSessionDuration\": 0.0\n        }]\n    },\n\n    magento: {\n        \"sales\": {\n            \"lifeTimeSales\": 3284778.99,\n            \"today\": 648.98\n        },\n        \"orders\": [{\n            \"id\": \"8743689\",\n            \"date\": \"2019-12-30 07:10:10\",\n            \"status\": \"PROCESSING\",\n            \"updatedOn\": \"2019-12-30 07:10:10\",\n            \"customer\": {\n                \"name\": \"Darvin Fleming\",\n                \"contact\": \"838877798797\"\n            },\n            \"price\": 983.00,\n            \"items\": 10\n        }]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apis/report.js",
    "groupTitle": "Report",
    "name": "GetReportDashboard",
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
            "field": "Device-Identifier",
            "description": "<p>Device token to send push notifictions.</p>"
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
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Device-Identifier\": \"34889-3248687-324876-324987-324876\"\n}",
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
          "title": "InactiveAccount",
          "content": "HTTP/1.1 403 InactiveAccount\n{\n   \"error\": \"The account is inactive. Please contact admin.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/report/sales",
    "title": "Get Sales",
    "description": "<p>Returns the sales and order data from magento admin</p>",
    "group": "Report",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dateFrom",
            "description": "<p>From date, the date from infomation has to be fetched from Google Analytics server. The date format will be in yyyy-MM-dd</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dateTo",
            "description": "<p>The date upto the infomation to be collecetd from Google Analytics server. The date format will be in yyyy-MM-dd</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "siteToken",
            "description": "<p>Unique ID of the site, for fetching report of a site.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Params:",
          "content": "{\n  \"dateFrom\": \"2020-03-21\",\n  \"dateTo\": \"2020-03-21\"\n  \"siteToken\": \"4359989\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "sales",
            "description": "<p>Details of sales.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "sales.salesBasedOnFilter",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sales.salesBasedOnFilter.date",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sales.salesBasedOnFilter.week",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sales.salesBasedOnFilter.hour",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sales.salesBasedOnFilter.month",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sales.salesBasedOnFilter.year",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Decimal",
            "optional": false,
            "field": "sales.salesBasedOnFilter.total",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "sales.previousSales",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sales.previousSales.date",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sales.previousSales.week",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sales.previousSales.hour",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sales.previousSales.month",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sales.previousSales.year",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Decimal",
            "optional": false,
            "field": "sales.previousSales.total",
            "description": "<p>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Decimal",
            "optional": false,
            "field": "lifeTimeSales",
            "description": "<p>Total of sales, life time.</p>"
          },
          {
            "group": "Success 200",
            "type": "Decimal",
            "optional": false,
            "field": "averageOrders",
            "description": "<p>Average orders received during the period.</p>"
          },
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
            "description": "<p>Date and time on which the order is received. Format is &quot;yyyy-mm-dd HH:mm:ss&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"PROCESSING\"",
              "\"PENDING\"",
              "\"HOLDED\"",
              "\"COMPLETE\"",
              "\"CLOSED\"",
              "\"CANCELED\""
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
            "description": "<p>The date and time on which the order status was updated.  Format is &quot;yyyy-mm-dd HH:mm:ss&quot;.</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n    \"sales\": {\n        \"salesBasedOnFilter\": [{\n            \"year\": 2019,\n            \"week\": 06,\n            \"month\": 01,\n            \"hour\":\"01\",\n            \"date\": \"2012-01-19\",\n            \"total\": 4459.0000\n        }],\n        \"previousSales\": [{\n            \"year\": 2019,\n            \"week\": 06,\n            \"month\": 01,\n            \"hour\":\"01\",\n            \"date\": \"2012-01-19\",\n            \"total\": 4459.0000\n        }]\n    },\n    \"lifeTimeSales\": 7201.4,\n    \"averageOrders\": 1440.28,\n    \"orders\": [{\n        \"id\": \"000000011\",\n        \"date\": \"2020-03-01 10:03:35\",\n        \"status\": \"COMPLETE\",\n        \"updatedOn\": \"2020-03-03 06:49:30\",\n        \"customer\": {\n            \"name\": \"Indrani Pillai\",\n            \"contact\": \"9820063354\"\n        },\n        \"price\": 859.0000,\n        \"items\": 1\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apis/report.js",
    "groupTitle": "Report",
    "name": "GetReportSales",
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
            "field": "Device-Identifier",
            "description": "<p>Device token to send push notifictions.</p>"
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
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Device-Identifier\": \"34889-3248687-324876-324987-324876\"\n}",
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
          "title": "InactiveAccount",
          "content": "HTTP/1.1 403 InactiveAccount\n{\n   \"error\": \"The account is inactive. Please contact admin.\"\n}",
          "type": "json"
        },
        {
          "title": "MagentoNoPermission",
          "content": "HTTP/1.1 602 MagentoNoPermission\n{\n    error: \"The app doesnot have sufficient permissions to access the information.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/user/changepassword",
    "title": "Change Password",
    "description": "<p>Change the user's existing password</p>",
    "name": "ChangePassword",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Existing password of the user,will be a base64 string.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>New password of the user, will be a base64 string.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"password\": \"UGFzc3dvcmQxMjMj\",\n   \"newPassword\": \"UGFzc3dvcmQxMjMj\"\n}",
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
            "field": "message",
            "description": "<p>Your password has been sucessfuly changed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   message: \"success\"\n}",
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
            "field": "Device-Identifier",
            "description": "<p>Device token to send push notifictions.</p>"
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
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Device-Identifier\": \"34889-3248687-324876-324987-324876\"\n}",
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
          "title": "GeneralError",
          "content": "HTTP/1.1 600 GeneralError\n{\n    error: \"An error occured. Please try again.\"\n}",
          "type": "json"
        },
        {
          "title": "SessionExpired",
          "content": "HTTP/1.1 401 SessionExpired\n{\n    error: \"Your session has expired. Please sign-in again.\"\n}",
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
    "url": "/user/analytics",
    "title": "Get Analytics Authentiction",
    "description": "<p>Returns the Url to authenticate with google</p>",
    "name": "GetAnalyticsAuthentiction",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "siteToken",
            "description": "<p>Unique ID of the site, for fetching report of a site.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"siteToken\": \"4359989\"\n}",
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
            "field": "url",
            "description": "<p>The url for authentication with Google</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   url: \"https://login.googleanalytics.com\"\n}",
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
            "field": "Device-Identifier",
            "description": "<p>Device token to send push notifictions.</p>"
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
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Device-Identifier\": \"34889-3248687-324876-324987-324876\"\n}",
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
          "title": "GeneralError",
          "content": "HTTP/1.1 600 GeneralError\n{\n    error: \"An error occured. Please try again.\"\n}",
          "type": "json"
        },
        {
          "title": "SessionExpired",
          "content": "HTTP/1.1 401 SessionExpired\n{\n    error: \"Your session has expired. Please sign-in again.\"\n}",
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
            "field": "addressLine1",
            "description": "<p>Address line 1 of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addressLine2",
            "description": "<p>Address line 2 of the User.</p>"
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
            "field": "countryCode",
            "description": "<p>Country code for telephone.</p>"
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
            "optional": false,
            "field": "currencyCode",
            "description": "<p>Currency on which the user processing his/her transactions.</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n   \"userId\": \"9389\",\n   \"firstname\": \"John\",\n   \"lastname\": \"Doe\",\n   \"company\": \"Digital Mesh\",\n   \"email\": \"user@digitalmesh.com\",\n   \"addressLine1\": \"Address Line 1\",\n   \"addressLine2\": \"Address Line 2\",\n   \"city\": \"Kochi\",\n   \"state\": \"Kerala\",\n   \"zip\": \"123456\",\n   \"country\" : \"India\",\n   \"countryCode\": \"+91\",\n   \"telephone\": \"1234567900\",\n   \"currencyCode\": \"INR\",\n   \"sites\": [{ \n      \"token\": \"9287-99JI-9843J-PUU398\",\n      \"name\": \"TextLocal\"\n   }]\n}",
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
            "field": "EmailVerificationPending",
            "description": "<p>User has not yet verified the email.</p>"
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
        ]
      },
      "examples": [
        {
          "title": "EmailVerificationPending",
          "content": "HTTP/1.1 603 EmailVerificationPending\n{\n    error: \"You have not verified you email. Please verify the same.\"\n}",
          "type": "json"
        },
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
            "field": "Device-Identifier",
            "description": "<p>Device token to send push notifictions.</p>"
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
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Device-Identifier\": \"34889-3248687-324876-324987-324876\"\n}",
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
            "field": "addressLine1",
            "description": "<p>Address line 1 of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addressLine2",
            "description": "<p>Address line 2 of the User.</p>"
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
            "field": "countryCode",
            "description": "<p>Country code for telephone.</p>"
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
          "content": "{\n   \"firstname\": \"John\",\n   \"lastname\": \"Doe\",\n   \"company\": \"Digital Mesh\",\n   \"email\": \"user@digitalmesh.com\",\n   \"addressLine1\": \"Address Line 1\",\n   \"addressLine2\": \"Address Line 2\",\n   \"city\": \"Kochi\",\n   \"state\": \"Kerala\",\n   \"zip\": \"123456\",\n   \"country\" : \"India\",\n   \"countryCode\": \"+91\",\n   \"telephone\": \"1234567900\",\n   \"password\": \"UGFzc3dvcmQxMjMj\",\n}",
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
            "field": "Device-Identifier",
            "description": "<p>Device token to send push notifictions.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CommonHeader",
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Device-Identifier\": \"34889-3248687-324876-324987-324876\"\n}",
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
    "type": "POST",
    "url": "/user/registerpushtoken",
    "title": "Register Push Token",
    "description": "<p>Registers a device token for sending push notifications</p>",
    "name": "RegisterPushToken",
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
            "field": "deviceToken",
            "description": "<p>Unique ID of the device.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"userId\": \"4359989\",\n   \"deviceToken\": \"438-3453-435-4354354\"\n}",
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
            "field": "message",
            "description": "<p>Success</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   message: \"success\"\n}",
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
            "field": "Device-Identifier",
            "description": "<p>Device token to send push notifictions.</p>"
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
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Device-Identifier\": \"34889-3248687-324876-324987-324876\"\n}",
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
          "title": "GeneralError",
          "content": "HTTP/1.1 600 GeneralError\n{\n    error: \"An error occured. Please try again.\"\n}",
          "type": "json"
        },
        {
          "title": "SessionExpired",
          "content": "HTTP/1.1 401 SessionExpired\n{\n    error: \"Your session has expired. Please sign-in again.\"\n}",
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
            "field": "addressLine1",
            "description": "<p>Address line 1 of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addressLine2",
            "description": "<p>Address line 2 of the User.</p>"
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
            "field": "countryCode",
            "description": "<p>Country code for telephone.</p>"
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
          "content": "{\n   \"firstname\": \"John\",\n   \"lastname\": \"Doe\",\n   \"company\": \"Digital Mesh\",\n   \"addressLine1\": \"Address Line 1\",\n   \"addressLine2\": \"Address Line 2\",\n   \"city\": \"Kochi\",\n   \"state\": \"Kerala\",\n   \"zip\": \"123456\",\n   \"countryCode\": \"+91\",\n   \"country\" : \"India\",\n   \"telephone\": \"1234567900\"\n}",
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
            "field": "Device-Identifier",
            "description": "<p>Device token to send push notifictions.</p>"
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
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Device-Identifier\": \"34889-3248687-324876-324987-324876\"\n}",
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
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"email\": \"john@example.com\"\n}",
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
            "field": "Device-Identifier",
            "description": "<p>Device token to send push notifictions.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CommonHeader",
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\",\n    \"Device-Identifier\": \"34889-3248687-324876-324987-324876\"\n}",
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
