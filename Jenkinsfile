pipeline {
  agent any
  tools {
    node 'NodeJS' 
  }
  stages {
    stage ('Install Node libraries') {
      steps {
        bat 'npm install'
      }
    }
    stage ('Build prod dist') {
      steps {
        bat 'ng build --base-href=/test/'
      }
    }
  }
}
