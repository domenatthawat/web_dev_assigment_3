// http://localhost:3000/api/posts

import client from "@/app/libs/prismadb"
import { NextResponse } from "next/server"

export const GET = async (request, {params}) => {
    try {
        const {id} = params;

        const movies = await client.movie.findUnique({
            where: {
                id
            }
        })
        if(!movies){
            return NextResponse.error({
                status: 404
            }, {message: "Movie not found"})
        }

        return NextResponse.json(movies)

    } catch (error) {

        return NextResponse.error({
            status: 500
        }, {message: error.message})

    }
}

export const PATCH = async (request, { params }) => {

    const { id } = params;
    const content = await request.text();
    console.log(content)

    let body;
    try {
        body = JSON.parse(content);
        console.log(body)
    } catch (error) {
        return NextResponse.json(
            { message: "Invalid JSON format" },
            { status: 400 }
        );
    }

    const { title, 
            actors, 
            releaseYear } = body;
    if (!title || !actors || !releaseYear) {
        return NextResponse.json(
            { message: "Missing required fields: title, actors, releaseYear" },
            { status: 400 }
        );
    }

    try {
        const updateMovie = await client.movie.update({
            where: { id },
            data: {
                title,
                actors,
                releaseYear: new Date(releaseYear),
            },
        });

        if (!updateMovie) {
            return NextResponse.json(
                { message: "Movie not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(updateMovie);

    } catch (error) {
        console.error("Error updating movie:", error);
        return NextResponse.json(
            { message: "Failed to update movie", error: error.message },
            { status: 500 }
        );
    }
};

export const DELETE = async (request, {params}) => {

    try {
        const {id} = params
        const movies = await client.movie.delete({
            where: {
                id
            }
        })

        return NextResponse.json("Movie Deleted", movies)

    } catch (error) {
        return NextResponse.error({
            status: 500
        }, {message: error.message})
    }
}