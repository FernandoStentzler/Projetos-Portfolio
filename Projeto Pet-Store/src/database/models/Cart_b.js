module.exports = (sequelize, DataTypes) => {

    // let alias = nome da tabela
    // let cols = nome das colunas
    // let config = configurações da tabela
    let alias = 'Cart_b';

    let cols = { //nome das colunas
        id_cart: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false
        },
        id_product: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false
        },
        id_user: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        qtd: {
            type: DataTypes.INTEGER(11),
            allowNull: false
 
        },
        price:{
            type: DataTypes.DECIMAL(6,2),
            allowNull: false
        },
        img:{
            type: DataTypes.STRING(45),
            allowNull: true
        }        
    };

    let config = {
        tableName: 'cart_b',
        timestamps: false        
    };

    let Cart_b = sequelize.define(alias, cols, config)

    
    };

    Cart_b.associate = (models) => {    

        Cart.hasMany(models.User, {
            foreignKey: 'id_user',
            timestamps: false
        });

        Cart.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'id_product',
            timestamps: false
        });

    };

    return Cart;
