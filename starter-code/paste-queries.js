// 1.2 | Insert our first users in users collection
// ------------------------------------------------

db.users.insertOne({
...   "firstName": "John",
...   "lastName": "Smith",
...   "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
...   "address": {
...     "streetAddress": "21 2nd Street",
...     "city": "New York",
...     "state": "NY",
...     "postalCode": "10021"
...   }
... }
... )

// PASTE 3 USER INSERT QUERIES HERE


// 1.3 | Insert our first products in products collection
// ------------------------------------------------------

db.products.insertOne({
...    "name": "Water Bottle",
...    "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
...    "category":"Kitchen",
...    "price":23.0
... })
// PASTE 3 PRODUCT INSERT QUERIES HERE

db.products.insertOne(
... {name: "Towel",
... description: "best terry cloth on this side of town",
... category: "Bath",
... price: 15
... })
{
	"acknowledged" : true,
	"insertedId" : ObjectId("59a5de9c3f6ee88e46e12d72")
}

db.products.insertOne(
... {name: "Cup",
... description: "solid ceramic cup boo-YAH",
... category: "Kitchen",
... price: 10
... })
{
	"acknowledged" : true,
	"insertedId" : ObjectId("59a5dee43f6ee88e46e12d73")
}



// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
db.users.updateOne(
  {firstName: 'John'},
  { $set : {"shoppingCart" : ObjectId("59a5db583f6ee88e46e12d71")}
})



// PASTE LIST PRODUCTS QUERY HERE

> db.products.find().pretty()
{
	"_id" : ObjectId("59a5db583f6ee88e46e12d71"),
	"name" : "Water Bottle",
	"description" : "High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
	"category" : "Kitchen",
	"price" : 23
}
{
	"_id" : ObjectId("59a5de9c3f6ee88e46e12d72"),
	"name" : "Towel",
	"description" : "best terry cloth on this side of town",
	"category" : "Bath",
	"price" : 15
}
{
	"_id" : ObjectId("59a5dee43f6ee88e46e12d73"),
	"name" : "Cup",
	"description" : "solid ceramic cup boo-YAH",
	"category" : "Kitchen",
	"price" : 10
}



// PASTE CATEGORY PRODUCTS QUERY HERE
> db.products.find(
... {category:'Kitchen'}
... ).pretty()
{
	"_id" : ObjectId("59a5db583f6ee88e46e12d71"),
	"name" : "Water Bottle",
	"description" : "High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
	"category" : "Kitchen",
	"price" : 23
}
{
	"_id" : ObjectId("59a5dee43f6ee88e46e12d73"),
	"name" : "Cup",
	"description" : "solid ceramic cup boo-YAH",
	"category" : "Kitchen",
	"price" : 10
}


// PASTE DELETE PRODUCT QUERY HERE
> db.products.deleteOne(
... {name: "Cup"}
... )
{ "acknowledged" : true, "deletedCount" : 1 }
>



// PASTE REVIEW QUERY HERE

db.products.updateOne(
  {name : "Water Bottle"},
  { $set : {"reviews": [
    {
      "name": "Shannon",
      "comment": "This is so warm and comfortable.",
      "stars": 2,
      "date": "2016-11-10T18:28:09.369Z"
    }
  ]}}
)
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> 
