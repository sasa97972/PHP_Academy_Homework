<?php

class CommentsController extends Controller
{
    public function __construct(array $data = array())
    {
        parent::__construct($data);
        $this->model = new Comment();
    }

    public function add()
    {
        if ($_POST) {
            if (!empty($_POST['id_user']) && !empty($_POST['id_post']) && !empty($_POST['content'])) {
                $postModel = new Post();
                $post = current($postModel->getById($_POST['id_post']));
                if($post['category'] === "Politic") {
                    $this->model->save($_POST, 0);
                } else {
                    $this->model->save($_POST, 1);
                }
            }
        }
        Router::redirect("/posts/view/{$_POST['id_post']}");
    }

    public function status()
    {
        if (isset($_POST['status']) && isset($_POST['id_comment'])) {
            switch ($_POST['status']) {
                case 'positive':
                    $this->model->setStatus(true, $_POST['id_comment']);
                    break;
                case 'negative':
                    $this->model->setStatus(false, $_POST['id_comment']);
                    break;
            }
        }
        die;
    }

    public function user()
    {
        $params = App::getRouter()->getParams();
        $this->data['comments'] = $this->model->getByUser($params[0]);
        $this->data['count'] = $this->model->getCount($params[0]);
    }

    public function add_to()
    {
        $params = App::getRouter()->getParams();
        $id = Session::get('post');
        if (isset($params[1]) && isset($params[0])){
        Session::set('post', $params[0]);
        $this->data['id'] = $params[1];
        }
        if ($_POST) {
            if (!empty($_POST['id_user']) && !empty($_POST['id_comment']) && !empty($_POST['content'])) {
                $this->model->setCommentUser($_POST);
                Router::redirect("/posts/view/{$id}");
            }
        }
    }

    public function delete()
    {
        if(!Session::get("role") !== "admin") {
            Router::redirect("/");
        }
        $params = App::getRouter()->getParams();
        $post = $params[0];
        $comment = $params[1];
        if(!$post || !$comment) {
            throw new Exception("Need at least 2 params");
        }
        $this->model->deleteComment($comment);
        Router::redirect("/posts/view/".$post);
    }

    public function admin_delete()
    {
        $params = App::getRouter()->getParams();
        $comment = $params[0];
        if(!$comment) {
            throw new Exception("Need at least 1 params");
        }
        $this->model->deleteComment($comment);
        Router::redirect("/admin/comments/politics");
    }

    public function update()
    {
        if(Session::get("role") !== "admin") {
            Router::redirect("/");
        }
        if(isset($_POST['update_comment'])) {
            $id = $_POST["id_comment"];
            $text = $_POST["content"];
            $post = $_POST["id_post"];
            $this->model->updateComment($id, $text);
            Router::redirect("/posts/view/".$post);
        }
        $params = App::getRouter()->getParams();
        $post = $params[0];
        $commentId = $params[1];
        if(!$post || !$commentId) {
            throw new Exception("Need at least 2 params");
        }
        $this->data["post"] = $post;
        $this->data["comment"] = current($this->model->getById($commentId));
    }

    public function admin_edit()
    {
        if(isset($_POST['update_comment'])) {
            $id = $_POST["id_comment"];
            $text = $_POST["content"];
            $this->model->updateComment($id, $text);
            Router::redirect("/admin/comments/politics");
        }
        $params = App::getRouter()->getParams();
        $commentId = $params[0];
        if(!$commentId) {
            throw new Exception("Need at least 1 params");
        }
        $this->data["comment"] = current($this->model->getById($commentId));
    }

    public function admin_publish()
    {
        $params = App::getRouter()->getParams();
        $commentId = $params[0];
        $this->model->publishComment($commentId);
        Router::redirect("/admin/comments/politics");
    }

    public function admin_politics()
    {
        $this->data["comments"] = $this->model->getPoliticsComments();
    }
}