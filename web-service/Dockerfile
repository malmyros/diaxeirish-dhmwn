# Base image
FROM node:9.6.1
MAINTAINER Michail Almyros <m.almyros@gmail.com>

# Set the npm logging level
ENV NPM_CONFIG_LOGLEVEL warn

# set the working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Versions
RUN npm -v
RUN node -v

# Install and cache the dependencies
ADD package.json /usr/src/app/package.json
RUN npm install
RUN npm install react-scripts@1.1.4 -g

# Port to listen
EXPOSE 3006

# Environment variables
ENV NODE_ENV development
ENV PORT 3006

# start the app
CMD ["npm", "start"]