import { StandardMerkleTree } from "@openzeppelin/merkle-tree";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto

// Handler for POST requests
export async function POST(request: NextRequest, response: NextResponse) {
  // Parse the request body to get the list of addresses
  const addresses: string[] = await request.json();

  // Check if addresses are provided
  if (!addresses || addresses.length === 0) {
    return new NextResponse(
      JSON.stringify({
        message: "Need addresses",
      }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
    return;
  }

  // Create the Merkle tree using the given addresses
  // Since no values are associated, we use only addresses

  const transformedData: any[][] = addresses.map((address) => [address]);
  const tree = StandardMerkleTree.of(transformedData, ["address"]);

  // Get the root of the Merkle tree
  const root = tree.root;

  // Return the Merkle root in the response
  return new NextResponse(
    JSON.stringify({
      merkleRoot: root,
    }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
