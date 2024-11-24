import client from "../../libs/prismadb"; // Assuming you have a custom Prisma client setup
import { NextResponse } from "next/server";

// POST handler
export const POST = async (req) => {
  try {
    // Parse the request body to JSON format
    const body = await req.json();

    // Extract title, actors, and releaseYear from the request body
    const { title, actors, releaseYear } = body;

    // Validate inputs (you can improve this based on your needs)
    if (!title || !actors || !releaseYear) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Convert releaseYear to a Date object
    const releaseDate = new Date(releaseYear);

    // Use Prisma client to create a new movie
    const newMovie = await client.movie.create({
      data: {
        title,
        actors,
        releaseYear: releaseDate,
      },
    });

    // Return the new movie in JSON format
    return NextResponse.json(newMovie);
  } catch (error) {
    // Handle error and return a 500 response
    console.error(error);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: 500 }
    );
  }
};

export const GET = async () => {

  try {
      const movies = await client.movie.findMany()
      return NextResponse.json(movies)
      
  } catch (error) {
      return NextResponse.json({status: 500}, {message: error.message})
  }
}