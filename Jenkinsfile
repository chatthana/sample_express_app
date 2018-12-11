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
          appImage = docker.build 'chatthana/sample_express_app:latest'
        }
      }
    }
    stage('Pushing to the registry') {
      steps {
        echo 'Pushing the image to the registry'
        script {
          docker.withRegistry('', 'DKH-1') {
            appImage.push()
          }
        }
      }
    }
  }
}