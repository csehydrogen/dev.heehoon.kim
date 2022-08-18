import multiprocessing

#workers = multiprocessing.cpu_count() * 2 + 1
workers = 1
bind = 'unix:dev.heehoon.kim.sock'
umask = 0o007
reload = True

#logging
accesslog = '-'
errorlog = '-'