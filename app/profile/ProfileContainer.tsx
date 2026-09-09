"use client";

import ImageUtil from "../components/ImageUtil";
import UseProfile from "../hooks/UseProfile";

const ProfileContainer = () => {
  const { profile } = UseProfile();
  const followingCount = profile.followedMangaIds?.length ?? 0;

  return (
    <main className="main-page">
      <section className="flex flex-col items-center pt-14 pb-8 px-6">
        <div className="rounded-full p-1 bg-gradient-to-br from-accent to-accent/30">
          <ImageUtil
            image={profile.pictureUrl}
            w={104}
            h={104}
            imageClass="rounded-full border-4 border-bg"
          />
        </div>
        <h2 className="text-center text-[20px] text-ink mt-4">
          {profile.displayName || "—"}
        </h2>
      </section>

      <section className="px-6">
        <div className="bg-surface border border-border rounded-2xl px-5 py-4 flex items-center justify-between">
          <span className="text-ink-soft text-[14px]">Following</span>
          <span className="text-ink text-[18px] font-semibold">
            {followingCount}
          </span>
        </div>
      </section>
    </main>
  );
};

export default ProfileContainer;
