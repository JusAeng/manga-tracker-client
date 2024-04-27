import { fetchUtil } from "@/app/utils/fetch";

export async function GET() {
  try {
    const res = await fetchUtil("/user/subscribelist", {
      cache: "no-store",
    });
    return Response.json({
      data: res,
    });
  } catch (e) {
    console.log(e);
  }

  return Response.json({
    data: [],
  });
}
