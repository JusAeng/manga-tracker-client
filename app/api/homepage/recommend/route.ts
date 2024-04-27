import { fetchUtil } from "@/app/utils/fetch";

export async function GET() {
  const res = await fetchUtil("/user/recommend");

  return Response.json({
    data: "reccommend",
  });
}
