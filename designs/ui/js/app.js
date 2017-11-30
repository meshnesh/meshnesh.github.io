$(document).ready(function () {
    loadfunctionAjax();
  });
  var loadfunctionAjax = function () {
    $.ajax({
        type: 'GET',
        url: 'https://bright-events.herokuapp.com/api/events',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
          // console.log(data.event2.title)
          var trHTML = '';
          var manageTicket = '';
          $.each(data, function (i, item) {
            // console.log(data[i].rsvp)
            var rsvp = data[i].rsvp
            console.log(rsvp.length)
            trHTML += '<div class="col s12 m4">'+
                        '<div class="card">'+
                          '<div class="card-image waves-effect waves-block waves-light">'+
                            '<img class="activator" src="'+ data[i].imageUrl +'">'+
                          '</div>'+
                        '<div class="card-content">'+
                            '<span class="card-title grey-text text-darken-4">'+ data[i].title +'</span>' +
                            '<p>'+ data[i].location +'</p>' +
                            '<h6>'+ data[i].date +','+ data[i].time + '</h6>' +
                            '<a class="waves-effect waves-light btn">VIEW</a>' +
                          '</div>'+
                        '</div>'+
                      ' </div>'
            manageTicket += '<li class="collection-item">' +
                                '<a href="#"><i class="material-icons right delete_events">delete_forever</i></a>' +
                                '<h2 class="card-title activator grey-text text-darken-4">'+ data[i].title + '</h2>' +
                                '<p>'+ data[i].location +'</p>' +
                                '<h6>'+ data[i].date +','+ data[i].time + '</h6>' +
                                '<a class="waves-effect  btn"><i class="material-icons left">cloud</i>Manage</a>' +
                                '<a class="waves-effect btn"><i class="material-icons left">edit</i>Edit</a>' +
                                '<span class="right">' + rsvp.length + ' RSVP</span>' +
                            '</li>'
          });
        $('#eventCard').append(trHTML);
        $('#manageEvents').append(manageTicket);
        }
    });
  }