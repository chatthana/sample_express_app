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
    stage('Deploy to the staging server') {
      when {
        branch 'develop'
      }
      steps {
        echo 'Deploying the application to the staging server ...'
      }
    }
    stage('Deploy to the production server') {
      when {
        branch 'master'
      }
      steps {
        input 'Would you like to go further for the production promotion?'
        echo 'Deploy the application to the production server'
      }
    }
  }
}