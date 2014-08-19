sourcemaps : Compass Naked CLI Commando Style
==========

Demos for Source Maps using Compass 1.0.0, Sass 3.3.5, Ruby 2.1.1, Node 0.10.26 in DevTools for Chrome 34
& Firefox 29.

![demo gif](https://dl.dropboxusercontent.com/u/41114960/compass.gif)

### Installing Compass

If you would like to install Compass via bundler just run the command:

```bash
$ gem install compass
```

### Static Server

Start the server from another tab of your CLI within the root of the project directory…

```bash
$ python -m SimpleHTTPServer
```
Access the server on the following URI…

```bash
$ http://127.0.0.1:8000
```

### Sass/Compass Sourcemaps

```bash
sass --compass --sourcemap --watch css/src/styles.scss:css/styles.css
```

use this command if shit blows up from the one above.

```bash
$ bundle exec compass compile --sourcemap
```

**You'll also need to note the line in Compass' config.rb which allows for the
mapping in your DevTools.**

```ruby
sass_options = { :debug_info => true }
```
