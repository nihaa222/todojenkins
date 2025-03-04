pipeline {
    agent any
    environment {
        MONGODB_URI = credentials('MONGO_URI')
        VITE_API_BASE_URL = credentials('REACT_APP_API_URL')
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
    stage('Install Backend Dependencies '){
        steps{
            dir('todo-backend') {
                sh 'npm install'
            }
        }
    }
    stage('Install Frontend Dependencies'){
        steps{
            dir('todo-frontend'){
                sh 'npm install'
            }
        }
    }
    stage('start backend'){
        steps{
            dir('todo-backend'){
                sh 'npm run dev'
            }
        }
    }
    stage('start frontend'){
        steps{
            dir(todo-frontend){
                sh 'npm run dev'
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