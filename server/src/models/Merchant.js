module.exports = (sequelize, DataTypes) => {
  const Merchant = sequelize.define('Merchant', {
    merchantname: DataTypes.STRING,
    custnum: {
      type: DataTypes.INTEGER,
      unique: true
    },
    merchantid: {
      type: DataTypes.INTEGER,
      unique: true
    },
    actnum: DataTypes.INTEGER,
    grossamt: DataTypes.DECIMAL,
    netamt: DataTypes.DECIMAL,
    merchantstatus: DataTypes.STRING
  })
  return Merchant
}
