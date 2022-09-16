<?php
header("Access-Control-Allow-Origin: *");
class Model
{

    protected $db;
    function __construct(){
        try {
            $this->db = new PDO('mysql:host=localhost:3306;dbname=calculatrice;charset=utf8','root','');
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
       $catch= $signIn->fetchAll(PDO::FETCH_ASSOC);
       return json_encode($catch);
    }

    public function Save($pad,$resultOPeration)
    {
        $sqlinsert = "INSERT INTO `save`(`cacul`, `value`) VALUES (:calcule,:value)";
        $signIn = $this->db->prepare($sqlinsert);
        $signIn->execute(array(
            ':calcule'=>$pad,
            ':value'=>$resultOPeration,
        ));
    }
}


$test= new Model;
if(isset($_GET['test']) && $_GET['test'] ==1){
    if($_POST['pad'] !=='' || $_POST['resultOperation'] !==''){
    $test2=$test->save($_POST['pad'],$_POST['resultOperation']);
}
}
$test4=$test->history();
echo($test4);
