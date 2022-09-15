<?php

class Model
{

    protected $db;
    function __construct(){
        try {
            $this->db = new PDO('mysql:host=localhost;dbname=calculatrice;charset=utf8','root','root');
            $this->db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo 'Echec de la connexion : ' . $e->getMessage();
            exit;
        }
    }
    public function history()
    {
        $sqlinsert = "SELECT * FROM save ";
        $signIn = $this->db->prepare($sqlinsert);
        $signIn->execute();
        $signIn->fetchAll(PDO::FETCH_ASSOC);
        json_encode($signIn);
    }

    public function Save($pad,$resultOPeration)
    {
        $sqlinsert = "INSERT INTO `save`(`cacul`, `value`) VALUES (:calcule,value)";
        $signIn = $this->db->prepare($sqlinsert);
        $signIn->execute(array(
            ':calcule'=>$pad,
            ':value'=>$resultOPeration,
        ));
    }
}



    $test= new Model;
    $test2=$test->save($_POST['pad'],$_POST['resultOperation']);
    $test2=$test->history();
    