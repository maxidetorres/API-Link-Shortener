FROM nginx

RUN rm -v /etc/nginx/nginx.conf

COPY . /etc/nginx

EXPOSE 80
# EXPOSE 443

CMD service nginx start