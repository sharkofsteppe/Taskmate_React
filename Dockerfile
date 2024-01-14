FROM        node:18-alpine
WORKDIR     /TASKMATE_REACT/
COPY        public/ /TASKMATE_REACT/public
COPY        src/ /TASKMATE_REACT/src
COPY        package.json /TASKMATE_REACT/
RUN         npm install
CMD         ["npm", "start"]

