// const env = require("dotenv").config();

export async function GET(req) {
    const { searchParams } = new URL(req.url);

    const res = {
            culture: culture,
            place_of_origin :"place of origin in detail goes here",
            current_population:"current population in detail goes here",
            current_places_of_existence :"current places of existence in detail goes here",
            language :"language in detail goes here",
    }

    console.log(res);

    return Response.json(res);
}
