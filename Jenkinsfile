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
    stage('Start Backend') {
        steps {
            dir('todo-backend') {
                sh 'nohup npm run dev > backend.log 2>&1 &'
                echo "Hello 😑😑"
            }
        }
    }
    stage('Start Frontend') {
    steps {
        dir('todo-frontend') {
            sh 'nohup npm run dev > frontend.log 2>&1 &'
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