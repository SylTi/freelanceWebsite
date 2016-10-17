// Example model


module.exports = function (sequelize, DataTypes) {

  var Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    titleSlug: DataTypes.STRING,
    text: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        // Article.hasMany(models.Comments);
      }
    }
  });

  return Article;
};

