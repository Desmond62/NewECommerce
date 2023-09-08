const result =document.getElementById('inp');
const show = document.getElementById('btn');
const modal =document.getElementById('mod');
fetch(`https://dummyjson.com/products/search?q=${result.value}`)
.then(res => res.json())
.then((data)=>{
    console.log(data)
    let modal = '';
    
    modal=`
    <div class="container">
    <div class="row" id="mod">
    <div col-md-6>
    <div class="mul">
    <div class="">
      <img src="images/jel (1).jpeg">
      <div class="mult">
        <div>
          <p>BLACK ROLL...</p>
          <h3>$328.00</h3>
        </div>
        <div>
          <button type="submit">VIEW</button>
        </div>
      </div> 
    </div>
  </div>
    </div>
   </div>
  </div>
    `

});
