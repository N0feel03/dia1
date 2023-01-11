console.log('conectado.....')


const productData = [
    {

    index:'01',
    name:'yellow track',
    Image: 'img1.jpg',
    des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, aperiam, iusto nobis quidem quisquam vitae nemo doloribus libero aliquam fugit culpa molestias porro ad quis soluta ipsam sequi totam. Est.'


},
{

    index:'02',
    name:'designer oufit',
    Image: 'img2.jpg',
    des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, aperiam, iusto nobis quidem quisquam vitae nemo doloribus libero aliquam fugit culpa molestias porro ad quis soluta ipsam sequi totam. Est.'
    
    
}
,
{

    index:'03',
    name:'chilling mood',
    Image: 'img3.jpg',
    des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, aperiam, iusto nobis quidem quisquam vitae nemo doloribus libero aliquam fugit culpa molestias porro ad quis soluta ipsam sequi totam. Est.'
    
    
    }
    






]


const nextBtn = document.querySelector('.nxt-btn')

let smImgContainer = document.querySelector('.sm-product-img-container')
let smImg = document.querySelector('sm-product-img')
let productIndex = document.querySelector('.product-index')
let smProducDes = document.querySelector('.sm-product-des')
let productImgContainer = document.querySelector('.product-img-container')
let productImg = document.querySelector('.product-img')
let backdropImg = document.querySelector('.backdrop-img')
let productDetail = document.querySelector('.product-detail')
let productName = document.querySelector('.product-name')
let productDes = document.querySelector('.product-des')




let currentProduct = 0



//console.log('Boton', nextBtn)


nextBtn.addEventListener('click', () =>{

//alert('hola')

if(currentProduct >= productData.length -1){

currentProduct=0

}else{


    currentProduct++
}

productIndex.innerHTML = productData[currentProduct].index
smProductDes.innerHTML = productData[currentProduct].des.slice(0,80)
smImgContainer.classList.add('slide')
productImgContainer.classList.add('slide')
backdropImg.classList.add('fade')
productDetail.classList.add('fade')
})