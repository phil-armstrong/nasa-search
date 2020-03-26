This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Context

It uses the standard create react app typescript template.

### Libraries

* axios
    * to handle requests to 'back end' server
* styled-components
    * to handle styling
* query-string
    * to make accessing query parameters easier

### How to use

The project is hosting using Google Firebase and is accessible at https://sainsburys-fa417.firebaseapp.com/search

The site is designed mobile-first, although there are only a few media queries used.

Most of the responsiveness is handled by using flexbox when viewing the search page.


Typing in the search box will immediately start a search for that string.

Clicking one of the gallery cards will take you to the assets page.

On the assets page there is a back button that will return you to the previous page.

All the keyword tags are clickable as well which will take you to the search page for that tag.

Please note that the very first image that is returned with a blank query "'Witch Head' Brews Baby Stars" has a weird nasa_id which doesn't return search results when looking up by nasa_id so the asset page doesn't work for that. This is a problem with the backend as far as I can see.

### Future considerations

There are a few further things I'd address with more time on this project, in no particular order:

* Add a debounce to the search field
    * As it stands axios handles this by cancelling previous requests, but if this were a proper application then I'd want to stop the unnecessary calls
* Add audio searching
    * I'm only querying for images currently as an MVP
* More testing
    * I've written a thorough testing suite for the pagination component, but if this were a real app then I'd obviously test much more exhaustively
* Further search criteria
    * The NASA API has a lot of search options, including photographers, locations, dates, etc.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn lint`

Runs linting validation against code.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
