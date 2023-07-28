const Album = require("./Album");
const Artist = require("./Artist");
const Genre = require("./Genre");

Genre.belongsToMany(Artist, { through: "GenresArtists" })
Artist.belongsToMany(Genre, { through: "GenresArtists" })

Artist.hasMany(Album) //artistId -> Album
Album.belongsTo(Artist)