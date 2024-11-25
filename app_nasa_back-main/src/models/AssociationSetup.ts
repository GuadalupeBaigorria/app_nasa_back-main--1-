import GameRoomModel from "./gameRoom/GameRoomModel";
import GameModel from "./games/poseAndRevealModels/GameModel";
import UserModel from "./gamePage/UserModel";
import GameGameRoomModel from "./gameRoom/GameGameRoomModel";
import UserGameRoomModel from "./gameRoom/UserGameRoomModel";
import PlayerModel from "./games/poseAndRevealModels/PlayerModel";
import InvitationModel from "./games/poseAndRevealModels/InvitationModel";
import ActivityModel from "./games/poseAndRevealModels/ActivityModel";
import PlayerActivityModel from "./games/poseAndRevealModels/PlayerActivityModel";
import PlayerHistoryModel from "./games/poseAndRevealModels/PlayerHistoryModel";
import ContentModel from "./games/poseAndRevealModels/ContentModel";
import PlayerPlayerHistoryModel from "./games/poseAndRevealModels/PlayerPlayerHistoryModel";

class AssociationSetup {
  public static setupAssociations() {
    // Associations: GameGameRoomModel
    GameRoomModel.belongsToMany(GameModel, {
      through: GameGameRoomModel,
      foreignKey: "game_room_id",
      as: "games",
    });

    GameModel.belongsToMany(GameRoomModel, {
      through: GameGameRoomModel,
      foreignKey: "game_id",
      as: "game_rooms",
    });

    // Associations: GameRoomModel
    UserModel.hasOne(GameRoomModel, {
      foreignKey: "user_id",
      as: "game_room",
    });

    GameRoomModel.belongsTo(UserModel, {
      foreignKey: "user_id",
      as: "creator",
    });

    // Associations: UserGameRoomModel
    GameRoomModel.belongsToMany(UserModel, {
      through: UserGameRoomModel,
      foreignKey: "game_room_id",
      as: "users",
    });

    UserModel.belongsToMany(GameRoomModel, {
      through: UserGameRoomModel,
      foreignKey: "user_account_id",
      as: "game_rooms",
    });

    // Associations: ActivityModel
    GameModel.hasMany(ActivityModel, {
      foreignKey: "game_id",
      as: "activities",
    });

    ActivityModel.belongsTo(GameModel, {
      foreignKey: "game_id",
      as: "game",
    });

    // Associations: ContentModel
    PlayerModel.hasMany(ContentModel, {
      foreignKey: "player_id",
      as: "contents",
    });

    ContentModel.belongsTo(PlayerModel, {
      foreignKey: "player_id",
      as: "player",
    });

    // Associations: InvitationModel
    UserModel.hasMany(InvitationModel, {
      foreignKey: "inviting_user_id",
      as: "sentInvitations",
    });

    UserModel.hasMany(InvitationModel, {
      foreignKey: "invited_user_id",
      as: "receivedInvitations",
    });

    GameRoomModel.hasMany(InvitationModel, {
      foreignKey: "game_room_id",
      as: "invitations",
    });

    InvitationModel.belongsTo(UserModel, {
      foreignKey: "inviting_user_id",
      as: "invitingUser",
    });

    InvitationModel.belongsTo(UserModel, {
      foreignKey: "invited_user_id",
      as: "invitedUser",
    });

    InvitationModel.belongsTo(GameRoomModel, {
      foreignKey: "game_room_id",
      as: "gameRoom",
    });

    // Associations: PlayerPlayerHistoryModel
    PlayerModel.belongsToMany(PlayerHistoryModel, {
      through: PlayerPlayerHistoryModel,
      foreignKey: "player_id",
      otherKey: "player_history_id",
      as: "playerHistories",
    });

    PlayerHistoryModel.belongsToMany(PlayerModel, {
      through: PlayerPlayerHistoryModel,
      foreignKey: "player_history_id",
      otherKey: "player_id",
      as: "players",
    });

    // Associations: PlayerHistoryModel
    GameModel.hasMany(PlayerHistoryModel, {
      foreignKey: "game_id",
      as: "playerHistories",
    });

    PlayerHistoryModel.belongsTo(GameModel, {
      foreignKey: "game_id",
      as: "game",
    });

    // Associations: PlayerModel
    PlayerModel.belongsTo(UserModel, {
      foreignKey: "user_id",
      as: "user",
    });

    UserModel.hasOne(PlayerModel, {
      foreignKey: "user_id",
      as: "player",
    });

    // Associations: PlayerActivityModel
    PlayerModel.belongsToMany(ActivityModel, {
      through: PlayerActivityModel,
      foreignKey: "player_id",
      otherKey: "activity_id",
      as: "selectedActivities",
    });

    ActivityModel.belongsToMany(PlayerModel, {
      through: PlayerActivityModel,
      foreignKey: "activity_id",
      otherKey: "player_id",
      as: "players",
    });

    PlayerActivityModel.belongsTo(PlayerModel, {
      foreignKey: "target_player_id",
      as: "targetPlayer",
    });

    PlayerActivityModel.belongsTo(PlayerModel, {
      foreignKey: "player_id",
      as: "player",
    });
  }
}

export default AssociationSetup;
