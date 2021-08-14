## Mapping and Manipulating Web Applications with React Dev Tools
The general aim of the repository is to show the ways in which developer tools
can be used, as the title states, to map and manipulate web applications. 

### Thesis
Exposing React development tools to production can provide a wealth of information
to attackers mapping out your site. In the case of Redux Dev Tools, the `dispatch`
function creates another potential attack vector in the form of uncontrolled user 
input.

### Origin
A few months ago, I found that I was able to navigate to a website's `/admin` page
using Redux Dev Tools to manipulate the site's router. While navigating to `www.example.com/admin`
showed me a `404` page, using the routing actions with Redux Dev Tools took me straight
to the admin page and its related pages.

### Focus
The main focus of this project is Redux Dev Tools and its `dispatch` function,
which allows developers and attackers alike to 'dispatch' actions within web 
applications. Sometimes these actions are limited to Redux 'types' without
any additional information. Other times, large objects accompany a given action
type, which could be manipulated by an attacker.  

### Suggestions for React-Redux Developers
Some of my concerns have been validated by larger sites which expose Redux Dev Tools 
on their production sites but disable the `dispatch` feature. I believe this indicates a 
recognition by other developers of the potential dangers associated with this feature.

You can disable the `dispatch` feature and others with the following code snippet:
```
const composeEnhancers = composeWithDevTools({
    features: {
      pause: true, // start/pause recording of dispatched actions
      lock: true, // lock/unlock dispatching actions and side effects
      persist: true, // persist states on page reloading
      export: true, // export history of actions in a file
      import: 'custom', // import history of actions from a file
      jump: true, // jump back and forth (time travelling)
      skip: true, // skip (cancel) actions
      reorder: true, // drag and drop actions in the history list
      dispatch: false, // dispatch custom actions or action creators
      test: true, // generate tests for the selected actions
    },
  });

const middlewares =
    process.env.NODE_ENV === 'production'
      ? composeEnhancers(applyMiddleware(middleware))
      : composeWithDevTools(applyMiddleware(middleware));
```
Setting any of the features to false will disable them in the production environment,
based on the logic we've written for the `middlewares` variable.