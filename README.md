# Slack Bot - 10lift

Written for 10lift company

---
## Requirements
- #### Knex
    [Official Knex Website](https://knexjs.org/)


### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v14.16.1

    $ npm --version
    6.14.12

If you need to update `npm`, you can make it using `npm`

    $ npm install npm -g

### 
## Configure app

Open `.env` then edit it with your settings. You will need:

- DB_HOST;
- DB_NAME;
- DB_USER;
- DB_PASS;

## Running the project

    $ npm run start