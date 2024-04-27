import { fetchUtil } from "@/app/utils/fetch";

export async function GET() {
  const res = await fetchUtil("/manga/new");

  return Response.json({
    data: "new",
  });
}
