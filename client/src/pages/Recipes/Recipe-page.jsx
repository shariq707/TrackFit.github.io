// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Layout from "../../component/Layout";
// import "./Recipe.css";

// function Recipe() {
//   let params = useParams();
//   const [details, setDetails] = useState({});

//   // generate a list of menu instructions
//   const generateMenuList = (menuInstructions) => {
//     // Split the menu instructions string into an array of individual instructions
//     const instructionsArray = menuInstructions.split(". ");

//     const listItems = instructionsArray.map((instruction) => {
//       return <li>{instruction.trim()}.</li>;
//     });
//     return <ul>{listItems}</ul>;
//   };

//   const fetchDetails = async () => {
//     const data = await fetch(
//       `https://api.spoonacular.com/recipes/${params.name}/information/?apiKey=${
//         import.meta.env.VITE_APP_API_KEY
//       }`
//     );

//     const detailData = await data.json();
//     setDetails(detailData);
//     console.log(detailData);
//   };

//   useEffect(() => {
//     fetchDetails();
//   }, [params.name]);

//   return (
//     <Layout>
//       <div className="contain">
//         <div className="image">
//           <div className="image-container">
//             <img src={details.image} />
//             <div className="caption">{details.title}</div>
//           </div>
//         </div>
//         <div className="ingredients">
//           <h3>Ingredients</h3>
//           <ul>
//             {details &&
//               details.extendedIngredients &&
//               details.extendedIngredients.map((ingredient) => (
//                 <li key={ingredient.id}>{ingredient.original}</li>
//               ))}
//           </ul>
//         </div>
//         <div className="instructions">
//           <h3 className="text-center my-4">How to make {details.title}</h3>
//           {details.analyzedInstructions &&
//           details.analyzedInstructions.length > 0 ? (
//             details.analyzedInstructions.map((instructionGroup) => (
//               <div key={instructionGroup.name}>
//                 <h4>{instructionGroup.name}</h4>
//                 <ul className="instruction-list">
//                   {generateMenuList(
//                     instructionGroup.steps.map((step) => step.step).join(". ")
//                   )}
//                 </ul>
//               </div>
//             ))
//           ) : (
//             <p>No instructions found.</p>
//           )}
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export default Recipe;










// import React from "react";

// const MenuSection = () => {
//   const dishesOfTheDay = [
//     {
//       title: "Cheesy Grits with Fried Eggs and Bacon",
//       des: "Breakfast   (550–600 calories)",
//       image:
//         "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2021-09-breakfast-grits%2FNew%20Finals%2F2021-10-12_ATK8035",
//     },
//     {
//       title: "Grilled Chicken Salad",
//       des: "Lunch   (470–500 calories)",
//       image:
//         "https://valentinascorner.com/wp-content/uploads/2022/05/Chicken-Salad.jpg",
//     },
//     {
//       title: "Lemon Herb Salmon & Veggies",
//       des: "Dinner (460–480 calories)",
//       image:
//         "https://img.buzzfeed.com/video-api-prod/assets/23a3954e16e3434381d2e4115ac85f7d/BFV17100_One-PanHerbLemonSalmon-Thumb02.jpg?resize=1200:*",
//     },
//     {
//       title: "Black Coffee",
//       des: "Breakfast Drink (5-10 calories)",
//       image:
//         "https://i.guim.co.uk/img/media/a9482912f0aa252131cd534bfeea50689a805c28/0_166_5957_3576/master/5957.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=637a78423db188b9e794d1bb5c88659e",
//     },
//     {
//       title: "Orleans Tea",
//       des: "Lunch Drink (2–5 calories)",
//       image:
//         "https://clubmagichour.com/cdn/shop/files/SenchaKyotoweb.jpg?v=1716923450",
//     },
//     {
//       title: "Warm Turmeric Milk",
//       des: "Dinner Drink (95-100 calories)",
//       image:
//         "https://i.guim.co.uk/img/media/522baace078efefd9b2352e329ba1be0978cbb58/0_277_5760_3456/master/5760.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d23fa395dad5a1ac405fbe937e30ddf4",
//     },
//   ];

