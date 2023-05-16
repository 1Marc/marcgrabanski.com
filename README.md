MarcGrabanski.com

- YouTube Links must go in .mdx files

- images are currently located in both /public/ and /content
  - images are currently being served from the /public/ folder
  - images will eventually come from /content/ folder, co-located there with each of the index.md files.
    - Astro 'assets', which allows the images to be in the /content/ folder, does not yet support svg, gif, and image optimization
      - I tried image, imagetools, sharp, the EleventyImage Astro Optimizer, and a few other things, but none of them could work with Astro: assets to match the responsive sizing and speed of the public folder or like the original Gatsby website does
    - image file names in content/ folder should be escaped with an underscore ('_') at the start of the filename
      - this tells Astro to skip making a page route for the image file
    - when Astro:assets is fully working:
      - follow astro documentation for integrations and config flags
      - twitter/github/profilePhoto/etc in the /public/ folder can be moved to /src/assets/
      - you can change the image filename paths in the md files to match the colocated files
        - use the following regex to global search in VSCode and find all .md image references:
          - ``` \!\[.*\]\(\. ```