#!/usr/bin/env node

var fs = require('fs');
var exec = require('child_process').exec;
var file = require('file');
var _ = require('underscore')

file.walk('.', function(nothing, dirPath, dirs, files){

    var images = [];
    files.forEach(function (file) {
        var extension = file.substr(file.lastIndexOf('.') + 1);
        if(extension === 'jpg'){
            images.push(file);
        }
    });
    optimize(images);

});

function optimize(images){
    images.forEach(function (imagepath) {
        exec('jpegoptim -m80 '+imagepath.replace(/(\s)/, "\\ "), function(err, stdout, stderr){
            console.log(stdout);
        });
    });
}