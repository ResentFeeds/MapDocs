---
title: 'Cleaning Map Files'
---

Minecraft (and maybe MCEdit) generate a few files in your world folder (Map Name) when you create a world. Most of these files
are not needed and by deleting them can reduce the size of the world.

This is the table (handcrafted) which displays all the files that MAY be generated in your folder.

| Folder/File Name  |  REQUIRED  |  DESCRIPTION  |
|-------------------|------------|---------------|
|   `level.dat`     |    YES     | Stores all information about the world and such things  |
|   `region/`       |    YES     | Contains all the regions and chunks of that world       |
|   `level.dat_mcr` |    NO      | A backup of level.dat from MCRegion                     |
|   `level.dat_old` |    NO      | A backup of level.dat                                   |
|   `session.lock`  |    NO      | A timestamp of a session when the level/world was last accessed  |
|   `players/`      |    NO      | Contains player.dat files which store player information|
|   `data/`         |    NO      | Stores all information about things in the world        |
|   `DIM-1 & DIM1`  |    NO      | Contains all region and chunks files for The Nether and The End        |

and such.
