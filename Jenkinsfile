pipeline {
    agent any
    environment {
        MONGODB_URI = credentials('MONGODB_URI')
        VITE_API_BASE_URL = credentials('VITE_API_BASE_URL')
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
    stage('Install Backend Dependencies ') {
        steps {
            dir('todo-backend') {
                sh 'npm install'
            }
        }
    }
    stage('Install Frontend Dependencies'){
        steps {
            dir('todo-frontend') {
                sh 'npm install'
            }
        }
    }
    stage('start backend'){
        steps {
            dir('todo-backend') {
                sh 'nohup npm run dev &'
            }
        }
    }
    stage('start frontend'){
        steps {
            dir('todo-frontend') {
                sh 'nohup npm run dev &'
            }
        }
    }
    }
    post{
        success {
            echo 'Application is ready💕💕'
        }
        failure {
            echo 'Failed💣💣'
        }
    }
}