//   const recommendedMenu = [
//     {
//       title: "Slow Cooker Beef Stew",
//       des: "(500-600 calories)",
//       image:
//         "https://v.cdn.ww.com/media/system/wine/5859dae25e361a4fef73105d/f8206d53-f7fa-438d-8461-79c284227e0c/k4jledddgokeswuhpj98.jpg?fit=crop&height=800&width=800&enable=upscale&quality=80",
//     },
//     {
//       title: "Baked Salmon With Lime",
//       des: "(320–350 calories)",
//       image:
//         "https://v.cdn.ww.com/media/system/wine/594713f111712d73ad9fd198/4ab7b661-f1d6-4f37-ad29-2b3caf6cde3e/gdylw39jz9fupnog06ro.png?fit=crop&height=800&width=800&enable=upscale&quality=80",
//     },
//     {
//       title: "Lemon Chickpea & Tomato Stew",
//       des: "(300–350 calories)",
//       image:
//         "https://static.toiimg.com/thumb/96363403.cms?imgsize=148024&width=800&height=800",
//     },
//     {
//       title: "Chicken Stack",
//       des: "(450–550 calories)",
//       image:
//         "https://static.toiimg.com/thumb/59053721.cms?imgsize=143724&width=800&height=800",
//     },
//     {
//       title: "Paneer Butter Masala",
//       des: "(550–600 calories)",
//       image:
//         "https://static.toiimg.com/thumb/58123486.cms?imgsize=330449&width=800&height=800",
//     },
//     {
//       title: "Chatpata Vegetable Salad",
//       des: "(80–120  calories)",
//       image:
//         "https://static.toiimg.com/thumb/58892854.cms?imgsize=297936&width=800&height=800",
//     },
//   ];

//   const sectionStyle = {
//     padding: "20px",
//   };

//   const headingStyle = {
//     fontSize: "22px",
//     fontWeight: "bold",
//     marginBottom: "10px",
//   };

//   const containerStyle = {
//     display: "flex",
//     justifyContent: "center",
//     flexWrap: "wrap",
//     gap: "20px",
//   };

//   const cardStyle = {
//     width: "280px",
//     borderRadius: "15px",
//     overflow: "hidden",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     border: "1px solid purple",
//     textAlign: "center",
//   };

//   const imageStyle = {
//     width: "100%",
//     height: "auto",
//     display: "block",
//   };

//   const titleStyle = {
//     backgroundColor: "purple",
//     color: "#fff",
//     padding: "10px",
//     fontWeight: "bold",
//     fontSize: "14px",
//   };

//   const desStyle = {
//     backgroundColor: "purple",
//     color: "#fff",
//     padding: "2px",
//     fontWeight: "bold",
//     fontSize: "14px",
//   }

//   const renderCards = (items) =>
//     items.map((item, index) => (
//       <div key={index} style={cardStyle}>
//         <img src={item.image} alt={item.title} style={imageStyle} />
//         <div style={titleStyle}>{item.title}</div>
//         <div style={desStyle}>{item.des}</div>
//       </div>
//     ));

//   return (
//     <div style={{ padding: "20px" }}>
//       <div style={sectionStyle}>
//         <div style={headingStyle}>Dish of the day</div>
//         <div style={containerStyle}>{renderCards(dishesOfTheDay)}</div>
//       </div>

//       <div style={sectionStyle}>
//         <div style={headingStyle}>Recommend menu</div>
//         <div style={containerStyle}>{renderCards(recommendedMenu)}</div>
//       </div>

//     </div>

    
//   );
// };

// export default MenuSection;















































import React, { useState } from "react";

