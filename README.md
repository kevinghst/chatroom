# Chattabox

Chattabox is an application built using Ruby on Rails, Postgres, and React/Redux.

Explore the app in full at http://chattabox.herokuapp.com

### Features
* User sign-up & authentication using bcrypt and randomly generated session tokens
* Live chat and user-presence detection using Pusher

### Local Setup
1. Git clone
2. Run command-line `npm install` and `bundle install` in main directory
3. Start Rails Server by running `rails s` (make sure Postgres is running)
4. Start webpack by running `npm run webpack --watch`
5. Create database by running `bundle exec rake db:create` followed by `bundle exec rake db:migrate`
6. Visit localhost:3000
