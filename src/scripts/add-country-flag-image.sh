#create a script that accepts country name and compies the images from this path  /Users/anypli/Downloads create a folder 
# and file inside of it  here /Users/anypli/Documents/dev/to-be-named/src/assets/countryFlagsImages 


#!/bin/bash

# The first argument is the country name
country_name=$1

# Convert the country name to uppercase
country_name_uppercase=$(echo $country_name | tr '[:lower:]' '[:upper:]')

# The source directory where the images are currently stored
source_dir="/Users/anypli/Downloads"

# The target directory where you want to store the images
target_dir="/Users/anypli/Documents/dev/to-be-named/src/assets/countryFlagsImages/$country_name"

# Create the target directory if it doesn't already exist
mkdir -p "$target_dir"

# Copy the image to the target directory
cp "$source_dir/$country_name.png" "$target_dir"

# The path to the countryFlagsImages.ts file
file_path="/Users/anypli/Documents/dev/to-be-named/src/utils/countryFlagsImages.ts"

# The line to add to the file
new_line="  $country_name_uppercase: require('../assets/countryFlagsImages/$country_name/$country_name.png'),"

# Use echo to append the new line to the end of the file
echo "$new_line" >> $file_path