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

export const PATCH = async (request, {params}) => {

    const {id} = params
    const body = await request.json()
    const {title, actors, releaseYear} = body

    try {
        const updateMovie = await client.movie.update({
            where: {
                id
            },
            data: {
                title,
                actors,
                releaseYear
            }
        })
        if(!updateMovie){
            return NextResponse.error({
                status: 404
            }, {message: "Movie not found"})
        }
        return NextResponse.json(updateMovie)
        
    } catch (error) {
        return NextResponse.error({
            status: 500
        }, {message: error.message})
        
    }
}

export const DELETE = async (request, {params}) => {
    const {id} = params
    try {
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