<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Controller
 *
 * @author Juan Rivillas
 */

$action = $_REQUEST['action'];
@$student = new Controller();

if ($action == 'add'){
    echo json_encode($student->addStudent());
}else if ($action == 'getId'){
    echo json_encode($student->getStudentId());
}

class Controller {
    
    public function addStudent(){
        return array('result' => 'Answer from service add');
    }
    
    public function getStudentId(){
        return array('result' => 'Answer from service getId');
    }
}

?>