const recipes = [
  {
    title: "Cheesy Grits, Fried Eggs and Bacon",
    des: "Breakfast (550–600 calories)",
    image:
      "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2021-09-breakfast-grits%2FNew%20Finals%2F2021-10-12_ATK8035",
    ingredients: [
      "Grits", "Shredded", "cheddar cheese", "Butter","Bacon","Eggs","Avocado",
      "Cherry","tomatoes","Salt & pepper",
      <h2>HOW TO MAKE IT?</h2>,
      "To make Cheesy Grits with Fried Eggs and Bacon, start by cooking grits in boiling salted water until creamy." ,
      "Stir in shredded cheddar cheese and a touch of butter until fully melted.",
      " In a separate pan, fry bacon strips until crispy, then set them aside on a paper towel. ",
      "In the same pan, fry eggs sunny-side up or to your preferred doneness. To serve, spoon the cheesy grits into a bowl,",
      " top with fried eggs, crispy bacon, sliced avocado, and halved cherry tomatoes. Sprinkle with salt and pepper to taste.",
      " Enjoy your hearty and comforting breakfast!"
    ],
  },
  {
    title: "Grilled Chicken Salad",
    des: "Lunch (470–500 calories)",
    image:
      "https://valentinascorner.com/wp-content/uploads/2022/05/Chicken-Salad.jpg",
    ingredients: [
      "Boneless chicken breast",
      "Olive oil",
      "Lemon juice",
      "Garlic",
      "Salt & pepper",
      "Mixed salad greens",
      "Cherry tomatoes",
      "Cucumber",
      "Red onion",
      "Croutons",
      "Dressing (balsamic or honey mustard)",
      "(Optional) Avocado, cheese",
      <h2>HOW TO MAKE IT?</h2>,
      "To prepare Grilled Chicken Salad, start by marinating boneless chicken breasts with olive oil, lemon juice, garlic, salt, pepper, and herbs of your choice.",
      " Grill the chicken over medium-high heat until fully cooked and slightly charred, then let it rest and slice it thinly.", 
      "In a large bowl, combine mixed greens, cherry tomatoes, cucumber slices, red onion, and croutons.",
      " Top with the grilled chicken slices and drizzle your favorite dressing, such as balsamic vinaigrette or honey mustard.",
       "Optionally, add avocado or shredded cheese for extra flavor. Toss gently and serve fresh."
    ],
  },
  {
    title: "Lemon Herb Salmon & Veggies",
    des: "Dinner (460–480 calories)",
    image:
      "https://img.buzzfeed.com/video-api-prod/assets/23a3954e16e3434381d2e4115ac85f7d/BFV17100_One-PanHerbLemonSalmon-Thumb02.jpg?resize=1200:*",
    ingredients: [
      "Salmon fillets", "Lemon juice & zest", "Garlic (minced)", "Dill", "Parsley", "Thyme", "Olive oil", "Salt & pepper", "Zucchini", "Bell peppers", "Cherry tomatoes", "Broccoli",
      <h2>HOW TO MAKE IT?</h2>,
      "To prepare Lemon Herb Salmon & Veggies, start by seasoning salmon fillets with salt, pepper, minced garlic, lemon zest, lemon juice, and a mix of chopped herbs like dill, parsley, and thyme.", 
      "Place the salmon on a baking tray lined with parchment paper. ",
      "Arrange sliced vegetables such as zucchini, bell peppers, cherry tomatoes, and broccoli around the salmon.", 
      "Drizzle everything with olive oil and a bit more lemon juice. Bake in a preheated oven at 400°F (200°C) for about 15–20 minutes or until the salmon is flaky and vegetables are tender.", 
      "Garnish with fresh herbs and serve hot."
    ],
  },
  {
    title: "Black Coffee",
    des: "Breakfast Drink (5–10 calories)",
    image:
      "https://i.guim.co.uk/img/media/a9482912f0aa252131cd534bfeea50689a805c28/0_166_5957_3576/master/5957.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=637a78423db188b9e794d1bb5c88659e",
    ingredients: [
      "Water – 1 cup",
"Ground coffee or instant coffee – 1 to 2 tsp",
"(Optional) Cinnamon or lemon slice",
<h2>HOW TO MAKE IT?</h2>,
      "To make a perfect cup of Black Coffee, boil 1 cup of water in a saucepan.",
      " Once the water starts boiling, add 1 to 2 teaspoons of your favorite ground coffee or instant coffee.", 
      "Stir well and let it simmer for a minute. Turn off the heat and let it sit for 30 seconds to allow the flavors to settle.", 
      "Pour the coffee through a strainer into a cup if using ground coffee. Serve hot, optionally with a pinch of cinnamon or a splash of lemon for extra flavor."
    ],
  },
  {
    title: "Orleans Tea",
    des: "Lunch Drink (2–5 calories)",
    image: "https://clubmagichour.com/cdn/shop/files/SenchaKyotoweb.jpg?v=1716923450",
    ingredients: [
      "Water – 2 cups",
"Loose leaf green tea (Sencha Kyoto) – 1 tbsp",
"Lemon or orange slice – 1 small",
"(Optional) Honey – 1 tsp",
<h2>HOW TO MAKE IT?</h2>,
      "To make refreshing Orleans Tea, bring 2 cups of water to a boil.", 
      "Add 1 tablespoon of loose leaf green tea (like Sencha Kyoto) and let it steep for 2–3 minutes.", 
      "Add a small slice of fresh orange or lemon for a citrus twist. Optionally, sweeten with a teaspoon of honey.", 
      "Strain the tea into a cup and serve hot or pour over ice for a chilled version."
    ],
  },
  {
    title: "Warm Turmeric Milk",
    des: "Dinner Drink (95–100 calories)",
    image:
      "https://i.guim.co.uk/img/media/522baace078efefd9b2352e329ba1be0978cbb58/0_277_5760_3456/master/5760.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d23fa395dad5a1ac405fbe937e30ddf4",
    ingredients: [
      "Milk – 1 cup",
"Turmeric powder – 1/2 tsp",
"Black pepper – pinch (enhances absorption)",
"Cinnamon – 1/4 tsp",
"(Optional) Honey – 1 tsp",
<h2>HOW TO MAKE IT?</h2>,
      "To prepare Warm Turmeric Milk, pour 1 cup of milk into a saucepan and heat it gently over medium flame.", 
      "Add 1/2 teaspoon of turmeric powder, a pinch of black pepper, and 1/4 teaspoon of cinnamon.", 
      "Stir continuously until the milk is hot but not boiling. Optionally, add 1 teaspoon of honey for sweetness. Serve warm, preferably before bedtime for better sleep and immunity boost."
    ],
  },
  {
    title: "Slow Cooker Beef Stew",
    des: "(500–600 calories)",
    image:
      "https://v.cdn.ww.com/media/system/wine/5859dae25e361a4fef73105d/f8206d53-f7fa-438d-8461-79c284227e0c/k4jledddgokeswuhpj98.jpg?fit=crop&height=800&width=800&enable=upscale&quality=80",
    ingredients: [
      "Beef stew meat – 1.5 lbs (cut into chunks)",
"Carrots – 3 (chopped)",
"Potatoes – 3 (diced)",
"Onion – 1 (chopped)",
"Garlic – 2 cloves (minced)",
"Beef broth – 4 cups",
"Tomato paste – 2 tbsp",
"Thyme – 1 tsp",
"Bay leaf – 1",
"Salt & black pepper – to taste",
<h2>HOW TO MAKE IT?</h2>,
      "To make Slow Cooker Beef Stew, start by cutting 1.5 lbs of beef stew meat into chunks.", 
      "In a skillet, sear the beef until browned. Transfer it to a slow cooker.", 
      "Add 3 chopped carrots, 3 diced potatoes, 1 chopped onion, and 2 minced garlic cloves.", 
      "Pour in 4 cups of beef broth, 2 tablespoons of tomato paste, 1 teaspoon of thyme, and 1 bay leaf. Season with salt and pepper.", 
      "Cover and cook on low for 7–8 hours or high for 4–5 hours until meat and veggies are tender. Remove bay leaf before serving."
    ],
  },
  {
    title: "Baked Salmon With Lime",
    des: "(320–350 calories)",
    image:
      "https://v.cdn.ww.com/media/system/wine/594713f111712d73ad9fd198/4ab7b661-f1d6-4f37-ad29-2b3caf6cde3e/gdylw39jz9fupnog06ro.png?fit=crop&height=800&width=800&enable=upscale&quality=80",
    ingredients: [
      "Salmon fillets – 4 pieces",
"Lime – juice of 2 + slices for topping",
"Olive oil – 2 tablespoons",
"Garlic – 2 cloves (minced)",
"Honey – 1 teaspoon",
"Salt & pepper – to taste",
"Fresh cilantro or parsley – for garnish",
<h2>HOW TO MAKE IT?</h2>,
      "To make Baked Salmon With Lime, preheat the oven to 375°F (190°C).", 
      "Place 4 salmon fillets on a baking sheet lined with parchment paper.", 
      "In a small bowl, mix the juice of 2 limes, 2 tablespoons of olive oil, 2 minced garlic cloves, 1 teaspoon of honey, and a pinch of salt and pepper.", 
      "Pour this mixture over the salmon. Place a lime slice on each fillet. Bake for 15–20 minutes or until the salmon is flaky and cooked through.",
      "Garnish with fresh cilantro or parsley before serving."
    ],
  },
  {
    title: "Lemon Chickpea & Tomato Stew",
    des: "(300–350 calories)",
    image:
      "https://static.toiimg.com/thumb/96363403.cms?imgsize=148024&width=800&height=800",
    ingredients: [
      "Olive oil – 2 tablespoons",
"Onion – 1 (chopped)",
"Garlic – 3 cloves (minced)",
"Cumin – 1 teaspoon",
"Turmeric – ½ teaspoon",
"Chili flakes – pinch",
"Diced tomatoes – 1 can",
"Cooked chickpeas – 2 cups",
"Vegetable broth – 1 cup",
"Lemon juice – from 1 lemon",
"Salt & pepper – to taste",
"Fresh parsley & lemon zest – for garnish",
<h2>HOW TO MAKE IT?</h2>,
      "To prepare Lemon Chickpea & Tomato Stew, heat 2 tablespoons of olive oil in a large pan over medium heat.", 
      "Add 1 chopped onion and 3 minced garlic cloves, and sauté until soft.", 
      "Stir in 1 teaspoon of cumin, 1/2 teaspoon of turmeric, and a pinch of chili flakes. Add 1 can of diced tomatoes, 2 cups of cooked chickpeas, and 1 cup of vegetable broth.", 
      "Simmer for 15–20 minutes. Add the juice of 1 lemon and season with salt and pepper. Garnish with chopped fresh parsley and lemon zest before serving."
    ],
  },
  {
    title: "Chicken Stack",
    des: "(450–550 calories)",
    image:
      "https://static.toiimg.com/thumb/59053721.cms?imgsize=143724&width=800&height=800",
    ingredients: [
      "Boneless chicken breasts – 2",
"Olive oil – 1 tablespoon",
"Garlic powder – 1 teaspoon",
"Paprika – 1 teaspoon",
"Salt and black pepper – to taste",
"Zucchini – 1 (sliced)",
"Tomato – 1 (sliced)",
"Bell pepper – 1 (sliced)",
"Optional toppings – Greek yogurt or balsamic glaze",
<h2>HOW TO MAKE IT?</h2>,
      "To prepare Chicken Stack, start by marinating 2 boneless chicken breasts with 1 tablespoon olive oil, 1 teaspoon garlic powder, 1 teaspoon paprika, salt, and pepper for 30 minutes.", 
      "Grill or pan-sear the chicken until golden and cooked through. Meanwhile, grill 1 sliced zucchini, 1 tomato, and 1 bell pepper.", 
      "For stacking, place grilled zucchini at the base, then add a slice of chicken, tomato, bell pepper, and repeat the layers.", 
      "Top with a dollop of Greek yogurt or a drizzle of balsamic glaze. Serve warm."
    ],
  },
  {
    title: "Paneer Butter Masala",
    des: "(550–600 calories)",
    image:
      "https://static.toiimg.com/thumb/58123486.cms?imgsize=330449&width=800&height=800",
    ingredients: [
      "Paneer – 200g (cubed)",
"Butter – 2 tablespoons + 1 tablespoon for garnish",
"Onion – 1 (chopped)",
"Tomatoes – 2 (chopped)",
"Ginger-garlic paste – 1 tablespoon",
"Turmeric powder – ½ teaspoon",
"Red chili powder – 1 teaspoon",
"Garam masala – 1 teaspoon",
"Salt – to taste",
"Fresh cream – ¼ cup",
"Water – ½ cup",
"Kasuri methi (dried fenugreek leaves) – a pinch",
<h2>HOW TO MAKE IT?</h2>,
      "To prepare Paneer Butter Masala, heat 2 tablespoons butter in a pan, add 1 chopped onion and sauté until golden.", 
      "Add 1 tablespoon ginger-garlic paste and cook for a minute.", 
      "Then add 2 chopped tomatoes, 1/2 teaspoon turmeric, 1 teaspoon red chili powder, and 1 teaspoon garam masala.", 
      "Cook until tomatoes soften. Blend the mixture into a smooth paste and return to the pan.", 
      "Add 1/4 cup cream, 1/2 cup water, salt to taste, and 200g paneer cubes. Simmer for 5–7 minutes. Finish with a pinch of kasuri methi and a tablespoon of butter.", 
      "Serve hot with naan or rice."
    ],
  },
  {
    title: "Chatpata Vegetable Salad",
    des: "(80–120  calories)",
    image:
      "https://static.toiimg.com/thumb/58892854.cms?imgsize=297936&width=800&height=800",
    ingredients: [
      "1 cup shredded cabbage",
"1 cup grated carrot",
"1 cup thinly sliced cucumber",
"½ cup chopped bell pepper (any color)",
"1 small onion, finely chopped",
"1 tomato, deseeded and finely chopped",
"1 tbsp lemon juice",
"1 tsp chaat masala",
"½ tsp black pepper",
"Salt to taste",
"1 tbsp chopped fresh cilantro",
"1 tsp roasted cumin powder (optional)",
"1 tbsp pomegranate seeds (optional)",
<h2>HOW TO MAKE IT?</h2>,
      "To prepare Chatpata Vegetable Salad, take 1 cup shredded cabbage, 1 cup grated carrot, 1 cup thinly sliced cucumber, 1/2 cup chopped bell pepper,", 
      "1 finely chopped onion, and 1 chopped tomato. Add all vegetables to a large bowl.", 
      "Sprinkle 1 teaspoon chaat masala, 1/2 teaspoon black pepper, 1 teaspoon roasted cumin powder, and salt to taste.", 
      "Squeeze in 1 tablespoon lemon juice and mix well. Garnish with 1 tablespoon chopped cilantro and 1 tablespoon pomegranate seeds if desired.", 
      "Toss everything together and serve fresh for a tangy, crunchy salad."
    ],
  },
];

