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
        
        stage('Install Backend Dependencies') {
            steps {
                dir('todo-backend') {
                    sh 'npm install'
                }
            }
        }
        
        stage('Install Frontend Dependencies') {
            steps {
                dir('todo-frontend') {
                    sh 'npm install'
                }
            }
        }
        
        stage('Start Backend') {
            steps {
                dir('todo-backend') {
                    // Use start instead of dev for production
                    sh 'nohup npm run start > backend.log 2>&1 &'
                }
            }
        }
        
        stage('Start Frontend') {
            steps {
                dir('todo-frontend') {
                    sh 'nohup npm run dev -- --host 0.0.0.0 --port 5000 > frontend.log 2>&1 &'
                }
            }
        }
    }
    
    post {
        success {
            echo 'Deployment successful! 🚀'
            echo 'Backend accessible at http://localhost:3000'
            echo 'Frontend accessible at http://localhost:5000'
        }
        
        failure {
            echo 'Deployment failed! 💥'
        }
    }
}