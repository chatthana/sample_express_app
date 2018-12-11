pipeline {
  agent any
  environment {
    appImage = ''
  }
  stages {
    stage('Build the image') {
      steps {
        echo 'Building the image'
        script {
          appImage = docker.build 'chatthana/sample_express_app:${env.BUILD_NO}'
        }
      }
    }
    stage('Pushing to the registry') {
      steps {
        echo 'Pushing the image to the registry'
        script {
          docker.withRegistry('https://asia.gcr.io', 'gcr:skilllane-platform') {
            appImage.push()
          }
        }
      }
    }
  }
}