const RecipePage = () => {
  const [selected, setSelected] = useState(null);

  const cardStyle = {
    width: "260px",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    border: "1px solid purple",
    textAlign: "center",
    cursor: "pointer",
  };

  const imageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  };

  const titleStyle = {
    backgroundColor: "purple",
    color: "#fff",
    padding: "10px",
    fontWeight: "bold",
    fontSize: "14px",
  };

  const desStyle = {
    backgroundColor: "purple",
    color: "#fff",
    padding: "5px",
    fontWeight: "bold",
    fontSize: "14px",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    padding: "20px",
  };

  if (selected) {
    return (
      <div style={{ padding: "30px", textAlign: "center" }}>
        <h2>{selected.title}</h2>
        <img src={selected.image} alt={selected.title} style={{ width: "400px", borderRadius: "10px" }} />
        <p style={{ fontWeight: "bold", margin: "10px 0" }}>{selected.des}</p>
        <h3>Ingredients:</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {selected.ingredients.map((ing, index) => (
            <li key={index} style={{ marginBottom: "5px" }}>• {ing}</li>
          ))}
        </ul>
        <button
  onClick={() => setSelected(null)}
  style={{
    marginTop: "20px",
    padding: "10px 25px",
    cursor: "pointer",
    backgroundColor: "purple",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    boxShadow: "0 4px 8px rgba(128, 0, 128, 0.3)",
    transition: "all 0.3s ease",
  }}
  onMouseOver={(e) => {
    e.target.style.backgroundColor = "#5e1a8c";
  }}
  onMouseOut={(e) => {
    e.target.style.backgroundColor = "purple";
  }}
>
  Back
</button>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ paddingLeft: "20px" }}>Dish of the day</h2>
      <div style={containerStyle}>
        {recipes.slice(0, 6).map((item, index) => (
          <div key={index} style={cardStyle} onClick={() => setSelected(item)}>
            <img src={item.image} alt={item.title} style={imageStyle} />
            <div style={titleStyle}>{item.title}</div>
            <div style={desStyle}>{item.des}</div>
          </div>
        ))}
      </div>

      <h2 style={{ paddingLeft: "20px" }}>Recommend menu</h2>
      <div style={containerStyle}>
        {recipes.slice(6).map((item, index) => (
          <div key={index + 6} style={cardStyle} onClick={() => setSelected(item)}>
            <img src={item.image} alt={item.title} style={imageStyle} />
            <div style={titleStyle}>{item.title}</div>
            <div style={desStyle}>{item.des}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipePage;
