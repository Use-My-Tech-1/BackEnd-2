# Use My Tech Stuff API

##### https://use-tech.herokuapp.com/

## Endpoints

\*_Method column includes anchor links_

| Method                              | Endpoint                | Required                                                                  | Description                                                            |
| ----------------------------------- | ----------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [POST](#renter--owner-registration) | `/api/auth/register`    | `username`, `password`, `email`, `owner`                                  | Create new renter / owner. Owner is a boolean that defaults to false.  |
| [POST](#renter--owner-login)        | `/api/auth/login`       | `username`, `password`                                                    | Logs user in. Returns token and owner boolean.                         |
| [GET](#get-all-items)               | `/api/items`            | No requirements                                                           | Shows all items in database.                                           |
| [GET](#get-single-item)             | `/api/items/:id`        | Item id                                                                   | Shows single item from database.                                       |
| [GET](#get-renter)                  | `/api/renter`           | Valid token                                                               | Shows renter user profile.                                             |
| [GET](#get-rented-items)            | `/api/renter/items`     | Valid token                                                               | Shows rented items for user.                                           |
| [POST](#add-item-to-list)           | `/api/renter/items/:id` | Valid token                                                               | Adds item to renters account, makes item unavailable. No request body. |
| [GET](#get-owner)                   | `/api/owner`            | Valid token                                                               | Gets owner user profile.                                               |
| [GET](#get-owner-items)             | `/api/owner/items`      | Valid token                                                               | Gets all owner added items.                                            |
| [GET](#get-owner-item)              | `api/owner/items/:id`   | Valid token, item id                                                      | Gets single item for owner.                                            |
| [POST](#add-item)                   | `/api/owner/items`      | Valid token, `itemName`, `price`, `description`, `rentalTerm`, `imageUrl` | Adds item for rent.                                                    |
| [PUT](#update-item)                 | `/api/owner/items/:id`  | Valid token, item id, at least 1 item property                            | Updates owner item.                                                    |
| [DELETE](#delete-item)              | `/api/owner/items/:id`  | Valid token, item id                                                      | Deletes item from database.                                            |

---

### Renter / Owner Registration

**[POST]** `/api/auth/register`

- **Access**: Public
- **Response**: Returns new user object.

**Parameters**:

| Field    | Data-Type | Required | Notes                 |
| -------- | --------- | -------- | --------------------- |
| username | string    | yes      | Must be unique value. |
| password | string    | yes      | 128 character limit.  |
| email    | string    | yes      | 128 character limit.  |
| owner    | boolean   | no       | Defaults to false.    |
| fullName | string    | no       | 128 character limit.  |
| address  | string    | no       | 128 character limit.  |
| city     | string    | no       | 50 character limit.   |
| state    | string    | no       | 50 character limit.   |

**Example object to post**:

```
{
  username: 'coolguy123',
  password: 'password',
  email: 'JohnDoe@gmail.com',
  fullName: 'John Doe',
  address: '1408 Sandy Lane',
  city: 'Pleasantville',
  state: 'PA',
  owner: true
}
```

---

### Renter / Owner Login

**[POST]** `/api/auth/login`

- **Access**: Public
- **Response**: Returns token to authenticate user, user id, welcome message, and owner boolean.

**Parameters**:

| Name     | Type   | Required |
| -------- | ------ | -------- |
| username | string | yes      |
| password | string | yes      |

**Example object to post**:

```
{
    username: 'coolguy123',
    password: 'password'
}
```

---

### Get All Items

**[GET]** `/api/items`

- **Access**: Public
- **Response**: Returns array of all items in the database.

---

### Get Single Item

**[GET]** `/api/items/:id`

- **Access**: Public
- **Response**: Returns single item object.

**Parameters**:
Expects item id in API call.

---

### Get Renter

**[GET]** `/api/renter`

- **Access**: Private
- **Response**: Returns renter profile object.

**Parameters**:
Authorization header required for route access.

---

### Get Rented Items

**[GET]** `/api/renter/items`

- **Access**: Private
- **Response**: Returns array of rented items.

**Parameters**:
Authorization header required for route access.

---

### Add Item To List

**[POST]** `/api/renter/items/:id`

- **Access**: Private
- **Response**: Returns 1 upon successful response.

**Parameters**:
Authorization header required for route access. Expects item id in API call.

---

### Get Owner

**[GET]** `/api/owner`

- **Access**: Private
- **Response**: Returns owner profile object.

**Parameters**:
Authorization header required for route access.

---

### Get Owner Items

**[GET]** `/api/owner/items`

- **Access**: Private
- **Response**: Returns array of owner items.

**Parameters**:
Authorization header required for route access.

---

### Get Owner Item

**[GET]** `/api/owner/items/:id`

- **Access**: Private
- **Response**: Returns single owner item.

**Parameters**:
Authorization header required for route access. Expects item id in API call.

---

### Add Item

**[POST]** `/api/owner/items`

- **Access**: Private
- **Response**: Returns new item object.

**Parameters**:
Authorization header required.

| Field       | Data-Type | Required | Notes                     |
| ----------- | --------- | -------- | ------------------------- |
| itemName    | string    | yes      |                           |
| price       | decimal   | yes      | Precision: 13 Scale: 2    |
| description | text      | yes      |                           |
| rentalTerm  | string    | yes      | 128 character limit.      |
| available   | boolean   | no       | Defaults to true          |
| imageUrl    | string    | no       | Provide URL of item image |

**Example object to post**:

```
{
  itemName: 'Samsung QN85Q900TS 85 QLED TV w/ a Samsung HW-Q950T Soundbar Bundle (2020)',
  price: 499.99,
  description: 'TREAL 8K WITH INFINITY SCREEN: See the mind-blowing sharpness and depth of real 8K with 16 times more resolution than HDTV.',
  rentalTerm: 'Monthly',
  available: true,
  imageUrl: 'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/A3YFS200811PSBef.jpg'
}
```

---

### Update Item

**[PUT]** `/api/owner/items/:id`

- **Access**: Private
- **Response**: Returns 1 upon successful response.

**Parameters**:
Authorization header required for route access. Expects item id in API call. Any item property may be updated in PUT request.

---

### Delete Item

**[DELETE]** `/api/owner/items/:id`

- **Access**: Private
- **Response**: Returns count of deleted items.

**Parameters**:
Authorization header required for route access. Expects item id in API call.

---

```

```
