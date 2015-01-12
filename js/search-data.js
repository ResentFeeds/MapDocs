
setSearchData([
  {
    "link": "/gamersabout",
    "title": "About The Gamers Network",
    "body": "<h2 id=\"the-gamers-network-is-an-organization-that-make-awesome-games-to-minecraft-\">The Gamers Network is an organization that make awesome games to Minecraft.</h2>\n<p>It&#39;s founded last year, by <a href=\"https://github.com/morpig\">morpig</a>. The 1st time, The Gamers Network was a SMP server, which\nallows my friend to play on my server. After learning some things, he decided to make a brand new server.\nAfter couple of months work, we are bringing you around 6 games on the server.</p>\n<p>We&#39;re hosted on <a href=\"http://indonesiancloud.com\">IndonesianCloud</a> to host our server, which is awesome for asia region!\nWe use <a href=\"http://www.gradle.org/\">Gradle</a> and <a href=\"http://apache.maven.oeg\">Maven</a> to build our Java projects.</p>\n<p>What we do is private, not open-sourced. Some of our repository are open source, which you can check it out.</p>\nThe Gamers Network is an organization that make awesome games to Minecraft.\n---\nIt's founded last year, by [morpig](https://github.com/morpig). The 1st time, The Gamers Network was a SMP server, which\nallows my friend to play on my server. After learning some things, he decided to make a brand new server.\nAfter couple of months work, we are bringing you around 6 games on the server.\n\nWe're hosted on [IndonesianCloud](http://indonesiancloud.com) to host our server, which is awesome for asia region!\nWe use [Gradle](http://www.gradle.org/) and [Maven](http://apache.maven.oeg) to build our Java projects.\n\nWhat we do is private, not open-sourced. Some of our repository are open source, which you can check it out.\n",
    "crumbsFlat": "docs/gamersabout",
    "crumbs": [
      {
        "active": false,
        "title": "docs",
        "link": "/"
      },
      {
        "active": true,
        "title": "gamersabout",
        "link": "/gamersabout"
      }
    ]
  },
  {
    "link": "/",
    "title": "Welcome",
    "body": "<p>Welcome to the The Gamers Network Map API documentation!\nWe decided to use Markdown and Jekyll for awesome features. If you need to edit some things,\njust do a <a href=\"https://github.com/GamersNetworkMC/MapDocs/pulls\">Pull Request</a>. We are looking forward to see\nmore awesome maps!</p>\n<h2 id=\"-about-the-gamers-network-gamersabout-\"><a href=\"/gamersabout\">About The Gamers Network</a></h2>\n<h2 id=\"what-do-map-api-do-\">What do Map API do?</h2>\n<p>Our configuration, which morpig called as the &#39;Map API&#39; configure how that game manages that game during game-play or in-game.\nAll The Gamers Network map requires Map API to function properly. Map API defines a lot of aspects such as spawn points, teams, chest config and more. Each file is unique (some of them are the same) to it&#39;s map.</p>\n<h2 id=\"writing-the-map-api\">Writing the Map API</h2>\n<p>Almost all text editor (maybe except Notepad) can create and edit Map API files which is YAML.</p>\n<p>We recommend that you use <a href=\"http://www.sublimetext.com/\">Sublime Text</a> or <a href=\"https://atom.io\">Atom</a> to create and edit Map API files.</p>\n<p>We HIGHLY recommended to keep the Map API clean &amp; readable. You should properly indent them using 4 spaces and specify the API you intend to use.</p>\n<h2 id=\"releasing-your-map\">Releasing your Map</h2>\n<p>Before releasing your map for our developers which is <a href=\"http://twitter.com/TheRamsnet\">CubedRams</a> and <a href=\"https://github.com/Psychothekid\">PsychothekidLMC</a>, we HIGHLY recommended to follow <a href=\"packaging/package_guideline\">these guidelines</a>. This will speed up some time to take it faster for your map to be ready for testing.</p>\n<h2 id=\"work-with-us\">Work with us</h2>\n<p>We&#39;d love to have any help you wish to give!</p>\n<p>We have several communication methods:</p>\n<ul>\n<li>Slack [coming soon]</li>\n</ul>\n\nWelcome to the The Gamers Network Map API documentation!\nWe decided to use Markdown and Jekyll for awesome features. If you need to edit some things,\njust do a [Pull Request](https://github.com/GamersNetworkMC/MapDocs/pulls). We are looking forward to see\nmore awesome maps!\n\n## [About The Gamers Network](/gamersabout)\n\n## What do Map API do?\nOur configuration, which morpig called as the 'Map API' configure how that game manages that game during game-play or in-game.\nAll The Gamers Network map requires Map API to function properly. Map API defines a lot of aspects such as spawn points, teams, chest config and more. Each file is unique (some of them are the same) to it's map.\n\n## Writing the Map API\nAlmost all text editor (maybe except Notepad) can create and edit Map API files which is YAML.\n\nWe recommend that you use [Sublime Text](http://www.sublimetext.com/) or [Atom](https://atom.io) to create and edit Map API files.\n\nWe HIGHLY recommended to keep the Map API clean & readable. You should properly indent them using 4 spaces and specify the API you intend to use.\n\n## Releasing your Map\nBefore releasing your map for our developers which is [CubedRams](http://twitter.com/TheRamsnet) and [PsychothekidLMC](https://github.com/Psychothekid), we HIGHLY recommended to follow [these guidelines](packaging/package_guideline). This will speed up some time to take it faster for your map to be ready for testing.\n\n## Work with us\n\nWe'd love to have any help you wish to give!\n\nWe have several communication methods:\n\n- Slack [coming soon]\n",
    "crumbsFlat": "docs",
    "crumbs": [
      {
        "active": true,
        "title": "docs",
        "link": "/"
      }
    ]
  },
  {
    "link": "/packaging/cleaning_guideline",
    "title": "Cleaning Map Files",
    "body": "<p>Minecraft (and maybe MCEdit) generate a few files in your world folder (Map Name) when you create a world. Most of these files\nare not needed and by deleting them can reduce the size of the world.</p>\n<p>This is the table (handcrafted) which displays all the files that MAY be generated in your folder.</p>\n<table>\n<thead>\n<tr>\n<th style=\"text-align:left\">File Name</th>\n<th style=\"text-align:center\">REQUIRED</th>\n<th style=\"text-align:right\">DESCRIPTION</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style=\"text-align:left\"><code>level.dat</code></td>\n<td style=\"text-align:center\">YES</td>\n<td style=\"text-align:right\">Stores all information about the world and such things</td>\n</tr>\n<tr>\n<td style=\"text-align:left\"><code>region/</code></td>\n<td style=\"text-align:center\">YES</td>\n<td style=\"text-align:right\">Contains all the regions and chunks of that world</td>\n</tr>\n<tr>\n<td style=\"text-align:left\"><code>level.dat_mcr</code></td>\n<td style=\"text-align:center\">NO</td>\n<td style=\"text-align:right\">A backup of level.dat from MCRegion</td>\n</tr>\n<tr>\n<td style=\"text-align:left\"><code>level.dat_old</code></td>\n<td style=\"text-align:center\">NO</td>\n<td style=\"text-align:right\">A backup of level.dat</td>\n</tr>\n<tr>\n<td style=\"text-align:left\"><code>session.lock</code></td>\n<td style=\"text-align:center\">NO</td>\n<td style=\"text-align:right\">A timestamp of a session when the level/world was last accessed</td>\n</tr>\n<tr>\n<td style=\"text-align:left\"><code>players/</code></td>\n<td style=\"text-align:center\">NO</td>\n<td style=\"text-align:right\">Contains player.dat files which store player information</td>\n</tr>\n<tr>\n<td style=\"text-align:left\"><code>data/</code></td>\n<td style=\"text-align:center\">NO</td>\n<td style=\"text-align:right\">Stores all information about things in the world</td>\n</tr>\n<tr>\n<td style=\"text-align:left\"><code>DIM-1 &amp; DIM1</code></td>\n<td style=\"text-align:center\">NO</td>\n<td style=\"text-align:right\">Contains all region and chunks files for The Nether and The End</td>\n</tr>\n</tbody>\n</table>\n<p>If you can&#39;t read it properly, head to <a href=\"https://github.com/GamersNetworkMC/MapDocs/blob/master/docs/packaging/cleaning_guideline.md\">this link</a></p>\n<p>and such.</p>\n\nMinecraft (and maybe MCEdit) generate a few files in your world folder (Map Name) when you create a world. Most of these files\nare not needed and by deleting them can reduce the size of the world.\n\nThis is the table (handcrafted) which displays all the files that MAY be generated in your folder.\n\n| File Name  |  REQUIRED  |  DESCRIPTION  |\n|:------------------|:------------:|---------------:|\n|   `level.dat`     |    YES     | Stores all information about the world and such things  |\n|   `region/`       |    YES     | Contains all the regions and chunks of that world       |\n|   `level.dat_mcr` |    NO      | A backup of level.dat from MCRegion                     |\n|   `level.dat_old` |    NO      | A backup of level.dat                                   |\n|   `session.lock`  |    NO      | A timestamp of a session when the level/world was last accessed  |\n|   `players/`      |    NO      | Contains player.dat files which store player information|\n|   `data/`         |    NO      | Stores all information about things in the world        |\n|   `DIM-1 & DIM1`  |    NO      | Contains all region and chunks files for The Nether and The End        |\n\nIf you can't read it properly, head to [this link](https://github.com/GamersNetworkMC/MapDocs/blob/master/docs/packaging/cleaning_guideline.md)\n\nand such.\n",
    "crumbsFlat": "docs/packaging/cleaning_guideline",
    "crumbs": [
      {
        "active": false,
        "title": "docs",
        "link": "/"
      },
      {
        "active": false,
        "title": "packaging",
        "link": "/packaging"
      },
      {
        "active": true,
        "title": "cleaning_guideline",
        "link": "/packaging/cleaning_guideline"
      }
    ]
  },
  {
    "link": "/packaging/compiling_releasing",
    "title": "Compiling & Publishing",
    "body": "<p>Once your world is cleaned up, it is ready to publish. Add map.yml to the world folder. Below is an image what the folder\nshould look like:</p>\n<pre><code>  C O M I N G S O O N .\n</code></pre><h1 id=\"information-about-map-yml-\">Information about <code>map.yml</code></h1>\n<p>The <code>map.yml</code> is the Map API you coded for your map. The file is very important when it comes to having your\nmap loaded and tested.</p>\n<p>Also, take note of the code guidelines when creating your <code>map.yml</code> file:</p>\n<pre><code>  - *Verify there are no tabs* in the *YML* - 4 spaces\n  - Change the map version if there&#39;s a gameplay change or map change\n  - Check again that your YML file is correct.\n</code></pre><h1 id=\"compiling-your-folder-to-zip\">Compiling your folder to ZIP</h1>\n<p>Before you upload your map, compress the folder to a <code>.zip</code> format. We dont accept <code>.rar</code> format.\nTo compress your folder:</p>\n<pre><code>- `Windows` Right-click folder -&gt; Send to -&gt; Compressed Zip\n</code></pre><h1 id=\"uploading-your-worrld\">Uploading your worrld</h1>\n<p>To upload your world, we recommned using Dropbox, MediaFire or MEGA.</p>\n\nOnce your world is cleaned up, it is ready to publish. Add map.yml to the world folder. Below is an image what the folder\nshould look like:\n\n      C O M I N G S O O N .\n\n\n# Information about `map.yml`\nThe `map.yml` is the Map API you coded for your map. The file is very important when it comes to having your\nmap loaded and tested.\n\nAlso, take note of the code guidelines when creating your `map.yml` file:\n      - *Verify there are no tabs* in the *YML* - 4 spaces\n      - Change the map version if there's a gameplay change or map change\n      - Check again that your YML file is correct.\n\n# Compiling your folder to ZIP\nBefore you upload your map, compress the folder to a `.zip` format. We dont accept `.rar` format.\nTo compress your folder:\n    - `Windows` Right-click folder -> Send to -> Compressed Zip\n\n# Uploading your worrld\nTo upload your world, we recommned using Dropbox, MediaFire or MEGA.\n",
    "crumbsFlat": "docs/packaging/compiling_releasing",
    "crumbs": [
      {
        "active": false,
        "title": "docs",
        "link": "/"
      },
      {
        "active": false,
        "title": "packaging",
        "link": "/packaging"
      },
      {
        "active": true,
        "title": "compiling_releasing",
        "link": "/packaging/compiling_releasing"
      }
    ]
  },
  {
    "link": "/packaging",
    "title": "Packaging",
    "body": "<h2 id=\"packaging-guidelines\">Packaging Guidelines</h2>\n<p>Before you releasing your map to map developers, make sure that you have clean the world folder. For more information,\ncheck him out --&gt; <a href=\"/packaging/package_guideline\">me</a></p>\n<h2 id=\"compiling-releasing\">Compiling &amp; Releasing</h2>\n<p>After your world is cleaned up, it is ready to compile. Add map.yml (Map API file) to the folder.</p>\n\n## Packaging Guidelines\nBefore you releasing your map to map developers, make sure that you have clean the world folder. For more information,\ncheck him out --> [me](/packaging/package_guideline)\n\n## Compiling & Releasing\nAfter your world is cleaned up, it is ready to compile. Add map.yml (Map API file) to the folder.\n",
    "crumbsFlat": "docs/packaging",
    "crumbs": [
      {
        "active": false,
        "title": "docs",
        "link": "/"
      },
      {
        "active": true,
        "title": "packaging",
        "link": "/packaging"
      }
    ]
  }
]);