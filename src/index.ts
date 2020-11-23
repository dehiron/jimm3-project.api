import { createConnection, ConnectionOptions, getRepository } from "typeorm"
import dbconfig from "./ormconfig"
import express from "express"
import { Router } from "express"
import { Mountain } from "./entity/Mountain"
const app = express();

const routes = Router();

const connect = async () => {
  const connection = await createConnection(dbconfig as ConnectionOptions ) ;
  console.log("Successfully Connect to DB!");
  return Promise.resolve(connection);
}


connect().then((connection) => {
  // GET = /api/mountain/:id
  const getMountain = async (req, res) => {
      const id = req.params.id;
      const allMountains = await connection
          .getRepository(Mountain)
          .createQueryBuilder("mountain")
          // .innerJoinAndSelect("post.user","user")
          // .where("mountain.id=:id")
          // .setParameters({ id: userId})
          .getMany();
      console.log(allMountains)
      res.json(allMountains[id-1]);
  };
  //POST - /api/mountain/
  const createMountain = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const allMountains = await connection
        .getRepository(Mountain)
        .createQueryBuilder("mountain")
        .getMany();
    const newMountain = new Mountain();
    newMountain.name = body.name;
    newMountain.prefecture = body.prefecture;
    newMountain.height = body.height;
    console.log(allMountains)
    // await connection.getRepository(Mountain).save(newMountain)
    res.status(201).json(allMountains)
  }
  //PATCH - /api/mountain/:id
  const updateMountainInfo = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    await connection
        .getRepository(Mountain)
        .update(id, body)
    res.json(await connection.getRepository(Mountain).createQueryBuilder("mountain").getMany())
  }
  //DELETE - /api/mountain/:id
  const deleteMountain = async (req, res) => {
    const id = req.params.id;
    await connection
        .getRepository(Mountain)
        .delete(id);
    res.json(await connection.getRepository(Mountain).createQueryBuilder("mountain").getMany())
  }
  
  routes.get("/", (req, res) => {
    return res.json({message: "hello, wolrd"});
  });
  routes.get("/api/mountain/:id",getMountain);
  routes.post("/api/mountain",createMountain);
  routes.patch("/api/mountain/:id",updateMountainInfo);
  routes.delete("/api/mountain/:id",deleteMountain);
  app.use(express.json());
  app.use(routes);
  app.listen(3000,() => {
    console.log(`The server has started on the port : 3000`);
  });
});


// ********************************************************************
// const { createConnection } = require('typeorm')
// const express = require('express')
// const bodyParser = require('body-parser')

// const routes = require('./routes.ts')

// const app = express()

// app.use(bodyParser.json())
// app.use(routes)

// app.listen(3333)