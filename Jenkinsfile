#!/usr/bin/env groovy

pipeline {

  agent any

  stages {
    stage('Checkout SCM') {
      steps {
        echo 'Pulling from Source Code Management on the cloud'
        checkout scm
      }
    }
    stage('Install Dependencies') {
      steps {
        sh 'npm install -s'
      }
    }
    stage('Test') {
      steps {
        sh 'mocha spec'
      }
    }
    stage('Temporary Finish') {
      steps {
        echo 'Ok! stop at this point first'
      }
    }
  }
}
