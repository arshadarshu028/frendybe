module.exports = (sequelize, Sequelize, DataTypes) => {
  const User = sequelize.define(
    "users", // Model name
    {
      user_id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
      },
      user_email: DataTypes.STRING,
      user_mobile: DataTypes.BIGINT,
      user_name: DataTypes.STRING,
      user_address: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      // Options
      timestamps: true,
      underscrored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return User;
};
