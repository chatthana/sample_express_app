node {
  checkout scm

  def image = docker.build('chatthana/sample_express_app:latest')

  image.push()
}