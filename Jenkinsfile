pipeline {
    agent any
    stages {
        stage("Clone Repository"){
            steps {
                git "https://github.com/nihaa222/todojenkins.git"
            }
        }
        stage("Print Message"){
            steps {
                echo "Todo App Build Started"
            }
        }
    }
}