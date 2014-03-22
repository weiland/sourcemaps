sourcemaps
==========

Demos for Source Maps using Compass 1.0.0.alpha.19 in DevTools for Chrome 33
& Firefox 29.

In this repo you'll find all relevant branches when
using Source Maps and Compass w/either Grunt, Gulp
or CodeKit.

Branches are listed as the following:

- compass/gulp-compass
- compass/gulp-ruby-sass
- compass/grunt
- compass/codekit

### Installing Compass

You can either run the following commands to install Compass. 

**Bundler**

If you would like to install Compass via bundler just run the command:

```bash
$ bundle install
```

**Without Bundler**

If you would like to install Compass w/out bundler run the command:

```bash
$ gem install compass --pre
```

### Sass/Compass Sourcemaps

```bash
sass --compass --sourcemap --watch css/src/styles.scss:css/styles.css
```

### Compass Sourcemaps

use this command if shit blows up from the one above.

```bash
$ bundle exec compass compile --sourcemap
```

You'll also need to note the line in the Compass config which allows for the
mapping in your DevTools.

```ruby
sass_options = { :debug_info => true }
```