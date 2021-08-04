pipeline {
    
    agent any

    stages {
        stage('Git Checkout') {
            steps {
                git branch: 'main', credentialsId: 'rachiddev', url: 'https://github.com/rachidoubahmane99/Devops-ReactJs-Front-End.git'
                }
        }
        stage('build') {
            steps {
               bat 'npm install'
            }
        }
          
         stage('Build Docker Image'){
       
            steps{
                bat "docker build --tag rachiddocker1/reactfrontend:1.0.0 ."
            }
        }
        stage('Push Docker Image'){
             steps{
                withCredentials([string(credentialsId: 'dockerhubinfo', variable: 'dockerinfo')]) {
                bat "docker login -u rachiddocker1 -p ${dockerinfo}"
            }      
                bat 'docker push rachiddocker1/reactfrontend:1.0.0'
            }
        } 
    }
    post{
        failure{
            echo "echec"
        }
        success{
            echo "success"
        }
    }
    
}
