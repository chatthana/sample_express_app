node {
  stage('Checkout SCM') {
    checkout scm
  }
  stage('Build the image') {
    docker.withRegistry('', 'DKH-1') {
      def image = docker.build('chatthana/sample_express_app:latest')
      image.push()
    }
  }
}