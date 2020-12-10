function makeApiCall(page){
  clear();
  var title = document.getElementById('input').value;
  $.getJSON("http://www.omdbapi.com/?i=tt3896198&apikey=44a9aaed&s="+encodeURI(title)).then(function(response){
    console.log(response);
    var i;
    for(i = 0; i < response.totalResults; i++){
     document.getElementById('pc').innerHTML +=
            `<div class="card" style="width: 33%;">
              <a href="${response.Search[i].Poster}"> <img class="card-img-top" 
              src = '${response.Search[i].Poster}' 
              alt = 'Movie Poster'> </a>
              <div class="card-body">
                <p class="card-text"> ${response.Search[i].Title} </p>
              </div>
              <div>
               <button id="submit" class="btn btn-primary" type='button' onclick="openResponse(response.Search[i].Title);">
               <a class="nav-link" href="..//partials/review.html" style="color:white">Review</a>
               </button>
              </div>
            </div>`
    }
  });
}
function clear(){ 
  document.getElementById('pc').innerHTML="";
}
function openResponse(movie)
{

}