import { fetchUtil } from "@/app/utils/fetch";

export async function GET() {
  const res = await fetchUtil("/user/subscribelist", {
    cache: "no-store",
  });

  return Response.json({
    data: res,
  });
}
