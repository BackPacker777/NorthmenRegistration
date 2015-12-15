@echo off

pm2 start .\bin\www --node-args="--harmony"
pm2 monit