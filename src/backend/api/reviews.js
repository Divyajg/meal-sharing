const express = require("express");
const router = express.Router();
const knex = require("../database");

//Returns all review titles
router.get("/titles", async(request, response) => {
    try {
        // knex syntax for selecting things. Look up the documentation for knex for further info
        const titles = await knex("reviews").select("title");
        response.json(titles);
    } catch (error) {
        throw error;
    }
});
// Display All reviews 
router.get("/", async(request, response) => {
    try {
        const reviews = await knex("reviews").select("*");
        response.json(reviews);
    } catch (error) {
        console.log(error);
        response.send(error);
    }
});
//Adds a new review
router.post("/", async(request, response) => {
    try {
        const newreview = await knex("reviews").insert(request.body);
        response.send(`New added review: ${newreview}`);
    } catch (error) {
        console.log(error);
        response.send(error);
    }
});
//Returns review by id
router.get("/:id", async(request, response) => {
    try {
        const reviewById = await knex("reviews").where("id", parseInt(request.params.id));
        response.json(reviewById);
    } catch (error) {
        console.log(error);
        response.send(error);
    }
});
//Updates the review by id	
router.put("/:id", async(request, response) => {
    try {
        const updatereview = await knex("reviews")
            .where("id", parseInt(request.params.id))
            .update(request.body);
        response.json(updatereview);
    } catch (error) {
        console.log(error);
        response.send(error);
    }
});
//Deletes the review by id
router.delete("/:id", async(request, response) => {
    try {
        const deletedreview = await knex("reviews")
            .where("id", parseInt(request.params.id))
            .del();
        response.json(`Deleted review: ${deletedreview}`);
    } catch (error) {
        console.log(error);
        response.send(error);
    }
});

module.exports = router;