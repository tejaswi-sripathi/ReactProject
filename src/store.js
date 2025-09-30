import { configureStore, createSlice } from "@reduxjs/toolkit";
 // ✅ Products slice (no persistence needed) 
  const productsSlice = createSlice({
   name: "products", 
  initialState: { 
  veg: [ 
    { id: 101, name: "Okra", price: 45, imageurl: 'https://www.allthatgrows.in/cdn/shop/products/Okra-Summer-Beauty.jpg?v=1598081569&width=1080', description: "Fresh lady’s finger, rich in fiber and vitamins." },
     { id: 102, name: "Potato", price: 30, imageurl: 'https://www.lovefoodhatewaste.com/sites/default/files/styles/16_9_two_column/public/2022-08/Potatoes-shutterstock-1721688538.jpg.webp?itok=RS34FJeG', description: "Staple root vegetable, great for cooking and frying." },
      { id: 103, name: "Tomato", price: 40, imageurl: 'https://foodcare.in/cdn/shop/files/tomatoes-canva.webp?v=1725364526', description: "Ripe, juicy tomatoes, high in vitamin C and antioxidants." },
       { id: 104, name: "Cucumber", price: 35, imageurl: 'https://www.themeatbox.co.nz/cdn/shop/files/TMBProductImages_30_1024x1024.png?v=1705354549', description: "Crisp and refreshing, perfect for salads and snacks." },
        { id: 105, name: "BitterGaurd", price: 50, imageurl: 'https://bio-basket.com/cdn/shop/files/40.png?v=1754638293', description: "Bitter gourd, helps control blood sugar naturally." }, 
        { id: 106, name: "Egg Plant", price: 55, imageurl: 'https://www.halfyourplate.ca/wp-content/uploads/2014/12/isolated-eggplants.jpg', description: "Brinjal, soft and versatile, ideal for curries and grilling." },
         { id: 107, name: "Capsicum", price: 65, imageurl: 'https://udupifresh.com/cdn/shop/products/RedYellowCapsicum_3_1200x1200.jpg?v=1723199614', description: "Colorful bell peppers, high in vitamin C and antioxidants." },
          { id: 108, name: "Carrot", price: 40, imageurl: 'https://i0.wp.com/nextcashandcarry.com.ng/wp-content/uploads/2022/06/carrot-tubers-3XT3MJA.webp?fit=1946%2C1688&ssl=1', description: "Sweet and crunchy carrots, rich in beta-carotene and vitamin A." },
          { id: 109, name: "Raddish", price: 65, imageurl: 'https://cookingwithyoshiko.com/wp-content/uploads/2019/10/Daikon_Japanesesuperfood_healthycookingclass_sydney_wafu-1024x704.jpg', description: "Radish is a root vegetable,It’s rich in Vitamin C, folate, fiber." },
            { id: 110, name: "Cabbage", price: 50, imageurl: 'https://freshleafuae.com/wp-content/uploads/2024/08/cabbage-white-freshleaf-dubai-uae-img01.jpg', description: "Crunchy cabbage, great for salads and stir-fries."},
            {id : 111, name: "Spinach", price: 70, imageurl: 'https://images.freshop.com/1564405684711965657/6c77ac1104d1fc967607125ee717d857_large.png', description: "Leafy green spinach, packed with iron and vitamins."},
              {id: 112, name: "Green Beans", price: 80, imageurl: 'https://freshleafuae.com/wp-content/uploads/2024/10/beans-green-uae-freshleaf-dubai-uae-img01-600x600.jpg', description: "Fresh green beans, high in fiber and vitamins."},
                {id: 113, name: "Broccoli", price: 90, imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuIlJ4YMCTemRZamCzBUoLWp9ZVfW7ap80wA&s', description: "Cruciferous vegetable, rich in vitamins K and C."},
                  {id: 114, name: "Cauliflower", price: 85, imageurl: 'https://www.eatfresh.com.hk/cdn/shop/products/2_eb6178c5-e064-41dc-981a-5546ceb22dbc.png?v=1551858275', description: "Versatile cauliflower, great for roasting and mashing."},
                    {id: 115, name: "Sweet Corn", price: 60, imageurl: 'https://lh5.googleusercontent.com/proxy/GbS8Sytqrirx0cVt9MZ0HQSVIGsQzbMk_XlBZf4flasKXCroXph2WEwbwaL299pz9KeKdA4nT4Ns1tpZSNzTdYH3pGiJubqiQTlqNcYRO5zuvK3pK3DA8q09_nnvl1oqyd0Ayn1N_lVTD0PvM1fn1pEsxAeNJQ', description: "Sweet corn, high in fiber and antioxidants."} ,
                    {id: 116, name: "Celery", price: 70, imageurl: 'https://xpressgrocers.pk/cdn/shop/files/81.-celery.webp?v=1710425706&width=480', description: "Crunchy celery, low in calories and high in fiber."},
          {id: 117, name: "Pumpkin", price: 55, imageurl: 'https://www.harighotra.co.uk/images/Shutterstock/pumpkin_560x560.jpg', description: "Sweet pumpkin, rich in fiber and vitamins." },
          {id : 118, name : "drumstick", price: 90, imageurl: 'https://toneop.s3.ap-south-1.amazonaws.com/blog_images/1672835573.jpg', description: "Drumstick is nutrient-dense vegetable,rich in vitamins." },
            {id: 119, name: "Beetroot", price: 60, imageurl: 'https://www.earthytales.in/uploads/products/3x/organic-beetroots_(1).jpg?v=1609202504', description: "Sweet and earthy beetroot, high in fiber and antioxidants."},
              {id: 120, name: "Lettuce", price: 50, imageurl: 'https://cdn.britannica.com/77/170677-050-F7333D51/lettuce.jpg', description: "Crisp lettuce, perfect for salads and sandwiches." }  
                 ],
 nonveg: [
   { id: 1001, name: "Fish", price: 450, imageurl: 'https://img.freepik.com/premium-photo/salmon-trout-steak-slice-fresh-raw-fish-isolated-white-background_143106-396.jpg', description: "Freshwater fish, rich in protein and omega-3 fatty acids." },
    { id: 1002, name: "Chicken", price: 220, imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTowOvVvjdbQx8YiP4QVu0bXUibkNFcXwjhpw&s', description: "Tender chicken meat, perfect for curries and grills." },
     { id: 1003, name: "Mutton", price: 550, imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdRp7jVfzXZelQSX0f_j_-jYRbouMV2o-RFw&s', description: "Fresh goat meat, flavorful and protein-rich." }, 
     { id: 1004, name: "Crabs", price: 350, imageurl: 'https://chefsmandala.com/wp-content/uploads/2018/03/Crab.jpg', description: "Fresh crabs, ideal for spicy curries and seafood dishes." }, 
     { id: 1005, name: "Shark", price: 1200, imageurl: 'https://londongrocery.net/cdn/shop/products/whole_shark_fish_e7be7f02-04bf-45c8-9c07-8d6bbbbc1740_1024x.png?v=1700535575', description: "Premium shark meat, rich in nutrients and protein." },
      { id: 1006, name: "Prawns", price: 400, imageurl: 'https://millbrookfoodsmarket.ie/cdn/shop/products/prawn-meat_1200x1200.png?v=1542379706', description: "Fresh prawns, perfect for grilling or curries." }, 
      { id: 1007, name: "Squids", price: 350, imageurl: 'https://www.bbassets.com/media/uploads/p/l/10000967_8-fresho-squid-medium-without-head-15-20-pcs.jpg', description: "Soft squid meat, great for frying or seafood dishes." },
       { id: 1008, name: "Eggs", price: 70, imageurl: 'https://img.freepik.com/free-psd/raw-eggs-arrangement_23-2151864152.jpg?semt=ais_hybrid&w=740', description: "Farm-fresh eggs, rich in protein and essential nutrients." },
        { id: 1009, name: "Lobster", price: 1500, imageurl: 'https://media.istockphoto.com/id/149474501/photo/fresh-cooked-lobster.jpg?s=612x612&w=0&k=20&c=LI95XjQ9XkOpog7lJ1uPFpOwnLlpsYrX2CczkoGNm1o=', description: "Delicacy lobster meat, high in protein and low in fat." },
        {id : 1010, name: "Duck", price: 600, imageurl: 'https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/2/3/2397221000000dd3k.jpg', description: "Rich and flavorful duck meat, perfect for roasting."   },
        {id: 1011, name: "Goose", price: 800, imageurl: 'https://media.istockphoto.com/id/871943796/photo/a-raw-goose-ready-to-cook-on-a-cutting-board-isolated-on-a-white-background-christmas-menu.jpg?s=612x612&w=0&k=20&c=KCPdZALxdc4thvYJxheQ_I3MyzTjJIWXZqp3kDax3R0=', description: "Tender and juicy goose meat, ideal for festive meals." },
        {id: 1015, name: "Kangaroo", price: 1300, imageurl: 'https://thumbs.dreamstime.com/b/diced-raw-kangaroo-meat-wild-fresh-game-isolated-white-background-top-view-356883824.jpg', description: "Lean kangaroo meat, high in protein and low in fat." },
          {id: 1012, name: "Quail", price: 700, imageurl: 'https://images.jdmagicbox.com/quickquotes/images_main/quail-meat-2227412974-ucyvqqk6.jpg', description: "Delicate quail meat, rich in flavor and nutrients." },
            {id: 1013, name: "Turkey", price: 900, imageurl: 'https://img.freepik.com/premium-photo/natural-fresh-raw-turkey-meat-isolated-white-background_787273-69566.jpg?w=360', description: "Lean turkey meat, high in protein and low in fat." },
              {id: 1014, name: "Venison", price: 1100, imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3gsWEP8bsPO2eZPneOr2l0N8TJ-GqiKkPA7_GHprmgnygIh3OY6HVcKxiptySpZvfT6w&usqp=CAU', description: "Game meat, rich in protein and low in fat." },
                  {id: 1016, name: "Octopus", price: 1400, imageurl: 'https://hifresh.co.nz/wp-content/uploads/2023/04/octopus.jpg', description: "Tender octopus meat, great for grilling or seafood dishes."   },
                  {id : 1017,name:"beef", price: 600, imageurl: 'https://thumbs.dreamstime.com/b/raw-beaf-steaks-parsley-white-background-60592326.jpg', description: "Juicy beef steak, rich in protein and iron."},
                    {id: 1018, name: "Pigeon", price: 750, imageurl: 'https://bf1af2.akinoncloudcdn.com/products/2024/12/19/320582/f0ba5c8e-41c9-4c3c-979e-a8a815be8816_size3840_cropCenter.jpg', description: "Tender pigeon meat, ideal for roasting and grilling." },
                      {id: 1019, name: "snails", price: 500, imageurl: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Caracoles-del-restaurante-granero.jpg', description: "Fresh snails, rich in protein and low in fat."  },
                        {id: 1020, name: "Salmon", price: 900, imageurl: 'https://lahore.zabihahalal.pk/assets/uploads/product/b17602f1d823a75411b38940745f9943.jpg', description: "Rich and flavorful salmon fillet, high in omega-3 fatty acids." }
       ], 
dairy: [ 
  { id: 1, name: "Cream", price: 200, imageurl: 'https://png.pngtree.com/png-clipart/20241206/original/pngtree-cream-cheese-isolated-on-white-transparent-background-png-image_17626481.png', description: "Thick, fresh cream, perfect for desserts and cooking." },
   { id: 2, name: "Junnu", price: 180, imageurl: 'https://static.vecteezy.com/system/resources/previews/016/283/182/large_2x/kharvas-or-cheek-chik-bari-pis-or-junnu-is-a-sweet-dairy-product-made-from-bovine-colostrum-free-photo.jpg', description: "Traditional South Indian milk pudding, soft and creamy." }, 
   { id: 3, name: "Milk", price: 50, imageurl: 'https://hips.hearstapps.com/hmg-prod/images/milk-6819e7e4c3689.jpg?crop=0.667xw:1.00xh;0.167xw,0&resize=1200:*', description: "Fresh cow milk, rich in calcium and protein." }, 
   { id: 4, name: "Whey", price: 120, imageurl: 'https://rhbulk.com/cdn/shop/files/RHBulk_Whey-Protein-Concentrate-80_-Protein_Angle_E0A0751_f40bbdd2-aa23-4968-8d1f-083361f4ce7f.jpg?v=1720894719&width=1946', description: "Protein-rich liquid obtained from curdling milk." },
    { id: 5, name: "Yogurt", price: 90, imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa6NbN2FLwqER3dFSxQ9R0sM1G9lEHy_7tww&s', description: "Smooth and creamy yogurt, healthy probiotic food." },
     { id: 6, name: "Cheese", price: 250, imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlJI60bWcIIItDpNXbfU-eAACrZyBJ-FXSJKueGZdjCyG5DoSROzFhgMOzOoMRb-GRDGA&usqp=CAU', description: "Rich, creamy cheese ideal for cooking and snacking." },
      { id: 7, name: "Butter", price: 180, imageurl: 'https://justinesnacks.com/wp-content/uploads/2022/01/the-easiest-way-to-make-butter-500x500.jpg', description: "Fresh butter, soft and flavorful, for cooking and baking." }, 
      { id: 8, name: "CondensedMilk", price: 150, imageurl: 'https://www.thespruceeats.com/thmb/1XwLTnQletwQqwwY7CUr8l-Dx2s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sweetened-condensed-milk-5077695-hero-05-8fd2a201841343ef9b30a6a42c95ca4d.jpg', description: "Thick and sweetened milk, perfect for desserts." }
     ],
  fruits: [ { id: 1010, name: "Pomegranate", price: 90, imageurl: 'https://m.media-amazon.com/images/I/611a1wD9ZGL._UF894,1000_QL80_.jpg', description: "Juicy pomegranate seeds, rich in antioxidants." }, 
    { id: 1020, name: "Oranges", price: 60, imageurl: 'https://static.vecteezy.com/system/resources/previews/015/606/509/non_2x/sweet-orange-fruit-photo.jpg', description: "Fresh citrus oranges, high in vitamin C." },
     { id: 1030, name: "Strawberries", price: 200, imageurl: 'https://static.wixstatic.com/media/fd98b7_3113df3935414fbb86b2006dba3ba21f~mv2.jpg/v1/fill/w_480,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/fd98b7_3113df3935414fbb86b2006dba3ba21f~mv2.jpg', description: "Sweet and fresh strawberries, perfect for desserts." },
      { id: 1040, name: "Mangoes", price: 120, imageurl: 'https://img.freepik.com/free-photo/mango-still-life_23-2151542114.jpg?w=360', description: "Ripe Alphonso mangoes, juicy and delicious." },
       { id: 1050, name: "Dragon Fruit", price: 150, imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb0djcEHKK0Jq1ul0lUIZVu6CPqJrvD59glg&s', description: "Exotic fruit, mildly sweet with a crunchy texture." },
       { id: 1060, name: "Kiwi", price: 100, imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSItwOCqtDpiMOcgXX4baYxwiLMA_nnbGmyoVPz8CE2WjwoMH9YYbW_nsmoXV7wtZF4ux8&usqp=CAU', description: "Sweet and tangy kiwis, full of vitamin C." },
        { id: 1070, name: "Apples", price: 80, imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzAvLt3X-VXzrtjB_Kt8qY0Y6qZ6TU1AMJQ&s', description: "Crisp apples, red or green, perfect for snacks." }, 
        { id: 1080, name: "Bananas", price: 40, imageurl: 'https://www.lovefoodhatewaste.com/sites/default/files/styles/open_graph_image/public/2022-07/Bananas.jpg.webp?itok=-9atP-ZB', description: "Fresh bananas, quick source of energy." }
       ], 
nutsandseeds: [ 
  { id: 11, name: "Almonds", price: 700, imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq4NKoZ_O7DA6xYTAyh1cjehMyWAXrg0OsXA&s', description: "Crunchy almonds, rich in protein, healthy fats." },
   { id: 12, name: "Cashew Nuts", price: 650, imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzdmwtoHU_7MJUIysQI54_EmcB2Jrza6mp-w&s', description: "Soft & crunchy cashews, perfect for snacking and cooking." },
    { id: 13, name: "Raisins", price: 250, imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq6Iwk3u8uBE9kR8ID7SKf192_ZnXQ4V35qQ&s', description: "Sweet dried grapes, natural energy and fiber-rich." }, 
    { id: 14, name: "Figs", price: 350, imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvdclPf7DO66Y8O2qEqYYSZn3WwLYZ8Qd7SXX5f6tt6icwz6BcGEWn1Piudhoqpq_DPmg&usqp=CAU', description: "Soft dried figs, rich in fiber and natural sweetness." },
     { id: 15, name: "Dates", price: 300, imageurl: 'https://ajfan.store/cdn/shop/files/Ajwa_Jumbo.webp?v=1741776196', description: "Fresh dates, naturally sweet and energy-packed." }, 
     { id: 16, name: "Dry Dates", price: 350, imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZt-NZ-d8NGoFV1PEzqKzoQWJmcOohd2KNog&s', description: "Sun-dried dates, high in fiber and natural sugar." },
      { id: 17, name: "Pistachio", price: 750, imageurl: 'https://5.imimg.com/data5/SELLER/Default/2023/12/366635173/XM/IG/VC/13226391/broken-roasted-pistachio-500x500.jpg', description: "Premium pistachios, crunchy and nutrient-rich." },
       { id: 18, name: "Pumpkin Seeds", price: 300, imageurl: 'https://satvikk.com/wp-content/uploads/2021/12/istockphoto-1175603836-612x612-1.jpg', description: "Nutty pumpkin seeds, rich in protein and minerals." }, 
       { id: 19, name: "Sunflower Seeds", price: 250, imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkboJpmL2LlnWwjKnXWqzpDOCAYiktAV0FzQ&s', description: "Light and crunchy seeds, packed with vitamin E and minerals." },
        { id: 20, name: "Sesame Seeds", price: 200, imageurl: 'https://m.media-amazon.com/images/I/41Z6U4XmuJL._UF1000,1000_QL80_.jpg', description: "Small but nutrient-rich sesame seeds, perfect for toppings." },
         { id: 21, name: "Sabja Seeds", price: 180, imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyWrs6mRr-JUNuszt46bGw5wo53Y7gEC3ISQ&s', description: "Chia basil seeds, excellent for hydration and digestion." },
          { id: 22, name: "Raw Peanuts", price: 150, imageurl: 'https://media.assettype.com/thequint%2F2024-05%2F6bcecfd9-11e3-4884-8a21-02407b0d1600%2Fa_bowl_of_peanuts_on_white_background_directly_above_photo_jpg_s_1024x1024_w_is_k_20_c_UdZq1INZql9o_.jpg?auto=format%2Ccompress&fmt=webp&width=720&w=1200', description: "Fresh raw peanuts, great for roasting or snacking." }, 
          { id: 23, name: "Lotus Seeds (Makhana)", price: 400, imageurl: 'https://cdn.dotpe.in/longtail/store-items/8267933/Jy6tGjJu.jpeg', description: "Crunchy lotus seeds, healthy snack rich in protein." },
           { id: 24, name: "Chia Seeds", price: 350, imageurl: 'https://www.gomataseva.org/wp-content/uploads/2023/10/Chia-Seeds-1.webp', description: "Tiny chia seeds, packed with fiber, protein, and omega-3s." },
            { id: 25, name: "Gram Seeds (Chana)", price: 150, imageurl: 'https://www.healthysupplies.co.uk/pics/800x800/organic-chickpeas-bowl-2.webp?tsid=1738040332', description: "Protein-rich chickpeas, perfect for cooking and snacking." },
             { id: 26, name: "Brazil Nuts", price: 150, imageurl: 'https://palmtreeshopping.com/cdn/shop/files/BRAZIL-NUTS-THUMBNAIL.png?v=1735783301&width=480', description: "Rich Source of Selenium, supports thyroid Health" } 
            ],
    },
     reducers: {}  //empty reducer
     });
     
 // ✅ Cart slice with persistence 
   const loadCart = () => { 
    try {
       const cartData = localStorage.getItem("cart");
        return cartData ? JSON.parse(cartData) : [];
       } 
       catch 
       { 
        return [];
       } 
      };
      //cart slice creation
const cartSlice = createSlice(
        { name: "cart",
           initialState: loadCart(), 
           reducers:{ 
              addToCart(state, action)   //add to cart reducer
               { 
                let item = state.find(item => item.id === action.payload.id);
                 if (item) 
                  {
                     item.quantity += 1;
                     }
                      else { 
                        state.push({ ...action.payload, quantity: 1 });
                       }
           localStorage.setItem("cart", JSON.stringify(state));     //setting cart items to localstorage
          },
          //remove items from cart
           RemoveFromCart(state, action) 
           {
             let index = state.findIndex(item => item.id === action.payload.id); 
             if (index !== -1)
               { 
                state.splice(index, 1);
                } 
    localStorage.setItem("cart", JSON.stringify(state));  //setting cart items to localstorage
   }, 
   //clearing the cart and make it empty
   clearCart() 
   { 
    localStorage.removeItem("cart");
     return []; 
    },
    //increasing the quantity  of cart items
     increaseQuantity(state, action)
      { 
        let item = state.find(item => item.id === action.payload.id);
         if (item) item.quantity += 1;
          localStorage.setItem("cart", JSON.stringify(state));
         },
         //decrese the quantity of cart items
          decreaseQuantity(state, action)
           { 
            let item = state.find(item => item.id === action.payload.id);
             if (item && item.quantity > 1) 
              {
                 item.quantity -= 1;
                 } 
             else if (item && item.quantity === 1) 
              { 
                let index = state.findIndex(item => item.id === action.payload.id); 
          if (index !== -1) 
            state.splice(index, 1);   //removing the item
           } 
           localStorage.setItem("cart", JSON.stringify(state)); 
          }
         }
         }
        );
         // ✅ Orders slice with persistence 
        const loadOrders = () => 
          {
             try {
               const ordersData = localStorage.getItem("orders");
                return ordersData ? JSON.parse(ordersData) : []; 
              }
               catch {
                 return []; 
                }
               }; 
const ordersSlice = createSlice({
   name: "orders",
    initialState: loadOrders(),
     reducers: { 
      addOrder(state, action)
       {
         state.push(action.payload);
          localStorage.setItem("orders", JSON.stringify(state)); 
        }, 
        clearOrders() 
        { 
          localStorage.removeItem("orders"); 
          return [];
         } 
        }
       });
        // Load all persisted data from localStorage in one go
const persistedData = {
  users: JSON.parse(localStorage.getItem("users")) || [],
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true" || false,
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  orders: JSON.parse(localStorage.getItem("orders")) || []
};
        const userAuthSlice = createSlice({
           name: "userAuth",
            initialState:  {
               users: persistedData.users,
              currentUser: persistedData.currentUser,
             isAuthenticated: persistedData.isAuthenticated
            },
             reducers: {
               registerUser(state, action) { 
                state.users.push(action.payload);
           localStorage.setItem("users", JSON.stringify(state.users)); // persist users
              },
                loginUser(state, action) { 
  const { username, password } = action.payload; 
  const user = state.users.find(u => 
      (u.username === username || u.email === username) && u.password === password
  ); 
  if (user) { 
    state.currentUser = user; 
    state.isAuthenticated = true; 
    localStorage.setItem("currentUser", JSON.stringify(user));
    localStorage.setItem("isAuthenticated", "true");
  } else {
    state.currentUser = null; 
    state.isAuthenticated = false;
  } 
},
    logoutUser(state) { 
  state.currentUser = null; 
  state.isAuthenticated = false;
  localStorage.removeItem("currentUser");
  localStorage.setItem("isAuthenticated", "false");
}
      } 
    });
export const { registerUser, loginUser, logoutUser } = userAuthSlice.actions; 
// ✅ Export actions
 export let { addToCart, RemoveFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions; 
 export let { addOrder, clearOrders } = ordersSlice.actions; 
 // ✅ Create store 
const store = configureStore({
   reducer: 
   { products:
     productsSlice.reducer,
      cart: cartSlice.reducer,
       orders: ordersSlice.reducer, 
       userAuth: userAuthSlice.reducer
  }
 });

 export default store
