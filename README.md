Chains LIRC
===========

This package is a LIRC-device for Chains.

INSTALL
=======

`npm install chains-lirc`

AUTOSTART
=========

- Install `supervisor`
 - `sudo apt-get install supervisor`
 - `pacman -S supervisor`
- Add `/etc/supervisor/conf.d/chains-lirc.conf`
 - With content:


    [program:chains-lirc]
    command=node /usr/sbin/chains-lirc/app.js
    autostart=true
    autorestart=true
    stderr_logfile=/var/log/chains-lirc.err.log
    stdout_logfile=/var/log/chains-lirc.out.log