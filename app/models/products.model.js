module.exports = (sequelize, Sequelize, DataTypes) => {
  const Products = sequelize.define(
    "products",
    {
      product_id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
      },
      title: DataTypes.STRING,
      description: DataTypes.BIGINT,
      image: DataTypes.STRING,
      price: DataTypes.STRING,
      discount: DataTypes.BIGINT,
      category: DataTypes.STRING,
    },
    {
      // Options
      timestamps: true,
      underscrored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return Products;
};
