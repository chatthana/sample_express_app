node {
  stages {
    stage('Checkout SCM') {
      checkout scm
    }
    stage('Build the image') {
      def image = docker.build('chatthana/sample_express_app:latest')
      image.push()
    }
  }
}