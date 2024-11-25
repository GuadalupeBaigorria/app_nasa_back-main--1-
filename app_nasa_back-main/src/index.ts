import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import sequelize from "./config/databaseConnection";

// Import - Routes

// Import - Routes - gameRoomGames

import GameGameRoomRoutes from "./routes/gameRoom/GameGameRoomRoutes";
import GameRoomRoutes from "./routes/gameRoom/GameRoomRoutes";
import UserGameRoomRoutes from "./routes/gameRoom/UserGameRoomRoutes";

// Import - Routes - games - poseAndRevealRoutes

import ActivityRoutes from "./routes/games/poseAndRevealRoutes/ActivityRoutes";
import PlayerActivityRoutes from "./routes/games/poseAndRevealRoutes/PlayerActivityRoutes";
import GameRoutes from "./routes/games/poseAndRevealRoutes/GameRoutes";
import ContentRoutes from "./routes/games/poseAndRevealRoutes/ContentRoutes";
import InvitationRoutes from "./routes/games/poseAndRevealRoutes/InvitationRoutes";
import PlayerHistoryRoutes from "./routes/games/poseAndRevealRoutes/PlayerHistoryRoutes";
import PlayerRoutes from "./routes/games/poseAndRevealRoutes/PlayerRoutes";
import PlayerSelectedActivityRoutes from "./routes/games/poseAndRevealRoutes/PlayerActivityRoutes";
import PlayerPlayerHistoryRoutes from "./routes/games/poseAndRevealRoutes/PlayerPlayerHistoryRoutes";

// Import - Routes - gamesPage

import UserAccountRoutes from "./routes/gamesPage/UserRoutes";

// Import - Associations

import AssociationSetup from "./models/AssociationSetup";

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

//gameRoomGames

app.use("/api", GameGameRoomRoutes);
app.use("/api", GameRoomRoutes);
app.use("/api", UserGameRoomRoutes);

//games - poseAndRevealRoutes
app.use("/api", ActivityRoutes);
app.use("/api", GameRoutes);
app.use("/api", ContentRoutes);
app.use("/api", InvitationRoutes);
app.use("/api", PlayerHistoryRoutes);
app.use("/api", PlayerRoutes);
app.use("/api", PlayerSelectedActivityRoutes);
app.use("/api", PlayerActivityRoutes);
app.use("/api", PlayerPlayerHistoryRoutes);

//gamesPage

app.use("/api", UserAccountRoutes);

AssociationSetup.setupAssociations();

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // Cambia force a false en producción
    console.log("Las tablas han sido sincronizadas correctamente.");
  } catch (error) {
    console.error("Error al sincronizar las tablas:", error);
  }
};

syncDatabase();

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
