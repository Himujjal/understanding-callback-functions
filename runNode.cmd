@echo off
set filename=%1
nodemon --watch %fileName%.js --exec "cls && node %filename%.js"