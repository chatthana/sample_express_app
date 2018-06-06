#!/usr/bin/env groovy

pipeline {

  agent any

  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm install -s'
      }
    }
    stage('Test') {
      steps {
        sh 'bash mocha-hook.sh'
      }
    }
    stage('Temporary Finish') {
      steps {
        echo 'Ok! stop at this point first'
      }
    }
  }
}
