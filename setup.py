#!/usr/bin/env python
from subprocess import call

def main():
    call(['npm', 'install', 'phantomjs'])
    call(['npm', 'install', 'karma'])
    call(['npm', 'install', 'grunt-cli', '-g'])
    call(['npm', 'install', 'grunt-contrib-jasmine', '--save-dev'])
    call(['npm', 'install', 'grunt-contrib-jshint', '--save-dev'])
    call(['npm', 'install', 'grunt-contrib-watch', '--save-dev'])

if __name__ == '__main__':
    main()