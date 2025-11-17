pipeline {
    agent any

    stages {
        stage('Clonar') {
            steps {
                git branch: 'main', url: 'https://github.com/Ashfarell/teste-ebac-ui.git'
            }
        }
        stage('Instalação') {
            steps {
                bat 'npm install'
            }
        }
        stage('Subir servidor') {
            steps {
                bat 'npm start'
            }
        }
        stage('Testes') {
            steps {
                bat 'npm run cy:run'
            }
        }
    }
}
