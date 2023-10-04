# Portfolio 
Welcome to my software developer portfolio template built with Next.js and Bootstrap, which helps you showcase your work and skills as a software developer. With this portfolio, you'll be able to impress potential employers or clients with your work and expertise.

The page is hosted for free in github pages, built and deployed using github actions.

## Demo
To view a live demo, click here: https://koffiecode.com

## Prerequisites
* You can easily run the application using the supplied docker-compose file which will start a nodejs server and mount the current folder. 
* If you rather install it locally please get node.js following the instructions in [here](https://github.com/nodesource/distributions/blob/master/README.md). Afterwards change the default npm global path:
    ```
    mkdir ~/.npm-global
    npm config set prefix '~/.npm-global'
    echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.profile
    source ~/.profile
    ```

## Reproducing
* In case you want to have the same result, please follow the installation steps from the [official page](https://nextjs.org/docs/getting-started/installation).
* Move the content of the newly created folder to the root of the repository and replace all the existing folders.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn dev
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

## Customization

### Linking Portfolio to Github
You can link your portfolio to your Github account by changing the githubUserName in `portfolio.js` file.

```javascript
  //  portfolio.js
  githubUserName: 'YOUR GITHUB USERNAME HERE',
```

### Using Emojis
For adding emoji 😃 into the texts in `Portfolio.js`, use the `emoji()` function and pass the text you need as an argument. This would help in keeping emojis compatible across different browsers and platforms.

### Sending emails using the form
I'm using [emailjs](https://www.emailjs.com/) for free in order to send mails using the form at the end of the page. To replicate this you should head to their webpage, create and email service and an email template.

Please keep in mind that you can use the following variables that are passed along from the form in your template: {{user_name}}, {{user_email}} and {{user_name}}.

Once you have set it up you need to create the following Action Secrets in your github repository settings: NEXT_PUBLIC_EMAILJS_PUBLIC_KEY, NEXT_PUBLIC_EMAILJS_SERVICE_ID and NEXT_PUBLIC_EMAILJS_TEMPLATE_ID. These should match the values you can get from the [emailjs dashboard](https://dashboard.emailjs.com/admin/templates/ld3ff7n).

Make sure you pass the secrets as environmental variables during your deployment by modifying the main.yaml:

```
jobs:
  build_next:
    runs-on: ubuntu-latest
    name: Build Next
    steps:
    - uses: actions/checkout@v3
    - id: Build-Next
      env:
        NEXT_PUBLIC_EMAILJS_SERVICE_ID: ${{ secrets.NEXT_PUBLIC_EMAILJS_SERVICE_ID }}
        NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: ${{ secrets.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID }}
        NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: ${{ secrets.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY }}
 
```

## Technologies Used
-   [Next.js](https://nextjs.org/)
-   [axios](https://www.npmjs.com/package/axios)
-   [reactstrap](https://reactstrap.github.io/)
-   [react-reveal](https://www.react-reveal.com/)
-   [react-lottie](https://www.npmjs.com/package/react-lottie)
-   [react-easy-emoji](https://github.com/appfigures/react-easy-emoji)
-   [react-headroom](https://github.com/KyleAMathews/react-headroom)
-   [color-thief](https://github.com/lokesh/color-thief)
-   [emailjs](https://www.emailjs.com/)

## Illustrations
-   [Lottie File Source](https://lottiefiles.com)

## Deployment
Follow the steps listed in [ricardobiundo/ReactPagesAction](https://github.com/ricardobiundo/ReactPagesAction) in order to get your page working.

Basically you need to create the file *.github/workflows/main.yml* in which you define the github build process.

Please don't forget to give my repository a star! ⭐️
