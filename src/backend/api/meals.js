const express = require("express");
const router = express.Router();
const knex = require("../database");

//Returns all meal titles
router.get("/titles", async(request, response) => {
    try {
        // knex syntax for selecting things. Look up the documentation for knex for further info
        const titles = await knex("meals").select("title");
        response.json(titles);
    } catch (error) {
        throw error;
    }
});
//Adds a new meal
router.post("/", async(request, response) => {
    try {
        const newMeal = await knex("meals").insert(request.body);
        response.send(`New added meal: ${newMeal}`);
    } catch (error) {
        console.log(error);
        response.send(error);
    }
});
//Returns meal by id
router.get("/:id", async(request, response) => {
    try {
        const mealById = await knex("meals").where("id", parseInt(request.params.id));
        response.json(mealById);
    } catch (error) {
        console.log(error);
        response.send(error);
    }
});
//Updates the meal by id	
router.put("/:id", async(request, response) => {
    try {
        const updateMeal = await knex("meals")
            .where("id", parseInt(request.params.id))
            .update(request.body);
        response.json(updateMeal);
    } catch (error) {
        console.log(error);
        response.send(error);
    }
});
//Deletes the meal by id
router.delete("/:id", async(request, response) => {
    try {
        const deletedMeal = await knex("meals")
            .where("id", parseInt(request.params.id))
            .del();
        response.json(`Deleted meal: ${deletedMeal}`);
    } catch (error) {
        console.log(error);
        response.send(error);
    }
});
//Query Parameters
router.get("/", async(request, response) => {
    let meals = knex('meals');

    if ('maxPrice' in request.query) {
        meals = meals.where('price', '<=', parseInt(request.query.maxPrice))
    }

    if ('availableReservations' in request.query) {
        const subquery = knex.select('*').from('reservations')
        meals = meals.select("*")
            .whereIn("id", subquery)
            .having("meals.max_reservations", ">", "sum('reservations.number_of_guests')");
    }

    if ('title' in request.query) {
        meals = meals.where("meals.title", "like", `%${request.query.title}%`)
    }

    if ('createdAfter' in request.query) {
        meals = meals.where("meals.createdAfter", ">", request.query.createdAfter);
    }

    if ('limit' in request.query) {
        meals = meals.limit(parseInt(request.query.limit));
    }
    try {
        const resultMeals = await meals;
        response.json(resultMeals);
    } catch (error) {
        console.log(error);
        throw (error);
    }
});

module.exports = router;