import { fetchUtil } from "@/app/utils/fetch";

export async function GET() {
  const res = await fetchUtil("/manga/trending");

  return Response.json({
    data: "new",
  });
}
