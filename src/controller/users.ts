/**
 * Controllers for Users summary
 * For all CRUD Related actions, regarding data manipulation on Schoolinka API.
 * These actions should be performed by authenticated and authorized users
 * Funtions in this controller include:
 * createUser () => Create a new  User
 * getAllUsers () => Get all  User
 * getUserByID () => Get all  User by ID
 * updateUserID  () => Update the current User ID
 * deleteUserID () => Delete the current User ID
 */

import { Request, Response, } from "express";
import { settings } from "../settings/settings.js";
import { runValidator,User } from "../helpers/validators.js";
const client = settings.CLIENT;


/**
 * 
 * @param req request object from client
 * @param res response object to client
 * @returns response json object
 * @dev Function to handle creating of a new  User
 */

export const createUser = async(req:Request, res:Response) =>{
    try {
        //validate inputs
        const validatorUser = new User();
        validatorUser.email = req.body.email;
        validatorUser.firstName = req.body.firstName;
        validatorUser.lastName = req.body.lastName;
        validatorUser.userName = req.body.userName;
        validatorUser.imageUrl = req.body.imageUrl;
        
        //run validator 
        const {isValid,errors} = await runValidator(validatorUser);

        if(!isValid) return res.status(400).json({message:"Invalid Request",errors});
        const user = await client.user.create({
            data:{
                userName: req.body.userName,
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                imageUrl:req.body.imageUrl,
                email:req.body.email,
            }
        })
        if(!user) return res.status(400).json({message:"Couldn't create user"})
        return res.status(200).json({message:"User was created successfully",data:user});
    }catch(error){
        return res.status(500).json({message:"Internal Server Error " + error.message})
    }
};

/**
 * 
 * @param req request object from client
 * @param res response object to client
 * @returns response json object
 * @dev Function to handle fetching Users
 */
export const getAllUsers = async(req:Request, res:Response) =>{
    try {
        const user = await client.user.findMany({});
        return res.status(200).json({message:"Users fetched successfully",data:user});
    }catch(error){
        return res.status(500).json({message:"Internal Server Error " + error.message})
    }
};


/**
 * 
 * @param req request object from client
 * @param res response object to client
 * @returns response json object
 * @dev Function to handle fetching User by ID
 */
export const getUserByID = async(req:Request, res:Response) =>{
    try {
        const user = await client.user.findUnique({
            where:{
                id:req.params.id
            }
        });
        if(!user) return res.status(404).json({message:"User not found"});
        return res.status(200).json({message:"User was fetched successfully",data:user});
    }catch(error){
        return res.status(500).json({message:"Internal Server Error " + error.message})
    }
};

/**
 * 
 * @param req request object from client
 * @param res response object to client
 * @returns response json object
 * @dev Function to handle updating User by ID
 */
export const updateUserByID = async(req:Request, res:Response) =>{
    try {
        const user = await client.user.findUnique({
            where:{
                id:req.params.id
            },
            include:{
                blogs:true
            }
        })

        if(!user) return res.status(404).json({message:"User not found"});

        const userUpdate = await client.user.update({
            where:{
                id:req.params.id
            },
            data:{
                blogs:{
                    disconnect:user.blogs,
                    connect:req.body.blogs
                }
            }
        });
        return res.status(200).json({message:"User was updated successfully",data:userUpdate});
    }catch(error){
        return res.status(500).json({message:"Internal Server Error " + error.message})
    }
};

/**
 * 
 * @param req request object from client
 * @param res response object to client
 * @returns response json object
 * @dev Function to handle deleting User by ID
 */
export const deleteUserByID = async(req:Request, res:Response) =>{
    try {
        const user = await client.user.delete({
            where:{
                id:req.params.id
            }
        })

        return res.status(200).json({message:"User was deleted successfully",data:user});
    }catch(error){
        return res.status(500).json({message:"Internal Server Error " + error.message})
    }
};