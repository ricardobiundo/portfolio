# Curriculum
The following repository is used to host a curriculum page built in vue.js and hosted for free in github pages built and deployed using actions.
## Prerequisites
* Install node.js following the instructions in [here](https://github.com/nodesource/distributions/blob/master/README.md).

* Change the default npm global path:
    ```
    mkdir ~/.npm-global
    npm config set prefix '~/.npm-global'
    echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.profile
    source ~/.profile
    ```

## Reproducing
In case you want to have the same result, follow the next steps:
* Install vue:
    ```
    npm install -g @vue/cli
    # OR
    yarn global add @vue/cli
    ```

* Clone your repository

* Create vue app
    ```
    vue create curriculum
    ```

* Move the content of the newly created folder to the root of the repository.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Deployment
Follow the steps listed in [xRealNeon/VuePagesAction](https://github.com/xRealNeon/VuePagesAction) in order to get your page working.

Basically you need to create the file *.github/workflows/main.yml* in which you define the github build process.