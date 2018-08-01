#!/usr/bin/env groovy

pipeline {
  agent { dockerfile true }
  stages {
    stage('Check Version') {
      steps {
        echo 'Checking the version ...'
        echo env.BRANCH_NAME
        sh 'node --version'
      }
    }
    stage('Run test suites') {
      steps {
        echo 'Running all test suites ...'
        input 'Go further?'
      }
    }
    stage('Deploy to the target server') {
      steps {
        echo 'Deploying the application ...'
      }
    }
  }
}