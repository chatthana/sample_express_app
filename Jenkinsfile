#!/usr/bin/env groovy

pipeline {
  agent { dockerfile true }
  stages {
    stage('Build the image') {
      echo 'Building the image ...'
      script {
        docker.build 'chatthana/sample_express_app:latest'
      }
    }
  }
}