
export function addtoCart (items) {
    console.log(items);
    var selectedItem = document.createElement("div"); //div
    selectedItem.id='divOne'; //Id

    var Img = document.createElement("img"); //Image
    Img.className='cart-img'; //className
    Img.src=items.image; //Insert value

    var name = document.createElement("h2"); //Heading
    name.className='name'; //className
    name.innerText=items.name; //InsertValue

    var selectedItem2 = document.createElement('div'); //div
    selectedItem2.id='divTwo'; //Id

    var old_price =  document.createElement('p'); //p
    old_price.className='old_price'; //old-price
    old_price.innerText=items.old_price;

    var new_price = document.createElement('p'); //p
    new_price.className='new_price'; //new-price
    new_price.innerText=items.new_price;

    selectedItem2.appendChild(old_price,new_price);
    selectedItem.appendChild(Img,name,selectedItem2);

    // document.querySelector('container').innerHTML = selectedItem;

}