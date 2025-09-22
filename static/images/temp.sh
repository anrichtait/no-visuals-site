#!/bin/bash
# Create WebP versions (80% smaller)
for img in *.jpg; do
  magick "$img" -quality 85 -format webp "${img%.*}.webp"
done

# Create AVIF versions (even smaller)
for img in *.jpg; do
  magick "$img" -quality 80 -format avif "${img%.*}.avif"
done

# Create responsive sizes for hero images
magick hero1.jpg -resize 1920x1080^ -gravity center -extent 1920x1080 -quality 85 hero1-desktop.webp
magick hero1.jpg -resize 768x432^ -gravity center -extent 768x432 -quality 85 hero1-mobile.webp
magick hero2.jpg -resize 1920x1080^ -gravity center -extent 1920x1080 -quality 85 hero2-desktop.webp
magick hero2.jpg -resize 768x432^ -gravity center -extent 768x432 -quality 85 hero2-mobile.webp

echo "done"
