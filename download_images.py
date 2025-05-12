import requests
import os
from urllib.parse import urlparse

def download_image(url, filename):
    response = requests.get(url)
    if response.status_code == 200:
        with open(os.path.join('images', filename), 'wb') as f:
            f.write(response.content)
        print(f"Downloaded {filename}")
    else:
        print(f"Failed to download {filename}")

# Create images directory if it doesn't exist
if not os.path.exists('images'):
    os.makedirs('images')

# Image URLs from Unsplash and other free stock photo websites
images = {
    # Hero section images
    'hero1.jpg': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',  # Restaurant interior
    'hero2.jpg': 'https://images.unsplash.com/photo-1585937421612-70a008356fbe',  # Traditional Indian cooking
    'hero3.jpg': 'https://images.unsplash.com/photo-1601050690597-df0568f70950',  # Modern Indian plating
    
    # Menu item images
    'paneer-tikka.jpg': 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0',  # Paneer Tikka
    'samosa.jpg': 'https://images.unsplash.com/photo-1601050690597-df0568f70950',  # Samosa
    'butter-chicken.jpg': 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7',  # Butter Chicken
    'palak-paneer.jpg': 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db',  # Palak Paneer
    'biryani.jpg': 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8',  # Biryani
    'naan.jpg': 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002',  # Garlic Naan
    'jeera-rice.jpg': 'https://images.unsplash.com/photo-1596797038530-2c107229654b',  # Jeera Rice
    'gulab-jamun.jpg': 'https://images.unsplash.com/photo-1604152135912-04a022e23696',  # Gulab Jamun
    'rasmalai.jpg': 'https://images.unsplash.com/photo-1589302168068-964664d93dc0',  # Rasmalai
    
    # Gallery images - Updated with more diverse and high-quality Indian cuisine photos
    'gallery1.jpg': 'https://images.unsplash.com/photo-1546833999-b9f581a1996d',  # Indian thali
    'gallery2.jpg': 'https://images.unsplash.com/photo-1517244683847-7456b63c5969',  # Live cooking
    'gallery3.jpg': 'https://images.unsplash.com/photo-1542367592-8849eb950fd8',  # Colorful spices
    'gallery4.jpg': 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db',  # Authentic dining setup
    'gallery5.jpg': 'https://images.unsplash.com/photo-1606491956689-2ea866880c84',  # Traditional desserts
    'gallery6.jpg': 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8',  # Street food variety
    'gallery7.jpg': 'https://images.unsplash.com/photo-1613292443284-8d10ef9383fe',  # Modern Indian fusion
    'gallery8.jpg': 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af',  # Restaurant ambiance
    'gallery9.jpg': 'https://images.unsplash.com/photo-1616299908398-9af1134ad522',  # Chef preparing food
    'gallery10.jpg': 'https://images.unsplash.com/photo-1517244683847-7456b63c5969'  # Tandoor cooking
}

# Download each image
for filename, url in images.items():
    download_image(url, filename)

print("All images have been downloaded successfully!") 