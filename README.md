## Description

Phase 5 Project.
My Application is a place for people to add novels they are reading to a reading list. model, associations, and views are on this page. will be using Async Redux
Views:
Home - Landing page where it shows instructions on how to add Novels
Novel List- the list of  user's Novels and button to allow user to add novel as well
Novel details - shows summary of novel publisher, translator, and allow user to edit/delete novel
Novel form - a form for adding a novel nested forms for publisher and translator
translators - list of translators for novels user owns
Translator - list of novel that belongs to translator and user owns
publishers - list of publishers for novels that the user's own
publisher - show list of novels that belong to that publisher that the user owns 

## Setup

fork and clone this repo 
navigate to where you cloned this and check out the setup below

you may need to manually start postgresql
```console
$ sudo service postgresql start
```

Rails setup
```console
$ bundle install
$ rails db:migrate db:seed
$ rails s
```

React setup
```console
$ npm install --prefix client
$ npm start --prefix client
```

For testing deploy enviorment after doing react setup you can do 
```console
$ npm build --prefix client
$ mv client/build/* public
$ rails s
```

## Resources

- favicon url https://www.iconarchive.com/show/google-play-icons-by-marcus-roberto/Google-Play-Books-icon.html
- novel info https://www.novelupdates.com 
 
