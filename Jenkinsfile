pipeline {

  agent any

  stages {

    stage('Clonar repositório') {

      steps {

        git branch: 'main', url: 'https://github.com/Ashfarell/teste-ebac-ui.git'

      }

    }

    stage('Instalar base') {

      steps {

        bat 'npm install'

      }

    }

    
    stage('Realizar os testes') {

      steps {

        bat 'npm run cy:run 

      }

    }

  }

}
