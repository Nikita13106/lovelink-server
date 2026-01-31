const Role = require("../../models/Role");

module.exports = async (client) => {
  const guild = client.guilds.cache.get(process.env.GUILD_ID);
  if (!guild) return;

  await guild.members.fetch(); // important

  for (const role of guild.roles.cache.values()) {
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
        roleId: role.id,
        name: role.name,
        color: role.hexColor,
        members,
        position: role.position,
      },
      { upsert: true },
    );
  }

  console.log("Roles synced to DB");
};
