# worker-management

## To run the code

Clone the project and run the file

## Create env file and add following credential

```bash
PORT=
MONGO_CONNECT=
JWT_KEY=
NODE_APP_SERVER_PORT=
NODE_APP_SERVER_URL=
```

## Run the code

```
npm run dev
```

## Run the test

```
npm run test
```

### Request Body

```
{
    "email": "test2@gmail.com",
    "name": "test user 2",
    "zipCode": "123123",
    "city":"Gutgaon delhi",
    "age": 26,
    "password": "123123"
}
```

### 1 To create the user post /create with body

### 2 To update the user put /update with body with user id

### 3 to patch the user patch /update with body

### 4 To soft delete the user delete /delete with id in body

### 5 To get all user get /get_users with login cookie

### 6 To get a user get /worko/user/:userid

### 7 login post /suth with email and password
