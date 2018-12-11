#!/usr/bin/env groovy

pipeline {
  agent { dockerfile true }
  stages {
    stage('Build the image') {
      steps {
        sh 'echo $(whoami)'
      }
    }
  }
}