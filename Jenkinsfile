pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                git branch: 'main', url: 'https://github.com/Ashfarell/ebac-cypress-samples.git'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                git branch: 'main', url: 'https://github.com/Ashfarell/ebac-cypress-samples.git'
                sh '''set NO_COLOR=1
npm test'''
            }
        }
        }
}
