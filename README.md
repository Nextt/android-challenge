# android-challenge
This is our android challenge project, fork it to start

## Information ##

This Figma Design shows the flow for the app to be implemented.

[Figma Design Presentation](https://www.figma.com/proto/QoqwGGVP54eSxvOKGtO2jT/Android-Test?node-id=2%3A252&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A252&show-proto-sidebar=1)

The objectives and requirements for this challenge:

[Objectives](./Requirements.md)

## Mock Server ##

The server has mock endpoints to help implement the project

### Installation ###

Requires nodejs

```
npm ci
```

### Run ###

```
npm start
```

Server should be available at `localhost:3001`

### Endpoints ###

#### Login ####

Logs into the app

```
POST /login
body {
  username: string
  password: string
}

Returns 
{
  "name": string,
  "email": string,
  "jwt": string,
}

```

#### User ####

Gets logged user data

```
GET /user

Returns 
{
  "name": string,
  "email": string
}

```

#### Account Data ####

Gets CC and Account data

```
GET /account

Returns
{
  "status": acvite|inactive,
  "balance": number(10,2),
  "accountNumber": string,
  "routingNumber": number(10,0)
}

```

#### Profile ####

Gets full profile

```
GET /profile

Returns
{
  "name": string,
  "email": string,
  "birth_date": string (yyyy-MM-dd),
  "phone_number": int,
  "ssn": string,
  "address": {
    "street": string,
    "city": string,
    "state": string,
    "zip": string
  }
}

```

#### Transactions ####

Gets a list of transactions

```
GET /transactions

params limit int optional

Returns
[
    {
        "id": number(10,0),
        "accountNumber": number(10,0),
        "amount": number(10,2),
        "type": string (credit, deposit, withdrawal),
        "createdOn": string (ISO Date),
        "oldBalance": number(10,2),
        "newBalance": number(10,2),
        "description": string
    },
    ...
]

```
