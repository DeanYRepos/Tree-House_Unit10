'use strict'
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');


module.exports = (sequelize) => {
    class User extends Model {}
    User.init({
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
         
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notNull:{
                    msg: 'A first name is required'
                },
                notEmpty: {
                    msg:'please provide a first name'
                }
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notNull:{
                    msg: 'A last name is required'
                },
                notEmpty: {
                    msg:'please provide a last name'
                }
            }
        },
        emailAddress: {
            type: DataTypes.STRING, 
            allowNull: false,
            unique: {
                msg:'The email you entered already exists'
            },
            validate:{
                notNull:{
                    msg: 'An email address is required'
                },
                notEmpty: {
                    msg:'please provide an email address'
                },
                isEmail:{
                    msg: 'Please provide a valid email address'
                },
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            set(val){
                

                    const hashedPassword = bcrypt.hashSync(val, 10);
                    this.setDataValue("password", hashedPassword);
                
            },
            validate:{
                notNull:{
                    msg: 'A password is required'
                },
                notEmpty: {
                    msg:'please provide a password'
                }
            }
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
        }
       
    }, {
       
        sequelize 
    });

    User.associate = (models) => {
        User.hasMany(models.Course,{ //has many model associations, shares alias and foreign key with associated model
            as:"User",
                foreignKey:{
                    fieldName: 'userId',
                    allowNull:false
                }
            
        });
        
    }
    return User;
}