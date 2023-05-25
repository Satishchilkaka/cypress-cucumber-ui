#Base image taken from:https://github.com/cypress-io/cypress-docker-images
FROM cypress/browsers:node16.16.0-chrome107-ff107-edge
#Create the folder where our project will be stored
RUN mkdir /cypress-cucumber
#We make it our workdirectory
WORKDIR /cypress-cucumber
#Let's copy the essential files that we MUST use to run our scripts.
COPY ./package.json .
COPY ./cypress.config.js .
COPY ./ ./
#Install the cypress dependencies in the work directory
RUN npm install
RUN npm install cypress
#Executable commands the container will use[Exec Form]
ENTRYPOINT ["npm","run","e2e"]
#With CMD in this case, we can specify more parameters to the last entrypoint.
CMD [""]    