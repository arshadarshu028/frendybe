module.exports = (sequelize, Sequelize, DataTypes) => {
  const Orders = sequelize.define("orders", {
    order_id: {
      primaryKey: true,
      allowNull: false,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
    },
    user_email: DataTypes.STRING,
    user_mobile: DataTypes.BIGINT,
    user_name: DataTypes.STRING,
    user_address: DataTypes.STRING,
  });

  return Orders;
};
