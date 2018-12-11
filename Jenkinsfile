pipeline {
  agent { dockerfile true }
  stages {
    stage('Build the image') {
      steps {
        echo 'Building the image'
        script {
          def app = docker.build 'chatthana/sample_express_app:latest'
        }
      }
    }
    stage('Pushing to the registry') {
      steps {
        echo 'Pushing the image to the registry'
        script {
          docker.withRegistry('', 'DKH-1') {
            app.push()
          }
        }
      }
    }
  }
}