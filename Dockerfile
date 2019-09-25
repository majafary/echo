FROM node:10
WORKDIR /usr/app
COPY . .
RUN npm install
CMD [ "sh", "entrypoint.sh" ]
