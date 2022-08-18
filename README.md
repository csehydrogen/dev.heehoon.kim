# dev.heehoon.kim

```
# conda env setup
conda create -n dev.heehoon.kim
conda activate dev.heehoon.kim
conda install flask gunicorn

# apache setup
sudo apt install apache2

# Add global servername
$ sudo vim /etc/apache2/apache2.conf
ServerName dev.heehoon.kim

# Listen to port (if not using standard port)
$ sudo vim /etc/apache2/ports.conf
Listen 22580

# Enable proxy
sudo a2enmod proxy
sudo a2enmod proxy_http

# setup site
$ sudo vim /etc/apache2/sites-available/dev.heehoon.kim.conf 
<VirtualHost *:22580>
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined

        <Location />
                ProxyPass unix:/home/heehoon/dev.heehoon.kim/dev.heehoon.kim.sock|http://localhost
                ProxyPassReverse unix:/home/heehoon/dev.heehoon.kim/dev.heehoon.kim.sock|http://localhost
        </Location>
</VirtualHost>
$ sudo a2ensite dev.heehoon.kim
$ sudo systemctl reload apache2

# gunicorn service setup
$ sudo cat /etc/systemd/system/dev.heehoon.kim.service 
[Unit]
After=network.target

[Service]
User=heehoon
Group=www-data
WorkingDirectory=/home/heehoon/dev.heehoon.kim
ExecStart=/home/heehoon/miniconda3/envs/dev.heehoon.kim/bin/gunicorn --config gunicorn_config.py wsgi:app

[Install]
WantedBy=multi-user.target
$ sudo systemctl start dev.heehoon.kim
```