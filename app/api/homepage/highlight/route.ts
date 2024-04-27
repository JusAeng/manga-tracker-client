import { fetchUtil } from "@/app/utils/fetch";

export async function GET() {
  const res = await fetchUtil("/manga/highlight");

  return Response.json({
    data: "highlight",
  });
}
