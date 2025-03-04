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
        
        stage('Prepare Backend') {
            steps {
                dir('todo-backend') {
                    // Change ownership to jenkins user
                    sh 'sudo chown -R jenkins:jenkins .'
                    
                    // Ensure npm cache and node_modules have correct permissions
                    sh 'mkdir -p node_modules'
                    sh 'sudo chmod -R 775 node_modules'
                }
            }
        }
        
        stage('Install Backend Dependencies') {
            steps {
                dir('todo-backend') {
                    // Install dependencies with npm
                    sh 'npm install'
                }
            }
        }
        
        stage('Start Backend') {
            steps {
                dir('todo-backend') {
                    // Start backend with logging
                    sh 'nohup npm run start > backend.log 2>&1 &'
                    
                    // Wait and show logs for debugging
                    sh 'sleep 5 && cat backend.log'
                }
            }
        }
    }
    
    post {
        success {
            echo 'Backend deployment successful! 🚀'
        }
        failure {
            echo 'Backend deployment failed! 💥'
        }
    }
}