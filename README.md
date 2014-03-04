sourcemaps
==========

Demos for Source Maps using Compass 1.0.0.alpha.18 in DevTools for Chrome 33
& Firefox 29.

In this repo you'll find all relevant branches when
using Source Maps and Compass w/either Grunt, Gulp
or CodeKit.

Branches are listed as the following:

- compass/gulp
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

### Compass & Sourcemaps w/out Grunt, Compass and CodeKit

```bash
sass --compass --sourcemap --watch css/src/styles.scss:css/styles.css
```

You'll also need to note the line in the Compass config which allows for the
mapping in your DevTools.

```ruby
sass_options = { :debug_info => true }
```