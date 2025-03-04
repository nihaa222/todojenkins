pipeline {
    agent any
    stages {
        stage("Clone Repository"){
            steps {
               git branch: 'main', url: 'https://github.com/nihaa222/todojenkins.git'
            }
        }
        stage("Print Message"){
            steps {
                echo "Todo App Build Started"
            }
        }
    }
}