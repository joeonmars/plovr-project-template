plovr-project-template
======================

A project template based on Google Closure Library &amp; Plovr (ver Release-Candidate-2013).
Plovr compiles Closure JS code, as well as Closure Template SOY files.


#System Requirements:
JRE 7 & JDK 7 - Download from www.oracle.com
if still there's issue when building plovr after upgrade, try

$ export JAVA_HOME=$(/usr/libexec/java_home)

$ echo $JAVA_HOME
/Library/Java/JavaVirtualMachines/1.7.0.jdk/Contents/Home


#Instructions:
To publish plovr for development, open terminal and run "sh pathto/build-plovr.sh"
To publish plovr for deployment, publish for development first, open terminal and run "sh pathto/publish-plovr.sh"

To run development, point virtualhost to "development" directory
To run deploy, point virtualhost to "deploy" directory

To test project in advanced compiled mode, use http://../?mode=ADVANCED
To test project in pre-compiled mode (by default), simply ignore the query, or use http://../?mode=SIMPLE

To watch Compass, open terminal and run "sh pathto/build-compass.sh"
To use compiled JS in development mode, publish plovr first, and add ?compile after the site url


#Misc
Plovr Documentation
http://plovr.com/docs.html

Closure Library API Documentation
http://closure-library.googlecode.com/svn/docs/index.html