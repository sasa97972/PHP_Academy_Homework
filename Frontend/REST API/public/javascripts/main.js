$(document).ready(function () {
    $("#createNotes").on("submit", function() {
        var msg = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: '/notes',
            data: msg,
            success: function(data) {
                getAllNotes();
            },
            error:  function(xhr, str){
                alert('Возникла ошибка: ' + xhr.responseCode);
            }
        });
        return false;
    });

    function renderEdit(btn, link) {
        var parent = btn.parent();
        $.ajax({
            type: 'GET',
            url: link,
            success: function(data) {
                var tmpl = "<form class='updateNote'>" +
                    "<input type='text' name='title' value='"+data.title+"'>" +
                    "<input type='text' name='description' value=\""+data.text+"\">" +
                    "<input type='hidden' name='id' class='id' value='"+data._id+"'>" +
                    "<input type='submit' class='btn__update' value='Save'>" +
                    "</form>";
                parent.html(tmpl);
                $(".btn__update").on("click", function () {
                    updateNote($(this).parent());
                    return false;
                })
            },
            error:  function(xhr, str){
                alert('Возникла ошибка: ' + xhr.responseCode);
            }
        });
    }

    function updateNote(form) {
        var id = form.find(".id").val();
        var data = form.serialize();
        $.ajax({
            type: 'PUT',
            url: '/notes/update/'+id,
            data: data,
            success: function(data) {
                getAllNotes();
            },
            error:  function(xhr, str){
                alert('Возникла ошибка: ' + xhr.responseCode);
            }
        });
    }

    function getAllNotes() {
        $.ajax({
            type: 'GET',
            url: '/notes/all',
            success: function(data) {
                renderNotes(data);
            },
            error:  function(xhr, str){
                alert('Возникла ошибка: ' + xhr.responseCode);
            }
        });
    }

    function deleteNotes(link) {
        $.ajax({
            type: 'GET',
            url: link,
            success: function(data) {
                getAllNotes();
            },
            error:  function(xhr, str){
                alert('Возникла ошибка: ' + xhr.responseCode);
            }
        });
    }

    function renderNotes(notes) {
        var tmpl = "";
        for(var i = 0; i < notes.length; i++) {
            tmpl += "<div class='note__item'>" +
                "<h2 class='notes__title'>"+ notes[i].title +"</h2>" +
                "<p class='notes__title'>"+ notes[i].text +"</p>" +
                "<a class='btn__delete' href='/notes/delete/"+notes[i]._id+"'>Delete</a>" +
                "<a class='btn__edit' href='/notes/view/"+notes[i]._id+"'>Edit</a>" +
                "</div>";
        }
        $("#notesCollection").html(tmpl);
        $(".btn__delete").click(function () {
            deleteNotes($(this).attr("href"));
            return false;
        });
        $(".btn__edit").on("click", function () {
            renderEdit($(this), $(this).attr("href"));
            return false;
        });
    }
    getAllNotes();
});