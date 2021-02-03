# zwallet-api

The Zwallet API for Zwallet Mobile Application.

## About The Project

API build in [Express.js](https://expressjs.com/) and [MySQL](https://www.mysql.com/) for [Quattuor/zwallet-app](https://github.com/Quattuor/zwallet-app)

### Prerequisites

- [npm](https://nodejs.org/en/download/)
  ```sh
  npm install npm@latest -g
  ```
### Schema Database

<div align="center">
    <img width="100%" src="https://trello-attachments.s3.amazonaws.com/6013e0024ce2cb105a2adead/1116x692/ac51347a88cf3a28f2cb191aa40fb088/image.png">
 </div>
 
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Quattuor/zwallet-api.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
   This will install the dependencies inside `node_modules`

### ENV configuration

Please create and make the changes in the .env file.

```
MYSQL_HOST = YOUR_HOSTNAME
MYSQL_USER = YOUR_DBUSER
MYSQL_PASS = YOUR_DBPASS
MYSQL_DATABASE = YOUR_DBNAME

PORT = YOUR_PORT
LOCAL = YOUR_APIURL

SECRET_KEY = "YOUR_SECRET_KEY"

FROM = "YOUR_EMAIL_NAME"
EMAIL = "YOUR_EMAIL_ID"
EPASS = "YOUR_EMAIL_PASS"
```

### Usage

`node index` OR `nodemon start` OR `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:4000/](http://localhost:4000/) to view it in the browser.

### Endpoint

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | /auth/register | Register New User |
| POST | /auth/login | Login User |
| POST | /auth/logout | Logout User |
| GET | /auth/verify | Activate User Account |
| POST | /auth/forgot | Forgot Password User |
| POST | /auth/otp | Verif OTP Forgot Password |
| PATCH | /auth/reset | Reset Password User |

### Documentation

For more info visit [Endpoint User](https://documenter.getpostman.com/view/13522642/TW71k6kF),
                    [Endpoint Transfer and Contact](https://documenter.getpostman.com/view/9503318/TW71mSNK)
## License

Distributed under the [MIT](https://github.com/Quattuor/zwallet-api/blob/main/LICENSE) License.
