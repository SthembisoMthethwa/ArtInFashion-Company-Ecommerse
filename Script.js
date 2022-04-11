//getting modal opening buttons
var modalBtns = document.querySelectorAll('.modal-open');

modalBtns.forEach(function(btn){
  btn.onclick = function() {
      var modal = btn.getAttribute("data-modal");

      document.getElementById(modal).style.display = "block";
  };
});

var closeBtns = document.querySelectorAll('.modal-close');

closeBtns.forEach(function(btn){
  btn.onclick = function() {
    var modal = (btn.closest(".modal").style.display = "none");
  };
});

/*js for product Gallery*/
  /*  Model 1 */
var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");

   SmallImg[0].onclick = function()
  {
    ProductImg.src = SmallImg[0].src;
  }
  SmallImg[1].onclick = function()
  {
    ProductImg.src = SmallImg[1].src;
  }
  SmallImg[2].onclick = function()
  {
    ProductImg.src = SmallImg[2].src;
  }
  SmallImg[3].onclick = function()
  {
    ProductImg.src = SmallImg[3].src;
  }


    /*  Model 2 */
  var ProductImg = document.getElementById("ImageProd");
  var SmallImg = document.getElementsByClassName("img-small");
  
     SmallImg[0].onclick = function()
    {
      ProductImg.src = SmallImg[0].src;
    }
    SmallImg[1].onclick = function()
    {
      ProductImg.src = SmallImg[1].src;
    }
    SmallImg[2].onclick = function()
    {
      ProductImg.src = SmallImg[2].src;
    }
    SmallImg[3].onclick = function()
    {
      ProductImg.src = SmallImg[3].src;
    }

       /*  Model 3 */
    var ProductImg = document.getElementById("Product");
    var SmallImg = document.getElementsByClassName("small");
    
       SmallImg[0].onclick = function()
      {
        ProductImg.src = SmallImg[0].src;
      }
      SmallImg[1].onclick = function()
      {
        ProductImg.src = SmallImg[1].src;
      }
      SmallImg[2].onclick = function()
      {
        ProductImg.src = SmallImg[2].src;
      }
      SmallImg[3].onclick = function()
      {
        ProductImg.src = SmallImg[3].src;
      }


      /*  Model 4 */
    var ProductImg = document.getElementById("Prod");
    var SmallImg = document.getElementsByClassName("image-product-for");
    
       SmallImg[0].onclick = function()
      {
        ProductImg.src = SmallImg[0].src;
      }
      SmallImg[1].onclick = function()
      {
        ProductImg.src = SmallImg[1].src;
      }
      SmallImg[2].onclick = function()
      {
        ProductImg.src = SmallImg[2].src;
      }
      SmallImg[3].onclick = function()
      {
        ProductImg.src = SmallImg[3].src;
      }
