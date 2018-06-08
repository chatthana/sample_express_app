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
      sh 'node --version'
    }
  }
}