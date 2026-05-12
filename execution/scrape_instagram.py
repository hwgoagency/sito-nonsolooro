import sys
import os
import instaloader

def scrape_instagram(profile_name, output_dir, max_count=3):
    L = instaloader.Instaloader(
        download_pictures=True,
        download_videos=False,
        download_video_thumbnails=False,
        download_geotags=False,
        download_comments=False,
        save_metadata=False,
        compress_json=False,
        post_metadata_txt_pattern=""
    )
    
    print(f"Scraping {max_count} images from {profile_name} into {output_dir}")
    os.makedirs(output_dir, exist_ok=True)
    
    # We want to save files directly into output_dir without creating a subfolder
    L.dirname_pattern = output_dir

    try:
        profile = instaloader.Profile.from_username(L.context, profile_name)
        count = 0
        for post in profile.get_posts():
            L.download_post(post, target=profile_name)
            count += 1
            if count >= max_count:
                break
        print("Scraping completed successfully.")
    except Exception as e:
        print(f"Error scraping Instagram: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python scrape_instagram.py <profile_name> <output_dir>")
    else:
        scrape_instagram(sys.argv[1], sys.argv[2])
