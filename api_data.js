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
          "title": "Request-Example:",
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
            "field": "sites.id",
            "description": "<p>Unique id of the site.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sites.name",
            "description": "<p>An identifiable name of the site.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sites.url",
            "description": "<p>Url of the site.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"userId\": \"9389\",\n  \"authToken\": \"2345678-rt56789-KYHD839-K98399\",\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\",\n  \"company\": \"Digital Mesh\",\n  \"email\": \"user@digitalmesh.com\",\n  \"address\": \"Address Line 1, Address Line 2\",\n  \"city\": \"Kochi\",\n  \"state\": \"Kerala\",\n  \"zip\": \"123456\",\n  \"country\" : \"India\",\n  \"telephone\": \"1234567900\",\n  \"licenseStatus\": \"PAID\",\n  \"activationCode\": \"3215Y-HSDHY7-328DH-GD72KJ\",\n  \"sites\": [{ \n     \"id\": \"928799\",\n     \"name\": \"TextLocal\",\n     \"url\": \"https://textlocal.co/admin\"      \n   }]\n}",
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
          "content": "HTTP/1.1 401 InvalidUser\n{\n  \"error\": \"Invalid username or password\"\n}",
          "type": "json"
        },
        {
          "title": "GeneralError",
          "content": "HTTP/1.1 600 GeneralError\n{\n    error: \"An error occured. Please try again.\"  \n}",
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
          }
        ]
      },
      "examples": [
        {
          "title": "CommonHeader",
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\"\n}",
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
            "field": "Authorization",
            "description": "<p>AuthToken received during login.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CommonHeader",
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\"\n}",
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
            "field": "date",
            "description": "<p>Date's infomation to be fetched from Google Analytics server.</p>"
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
          "title": "Request-Example:",
          "content": "{\n  \"date\": \"2020/03/21\",\n  \"siteId\": \"4359989\"\n}",
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
          "content": "    HTTP/1.1 200 OK\n    {\n         \"hits\": 53,\n         \"users\": 16,\n         \"sessionsPerUser\":1.25,\n         \"sessions\": 20,\n         \"sessionDuration\":1036.0,\n         \"timeOnPage\":1037.0,\n         \"bounces\": 11,\n         \"bounceRate\":55.00000000000001,\n         \"avgSessionDuration\":51.8\n\n         \"countryWise\": [\n             {\n                 \"code\":\"GB\",\n                 \"sessions\":2\n             },\n             {\n                 \"code\":\"IN\",\n                 \"sessions\":13\n             }\n         ],\n\n         \"pageWise\": [ {\n                 \"hostname\":\"localhost\",\n                 \"pagePath\":\"/taarikaLocal/\",\n                 \"sessions\":2,\n                 \"pageValue\":0.0\n             }, {\n                 \"hostname\":\"taarikajohnshop.com\",\n                 \"pagePath\":\"/\",\n                 \"sessions\":12,\n                 \"pageValue\":0.0\n             } ],\n\n\t        \"sourceWise\": [ {\n             \"sourceMedium\":\"(direct) / (none)\",\n             \"sessions\":5,\n             \"users\":4,\n             \"organicSearches\":0\n          }, {\n             \"sourceMedium\":\"ameliahome.xyz / referral\",\n             \"sessions\":1,\n             \"users\":1,\n             \"organicSearches\":0\n         }]\n     }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "String",
            "optional": false,
            "field": "SessionExpired",
            "description": "<p>User session has expired.</p>"
          }
        ],
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
          "content": "HTTP/1.1 401 SessionExpired\n{\n    error: \"Your session has expired. Please sign-in again.\"  \n}",
          "type": "json"
        },
        {
          "title": "GeneralError",
          "content": "HTTP/1.1 600 GeneralError\n{\n    error: \"An error occured. Please try again.\"  \n}",
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
            "field": "Authorization",
            "description": "<p>AuthToken received during login.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CommonHeader",
          "content": "{\n    \"App-Version\": \"0.0.1\",\n    \"Build-Number\": \"0.0.1\",\n    \"Device-Type\": \"Android\",\n    \"Device-OS-Version\": \"10.0.3\"\n}",
          "type": "json"
        },
        {
          "title": "AuthHeader",
          "content": "{\n    \"Authorization\": \"Bearer YWxhZGRpbjpvcGVuc2VzYW1l\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
