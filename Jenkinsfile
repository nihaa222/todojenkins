pipeline {
    agent any
    
    environment {
        // Credentials for MongoDB and API Base URL
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
        
        stage('Backend Build') {
            steps {
                dir('todo-backend') {
                    sh 'npm run build'
                }
            }
        }
        
        stage('Frontend Build') {
            steps {
                dir('todo-frontend') {
                    sh 'npm run build'
                }
            }
        }
        
        stage('Start Backend') {
            steps {
                dir('todo-backend') {
                    // Kill any existing backend processes
                    sh 'pkill -f "npm run dev" || true'
                    // Start backend on port 3000
                    sh 'nohup npm run dev > backend.log 2>&1 &'
                }
            }
        }
        
        stage('Start Frontend') {
            steps {
                dir('todo-frontend') {
                    // Kill any existing frontend processes
                    sh 'pkill -f "npm run dev" || true'
                    // Start frontend on port 5000, listening on all interfaces
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
        
        always {
            // Optional: Archive logs or artifacts
            archiveArtifacts artifacts: '**/backend.log,**/frontend.log', allowEmptyArchive: true
        }
    }
}