#!/usr/bin/env groovy

// pipeline {

//   agent any

//   stages {
//     stage('Install Dependencies') {
//       steps {
//         sh 'npm install -s'
//       }
//     }
//     stage('Test') {
//       steps {
//         sh 'bash pretest.sh'
//       }
//     }
//     stage('Temporary Finish') {
//       steps {
//         echo 'Ok! stop at this point first'
//       }
//     }
//   }
// }

pipeline {
  agent { dockerfile true }
  stages {
    stage('Check Version') {
      steps {
        echo 'Checking the version ...'
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