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
          $.each(data, function (i, item) {
            console.log(data[i])
            trHTML += '<div class="col s12 m4">'+
                        '<div class="card">'+
                          '<div class="card-image waves-effect waves-block waves-light">'+
                            '<img class="activator" src="imgs/img-1.jpg">'+
                          '</div>'+
                        '<div class="card-content">'+
                            '<span class="card-title grey-text text-darken-4">'+ data[i].title +'</span>' +
                            '<p>'+ data[i].location +'</p>' +
                            '<h6>'+ data[i].date +','+ data[i].time + '</h6>' +
                            '<a class="waves-effect waves-light btn">VIEW</a>' +
                          '</div>'+
                        '</div>'+
                      ' </div>'
          });
        $('#eventCard').append(trHTML);
        }
    });
  }