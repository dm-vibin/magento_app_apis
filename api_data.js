define({ "api": [
  {
    "type": "POST",
    "url": "/account/token",
    "title": "Token",
    "description": "<p>Returns a token and other user information by validating the username and password</p>",
    "name": "Token",
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
            "optional": false,
            "field": "activationCode",
            "description": "<p>Activation code of the user. This will be 0000-0000-0000-0000, if the account is in trail period, otherwise a valid GUID.</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\",\n  \"company\": \"Digital Mesh\",\n  \"email\": \"user@digitalmesh.com\",\n  \"address\": \"Address Line 1, Address Line 2\",\n  \"city\": \"Kochi\",\n  \"state\": \"Kerala\",\n  \"zip\": \"123456\",\n  \"country\" : \"India\",\n  \"telephone\": \"1234567900\",\n  \"activationCode\": \"3215Y-HSDHY7-328DH-GD72KJ\",\n  \"sites\": [{ \n     \"name\": \"TextLocal\",\n     \"url\": \"https://textlocal.co/admin\"      \n   }]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apis/token.js",
    "groupTitle": "Account"
  }
] });