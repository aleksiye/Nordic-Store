
# School project, web programming 1

This is a simple project meant to showcase basic understanding of JavaScript.
here's a simplified todo list:
  - dynamic content
  - handling of forms and user input
  - jQuerry
  - extras, basically any other use of JavaScript

### What is used on this project

Toolbox: 

- [Theme](https://github.com/tailwindtoolbox/Nordic-Store) by [Amrit Nagi](https://amritnagi.info/)
- HTML
- TailwindCSS
- Javascript
    - JQuery
- npm
- markdown

## Setup steps

create folder structure using file explorer or apropriate terminal commands
it should look like this:
```
└───Project
    └───assets
        ├───css
        ├───docs
        ├───img
        └───js
```

now run the following commands
```shell
npm init
npm install -D tailwindcss
npm install -D @tailwindcss/forms
npm install -D @tailwindcss/typography
npx tailwindcss init
```

a nodemodules folder appears as well as new file called **tailwind.config.js**

next step is to modify the aforementioned file to look like this:
```js
module.exports = {
  content: [
    './*.{html,js}',
    './components/**/*.{html,js}'
  ],
  theme: {
    extend: {
        backgroundImage: {
        'slide-one': "url('https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80')",
        'slide-two': "url('https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM0MTM2fQ&auto=format&fit=crop&w=1600&q=80')",
        'slide-three': "url('https://images.unsplash.com/photo-1519327232521-1ea2c736d34d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```
Also, create input.css and output.css files and put this into input.css file:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Now we're ready to start coding, simply execute 

```npx tailwindcss -i ./assets/css/input.css -o ./assets/css/output.css --watch```

this will countinously check for changes in input.css as well as all files referenced under content: inside our tailwind.config file

For further information please refer to [Full Website Documentation](./assets/docs/website-docs.md)

Template documentation can be found [here](./assets/docs/original-theme-author-readme.md) preserved in its original form as created by **[Amrit Nagi](https://amritnagi.info/)**

