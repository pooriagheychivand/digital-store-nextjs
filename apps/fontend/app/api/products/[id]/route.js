import { NextResponse } from "next/server";
import { connectedToDatabase } from "../../../../lib/mongodb";
import Product from "../../../../models/Product";


export async function GET(request, context) {
    const { id } = await context.params;

    await connectedToDatabase();

    const product = await Product.findById(id);

    return NextResponse.json(product);
}