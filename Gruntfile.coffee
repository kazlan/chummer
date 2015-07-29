module.exports = (grunt) ->

    # Carga de plugins
    grunt.loadNpmTasks 'grunt-contrib-uglify'
    grunt.loadNpmTasks 'grunt-browser-sync'
    grunt.loadNpmTasks 'grunt-contrib-jade'
    grunt.loadNpmTasks 'grunt-contrib-coffee'
    grunt.loadNpmTasks 'grunt-contrib-sass'
    grunt.loadNpmTasks 'grunt-contrib-watch'
    grunt.loadNpmTasks 'grunt-contrib-concat'
    grunt.loadNpmTasks 'grunt-bower-install'
    grunt.loadNpmTasks 'grunt-contrib-copy'
    grunt.loadNpmTasks 'grunt-newer'

    grunt.initConfig
        pkg: grunt.file.readJSON 'package.json'

    # DEFINICION DE LAS TAREAS
        uglify:
            build:
                files:
                    'build/assets/libs.min.js': ['temp/libs.js']
    #- BrowserSync
        browserSync:
            bsFiles:
                src: 'build/**/*'
            options:
                server:
                    baseDir: "build/"
                ui:
                    port: 8080
                open: false
                notify: false
                watchTask: true
    #- Jade
        jade:
            devel:
                options:
                    pretty: true
                files: [
                    expand: true
                    cwd: 'src/'
                    src: ['**/*.jade']
                    dest: 'build'
                    ext: '.html'
                    extDot: 'first'
                    ]
    #- Coffee
        coffee:
            devel:
                files: [
                    expand: true
                    cwd: 'src/'
                    src: ['**/*.coffee']
                    dest: 'build'
                    ext: '.js'
                    extDot: 'first'
                    ]
    #- Sass
        sass:
            devel:
                files: [
                    expand: true
                    cwd: 'src/sass/'
                    src: ['*.sass']
                    dest: 'build/css/'
                    ext: '.css'
                    extDot: 'first'
                    ]

    # WATCHES
        watch:
            options:
                spawn: false
            jade:
                files: "src/**/*.jade"
                tasks: ['jade']
            coffee:
                files: "src/**/*.coffee"
                tasks: ['coffee']
            sass:
                files: "src/sass/*.sass"
                tasks: ['sass']
            js:
                files: "src/**/*.js"
                tasks: ['copy:jscript']
                
    #- Concat js libs
        concat:
            options:
                separator: ';'
            libs:
                files:
                    'temp/libs.js': [
                        'bower_components/angular/angular.js',
                        'bower_components/angular-animate/angular-animate.js',
                        'bower_components/angular-aria/angular-aria.js',
                        'bower_components/angular-material/angular-material.js',
                        'bower_components/angularfire/dist/angularfire.js',
                        'bower_components/angular-route/angular-route.js',
                        'bower_components/firebase/firebase.js',
                        'bower_components/moment/moment.js',
                        'bower_components/ngmap/build/scripts/ng-map.js'
                        ]
                    'build/assets/libs.css': [
                        'bower_components/angular-material/angular-material.css'
                    ]
    #- Copy bower repo
        copy:
            devel:
                files: [
                    expand: true
                    cwd: 'bower_components/'
                    src: ['**']
                    dest: 'build/bower_components/'
                    ]
            jscript:
                files: [
                    expand: true
                    cwd: 'src/'
                    src: ['**/*.js']
                    dest: 'build'
                ]

    # Conjuntos de tareas (default para lanzar grunt sin nada más)
    grunt.registerTask 'server', ['default', 'browserSync','watch']
    grunt.registerTask 'default', ['concat:libs','newer:uglify','newer:jade','newer:coffee','newer:sass']

