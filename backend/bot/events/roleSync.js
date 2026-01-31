// const Role = require("../../models/Role");

// module.exports = async (client) => {
//   const guild = client.guilds.cache.get(process.env.GUILD_ID);
//   if (!guild) return;

//   await guild.members.fetch();

//   for (const role of guild.roles.cache.values()) {
//     if (role.managed || role.name === "@everyone") continue;

//     const members = role.members.map((member) => ({
//       userId: member.user.id,
//       username: member.user.username,
//       avatar: member.user.displayAvatarURL({
//         extension: "png",
//         size: 128,
//       }),
//     }));

//     await Role.findOneAndUpdate(
//       { roleId: role.id },
//       {
//         roleId: role.id,
//         name: role.name,
//         color: role.hexColor,
//         members,
//         position: role.position,
//       },
//       { upsert: true },
//     );
//   }

//   console.log("Roles synced to DB");
// };

const Role = require("../../models/Role");

module.exports = async (client) => {
  const guild = client.guilds.cache.get(process.env.GUILD_ID);
  if (!guild) return;

  await guild.members.fetch();

  // ONLY THESE ROLES WILL SYNC
  const ALLOWED_ROLE_IDS = [
    "1465408066093711371", // Founder
    "1456189845280915651", // Owner
    "1456189846292009021", // Co-Owner
    "1457028953402511460", // Girl Owner
  ];

  for (const role of guild.roles.cache.values()) {
    // Skip unwanted roles
    if (!ALLOWED_ROLE_IDS.includes(role.id)) continue;
    if (role.managed || role.name === "@everyone") continue;

    const members = role.members.map((member) => ({
      userId: member.user.id,
      username: member.user.username,
      avatar: member.user.displayAvatarURL({
        extension: "png",
        size: 128,
      }),
    }));

    await Role.findOneAndUpdate(
      { roleId: role.id },
      {
        roleId: String(role.id),
        name: role.name,
        color: role.hexColor,
        members,
        position: role.position,
      },
      { upsert: true },
    );
  }

  console.log("Leadership roles synced to DB");
};
