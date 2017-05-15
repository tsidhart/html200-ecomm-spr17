var products = [
  {
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg",
    "itemCode": "IT001"
  },

  {
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "wool-cable.jpeg",
    "itemCode": "IT002"
  },
  {
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "northern-lights.jpg",
    "itemCode": "IT003"
  },
  {
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinity.jpg",
    "itemCode": "IT004"
  },
  {
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "fringed-plaid.jpeg",
    "itemCode": "IT005"
  },
  {
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": "multi-color.jpeg",
    "itemCode": "IT006"
  },
  {
    "name": "Etro Paisley-Print Silk",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": "etro.png",
    "itemCode": "IT007"
  },
  {
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageTitle": "twill.jpg",
    "itemCode": "IT008"
  }
]

var cart = [];

var add = document.getElementsByClassName("add");
var rem = document.getElementsByClassName("remove");

for (var i = 0; i < add.length; i++) {
  add[i].onclick = function() {
    var name = this.parentElement.childNodes[1].innerHTML;
    var prod;

    for (var j = 0; j < products.length; j++) {
      if (name == products[j].name) {
        prod = products[j];
        break;
      }
    }

    var incart = false;
    for (var k = 0; k < cart.length; k++) {
      if (cart[k] == prod) {
        incart = true;
        break;
      }
    }

    if (incart == false) {
      cart.push(prod);
    }

    console.log(cart);
  }

  rem[i].onclick = function() {
    var name = this.parentElement.childNodes[1].innerHTML;
    var prod;

    for (var j = 0; j < products.length; j++) {
      if (name == products[j].name) {
        prod = products[j];
        break;
      }
    }

    for (var k = 0; k < cart.length; k++) {
      if (cart[k] == prod) {
        cart.splice(k, 1);
        break;
      }
    }

    console.log(cart);
  }

}
