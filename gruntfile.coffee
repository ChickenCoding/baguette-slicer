###*
# Grunt configuration file
# written in coffeescript for convenience
#
# all for all builds
# minimal for minimal build (low-perf hardware)
# full for full-perf build (high-perf hardware)
# dev for development(pre-build)
###
module.exports = (grunt) ->

  "use strict"

  grunt.initConfig
    pkg : grunt.file.readJSON("package.json")

    ###*
    # Define tasks
    ###

    ###
    # Validate Javascript
    #
    # @task jsLint
    # @subtask all
    # @target src/js/
    ###
    jslint :
      all:
        directives :
          browser: true,
          devel: true,
          node: false,
          rhino: false,
          widget: false,
          windows: false,
          indent: 2,
          maxerr: 10,
          passfail: true,
          bitwise : true
          globals: [
            "window"
            "require"
            "define"
            "requestAnimationFrame"
            "cancelAnimationFrame"
            "module"
          ]
        src : ["src/js/**/*.js"]

    ###*
    # Package Javascript into a single file
    #
    # @task browserify
    # @subtask minimal
    # @target dist/js/mobile/main.js
    ###
    browserify:
      minimal:
        files:
          "dist/js/refactor/app.js": ["src/js/refactor/app.js"]
        options:
          exclude: ["jquery", "underscore"]


    ###*
    # Minify Javascript
    #
    # @task uglify
    # @subtask minimal
    ###
    uglify :
      minimal :
        options :
          preserveComments : false
          report: "gzip"
        files :
          "dist/js/refactor/app.min.js": ["dist/js/refactor/app.js"]

    ###*
    # API generation
    #
    # @task yuidoc
    # @subtask all
    # @src  src/js/
    ###
    yuidoc:
      all:
        options:
          paths: "src/js/"
          outdir: "API/"


    ###*
    # Validate gruntfile.coffee
    #
    # @task coffeelint
    # @src gruntfile.coffee
    # @subtask all
    ###
    coffeelint :
      app : ["gruntfile.coffee"]

  ###*
  # Load the tasks
  #
  ###
  grunt.loadNpmTasks "grunt-jslint"
  grunt.loadNpmTasks "grunt-browserify"
  grunt.loadNpmTasks "grunt-contrib-uglify"
  grunt.loadNpmTasks "grunt-contrib-yuidoc"
  grunt.loadNpmTasks "grunt-coffeelint"

  ###*
  # Register Tasks
  ###

  ###*
  # Task by default
  # Runs all the tasks
  # runned when call ``grunt`` or ``grunt default``
  #
  # @registeredTask default
  ###
  grunt.registerTask "default", [
    "coffeelint"
    "jslint:all"
    "browserify"
    "uglify:minimal"
  ]

  ###*
  # Task for low perf hardware
  #
  # @registeredTask minimal
  ###
  grunt.registerTask "minimal", [
    "jslint:all"
    "browserify:minimal"
    "uglify:minimal"
  ]

  ###*
  # Task for high perf hardware
  #
  # @registeredTask full
  ###
  grunt.registerTask "full", [
  ]

  ###*
  # Task for development
  #
  # @registeredTask dev
  ###
  grunt.registerTask "dev", [
    "yuidoc:all"
  ]
  
  ###*
  # Task for npm post-install
  #
  # @registeredTask install
  ###
  grunt.registerTask "install", [
    "jslint:all"
    "browserify:minimal"
    "uglify:minimal"
    "yuidoc:all"
  ]


